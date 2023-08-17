<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeroSlice>([
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
    class="hero-container__hero"
  >
    <div class="hero-container__header max-w-7xl mx-auto w-full p-6 lg:px-8">
        <div class="flex flex-col justify-center max-w-lg text-white">
            <h1 class="hero__title">{{ slice.primary.name }}</h1>
            <div class="pt-5">
                <p class="text-2xl">{{ slice.primary.occupation }}</p>
                <p class="text-2xl">{{ slice.primary.location }}</p>
            </div>
        </div>
        <PrismicImage :field="slice.primary.headshot" class="hero-headshot"/>
    </div>
  </section>
</template>

<style>

.hero-container__hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-size: cover;
  background: rgb(30,0,255);
  background: linear-gradient(342deg, rgb(30, 0, 255) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
}

.hero__title {
  font-size: 3.75rem;
  line-height: 1; 
  font-weight: 600; 
  color: #ffffff; 
}

.hero-container__header {
  display: grid;
  grid-template-columns: 2fr 1fr;
  opacity: 1 !important;
}

.hero-headshot {
  display: flex;
  border-radius: 50%;
  min-width: 250px;
  min-height: 250px;
  max-width: 300px;
  max-height: 300px;
  margin: auto;
  align-content: center;
}

@media screen and (max-width: 520px)  {

  .hero__title {
    font-size: 2.75rem; 
  }

  .hero-container__header {
    grid-template-columns: 1fr;
  }


  .hero-headshot {
    min-width: 200px;
    min-height: 200px;
    max-width: 225px;
    max-height: 225px;
  }
}

@media screen and (max-width: 900px)  {

  .hero__title {
    font-size: 2.75rem; 
  }

  .hero-headshot {
    min-width: 200px;
    min-height: 200px;
    max-width: 225px;
    max-height: 225px;
    margin: 20px;
  }

}

</style>
