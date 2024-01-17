<template>
<footer class=" col-span-full border-t">
  <div class="w-11/12 mx-auto xl:max-w-3xl py-10 text-center text-xs">
    <ul class=" flex items-center gap-8 justify-center mb-6">
      <li v-for="item in footerList" :key="item.icon">
        <a class="block" :href="item.link" target="_blank" rel="noopener noreferrer">
          <i class='bx bx-sm align-middle' :class="item.icon"></i>
        </a>
      </li>
      <li>
        <a class="block" href="mailto:bobhus394@gmail.com" target="_blank">
          <i class='bx bxl-gmail bx-sm align-middle'></i>
        </a>
      </li>
    </ul>
    <p>Released under the MIT License.</p>
    <p>Copyright<i class='bx bx-copyright'></i>2024 Chambers</p>
  </div>
</footer>
</template>

<script setup>
const footerList = [
  {
    link: 'https://github.com/connectshark/nuxt-content-starter',
    icon: 'bxl-github'
  }
]
</script>