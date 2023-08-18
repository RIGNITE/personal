<template>
    <div class="project-container">
        <slice-zone :components="components" :slices="slices" />
    </div>
</template>

<script setup>
import { components } from "~/components/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("projects")
);

// console.log(page?.value?.data);

const slices = page?.value?.data?.slices.filter((slice) => slice.slice_type === "project_card" && slice.variation === "default");
</script>

<style>
.project-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
}
</style>