export type Person = {
  badge: string;
  surname: string;
  name: string;
  role: string;
  degrees: string[];
  phone: string;
  phoneHref: string;
  email: string;
  image: string;
};

export const administration: Person[] = [
  {
    badge: "Директор",
    surname: "ПЕНЦ",
    name: "Володимир Федорович",
    role: "Директор навчально-наукового інституту інформаційних технологій та робототехніки",
    degrees: ["Кандидат технічних наук, доцент", "Відмінник освіти України", "Заслужений працівник Полтавської політехніки"],
    phone: "(067) 532-39-64",
    phoneHref: "+380675323964",
    email: "pents@nupp.edu.ua",
    image: "/images/PenzVF.jpg",
  },
  {
    badge: "Заступник директора",
    surname: "ВЕРГАЛ",
    name: "Ксенія Юріївна",
    role: "Заступник директора з навчально-методичної роботи",
    degrees: ["Кандидат економічних наук, доцент"],
    phone: "(096) 622-68-01",
    phoneHref: "+380966226801",
    email: "itm.verhal@nupp.edu.ua",
    image: "/images/VergalKY.webp",
  },
  {
    badge: "Заступник директора",
    surname: "КУЗЬМЕНКО",
    name: "Олександра Костянтинівна",
    role: "Заступник директора з виховної та наукової роботи",
    degrees: ["Кандидат економічних наук, доцент"],
    phone: "(050) 726-07-03",
    phoneHref: "+380507260703",
    email: "kuzmenko_O@nupp.edu.ua",
    image: "/images/Kuzmenko.webp",
  },
];
