export const SITE_TITLE = "Ilya Semenov";
export const SITE_DESCRIPTION =
  "Frontend dev & photographer based in St. Petersburg";

import type { EducationData, ExperienceData, SkillBlockData } from "./types";

export const CONTACTS = {
  email: "hi@si1og.ru",
  github: "https://github.com/si1og",
  telegram: "https://t.me/si1og",
  unsplash: "https://unsplash.com/@si1og",
  resume: "/cv",
};

export const EDUCATION: EducationData = {
  university: "Санкт-Петербургский политехнический университет (СПбПУ)",
  program: "Математика и компьютерные науки",
  period: "2024 — н.в.",
  details: [
    "Алгоритмы и структуры данных",
    "Функциональное программирование (Haskell)",
    "ООП и GUI (C++/Qt)",
    "Базы данных",
    "LaTeX",
    "Работа с Git",
  ],
};

export const EXPERIENCE: ExperienceData = {
  company: "Vision AI",
  role: "Frontend Dev (неофициально)",
  period: "Сен 2025 — Дек 2025",
  stack: ["React", "Next.js", "Three.js", "Tailwind CSS"],
  description:
    "Разрабатывал интерфейс для работы с 3D редактором [редактор предназначен для расстановки предметов интрьера (мебели) по согласно заданной планировке]. Работал с серверным API, а также API редактора [Frontend поделён на две части: UI и сам редактор на Three.js].",
  link: "https://vision-ai.org",
};

export const SKILL_BLOCKS: SkillBlockData[] = [
  {
    title: "Web Dev",
    color: "blue",
    skills: [
      { name: "HTML", link: "https://developer.mozilla.org/ru/docs/Web/HTML" },
      { name: "CSS", link: "https://developer.mozilla.org/ru/docs/Web/CSS" },
      {
        name: "JavaScript",
        link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
      },
      { name: "TypeScript", link: "https://www.typescriptlang.org/" },
      { name: "React", link: "https://react.dev/" },
      { name: "Next.js", link: "https://nextjs.org/" },
      { name: "Vue", link: "https://vuejs.org/" },
      { name: "Nuxt", link: "https://nuxt.com/" },
      { name: "Tailwind CSS", link: "https://tailwindcss.com/" },
    ],
  },
  {
    title: "Университет",
    color: "purple",
    skills: [
      { name: "C++", link: "https://isocpp.org/" },
      { name: "Qt", link: "https://www.qt.io/" },
      { name: "Haskell", link: "https://www.haskell.org/" },
      { name: "LaTeX", link: "https://www.latex-project.org/" },
      { name: "Git", link: "https://git-scm.com/" },
    ],
  },
];
