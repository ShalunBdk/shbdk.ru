export const SITE_METADATA = {
  title: `shbdk.ru`,
  author: 'Shalin Aleksandr',
  headerTitle: `shbdk.ru`,
  description: 'Заметки по IT тематике',
  language: 'ru-ru',
  theme: 'system', // system, dark or light
  siteUrl: 'https://www.shbdk.ru',
  siteRepo: 'https://github.com/shalunbdk/shbdk.ru',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/avatar.jpg`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/site_screen.png`,
  email: 'shalin-ar@defaultdomain.ru',
  github: 'https://github.com/shalunbdk',
  vk: `https://vk.com/alex_shalun`,
  telegram: 'https://t.me/shalunbdk',
  locale: 'ru-RU',
  stickyNav: true,
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus, beehive
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    giscusConfigs: {
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO!,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID!,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY!,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID!,
      mapping: 'title', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      metadata: '0',
      theme: 'light',
      darkTheme: 'transparent_dark',
      themeURL: '',
      lang: 'ru',
    },
  },
  search: {
    provider: 'kbar',
    kbarConfig: {
      // path to load documents to search
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}
