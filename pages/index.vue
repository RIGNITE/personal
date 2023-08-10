<template>
    <div class="main-container max-w-8xl mx-auto">
            <slice-zone :components="components" :slices="slices" />
        <!-- <div class="main-container__skills">
            <Skills :skills="skills"/>
        </div> -->
    </div>


</template>

<script setup>

import { components } from "~/components/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("home")
);

console.log(page?.value?.data);

const slices = page?.value?.data.slices;
const skills = page?.value?.data.skills;

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