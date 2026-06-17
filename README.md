# Лето в Москве 2026 — гид Горбилета

Лендинг-гид «Лето 2026: эмоции со скидкой» — подборка выгодных летних активностей в Москве
(теплоходы, выставки, бесплатные музейные недели, бассейны, сапы, прогулки и однодневные туры).
Одностраничный статичный сайт без сборки и зависимостей.

## Просмотр
Локально — откройте `index.html`. Онлайн — через GitHub Pages (ниже).

## Деплой на GitHub Pages
1. Загрузите содержимое папки в репозиторий на GitHub.
2. Settings → Pages → Source: **Deploy from a branch**, ветка `main`, папка `/ (root)`.
3. Сайт появится на `https://<логин>.github.io/<репозиторий>/`.

```bash
git init && git add . && git commit -m "Лето в Москве 2026"
git branch -M main && git remote add origin https://github.com/<логин>/<репозиторий>.git
git push -u origin main
```

## Структура
```
leto-v-moskve/
├── index.html
├── assets/
│   ├── css/styles.css
│   ├── js/main.js
│   ├── img/            # фотографии (JPEG, оптимизированы)
│   └── logo/           # логотипы Горбилета (SVG)
└── README.md
```

## Редактирование
- Тексты и ссылки — в `index.html` (кнопки ведут на `gorbilet.ru/go/...`).
- Фото — в `assets/img/`; чтобы заменить, положите файл с тем же именем.
- Цвета/шрифты/отступы — `:root` в начале `assets/css/styles.css`.
- Шрифты Playfair Display и Manrope — Google Fonts (нужен интернет).

© 2026 Горбилет. Шрифты — Google Fonts (OFL).
