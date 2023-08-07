<template>
    <div class="bio-container">
        <div class="bio-container__hero">
            <div class="bio-container__header max-w-7xl mx-auto">
                <div class="flex flex-col justify-center max-w-lg p-5 text-white">
                    <h1 class="font-semibold text-6xl">{{ props.data?.fullname }}</h1>
                    <div class="pt-5">
                        <p class="text-2xl">Student at Concordia University</p>
                        <p class="text-2xl">Montreal Canada</p>
                    </div>
                </div>
                <img src="/headshot.jpg" alt="ryankim" class="bio-headshot">
            </div>
        </div>
        <span class="bio-description max-w-3xl mx-auto text-2xl">
            {{ props.data?.intro[0].text }}
        </span>    
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>

<style>
.bio-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.bio-container__hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: url('./bw_asia.jpg');
    background-size: cover;
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