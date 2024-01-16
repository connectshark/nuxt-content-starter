<template>
<ClientOnly>
<Teleport to="#toc">
  <ul class="bx-ul py-6 sticky top-6 text-gray-400">
    <li v-for="heading in toc.links" :key="heading.id">
      <i class='bx bxs-circle bx-x'></i>
      <a class="text-primary underline" :href="'#' + heading.id">{{ heading.text }}</a>
      <template v-if="heading.children">
        <ul class="bx-ul">
          <li v-for="child in heading.children" :key="child.id"><i class='bx bx-circle' ></i>
            <a class=" text-primary underline" :href="'#' + child.id">{{ child.text }}</a></li>
          </ul>
        </template>
      </li>
    </ul>
</Teleport>
</ClientOnly>
<article class="prose prose-a:text-primary max-w-none prose-code:before:content-none prose-code:after:content-none">
  <ContentDoc />
</article>
</template>

<script setup>
const { toc } = useContent()
</script>