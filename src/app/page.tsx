import Header from "@/components/layout/Header";
import MobileMenu from "@/components/layout/MobileMenu";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/home/Hero";
import Specialties from "@/components/home/Specialties";
import LatestNews from "@/components/home/LatestNews";
import AcademicMobility from "@/components/home/AcademicMobility";
import { getLocale } from "@/lib/i18n";

async function getNews() {
  // Звертаємося до нашого локального API
  const res = await fetch('http://localhost:3000/api/news', {
    // Відключаємо кешування, щоб бачити свіжі зміни під час розробки
    cache: 'no-store' 
  });
  
  if (!res.ok) throw new Error('Помилка завантаження новин');
  
  return res.json();
}

export default async function HomePage() {
  // 1. Отримуємо поточну мову на сервері
  const locale = await getLocale();
  
  // 2. Викликаємо функцію завантаження новин
  const articles = await getNews();

  return (
    <>
      <Header variant="dark" />
      <main>
        <Hero />
        {/* 3. Передаємо locale у компонент Specialties */}
        <Specialties locale={locale} />
        
        {/* Передаємо перші 5 новин у компонент LatestNews */}
        <LatestNews news={articles.slice(0, 5)} />
        
        <AcademicMobility />
      </main>
      <Footer />
      <MobileMenu variant="dark" />
    </>
  );
}