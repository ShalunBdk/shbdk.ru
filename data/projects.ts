import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Tasting Platform',
    description: 'Платформа для проведения внутренних дегустаций с аналитикой и интеграцией Bitrix24',
    imgSrc: '/static/images/projects/tasting-platform.png',
    repo: 'shalunbdk/tasting-platform',
    builtWith: ['React', 'Typescript', 'Express', 'PostgreSQL', 'Docker', 'Tailwind_CSS'],
  },
  {
    type: 'work',
    title: 'Soroka Food',
    description: 'Fullstack кулинарный блог с админ-панелью, модерацией комментариев и защитой от спама',
    imgSrc: '/static/images/projects/soroka-food.webp',
    repo: 'shalunbdk/soroka-food',
    builtWith: ['React', 'Typescript', 'Express', 'PostgreSQL', 'Prisma', 'Docker', 'Redis'],
  },
  {
    type: 'work',
    title: 'Персональный веб-сайт',
    description: 'Заметки по IT тематике',
    imgSrc: '/static/images/projects/site_screen.webp',
    repo: 'shalunbdk/shbdk.ru',
    // url: 'https://www.shbdk.ru/', //
    builtWith: ['NextJS', 'Tailwind_CSS', 'Typescript'],
  },
]
