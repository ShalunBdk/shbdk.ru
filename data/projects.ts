import type { Project } from '~/types/data'

export const PROJECTS: Project[] = [
  {
    type: 'work',
    title: 'Персональный веб-сайт',
    description: 'Заметки по IT тематике',
    imgSrc: '/static/images/projects/site_screen.png',
    repo: 'shalulbdk/shbdk.ru',
    // url: 'https://www.shbdk.ru/', //
    builtWith: ['NextJS', 'Tailwind_CSS', 'Typescript', 'Umami'],
  },
  {
    type: 'work',
    title: 'EXIF-галерея',
    description: 'Галлерея',
    imgSrc: '/static/images/projects/gallery.png',
    repo: 'metgen/exif-gallery',
    builtWith: ['Vercel', 'GitHub', 'Typescript', 'Cloudflare'],
  },
  {
    type: 'work',
    title: 'MKT-monitoring',
    description: 'Мониторинг устройств Mikrotik',
    imgSrc: '/static/images/projects/mkt-monitoring.png',
    repo: 'metgen/mkt_monitoring',
    builtWith: ['Grafana', 'Prometheus', 'Docker'],
  },
]
