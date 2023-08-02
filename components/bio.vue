<template>
    <div class="bio-container">
        <div class="bio-container__header">
            <span class="text-6xl">
                <span class="font-semibold">Ryan Kim</span> is a student at Concordia University in Montreal Canada
            </span>
            <img src="/headshot.jpg" alt="ryankim" class="bio-headshot">
        </div>
        <div class="bio-container__skills">
            <Skills />
        </div>
    </div>
</template>

<script>

export default {
    name: 'Bio',
}
</script>

<style>
.bio-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.bio-container__header {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding-bottom: 40px;
}

.bio-headshot {
    display: flex;
    border-radius: 50%;
    width: 250px;
    height: 250px;
    margin: auto;
    align-content: center;
}

</style>