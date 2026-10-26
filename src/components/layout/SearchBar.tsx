"use client";

import { useEffect, useRef, useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation"; 
import { translate } from "@/lib/i18n-messages";
import type { Locale } from "@/lib/i18n-messages";

interface SearchBarProps {
  isOpen: boolean;
  onClose: () => void;
  locale: Locale;
}

export default function SearchBar({ isOpen, onClose, locale }: SearchBarProps) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (!isOpen) {
      setQuery("");
      return;
    }

    // Невелика затримка дозволяє браузеру повністю відобразити (paint) елемент у DOM
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 50);

    return () => clearTimeout(timer);
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = query.trim();
    if (trimmedQuery) {
      onClose();
      router.push(`/search?q=${encodeURIComponent(trimmedQuery)}`);
    }
  };

  return (
    <div
      /* Змінено transition-all на transition-opacity, щоб visibility не анімувався з затримкою */
      className={`fixed inset-x-0 bottom-0 top-[70px] z-[90] w-full px-2.5 pt-3 transition-opacity duration-250 ease-out xl:px-0 xl:pt-0 ${
        isOpen
          ? "pointer-events-auto visible opacity-100"
          : "pointer-events-none invisible opacity-0"
      } bg-black/45 backdrop-blur-md`}
      aria-hidden={!isOpen}
      onClick={onClose}
    >
      <form
        role="search"
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        /* Застосовано transition-transform окремо для плавного виїзду форми */
        className={`mx-auto flex w-full items-center bg-white shadow-md transition-transform duration-250 ease-out xl:max-w-4xl ${
          isOpen
            ? "translate-y-0 scale-100"
            : "-translate-y-2 scale-95"
        } gap-0 rounded-[14px] p-2 xl:mt-4 xl:gap-3 xl:rounded-xl xl:p-4 xl:shadow-2xl`}
      >
        <button
          type="button"
          onClick={onClose}
          className="flex shrink-0 items-center justify-center rounded-full p-2 text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 xl:hidden"
          aria-label={translate(locale, "back")}
          tabIndex={isOpen ? 0 : -1}
        >
          <ArrowLeftIcon aria-hidden="true" className="size-5" />
        </button>

        <div className="flex h-[42px] flex-1 items-center gap-2.5 rounded-l-[10px] rounded-r-none border border-transparent bg-stone-100 px-2.5 transition-colors focus-within:border-brand-teal focus-within:bg-white xl:h-[44px] xl:rounded-l-xl xl:rounded-r-xl xl:px-3.5">
          <MagnifyingGlassIcon aria-hidden="true" className="size-5 shrink-0 text-stone-400" />

          <label htmlFor="site-search" className="sr-only">
            {translate(locale, "searchInputLabel")}
          </label>
          <input
            id="site-search"
            ref={inputRef}
            type="text"
            placeholder={translate(locale, "searchPlaceholder")}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="h-full w-full border-none bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400 xl:text-base"
            tabIndex={isOpen ? 0 : -1}
          />

          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery("");
                inputRef.current?.focus();
              }}
              className="flex shrink-0 items-center justify-center rounded-full p-1.5 text-stone-400 transition-colors hover:bg-stone-200 hover:text-stone-700"
              aria-label={translate(locale, "clearSearch")}
              tabIndex={isOpen ? 0 : -1}
            >
              <XMarkIcon aria-hidden="true" className="size-4" />
            </button>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex h-[42px] shrink-0 items-center justify-center whitespace-nowrap rounded-l-none rounded-r-[10px] bg-brand-teal px-3.5 text-xs font-semibold text-white transition-all hover:bg-brand-teal/90 active:scale-98 xl:h-[44px] xl:rounded-xl xl:px-6 xl:text-sm"
          tabIndex={isOpen ? 0 : -1}
        >
          {translate(locale, "submitSearch")}
        </button>
      </form>
    </div>
  );
}