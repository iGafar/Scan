export const sliderCarts: { id: number; img: string; text: string }[] = [
  {
    id: 0,
    img: "./images/slider/watch_slide.svg",
    text: "Высокая и оперативная скорость обработки заявки",
  },
  {
    id: 1,
    img: "./images/slider/search_slide.svg",
    text: `Огромная комплексная база данных, обеспечивающая объективный ответ на запрос`,
  },
  {
    id: 2,
    img: "./images/slider/shield_slide.svg",
    text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  },
  {
    id: 3,
    img: "./images/slider/watch_slide.svg",
    text: "Высокая и оперативная скорость обработки заявки",
  },
  {
    id: 4,
    img: "./images/slider/search_slide.svg",
    text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
  },
  {
    id: 5,
    img: "./images/slider/shield_slide.svg",
    text: "Защита конфеденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  },
];

interface Theme {
  colors: {
    main1: string;
    main2: string;
    main3: string;
    extra1: string;
    extra2: string;
    extra3: string;
  };
}

export const theme: Theme = {
  colors: {
    main1: "#029491",
    main2: "#000",
    main3: "#fff",
    extra1: "#FFB64F",
    extra2: "#7CE3E1",
    extra3: "#5970FF",
  },
};

export interface IRate {
  name: string;
  description: string;
  img: string;
  head_color: string;
  price: string;
  full_price: string;
  installment: string;
  includes: string[];
}

export const rates: IRate[] = [
  {
    name: "Beginner",
    description: "Для небольшого исследования",
    img: "./images/icons/light.svg",
    head_color: "#FFB64F",
    price: "799 ₽",
    full_price: "1 200 ₽",
    installment: "или 150 ₽/мес. при рассрочке на 24 мес.",
    includes: [
      "Безлимитная история запросов",
      "Безопасная сделка",
      "Поддержка 24/7",
    ],
  },
  {
    name: "Pro",
    description: "Для HR и фрилансеров",
    img: "./images/icons/target.svg",
    head_color: "#7CE3E1",
    price: "1 299 ₽",
    full_price: "2 600 ₽",
    installment: "или 279 ₽/мес. при рассрочке на 24 мес.",
    includes: [
      "Все пункты тарифа Beginner",
      "Экспорт истории",
      "Рекомендации по приоритетам",
    ],
  },
  {
    name: "Business",
    description: "Для корпоративных клиентов",
    img: "./images/icons/laptop.svg",
    head_color: "#000",
    price: "2 379 ₽",
    full_price: "3 700 ₽",
    installment: "",
    includes: [
      "Все пункты тарифа Pro",
      "Безлимитное количество запросов",
      "Приоритетная поддержка",
    ],
  },
];

export const documentsList = [
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",
    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",

    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",

    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",

    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",

    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
  {
    date: "13.09.2021",
    source: "Комсомольская правда KP.RU",
    title: "Скиллфэктори - лучшая онлайн-школа для будущих айтишников",
    tag: "Технические новости",
    img: "./images/issue_back.png",

    text: `SkillFactory — школа для всех, кто хочет изменить свою карьеру и жизнь. С 2016 года обучение прошли 20 000+ человек из 40 стран с 4 континентов, самому взрослому студенту сейчас 86 лет. Выпускники работают в Сбере, Cisco, Bayer, Nvidia, МТС, Ростелекоме, Mail.ru, Яндексе, Ozon и других топовых компаниях.

		Принципы SkillFactory: акцент на практике, забота о студентах и ориентир на трудоустройство. 80% обучения — выполнение упражнений и реальных проектов. Каждого студента поддерживают менторы, 2 саппорт-линии и комьюнити курса. А карьерный центр помогает составить резюме, подготовиться к собеседованиям и познакомиться с IT-рекрутерами.`,
    words: "2 543 слова",
  },
];
