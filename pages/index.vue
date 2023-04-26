<template>
<NuxtLayout name="index">
  <section class="py-10">
    <h2>{{ config.site.title }}</h2>
  </section>
  <section>
    <ul>
      <li class=" mb-10 bg-primary/10 p-5" v-for="article in contentQuery">
        <h3>{{ article.title }}</h3>
        <p>{{ article.description }}</p>
        <p>
          <NuxtLink :to="article._path" class=" bg-primary text-white p-1 rounded hover:opacity-80">read</NuxtLink>
        </p>
      </li>
    </ul>
  </section>
</NuxtLayout>
</template>

<script setup>
const config = useAppConfig()

const contentQuery = await queryContent().find()
</script>