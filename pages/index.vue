<template>
    <div class="main-container max-w-8xl mx-auto">
            <slice-zone :components="components" :slices="slices" />
    </div>


</template>

<script setup>
import { components } from "~/components/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("home")
);

const slices = page?.value?.data.slices;

</script>

<style>
.main-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.main-container__home {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.main-container__skills {
    padding-bottom: 40px;
}

</style>