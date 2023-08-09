<template>
    <div>
        <h1>This is a test</h1>
        <slice-zone :slices="somedata.slices" :components="components"/>
    </div>
</template>
  
<script setup>
import { components } from "~/slices";

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("about")
);

const somedata = page?.value?.data;
console.log(somedata);

</script>

<style>
</style>