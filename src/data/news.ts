import { promises as fs } from 'fs';
import path from 'path';

export interface Article {
  id: string;
  title: string;
  description?: string; // Знак питання означає, що поле необов'язкове
  content: string;
  imagePath: string;
  publishedAt: string;
  category: string;
  sourceUrl?: string;   
  imageUrl?: string;    
}

export interface LatestNewsProps {
  news: Article[];
}

export async function getNews(): Promise<Article[]> {
  // Знаходимо абсолютний шлях до файлу news.json у вашому проєкті
  const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  
  // Читаємо вміст файлу
  const fileContents = await fs.readFile(filePath, 'utf8');
  
  // Перетворюємо текст із JSON на звичайний масив JavaScript
  const news = JSON.parse(fileContents);

  return news;
}