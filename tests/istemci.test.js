const test = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const source = p => fs.readFileSync(p, 'utf8');

function environment(crypto) {
  const values = new Map();
  let calls = 0;
  const ctx = {window: {crypto}, localStorage: {getItem: k => values.get(k) || null, setItem: (k,v) => values.set(k,v)},
    fetch: () => { calls++; return Promise.resolve({ok:true, text:()=>Promise.resolve('{"nick":"Test"}')}); },
    console, Promise, setInterval: () => 0, clearInterval: () => {}};
  vm.createContext(ctx);
  vm.runInContext(source('docs/assets/js/api-client.js'), ctx);
  return {ctx, values, calls: () => calls};
}

test('Güvenli API yoksa kayıt ve istek yapılmaz, hata görünür', async () => {
  const {ctx, values, calls} = environment(undefined);
  await assert.rejects(Promise.resolve().then(() => ctx.window.MA.api.initAuth()), /güvenli/i);
  assert.equal(values.size, 0);
  assert.equal(calls(), 0);
  const nodes = {};
  ctx.document = {readyState:'loading', addEventListener(){}, getElementById: id => nodes[id], createElement: () => ({setAttribute(){}}), body: {prepend: n => {nodes[n.id] = n;}}};
  vm.runInContext(source('docs/assets/js/app.js'), ctx);
  ctx.window.MA.init();
  await new Promise(resolve => setTimeout(resolve, 5));
  assert.match(nodes['ma-auth-error'].textContent, /güvenli/i);
});

test('Güvenli UUID yeniden kullanılır', async () => {
  let count = 0;
  const {ctx, values, calls} = environment({randomUUID: () => {count++; return 'e39c4955-4b9b-47a1-b07d-d6f881c7e0fe';}});
  await ctx.window.MA.api.initAuth(); await ctx.window.MA.api.initAuth();
  assert.equal(count, 1); assert.equal(calls(), 2); assert.equal(values.get('ma_token'), 'e39c4955-4b9b-47a1-b07d-d6f881c7e0fe');
});

test('Dashboard API hatası boş veri gibi gösterilmez', async () => {
  const elements = {};
  for (const id of ['ma-dash-xp','ma-dash-streak','ma-dash-done','ma-dash-acc','ma-dash-quiz','ma-heatmap','ma-today-banner']) elements[id] = {textContent:'', innerHTML:'', classList:{add(){},remove(){}}};
  const bad = () => Promise.reject(new Error('offline'));
  const ctx = {window:{MA:{api:{getMe:bad,getStreak:bad,getProgress:bad,getRecentQuiz:bad,getDailyXP:bad}}}, document:{querySelector:()=>({}), querySelectorAll:()=>[], getElementById:id=>elements[id]}, console, Promise};
  vm.createContext(ctx); vm.runInContext(source('docs/assets/js/dashboard.js'),ctx);
  ctx.window.MA.dashboard.init();
  await new Promise(resolve => setTimeout(resolve, 5));
  assert.match(elements['ma-dash-quiz'].textContent, /yüklenemedi/i);
  assert.notEqual(elements['ma-dash-done'].textContent, 0);
  assert.doesNotMatch(elements['ma-today-banner'].innerHTML, /aktivite yok/i);
});


test('Dashboard gerçek boş veriyi hata diye göstermez', async () => {
  const elements = {};
  for (const id of ['ma-dash-xp','ma-dash-streak','ma-dash-done','ma-dash-acc','ma-dash-quiz','ma-heatmap','ma-today-banner']) elements[id] = {textContent:'', innerHTML:'', classList:{add(){},remove(){}}};
  const ctx = {window:{MA:{api:{getMe:()=>Promise.resolve({target:'hepsi'}),getStreak:()=>Promise.resolve({total_xp:0,current_streak:0}),getProgress:()=>Promise.resolve([]),getRecentQuiz:()=>Promise.resolve([]),getDailyXP:()=>Promise.resolve([])}}}, document:{querySelector:()=>({}), querySelectorAll:()=>[], getElementById:id=>elements[id]}, console, Promise};
  vm.createContext(ctx); vm.runInContext(source('docs/assets/js/dashboard.js'),ctx);
  ctx.window.MA.dashboard.init(); await new Promise(resolve => setTimeout(resolve, 5));
  assert.match(elements['ma-dash-quiz'].innerHTML, /Henüz quiz/);
  assert.equal(elements['ma-dash-done'].textContent, 0);
});
