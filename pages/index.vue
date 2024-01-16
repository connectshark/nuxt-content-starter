<template>
<div>
  
<ul class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
  <li v-for="article in list" :key="article._id">
  <NuxtLink :to="article._path" class="bg-white rounded-lg p-4 block hover:opacity-80">
    <h3 class=" font-bold text-2xl leading-loose">{{ article.title }}</h3>
    <p class="line-clamp-2 mb-4">{{ article.description }}</p>
  </NuxtLink>
  </li>
</ul>

<div class=" text-center">
  <button type="button" v-if="isPrevPage" @click="prevPage" class=" bg-white rounded hover:opacity-80">
    <i class='bx bx-chevron-left align-middle bx-md' ></i>
  </button>
  <button type="button" v-if="isNextPage" @click="nextPage" class=" bg-white rounded hover:opacity-80">
    <i class='bx bx-chevron-right align-middle bx-md'></i>
  </button>
</div>

</div>
</template>

<script setup>
import usePagination from '~~/composables/usePagination'
const { data } = await useAsyncData(
  'home', () => queryContent().only(['title', 'description', '_path', '_id']).find()
)

const {
  list,
  isNextPage,
  isPrevPage,
  nextPage,
  prevPage
} = usePagination(data)

useHead({
  title: 'Nuxt Content Starter'
})

definePageMeta({
  layout: 'hero'
})
</script>