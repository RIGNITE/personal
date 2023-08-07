<template>
    <div class="main-container max-w-8xl mx-auto">
        <div>
            <Bio :data="biodata"/>
        </div>
        <div class="main-container__skills">
            <Skills />
        </div>
    </div>
</template>

<script setup>
const prismic = usePrismic();
const { data: page } = useAsyncData("[home]", () =>
  prismic.client.getSingle("home")
);

const biodata = page?.value?.data;



</script>

<style>

.main-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.main-container__bio {}

.main-container__skills {
    padding-bottom: 40px;
}

</style>