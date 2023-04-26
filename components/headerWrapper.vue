<template>
<header class="bg-primary">
  <div class="mx-auto w-11/12 py-6 max-w-4xl">
    <h1 class="text-white">
      <NuxtLink to="/">{{ config.site.title }}</NuxtLink>
    </h1>
  </div>
</header>
</template>

<script setup>
const config = useAppConfig()
</script>