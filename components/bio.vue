<template>
    <div class="bio-container">
        <div class="bio-container__hero">
            <div class="bio-container__header max-w-7xl mx-auto">
                <span class="text-white">
                    <h1 class="font-semibold text-5xl">Ryan Kim</h1>
                    <p>Student at Concordia University</p>
                    <p>Montreal Canada</p>
                    
                </span>
                <img src="/headshot.jpg" alt="ryankim" class="bio-headshot">
            </div>
        </div>
        <span class="bio-description max-w-7xl mx-auto text-2xl">
            My name is Ryan Kim and I was born and raised in Montreal, Canada. 
            I am currently a fourth-year student at Concordia University studying Software Engineering.
            I am passionate about technology and its ability to improve the lives of people around the world.
            I am currently looking for a full-time position as a Software Engineer.

        </span>    
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

.bio-container__hero {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-image: url('../public/bw_asia.jpg');
    background-size: cover;
}

.bio-container__header {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 40px;
    opacity: 1 !important;
}

.bio-headshot {
    display: flex;
    border-radius: 50%;
    min-width: 250px;
    min-height: 250px;
    margin: auto;
    align-content: center;
}

.bio-description {
    padding: 40px;
}

</style>