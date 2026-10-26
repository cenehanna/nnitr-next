export type NavItem = {
  label: string;
  href: string;
  external?: boolean;
  children?: { label: string; href: string; external?: boolean }[];
};

export function getNavItems(locale: "uk" | "en"): NavItem[] {
  return locale === "uk"
    ? [
        { label: "НОВИНИ", href: "/news" },
        {
          label: "ВСТУПНИКАМ",
          href: "#",
          children: [
            { label: "Перелік спеціальностей", href: "#specialties" },
            { label: "Умови вступу", href: "https://vstup-info.nupp.edu.ua/", external: true },
          ],
        },
        {
          label: "СТУДЕНТАМ",
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
            { label: "Викладачі", href: "https://nupp.edu.ua/page/kafedri-navchalno-naukovogo-institutu-informatsiynikh-tekhnologiy-ta-robototekhniki.html", external: true },
          ],
        },
        { label: "КОНТАКТИ", href: "/teachers" },
      ]
    : [
        { label: "NEWS", href: "/news" },
        {
          label: "ADMISSIONS",
          href: "#",
          children: [
            { label: "Degree programmes", href: "#" },
            { label: "Admission requirements", href: "#" },
          ],
        },
        {
          label: "STUDENTS",
          href: "#",
          children: [
            { label: "Class schedule", href: "https://portal.nupp.edu.ua/self/time-table", external: true },
            { label: "Student portal", href: "https://portal.nupp.edu.ua/", external: true },
            { label: "Distance learning", href: "https://dist.nupp.edu.ua/login/index.php", external: true },
            {
              label: "Student rankings",
              href: "https://nupp.edu.ua/page/reyting-studentiv-navchalno-naukovogo-institutu-informatsiynikh-tekhnologiy-ta-robototekhniki.html",
              external: true,
            },
            { label: "Faculty", href: "/teachers" },
          ],
        },
        { label: "CONTACTS", href: "/teachers" },
      ];
}
