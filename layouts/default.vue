<template>
<div class=" grid grid-cols-[1fr_90vw_1fr] xl:grid-cols-[1fr_800px_1fr]">
  <header class="backdrop-blur col-span-full">
    <div class="px-3 py-6 xl:max-w-3xl w-11/12 mx-auto flex items-center gap-4">
      <NuxtLink to="/" class=" flex items-center">
        <img class=" w-10" src="~/assets/img/logo.png" alt="logo">
        <span class=" font-bold">Blog</span>
      </NuxtLink>
      <nav>
        <ul class="flex items-center gap-4">
          <li v-for="nav in navList" :key="nav.name">
            <NuxtLink :to="nav.link">{{ nav.name }}</NuxtLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="p-3 col-start-2 xl:col-start-3 xl:row-start-2" id="toc"></div>
  <main class="px-5 col-start-2 bg-white rounded shadow mb-10">
    <slot/>
  </main>
  <footer class=" col-span-full border-t">
    <div class="w-11/12 mx-auto xl:max-w-3xl py-10 text-center text-xs">
      <p>Released under the MIT License.</p>
      <p>Copyright<i class='bx bx-copyright'></i>2024 Chambers</p>
    </div>
  </footer>
</div>
</template>

<script setup>
const navList = [
  {
    link: '/about',
    name: 'About'
  }
]
</script>