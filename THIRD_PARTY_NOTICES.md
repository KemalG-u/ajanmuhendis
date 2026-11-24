# Üçüncü taraf bildirimleri / Third-party notices

Bu aday üçüncü taraf paketleri kaynak ağacına kopyalamaz; kurulumda ayrı indirilirler. Doğrudan bağımlılıkların PyPI sürüm metaverisi incelendi:

| Paket | Sürüm | PyPI lisans bildirimi | Kaynak |
|---|---|---|---|
| FastAPI | 0.115.0 | MIT | https://pypi.org/project/fastapi/0.115.0/ |
| Uvicorn | 0.32.0 | BSD-3-Clause (wheel içindeki LICENSE.md) | https://pypi.org/project/uvicorn/0.32.0/ |
| SQLAlchemy | 2.0.36 | MIT | https://pypi.org/project/SQLAlchemy/2.0.36/ |
| Pydantic | 2.10.0 | MIT | https://pypi.org/project/pydantic/2.10.0/ |
| SlowAPI | 0.1.9 | MIT | https://pypi.org/project/slowapi/0.1.9/ |
| MkDocs | 1.6.1 | BSD-2-Clause (wheel içindeki LICENSE) | https://pypi.org/project/mkdocs/1.6.1/ |
| MkDocs Material | 9.7.0 | MIT | https://pypi.org/project/mkdocs-material/9.7.0/ |

Doğrudan paket metaverisi PyPI'dan, BSD alt türleri ilgili wheel lisans metninden incelendi. Bunlar çözülmüş transitif bağımlılık envanteri değildir; kesin çözüm ve lisans envanteri build/bundle dağıtımından önce gereklidir. MIT lisansımız üçüncü taraf paketlerine uygulanmaz.

## Tema varlıkları — kaynak wheel incelemesi

[Material 9.7.0 wheel](https://pypi.org/project/mkdocs-material/9.7.0/#files) içindeki lisans dosyaları: tema kodu MIT, Copyright 2016–2025 Martin Donath; `material/templates/.icons/fontawesome/LICENSE.txt`: Font Awesome SVG/JS simgeleri CC BY 4.0 (Fonticons, Inc. atfı), yazı tipleri SIL OFL 1.1; `.icons/material/LICENSE`: Pictogrammers simgeleri Apache-2.0 veya kendi lisansları, kod MIT; `.icons/octicons/LICENSE`: MIT, Copyright 2025 GitHub Inc.; `.icons/simple/LICENSE.md`: CC0-1.0. Wheel içinde `.woff`, `.woff2`, `.ttf`, `.otf` bulunmadı; `mkdocs.yml` `font: false` ayarlar. Bu, üretilmiş sitede hangi simgelerin yer aldığını veya çalışma anında ağ erişimini doğrulamaz. Dağıtılacak çıktıdaki gerçek varlıkları, atıfları ve tam lisans metinlerini ayrıca inceleyin; burada özet bulunması lisans koşullarını tek başına yerine getirmez.

## Windows x64 / Python 3.12 çözülmüş bağımlılıklar (14 Kasım 2026)

44 wheel için SHA-256, PyPI sürüm JSON dosya kayıtlarıyla eşleşti; kilit `requirements-win312-lock.txt`. Yalnız wheel kuruldu, kaynak paketi veya setup.py çalıştırılmadı. Wheel arşivlerinde .pth, sitecustomize, usercustomize ve .data/scripts bulunmadı; bu, paket kodunun zararsızlığı veya kökeninin bağımsız doğrulaması değildir. Metaveri lisansı ve wheel içindeki lisans dosyası sayısı aşağıdadır; tam uyum ve dağıtılan tema varlıkları için dosya bazlı inceleme gerekir. Pip, Python ensurepip içinden gelmiştir ve listeye dahil değildir.

| Paket | Sürüm | Metaveri lisansı | Wheel lisans dosyası sayısı | Kaynak |
|---|---|---|---|---|
| annotated-types | 0.8.0 | MIT | 1 | [PyPI](https://pypi.org/project/annotated-types/0.8.0/#files) |
| anyio | 4.16.0 | MIT | 1 | [PyPI](https://pypi.org/project/anyio/4.16.0/#files) |
| babel | 2.18.0 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/babel/2.18.0/#files) |
| backrefs | 8.3 | MIT | 1 | [PyPI](https://pypi.org/project/backrefs/8.3/#files) |
| certifi | 2026.10.23 | MPL-2.0 | 1 | [PyPI](https://pypi.org/project/certifi/2026.10.23/#files) |
| charset-normalizer | 3.5.2 | MIT | 1 | [PyPI](https://pypi.org/project/charset-normalizer/3.5.2/#files) |
| click | 8.5.1 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/click/8.5.1/#files) |
| colorama | 0.4.6 | BSD License | 1 | [PyPI](https://pypi.org/project/colorama/0.4.6/#files) |
| Deprecated | 3.0.1 | MIT | 1 | [PyPI](https://pypi.org/project/Deprecated/3.0.1/#files) |
| fastapi | 0.115.0 | MIT License | 1 | [PyPI](https://pypi.org/project/fastapi/0.115.0/#files) |
| ghp-import | 2.1.0 | Apache Software License | 1 | [PyPI](https://pypi.org/project/ghp-import/2.1.0/#files) |
| greenlet | 3.5.6 | MIT AND PSF-2.0 | 2 | [PyPI](https://pypi.org/project/greenlet/3.5.6/#files) |
| h11 | 0.16.0 | MIT | 1 | [PyPI](https://pypi.org/project/h11/0.16.0/#files) |
| idna | 3.20 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/idna/3.20/#files) |
| Jinja2 | 3.1.6 | BSD License | 1 | [PyPI](https://pypi.org/project/Jinja2/3.1.6/#files) |
| limits | 5.8.0 | MIT | 1 | [PyPI](https://pypi.org/project/limits/5.8.0/#files) |
| Markdown | 3.11.3 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/Markdown/3.11.3/#files) |
| MarkupSafe | 3.0.4 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/MarkupSafe/3.0.4/#files) |
| mergedeep | 1.3.4 | MIT (wheel LICENSE; metaveri UNKNOWN) | 1 | [PyPI](https://pypi.org/project/mergedeep/1.3.4/#files) |
| mkdocs | 1.6.1 | BSD-2-Clause | 1 | [PyPI](https://pypi.org/project/mkdocs/1.6.1/#files) |
| mkdocs-get-deps | 0.2.2 | MIT | 1 | [PyPI](https://pypi.org/project/mkdocs-get-deps/0.2.2/#files) |
| mkdocs-material | 9.7.0 | MIT | 1 | [PyPI](https://pypi.org/project/mkdocs-material/9.7.0/#files) |
| mkdocs-material-extensions | 1.3.1 | MIT | 1 | [PyPI](https://pypi.org/project/mkdocs-material-extensions/1.3.1/#files) |
| packaging | 26.3 | Apache-2.0 OR BSD-2-Clause | 3 | [PyPI](https://pypi.org/project/packaging/26.3/#files) |
| paginate | 0.5.7 | MIT | 1 | [PyPI](https://pypi.org/project/paginate/0.5.7/#files) |
| pathspec | 1.1.1 | Mozilla Public License 2.0 (MPL 2.0) | 1 | [PyPI](https://pypi.org/project/pathspec/1.1.1/#files) |
| platformdirs | 4.14.5 | MIT | 1 | [PyPI](https://pypi.org/project/platformdirs/4.14.5/#files) |
| pydantic | 2.10.0 | MIT | 1 | [PyPI](https://pypi.org/project/pydantic/2.10.0/#files) |
| pydantic_core | 2.27.0 | MIT | 1 | [PyPI](https://pypi.org/project/pydantic_core/2.27.0/#files) |
| Pygments | 2.21.0 | BSD-2-Clause | 2 | [PyPI](https://pypi.org/project/Pygments/2.21.0/#files) |
| pymdown-extensions | 13.1 | MIT | 1 | [PyPI](https://pypi.org/project/pymdown-extensions/13.1/#files) |
| python-dateutil | 4.0.0 | BSD-3-Clause | 2 | [PyPI](https://pypi.org/project/python-dateutil/4.0.0/#files) |
| PyYAML | 6.0.3 | MIT | 1 | [PyPI](https://pypi.org/project/PyYAML/6.0.3/#files) |
| pyyaml_env_tag | 1.1 | MIT | 1 | [PyPI](https://pypi.org/project/pyyaml_env_tag/1.1/#files) |
| requests | 2.34.2 | Apache-2.0 | 2 | [PyPI](https://pypi.org/project/requests/2.34.2/#files) |
| slowapi | 0.1.9 | MIT | 1 | [PyPI](https://pypi.org/project/slowapi/0.1.9/#files) |
| SQLAlchemy | 2.0.36 | MIT | 1 | [PyPI](https://pypi.org/project/SQLAlchemy/2.0.36/#files) |
| starlette | 0.38.6 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/starlette/0.38.6/#files) |
| typing_extensions | 4.16.0 | PSF-2.0 | 1 | [PyPI](https://pypi.org/project/typing_extensions/4.16.0/#files) |
| tzdata | 2026.6 | Apache-2.0 | 2 | [PyPI](https://pypi.org/project/tzdata/2026.6/#files) |
| urllib3 | 2.8.0 | MIT | 1 | [PyPI](https://pypi.org/project/urllib3/2.8.0/#files) |
| uvicorn | 0.32.0 | BSD-3-Clause | 1 | [PyPI](https://pypi.org/project/uvicorn/0.32.0/#files) |
| watchdog | 7.1.0 | Apache-2.0 | 3 | [PyPI](https://pypi.org/project/watchdog/7.1.0/#files) |
| wrapt | 2.5.2 | BSD-2-Clause | 1 | [PyPI](https://pypi.org/project/wrapt/2.5.2/#files) |

MPL-2.0: certifi ve pathspec; greenlet MIT ve PSF-2.0; packaging Apache-2.0 veya BSD-2-Clause bildirir. İlgili tam lisans/atıf ve MPL kaynak yükümlülükleri dağıtım biçimine göre ayrıca incelenmelidir.

