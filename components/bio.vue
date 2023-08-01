<template>
    <div class="bio-container">
        <div class="bio-container__header">
            <span class="text-6xl"><span class="font-semibold">Ryan Kim</span> is a student at Concordia University in Montreal Canada.</span>
            <span>IMAGE HERE</span>
        </div>
        <div class="bio-container__skills">
            <Skills />
        </div>
        <div class="bio-container__eduction">
            <Education />
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
    padding: 40px;
}

.bio-container__header {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding-bottom: 40px;
}

.bio-container__eduction {
    padding: 20px 0;
}

</style>