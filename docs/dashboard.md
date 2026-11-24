# 📊 Dashboard

İlerlemeni, quiz geçmişini ve hedef seçimini tek ekranda takip edersin. Sayfa otomatik olarak backend'den veri çeker.

## ⚙️ Görünüm Tercihleri

<div class="ma-toggle-group" id="ma-toggle-group">
  <label class="ma-toggle">
    <input type="checkbox" id="ma-toggle-badge">
    <span>Her sayfada XP rozetini göster</span>
  </label>
  <label class="ma-toggle">
    <input type="checkbox" id="ma-toggle-complete">
    <span>Her sayfada "Bu sayfayı tamamladım" butonunu göster</span>
  </label>
</div>

<script>
(function () {
  function bind(id, key) {
    var el = document.getElementById(id);
    if (!el) return;
    try {
      el.checked = localStorage.getItem(key) === '1';
    } catch (e) {}
    el.addEventListener('change', function () {
      try {
        if (el.checked) localStorage.setItem(key, '1');
        else localStorage.removeItem(key);
      } catch (e) {}
    });
  }
  document.addEventListener('DOMContentLoaded', function () {
    bind('ma-toggle-badge', 'ma_show_badge');
    bind('ma-toggle-complete', 'ma_show_complete_btn');
  });
})();
</script>

## 🎯 Hedefin

<div class="ma-target-tabs">
<button class="ma-target-tab" data-target="hepsi">Hepsi</button>
<button class="ma-target-tab" data-target="kisisel">Kişisel</button>
<button class="ma-target-tab" data-target="is">İş / Freelance</button>
</div>

Hedefin, ileride içerik filtrelemesini ayarlar. Şimdilik profilinde saklanır (F13+ içerik yazıldığında aktif kullanılır).

## 🗓️ Bugün

<div class="ma-today-banner" id="ma-today-banner"><em>Yükleniyor…</em></div>

## 📅 Haftalık Aktivite

<div class="ma-heatmap-wrap">
<div class="ma-heatmap" id="ma-heatmap"></div>
<div class="ma-heatmap-legend"><span>az</span><i class="ma-hm-l0"></i><i class="ma-hm-l1"></i><i class="ma-hm-l2"></i><i class="ma-hm-l3"></i><i class="ma-hm-l4"></i><span>çok</span></div>
</div>
<p class="ma-heatmap-note"><em>Aktivite XP — quiz ve tamamlanan sayfalar. Günlük streak ping (+20 XP/gün) bu grafiğe girmez, toplam XP'de görülür.</em></p>

## 📈 Bu Seviye

<div class="ma-cards">
<div class="ma-card"><div class="ma-card-label">Toplam XP</div><div class="ma-card-value" id="ma-dash-xp">—</div></div>
<div class="ma-card"><div class="ma-card-label">Günlük Streak</div><div class="ma-card-value" id="ma-dash-streak">—</div></div>
<div class="ma-card"><div class="ma-card-label">Tamamlanan Sayfa</div><div class="ma-card-value" id="ma-dash-done">—</div></div>
<div class="ma-card"><div class="ma-card-label">Quiz Doğruluk</div><div class="ma-card-value" id="ma-dash-acc">—</div></div>
</div>

## 🧪 Son Quiz Denemelerin

<div id="ma-dash-quiz"><em>Yükleniyor…</em></div>

## 🗺️ İlerleme

<div class="ma-pg-legend">○ başlamadın · 👁 gördün · ✓ tamamladın</div>

<div id="ma-pg-list">
<!-- Ders içerikleri bu adayda bulunmuyor. -->
</div>
