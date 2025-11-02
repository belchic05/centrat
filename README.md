# Центр АТ — одностраничный лендинг

## Деплой на GitHub Pages
1. Создайте репозиторий `centrat` в аккаунте `belchic05` (project pages).
2. Загрузите файлы этого архива в корень репозитория.
3. В *Settings → Pages* выберите **GitHub Actions** или **Deploy from a branch**.
4. Файл `CNAME` уже содержит `centrat.ru` — не удаляйте.

## Домены
- У регистратора пропишите A-записи на GitHub Pages (смотрите актуальные IP в документации GitHub).
- Включите **Enforce HTTPS** после валидации домена.

## Формы
- В `assets/js/forms.js` укажите `FORMSPREE_ENDPOINT` или `APPS_SCRIPT_URL`.
- Если оставить пустыми — fallback на `mailto:info@centrat.ru`.
