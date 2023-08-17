
<template>
  <div>
    <div :style="`width: ${progress_width}%`" class="progress_bar" ref="progress_bar"></div>
    <slice-zone :components="components" :slices="project" />
  </div>
</template>

<script setup>
import { components } from "~/components/slices";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const progress_width = ref(0);
const box = ref(null);
const progress_bar = ref(null);
const route = useRoute();
// Fetch the project data from Prismic
const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("projects")
);

// Find the project that matches the slug
const project = page?.value?.data?.slices?.filter(
  (slice) => 
  // Detailed project card slice
  (slice.primary.slug === route.params.slug && slice.variation === "detailed") || 
  // Project skill swiper slice
  (slice.primary?.project === route.params?.slug)
);
console.log(project)

// Routes used to get the slug from the URL
if (!route.params.slug) {
  console.log('No ID provided')
}

// ScrollTrigger Animations
gsap.registerPlugin(ScrollTrigger);

onMounted(() => {
  gsap.to(progress_bar.value, {
    scrollTrigger: {
      onUpdate: (e) => (progress_width.value = e.progress * 100),
    }
  });
});
</script>


<style>

.progress_bar {
  position: fixed;
  left: 0;
  top: 0;
  height: 5px;
  border: none;
  background: rgba(9,9,121,1);
}
</style>