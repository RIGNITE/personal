
<template>
  <div class="project__container">
    <h1 class="text-4xl">{{ project.primary.name }}</h1>
    <p><PrismicRichText :field="project.primary.blurp" /></p>
  </div>
</template>

<script setup>
const route = useRoute();

if (!route.params.slug) {
  console.log('No ID provided')
}

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("projects")
);

const project = page?.value?.data?.slices?.find((slice) => slice.primary.slug === route.params.slug);
console.log(project);
</script>

<style>
.project__container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 40px;
  max-width: 48rem;
  margin-left: auto;
  margin-right: auto;
}
</style>