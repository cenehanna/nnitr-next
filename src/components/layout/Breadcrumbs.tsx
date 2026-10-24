import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/24/outline";

type Props = { current: string; article?: string };

export default function Breadcrumbs({ current, article }: Props) {
  const sep = <ChevronRightIcon aria-hidden="true" className="size-3 shrink-0 text-[#999]" />;

  return (
    <div className="mb-5 flex items-center gap-2 bg-white px-[15px] py-2.5 font-mont text-sm text-[#666] shadow-[0_4px_12px_rgba(0,0,0,0.1)] sm:mb-[30px] md:px-10 md:py-3 lg:px-[110px] lg:py-[15px]">
      <Link href="/" className="font-medium text-brand hover:underline">Головна</Link>
      {sep}
      {article ? (
        <Link href="/news" className="font-medium text-brand hover:underline">{current}</Link>
      ) : (
        <span className="font-medium text-[#333]">{current}</span>
      )}
      {article && (
        <>
          {sep}
          <span className="max-w-[300px] truncate font-medium text-[#333]">{article}</span>
        </>
      )}
    </div>
  );
}
