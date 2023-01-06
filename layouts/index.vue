<template>
  <header class="bg-primary">
    <div class="container mx-auto p-6">
      <h1 class="text-white text-4xl">HELLO {{ config.site.title }}</h1>
    </div>
  </header>
  <main>
    <slot/>
  </main>
  <footer class=" bg-stone-900">
    <div class="container mx-auto p-6 text-white text-xl">
      <h2>Author: {{ config.site.author }}</h2>
      <p>Useful Link</p>
      <p>
        
      </p>
    </div>
  </footer>
</template>

<script setup>
const config = useAppConfig()
</script>