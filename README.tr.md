> 🚧 **Durum: aktif geliştirme.** Yazarın kullanımında çalışır; arayüzler değişebilir.

# ajanmuhendis

[English](README.md)

MühendisAl adlı Türkçe yapay zekâ öğrenme sitesinden seçilmiş küçük bir teknik kesit: FastAPI + SQLite arka ucu (anonim cihaz hesabı, sayfa ilerlemesi, XP, seri, quiz denemeleri, geri bildirim) ve ona bağlı dashboard/quiz JavaScript'i; iki sayfalı bir MkDocs Material sitesine bağlanmıştır.

Planlanan "AjanMühendis" görev / çalıştırma / kanıt / rubrik stüdyosunun başlangıç noktasıdır. **Bu stüdyo henüz yoktur.** Bugün burada yalnız çıkarılması güvenli olan arka uç ve ön yüz kodu vardır. Dersler, çeviri/referans sayfaları ve örnek projeler bilinçli olarak alınmadı.

## Hızlı başlangıç

Gereksinim: Python 3.12 ve (JS testleri için) Node.js. `requirements-win312-lock.txt` yalnız Windows x64 / CPython 3.12 için çözülmüştür; başka platformda `requirements.txt` kullanın.

```sh
python -m venv .venv
# Windows Git Bash: source .venv/Scripts/activate
# Linux/macOS:      source .venv/bin/activate
python -m pip install --only-binary=:all: --require-hashes -r requirements-win312-lock.txt
python -m mkdocs build --strict
python -m uvicorn backend.main:app --host 127.0.0.1 --port 9100 --no-proxy-headers
# başka terminalde:
python -m mkdocs serve -a localhost:8000
```

`http://localhost:8000/` adresini açın (`localhost` kullanın: API'nin CORS listesinde `127.0.0.1:8000` değil `http://localhost:8000` vardır). Sağlık uç noktası: `http://localhost:9100/api/health`.

Testler (sentetik güvenlik testleri, istemci kodu için Node testleri ve geçici dizine strict site derlemesi):

```sh
python -B tests/dogrula.py
```

## Sınırlar ve dürüst uyarılar

- **Üretime uygun kimlik doğrulama değildir.** Tarayıcı `crypto.randomUUID()` ile rastgele token üretir, `localStorage`'da tutar ve kaydeder; sunucu istemcinin seçtiği tokenı kabul eder. Çıkış, iptal veya kurtarma yoktur; tokenı elinde tutan hesabın sahibidir.
- **Quiz sonuçlarını istemci bildirir.** Sunucu XP'yi istemcinin söylediğine göre verir; doğrulanmış sınav ya da hileye dayanıklı puan değildir.
- **Gizlilik.** API başlatılınca `backend/data.db` oluşur; sayfa açılışı hesap kaydı oluşturabilir; POST istekleri bağlantı IP'si ve uç noktasıyla kaydedilir. Gerçek kullanıcı verisi kullanmayın, API'yi genel ağa açmayın. Hız sınırı doğrudan bağlantı adresini kullanır (`X-Forwarded-For` güvenilmez); proxy arkasında tüm kullanıcılar aynı adresi paylaşır.
- **Şimdiye kadar doğrulanan:** Python 3.12 ile strict build, 4 Python güvenlik testi, 4 Node testi (gerçek tarayıcı değil, Node VM) ve loopback HTTP smoke testi. Tarayıcıda uçtan uca akış **denenmedi**; bağımsız gizlilik ve hak incelemesi yapılmadı.
- Birçok dashboard bileşeni burada olmayan ders içeriğine ihtiyaç duyar, bu yüzden etkin değildir. AI sağlayıcı/ajan işlevi yoktur.
- Bağımlılıklar depoya kopyalanmaz; lisans envanteri için `THIRD_PARTY_NOTICES.md`. Kodun nasıl seçildiği ve uyarlandığı `PROVENANCE.md` içinde özetlidir.

## Lisans

MIT, bkz. `LICENSE`. Telif (c) 2026 Kemal (KarıncaAI). Bağımlılıklar kendi lisanslarını korur. Güvenlik sorunlarını özel olarak bildirin: `SECURITY.md`.
