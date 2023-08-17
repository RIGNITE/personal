<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.SwiperSliderSlice>([
    "slice",
    "index",
    "slices",
    "context",
  ])
);


const slice = props.slice;

const getIconSize = () =>  {
  if(process.client) {
    const width = window.innerWidth;
    console.log(width);
    
    if(width < 768) {
      return 20;
    }
    else {
      return 80;
    }
  }
  else {
    return 80;
  }
}

// var size = getIconSize();
// console.log(`${size}px`);

</script>

<template>
  <section
    :data-slice-type="slice.slice_type"
    :data-slice-variation="slice.variation"
  >
    <Swiper
      v-if="slice.variation === 'default'"
      :modules="[SwiperAutoplay]"
      :slides-per-view="4"
      :centered-slides="false"
      :loop="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
      }"
      class="max-w-3xl mx-auto my-4"
    >
      <SwiperSlide 
        v-for="skill in slice.items" :key="skill.logo"
        class="!flex flex-col items-center justify-between !h-[120px]"
      >
        <!-- <Icon :name="skill.logoname" :size="`${getIconSize()}px`"/> -->
        <Icon :name="skill.logoname" size="60px"/>
        <span class="flex md:text-lg sm:text-xl">{{skill.logo}}</span>
      </SwiperSlide>
    </Swiper>

    <Swiper
      v-if="slice.variation === 'smaller'"
      :modules="[SwiperAutoplay]"
      :slides-per-view="3"
      :centered-slides="false"
      :loop="true"
      :autoplay="{
          delay: 2500,
          disableOnInteraction: false,
      }"
      class="max-w-3xl mx-auto my-4"
    >
      <SwiperSlide 
        v-for="skill in slice.items" :key="skill.logo"
        class="!flex flex-col items-center justify-between !h-[80px]"
      >
        <Icon :name="skill.logoname" size="30px"/>
        <span class="flex text-lg">{{skill.logo}}</span>
      </SwiperSlide>
    </Swiper>
  </section>
</template>

<style>
</style>
