<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.SwiperSliderSlice>([
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
    <Swiper
      :modules="[SwiperAutoplay]"
      :slides-per-view="4"
      :centered-slides="false"
      :loop="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
      }"
      class="max-w-3xl mx-auto"
    >
      <SwiperSlide 
        v-for="skill in slice.items" :key="skill.logo"
        class="!flex flex-col items-center justify-between !h-[120px]"
      >
        <Icon :name="skill.logoname" size="80px"/>
        <span class="flex text-xl">{{skill.logo}}</span>
      </SwiperSlide>
    </Swiper>
  </section>
</template>
