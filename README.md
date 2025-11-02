# Центр АТ — статический сайт (GitHub Pages)
Готовая статическая сборка под GitHub Pages (project mode) и домен **centrat.ru**.

## Быстрый локальный просмотр
- Откройте `index.html` двойным кликом.

## Деплой на GitHub Pages (Actions)
1. Создайте репозиторий `centrat` в аккаунте `belchic05`.
2. Загрузите весь контент ZIP в корень репозитория.
3. Убедитесь, что файл `CNAME` содержит строку `centrat.ru`.
4. Включите GitHub Actions: *Settings → Pages* → **Build and deployment: GitHub Actions**.
5. Проверьте права в workflow: `pages: write`, `id-token: write`.
6. После пуша откройте Actions и дождитесь шага **Deploy to GitHub Pages**.

## Привязка домена centrat.ru
1. В файле `CNAME` уже указано: `centrat.ru`.
2. У регистратора домена задайте A‑записи на IP GitHub Pages (актуальные значения смотрите в справке GitHub). Обычно используются `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
3. (Опционально) AAAA‑записи для IPv6.
4. В *Settings → Pages* включите **Enforce HTTPS** после подтверждения домена.

## Структура данных (`/data/*.json`)
- `products.json` — карточки моделей (id, title, keySpecs, page).
- `news.json` — список новостей (`title`, `date`, `excerpt`, `image`, `url`).
- `cases.json` — отраслевые кейсы.
- `faqs.json` — вопросы/ответы для аккордеона.
Редактируйте JSON‑файлы — обновления подтянутся без пересборки.

## Локализация (опц.)
JSON‑файлы в `/data/i18n/ru.json` и `en.json`. Переключатель RU/EN в шапке, язык сохраняется в `localStorage`.

## Замена логотипов/цветов
- Положите SVG/PNG в `assets/img/` с именами `logo-primary.svg`, `logo-mark.svg`, `wordmark-lat.svg`.
- Цвета меняются в `assets/css/styles.css` (CSS variables).
- Фавикон/иконку можно заменить файлами `favicon.ico`, `apple-touch-icon.png`.

## Настройка отправки форм
- По умолчанию формы используют JS‑отправку. Укажите один из эндпоинтов в `assets/js/forms.js`:
  - `FORMSPREE_ENDPOINT = "https://formspree.io/f/XXXXXX"`
  - или `APPS_SCRIPT_URL = "https://script.google.com/macros/s/.../exec"`
- Если оба пустые — сработает fallback `mailto:`.

## Google Apps Script (опционально)
1. Создайте Google Таблицу с колонками: `timestamp, page, purpose, name, email, message`.
2. В Apps Script вставьте код из `apps-script/Code.gs`.
3. *Deploy → New deployment → Web app*: **Anyone with the link**.
4. Вставьте URL в `assets/js/forms.js` → `APPS_SCRIPT_URL`.

## SEO и доступность
- `<base href="/centrat/">` во всех страницах.
- Мета‑теги title/description/OG/Twitter, JSON‑LD (Organization и Product на странице товара).
- WCAG‑дружественные элементы: skip‑link, aria‑атрибуты, фокусы, `prefers-reduced-motion` поддержка в CSS/JS.

## Где править
- Стили: `assets/css/styles.css`
- Скрипты: `assets/js/*`
- Контент: html‑страницы и `/data/*.json`