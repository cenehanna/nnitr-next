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
  uk: {
    badge: string;
    surname: string;
    name: string;
    role: string;
    degrees: string[];
  };
};

export const administration: Person[] = [
  {
    badge: "Director",
    surname: "PENTS",
    name: "Volodymyr Fedorovych",
    role: "Director of the Educational and Research Institute of Information Technologies and Robotics",
    degrees: ["Candidate of Technical Sciences, Associate Professor", "Excellence in Education of Ukraine", "Distinguished Employee of Poltava Polytechnic"],
    phone: "(067) 532-39-64",
    phoneHref: "+380675323964",
    email: "pents@nupp.edu.ua",
    image: "/images/160003258_249156640180993_5793263391001748302_n.jpg",
    uk: {
      badge: "Директор",
      surname: "ПЕНЦ",
      name: "Володимир Федорович",
      role: "Директор навчально-наукового інституту інформаційних технологій та робототехніки",
      degrees: ["Кандидат технічних наук, доцент", "Відмінник освіти України", "Заслужений працівник Полтавської політехніки"],
    },
  },
  {
    badge: "Deputy Director",
    surname: "VERHAL",
    name: "Kseniia Yuriivna",
    role: "Deputy Director for Academic Affairs",
    degrees: ["Candidate of Economic Sciences, Associate Professor"],
    phone: "(096) 622-68-01",
    phoneHref: "+380966226801",
    email: "itm.verhal@nupp.edu.ua",
    image: "/images/62fc9522f0351.jpg",
    uk: {
      badge: "Заступник директора",
      surname: "ВЕРГАЛ",
      name: "Ксенія Юріївна",
      role: "Заступник директора з навчально-методичної роботи",
      degrees: ["Кандидат економічних наук, доцент"],
    },
  },
  {
    badge: "Deputy Director",
    surname: "KUZMENKO",
    name: "Oleksandra Kostiantynivna",
    role: "Deputy Director for Student Affairs and Research",
    degrees: ["Candidate of Economic Sciences, Associate Professor"],
    phone: "(050) 726-07-03",
    phoneHref: "+380507260703",
    email: "kuzmenko_O@nupp.edu.ua",
    image: "/images/Kuzmenko.webp",
    uk: {
      badge: "Заступник директора",
      surname: "КУЗЬМЕНКО",
      name: "Олександра Костянтинівна",
      role: "Заступник директора з виховної та наукової роботи",
      degrees: ["Кандидат економічних наук, доцент"],
    },
  },
];
