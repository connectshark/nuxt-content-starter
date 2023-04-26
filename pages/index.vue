<template>
<NuxtLayout name="index">
  <template v-slot:hero>
    <h1 class="text-3xl mb-8">Welcome! {{ config.site.title }}</h1>
    <p>最快文章更新</p>
  </template>
  <ul>
    <li class="mb-10 hover:-translate-y-2" v-for="article in contentQuery">
      <NuxtLink class=" block bg-primary-200 p-5" :to="article._path">
        <h3>{{ article.title }}</h3>
        <p class=" mb-4">{{ article.description }}</p>
        <p class=" text-right">
          <span class=" bg-primary-500 text-white p-1 rounded hover:opacity-80">read</span>
        </p>
      </NuxtLink>
    </li>
  </ul>
</NuxtLayout>
</template>

<script setup>
const config = useAppConfig()
const contentQuery = await queryContent().sort({ date: 1 }).limit(3).find()
</script>