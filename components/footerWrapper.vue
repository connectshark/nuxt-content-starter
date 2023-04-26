<template>
<footer class=" bg-primary-800 text-white">
  <div class="mx-auto w-11/12 py-6 max-w-6xl">
    <h2>Author: {{ config.site.author }}</h2>
    <p>Useful Link</p>
    <p>
      <a href="https://github.com/connectshark/nuxt-content-starter" target="_blank" rel="noopener noreferrer">
        <i class='bx bxl-github bx-sm'></i>
      </a>
      <a href="https://github.com/connectshark" target="_blank" rel="noopener noreferrer">
        <i class='bx bx-user bx-sm'></i>
      </a>
    </p>
  </div>
</footer>
</template>
<script setup>
const config = useAppConfig()
</script>