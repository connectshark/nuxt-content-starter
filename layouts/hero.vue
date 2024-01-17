<template>
<header class="backdrop-blur">
  <div class="px-3 py-6 w-11/12 max-w-7xl mx-auto flex items-center gap-4">
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
<main>
  <div class="w-11/12 max-w-7xl mx-auto">
    <h1 class="font-bold text-2xl/loose md:text-3xl/loose xl:text-5xl/loose py-10">
      <span class="bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-500">{{ site.name }}</span>
      <p>The Easiest Way To Use</p>
    </h1>
  </div>
</main>
<div class="bg-[url('/wave.svg')] py-20 bg-center bg-cover bg-no-repeat"></div>
<section class="bg-primary pb-10">
  <div class="w-11/12 mx-auto mb-10 max-w-7xl grid xl:grid-cols-[1fr_340px] gap-10">
    <slot/>
    <div v-html="fansPage"></div>
  </div>
</section>
<FooterWrapper/>
</template>
  
<script setup>
import FooterWrapper from '~/components/FooterWrapper.vue'
const { site } = useAppConfig()
const navList = [
  {
    link: '/about',
    name: 'About'
  }
]
const fansPage = site.fansPage
</script>