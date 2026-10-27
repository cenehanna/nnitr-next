"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";

interface NewsSortSelectProps {
  currentSort: string;
  anchor: string;
}

export default function NewsSortSelect({ currentSort, anchor }: NewsSortSelectProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const handleSortChange = (newSort: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", newSort);
    
    params.set("page", "1");

    router.push(`${pathname}?${params.toString()}#${anchor}`);
  };

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="font-mont text-sm font-medium text-[#666]">
        Сортувати:
      </label>
      <select
        id="sort-select"
        value={currentSort}
        onChange={(e) => handleSortChange(e.target.value)}
        className="rounded-lg border border-[#e0e0e0] bg-white px-3 py-1.5 font-mont text-sm font-medium text-black outline-none focus:border-brand-teal"
      >
        <option value="desc">Спочатку нові</option>
        <option value="asc">Спочатку старі</option>
      </select>
    </div>
  );
}