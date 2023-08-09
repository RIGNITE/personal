<script setup lang="ts">

import { Content } from "@prismicio/client";

// The array passed to `getSliceComponentProps` is purely optional.
// Consider it as a visual hint for you when templating your slice.
const props = defineProps(
  getSliceComponentProps<Content.AboutItemSlice>([
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
        <div class="list__items-container">
            <div class="flex row py-4 px-2">
                <prismic-image :field="slice.primary.logo" class="mr-3"/>
                <div class="flex flex-col">
                    <span class="text-2xl">{{slice.primary.name}}</span>
                    <span>{{slice.primary.title}}</span>
                    <span>{{slice.primary.year}}</span>
                </div>
            </div>
        </div>
  </section>
</template>
