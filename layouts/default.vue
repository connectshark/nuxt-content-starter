<template>
<HeaderWrapper/>
  <main class=" min-h-screen">
    <article class=" prose w-11/12 mx-auto max-w-3xl">
      <slot/>
    </article>
  </main>
<FooterWrapper/>
</template>

<script setup>
const config = useAppConfig()
</script>