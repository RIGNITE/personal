<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.HeaderTextSlice>([
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
    <div class="header-text-container">
      <h1>{{ slice?.primary?.header.toUpperCase() }}</h1>
    </div>
  </section>
</template>

<style scoped>
.header-text-container {
  display: flex;
  max-width: 48rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1.5rem 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.75rem;
  line-height: 1.75rem;
  letter-spacing: 0.5rem;
  color: rgb(68, 68, 68);
}
</style>
