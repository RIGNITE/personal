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
  
  <div class="flex flex-col max-w-3xl mx-auto my-4">
    <NuxtLink class="link" :to="`/projects/${slice.primary.slug}`">
      <h1 class="text-2xl">{{ slice.primary.name }}</h1>
    </NuxtLink>
    <p> 
      {{ slice.primary.date }}
    </p>
    <p>
      {{ slice.primary.description }}
    </p>
    <p>
      {{ slice.primary.reason }}
    </p>
    <p>
      {{ slice.primary.team }}
    </p>
    <p>
      {{ slice.primary.skills }}
    </p>

  </div>
  </section>
</template>
