<template>
    <div class="bio-container">
        <div class="bio-container__hero">
            <div class="bio-container__header max-w-7xl mx-auto">
                <div class="flex flex-col justify-center max-w-lg p-5 text-white">
                    <h1 class="font-semibold text-6xl">{{ props.data?.fullname }}</h1>
                    <div class="pt-5">
                        <p class="text-2xl">{{ props.data?.occupation }}</p>
                        <p class="text-2xl">{{ props.data?.location }}</p>
                    </div>
                </div>
                <PrismicImage :field="props.data?.headshot" class="bio-headshot"/>
            </div>
        </div>
        <span class="bio-description max-w-3xl mx-auto text-xl text-gray-600">
            {{ props.data?.intro[0].text }}
        </span>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>

<style scoped>
.bio-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.bio-container__hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-size: cover;
    background: rgb(30,0,255);
    background: linear-gradient(342deg, rgb(30, 0, 255) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
}

.bio-container__header {
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 40px;
    opacity: 1 !important;
}

.bio-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.bio-headshot {
    display: flex;
    border-radius: 50%;
    min-width: 250px;
    min-height: 250px;
    max-width: 300px;
    max-height: 300px;
    margin: auto;
    align-content: center;
}

.bio-description {
    padding: 40px;
}

</style>