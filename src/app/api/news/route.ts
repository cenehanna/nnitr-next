import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function GET(request: Request) {
  // 1. Знаходимо і читаємо наш JSON файл
  const filePath = path.join(process.cwd(), 'src', 'data', 'news.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  let news = JSON.parse(fileContents);

  // 2. Імітація реальної затримки сервера (наприклад, 1 секунда)
  // Це ідеально для тестування файлів loading.tsx у Next.js
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 3. Віддаємо дані у форматі справжньої HTTP-відповіді
  return NextResponse.json(news);
}