<template>
  <NuxtLayout name="index">
    <template v-slot:hero>
      <h1 class="text-primary text-2xl">包含{{ route.params.tag }}的文章</h1>
    </template>
    <ul class=" flex gap-5 items-center">
      <li class=" w-1/4 mb-10 bg-primary-200 p-5" v-for="article in articles">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <p>
          <NuxtLink :to="article._path" class=" bg-primary-500 text-white p-1 rounded hover:opacity-80">read</NuxtLink>
        </p>
      </li>
    </ul>
  </NuxtLayout>
</template>

<script setup>
const route = useRoute()
const articles = await queryContent()
  .where({ tags: { $in: route.params.tag } })
  .only(['_id', '_path', 'cover', 'title', 'description'])
  .find()
</script>