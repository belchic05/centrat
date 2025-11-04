# Центр АТ — одностраничный лендинг (с встроенными реальными изображениями)

## Быстрый деплой на GitHub Pages
1) Создайте репозиторий `centrat` в `belchic05` (Project Pages).
2) Загрузите файлы архива в корень repo.
3) В Settings → Pages выберите GitHub Actions или Deploy from a branch.
4) Не удаляйте файл `CNAME` (указан centrat.ru). У регистратора пропишите A-записи на GitHub Pages IP.
5) Включите Enforce HTTPS после валидации домена.

## Замена форм
- В `assets/js/forms.js` укажите `FORMSPREE_ENDPOINT` или `APPS_SCRIPT_URL`. Иначе будет fallback на `mailto:info@centrat.ru`.

## Изображения
- Лого: `assets/img/logo-src.(png|webp)` — в тёмной теме автоматически инвертируется в белый через CSS.
- Флагман: `assets/img/meltmaster.webp`
- ERP: `assets/img/oba.webp`
