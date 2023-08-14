<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroProjectCardSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);
</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <div class="center-text-container">
      <NuxtLink class="link" :to="`/projects/${slice.primary.slug}`">
        <h1 class="text-2xl">{{ slice.primary.name }}</h1>
      </NuxtLink>
      <p>{{ slice.primary.date }}</p>
      <p>{{ slice.primary.skills }}</p>
    </div>
  </section>
</template>

<style>
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
