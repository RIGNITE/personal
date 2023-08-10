<script setup lang="ts">
import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
defineProps(
  getSliceComponentProps<Content.CenterTextSlice>([
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
      <p>
        {{ slice.primary.text }}
      </p>
    </div>
  </section>
</template>

<style>
.center-text-container {
  display: flex;
  max-width: 48rem;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2.5rem;
  margin-left: auto;
  margin-right: auto;
  font-size: 1.25rem;
  line-height: 1.75rem;
  color: rgb(75 85 99);
}
</style>