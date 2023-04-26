<template>
<main class=" min-h-screen">
  <div class=" py-20">
    <h1 class="text-5xl max-w-xl mx-auto text-center">{{ page.title }}</h1>
  </div>
  <ul class="bx-ul max-w-xl w-4/5 mx-auto py-10">
    <li v-for="heading in toc.links" :key="heading.id">
      <i class='bx bxs-circle text-stone-300'></i>
      <a class=" text-primary underline leading-loose" :href="'#' + heading.text">{{ heading.text }}</a>
      <template v-if="heading.children">
        <ul class="bx-ul">
          <li v-for="child in heading.children" :key="child.id"><i class='bx bx-circle text-stone-300' ></i>
            <a class=" text-primary underline leading-loose" :href="'#' + child.text">{{ child.text }}</a></li>
          </ul>
        </template>
      </li>
    </ul>
  <article class="w-11/12 prose mx-auto max-w-xl">
    <slot/>
  </article>
</main>
</template>

<script setup>
const { page } = useContent()
const { toc } = useContent()
</script>