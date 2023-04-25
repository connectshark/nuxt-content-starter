export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  app: {
    rootId: 'app',
    head: {
      title: 'Nuxt Content Starter',
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/nosegates.jpg' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC&family=Ubuntu:wght@400;500;700&display=swap' }
      ]
    }
  },
  nitro: {
    preset: 'service-worker',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  content: {
    defaultLocale: 'zh-TW'
  },
  tailwindcss: {
    viewer: false,
  }
})
