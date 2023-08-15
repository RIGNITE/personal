
<template>
  <div>
    <progress max="100" value="0" ref="progress_bar"></progress>
    <div class="project__container">
      <h1 class="text-4xl tracking-widest">{{ project.primary.name }}</h1>
      <p>{{ project.primary.date }}</p>
      <p>{{ project.primary.reason }} - {{ project.primary.team }}</p>
      <p class="py-4"><PrismicRichText :field="project.primary.blurp" /></p>
      <div class="a" ref="box">a</div>
      <p>{{ project.primary.skills }}</p>
    </div>
  </div>
</template>

<script setup>
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
  gsap.to(box.value, {
    scrollTrigger: {
      trigger: box.value,
      toggleActions: "restart pause none none",
    },
    x: 500,
    rotation: 360,
    duration: 3,
  });

  gsap.to(progress_bar.value, {
    value: 100,
    ease: none,
    scrollTrigger: {
      start: 0,
      end: 100,
      scrub: 0.3,
    }
  });
});
</script>


<style>
progress {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 5px;
  border: none;
  background: transparent;
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

.a {
  display: flex;
  padding: 30px;
  background-color: red;
  width: 40px;
  height: 40px;
  align-items: center;
  justify-content: center;
}
</style>