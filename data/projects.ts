import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Персональный веб-сайт',
    description: 'Заметки по IT тематике',
    imgSrc: '/static/images/projects/site_screen.png',
    repo: 'shalunbdk/shbdk.ru',
    // url: 'https://www.shbdk.ru/', //
    builtWith: ['NextJS', 'Tailwind_CSS', 'Typescript'],
  },
  {
    type: 'work',
    title: 'EXIF-галерея',
    description: 'Галлерея',
    imgSrc: '/static/images/projects/gallery.png',
    repo: 'shalunbdk/exif-gallery',
    builtWith: ['Vercel', 'GitHub', 'Typescript', 'Cloudflare'],
  },
  {
    type: 'work',
    title: 'MKT-monitoring',
    description: 'Мониторинг устройств Mikrotik',
    imgSrc: '/static/images/projects/mkt-monitoring.png',
    repo: 'shalunbdk/mkt_monitoring',
    builtWith: ['Grafana', 'Prometheus', 'Docker'],
  },
]
