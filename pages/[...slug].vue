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
<article class="prose prose-a:text-primary max-w-none prose-inline-code:before:content-none prose-inline-code:after:content-none prose-inline-code:inline-block prose-inline-code:border prose-inline-code:border-gray-300 prose-inline-code:rounded prose-img:rounded prose-img:shadow prose-inline-code:px-1">
<ContentDoc>
  <template #not-found>
    <h1>沒有文章</h1>
    <p>
      <NuxtLink to="/">回首頁</NuxtLink>
    </p>
  </template>
  <template #empty>
    <h1>空的</h1>
    <p>
      <NuxtLink to="/">回首頁</NuxtLink>
    </p>
  </template>
</ContentDoc>
</article>
<div class="py-10 grid grid-cols-6 gap-8">
  <NuxtLink class="group border col-span-5 lg:col-span-3 border-gray-300 rounded p-3 block hover:border-primary/50 hover:bg-primary/5" v-if="prev" :to="prev._path">
    <p><i class='bx bxs-chevron-left bx-sm inline-block rounded-full group-hover:text-primary/50'></i></p>
    <p>{{ prev.title }}</p>
  </NuxtLink>
  <NuxtLink class="group text-right col-start-2  col-span-5 lg:col-start-4 lg:col-span-3 border border-gray-300 rounded p-3 block hover:border-primary/50 hover:bg-primary/5" v-if="next" :to="next._path">
    <p><i class='bx bxs-chevron-right bx-sm inline-block rounded-full group-hover:text-primary/50'></i></p>
    <p>{{ next.title }}</p>
  </NuxtLink>
</div>
</template>

<script setup>
const { toc, prev, next } = useContent()
const { site } = useAppConfig()

console.log(prev, next)

useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} | ${site.name}` : 'Blog'
  }
})

</script>