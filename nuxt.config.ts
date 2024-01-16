export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxt/content', '@nuxtjs/tailwindcss'],
  nitro: { prerender: { routes: ['/sitemap.xml'] } },
  experimental: { payloadExtraction: false },
  app: {
    rootId: 'app',
    head: {
      htmlAttrs: {
        lang: 'zh-TW'
      },
      meta: [
        { name: 'description' , content: 'Nuxt Content for starter'},
        { hid: 'og-type', property: 'og:type', content: 'website' },
        { hid: 'og-title', property: 'og:title', content: 'Nuxt Content for starter' },
        { hid: 'og-description', property: 'og:description', content: 'Nuxt Content for starter' },
        { hid: 'og-image', property: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://unpkg.com/boxicons@latest/css/boxicons.min.css' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@400;700&family=Merriweather:wght@400;700&display=swap' }
      ],
    }
  },
  content: {
    documentDriven: true,
    defaultLocale: 'zh-TW',
    highlight: {
      theme: 'dark-plus'
    }
  },
  tailwindcss: { viewer: false }
})
