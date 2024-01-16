import { ref, computed } from 'vue'

export default (originArticles) => {
  const { pageSize } = useAppConfig()
  const articles = originArticles.value.filter((article) => article.title !== 'index')
  const page = ref(1)
  const total = ref(articles.length)
  const skip = ref(0)

  const nextPage = () => {
    page.value++
    skip.value = (page.value - 1) * pageSize
  }

  const prevPage = () => {
    page.value--
    skip.value = (page.value - 1) * pageSize
  }

  const isNextPage = computed(() => {
    return page.value < Math.ceil(total.value / pageSize)
  })

  const isPrevPage = computed(() => {
    return page.value > 1
  })

  const list = computed(() => articles.slice(skip.value, skip.value + pageSize))

  return {
    list,
    pageSize,
    skip,
    nextPage,
    prevPage,
    isNextPage,
    isPrevPage
  }
}