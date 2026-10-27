# Institute News Portal

A modern, responsive news portal and informational landing page for a university/institute. The project was developed as a course project with a focus on **UI/UX design**, usability, and a modern look and feel.

---

## 📌 About the Project & UX/UI Concept

The main goal of this project is to refresh the outdated news page interface of a university and make it convenient, intuitive, and appealing for students, applicants, and faculty.

### Design decisions (Figma):
* **Best-practice analysis:** Before development, I researched the websites of leading universities around the world and popular news media outlets.
* **UX focus:** Easy navigation, a clear content hierarchy, and quick access to key sections (academic mobility, specialties, search).
* **Modern UI:** A clean look, pleasant color scheme, attention to typography, micro-interactions, and responsiveness on mobile devices.

> **Note:** This project is a front-end demo platform. News data is stored locally (JSON), without a full server-side CMS.

---

## Main Features

- **Home page (Landing):** Information about study programs (specialties), the academic mobility program, and a digest of the latest news.
- **News page:** A featured article (hero article), sorting by publication date, and convenient pagination.
- **Search module:** Fast search by news titles and text, with paginated results.
- **Detailed view:** A page for each news article with full text and images, plus a page for the institute's faculty and administration.
- **Multilingual support (i18n):** A built-in language switcher (Ukrainian / English).
- **Responsiveness:** A full mobile menu and optimization for any screen size.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Localization:** Custom logic / language configs
* **Data source:** Local JSON files

## 📁 Project Structure

```text
├── public/
│   ├── images/              # Images and logos
│   └── newsimages/          # News images
└── src/
    ├── app/                 # Pages and application logic (App Router)
    │   ├── page.tsx              # Home page
    │   ├── news/
    │   │   ├── page.tsx          # News list
    │   │   └── [id]/page.tsx     # Single news article
    │   ├── search/page.tsx       # Search
    │   ├── teachers/page.tsx     # Administration
    │   ├── api/news/route.ts     # News API
    │   ├── layout.tsx
    │   ├── globals.css
    │   └── actions.ts
    ├── components/          # UI components
    │   ├── home/                 # Home page sections
    │   ├── layout/               # Header, menu, footer, search, language switcher, breadcrumbs
    │   └── news/                 # News cards, sorting, and pagination
    ├── data/                # News, navigation, home page, and administration data
    └── lib/                 # Localization, date formatting, pagination
```
