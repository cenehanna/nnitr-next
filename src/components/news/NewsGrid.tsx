import Pagination from "@/components/news/Pagination";
import NewsCard from "@/components/news/NewsCard";
import { Article } from "@/data/news";
import { getLocale, translate } from "@/lib/i18n";


//імена змінної та ключа в типізації повинні збігатися
//Ліва частина ({ news }) — це механізм деструктуризації JavaScript, який
// дістає конкретну властивість із переданого об'єкта пропсів. 
// Права частина після двокрапки ({ news: Article[] }) — це правило TypeScript, 
// яке чітко описує, які саме поля повинен мати цей об'єкт.
export default async function NewsGrid({ news, totalPages, currentPage }: { 
    news: Article[];
    totalPages: number;
  currentPage: number;
 }) {
    const locale = await getLocale();
    return (
        <>
                <h2 
                //для прокручування до цього заголовка при натисканні на кнопки
                id="news-list" 
                className="mb-[30px] mt-10 inline-block border-b-2 border-brand-teal pb-[15px] font-mont text-2xl font-bold text-black md:text-[28px]">
          {translate(locale, "moreNews")}
        </h2>

        <section className="mb-[50px] grid grid-cols-1 gap-[25px] font-exo md:grid-cols-2 md:gap-[30px] lg:grid-cols-3 lg:gap-x-[30px] lg:gap-y-10">
          {news.map((item) => (
            <NewsCard key={item.id} item={item} />
          ))}
        </section>

        <Pagination totalPages={totalPages} currentPage={currentPage}/>
        </>
    )
}