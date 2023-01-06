export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxtjs/tailwindcss'
  ],
  ssr: false,
  nitro: {
    preset: 'service-worker',
    prerender: {
      routes: ['/sitemap.xml']
    }
  },
  tailwindcss: {
    viewer: false,
  }
})
