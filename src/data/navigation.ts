export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
};

export const navItems: NavItem[] = [
  { label: "НОВИНИ", href: "/news" },
  {
    label: "ВСТУПНИКАМ",
    href: "#",
    children: [
      { label: "Перелік спеціальностей", href: "#" },
      { label: "Умови вступу", href: "#" },
    ],
  },
  {
    label: "СТУДЕНТУ",
    href: "#",
    children: [
      { label: "Розклад занять", href: "https://portal.nupp.edu.ua/self/time-table", external: true },
      { label: "Кабінет студента", href: "https://portal.nupp.edu.ua/", external: true },
      { label: "Дистанційне навчання", href: "https://dist.nupp.edu.ua/login/index.php", external: true },
      {
        label: "Рейтинг студентів",
        href: "https://nupp.edu.ua/page/reyting-studentiv-navchalno-naukovogo-institutu-informatsiynikh-tekhnologiy-ta-robototekhniki.html",
        external: true,
      },
      { label: "Викладачі", href: "/teachers" },
    ],
  },
  { label: "КОНТАКТИ", href: "/teachers" },
];
