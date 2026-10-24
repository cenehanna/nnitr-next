# nnitr-next

Статичний макет сайту ННІ інформаційних технологій та робототехніки (Next.js App Router + TypeScript + Tailwind CSS). Без функціоналу — тільки вигляд.

```bash
npm install
npm run dev   # http://localhost:3000
```

## Структура

- `src/app` — сторінки: `/` (головна), `/news` (список новин), `/news/[id]` (окрема новина), `/teachers` (адміністрація)
- `src/components/layout` — Header (dark/light), MobileMenu, Footer, Breadcrumbs
- `src/components/home` — секції головної (Hero, Specialties, LatestNews, AcademicMobility)
- `src/components/news` — NewsCard, SideNewsCard, Pagination
- `src/data` — тимчасові дані (новини з випадковими фото й текстом, меню, спеціальності, адміністрація). Новини замінити на fetch — у `src/data/news.ts`
- `public/images` — зображення
- `tailwind.config.ts` — кольори, шрифти, градієнти, брейкпоінти (sm 576 / md 768 / lg 992)
