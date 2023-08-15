
<template>
  <div>
    <div :style="`width: ${progress_width}%`" class="progress_bar" ref="progress_bar"></div>
    <div class="project__container">
      <h1 class="text-4xl tracking-widest">{{ project.primary.name }}</h1>
      <p>{{ project.primary.date }}</p>
      <p>{{ project.primary.reason }} - {{ project.primary.team }}</p>
      <p class="py-4"><PrismicRichText :field="project.primary.blurp" /></p>
      <p>{{ project.primary.skills }}</p>
    </div>
  </div>
</template>

<script setup>
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
const project = page?.value?.data?.slices?.find(
  (slice) => slice.primary?.slug === route.params?.slug
);

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
  background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);;
}

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