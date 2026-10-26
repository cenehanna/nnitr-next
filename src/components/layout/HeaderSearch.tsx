"use client";

import { useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import type { Locale } from "@/lib/i18n-messages";
import SearchBar from "./SearchBar";

interface HeaderSearchProps {
  className?: string;
  ariaLabel: string;
  locale: Locale;
}

export default function HeaderSearch({ className, ariaLabel, locale }: HeaderSearchProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={ariaLabel}
        aria-expanded={isOpen}
        className={className}
      >
        <MagnifyingGlassIcon aria-hidden="true" className="size-[22px]" />
      </button>

      <SearchBar isOpen={isOpen} onClose={() => setIsOpen(false)} locale={locale} />
    </>
  );
}