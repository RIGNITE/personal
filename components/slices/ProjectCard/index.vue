<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.ProjectCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);

const slice = props.slice;

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
  
  <div 
    v-if="slice.variation === 'default'" 
    class="flex flex-col max-w-3xl mx-auto my-8 h-48 justify-between"
  >
    <div>
      <NuxtLink class="link" :to="`/projects/${slice.primary.slug}`">
        <h1 class="text-3xl tracking-widest">{{ slice.primary.name }}</h1>
      </NuxtLink>
      <div class="flex row justify-between text-gray-500">
        <p>
          {{ slice.primary.reason }} - {{ slice.primary.team }}
        </p>
        <p> 
          {{ slice.primary.date }}
        </p>
      </div>
      <div class="pt-5 text-gray-500">
        <p>
          {{ slice.primary.description }}
        </p>
      </div>
    </div>
    <p class="text-gray-500">
      {{ slice.primary.skills }}
    </p>
  </div>

  <div v-if="slice.variation === 'detailed'" class="project__container">
      <h1 class="text-4xl tracking-widest">{{ slice.primary.name }}</h1>
      <p>{{ slice.primary.date }}</p>
      <p>{{ slice.primary.reason }} - {{ slice.primary.team }}</p>
      <p class="py-4">
        <PrismicRichText :field="slice.primary.blurp" />
      </p>
  </div>

  <div v-if="slice.variation === 'hero'">
    <div class="center-text-container">
      <NuxtLink class="link" :to="`/projects/${slice.primary.slug}`">
        <h1 class="text-2xl">{{ slice.primary.name }}</h1>
      </NuxtLink>
      <p>{{ slice.primary.date }}</p>
      <p>{{ slice.primary.skills }}</p>
    </div>
  </div>
  </section>
</template>

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

.link {
  display: block;
  font-size: 16px;
  text-decoration: none;
}

.link::after {
  content: '';
  display: block;
  width: 0;
  height: 2px;
  background: rgb(30,0,255);
  background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
  transition: width .3s;
}

.link:hover::after {
  width: 100%;
}
</style>
