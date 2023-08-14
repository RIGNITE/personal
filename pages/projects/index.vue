<template>
    <div class="socials-container">
        <slice-zone :components="components" :slices="slices" />
    </div>
</template>

<script setup>
import { components } from "~/components/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("projects")
);

console.log(page?.value?.data);

const slices = page?.value?.data.slices;
</script>

<style>
.socials-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
}
</style>