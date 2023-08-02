<template>
    <div>
        <span class="text-4xl">Education</span>
        <div class="education-container"
            v-for="school in education" 
            :key="school.id"
        >
            <div class="flex row py-4">
                <img :src="school.logo" width="250px" height="80px"/>
                <div class="flex flex-col">
                    <span class="text-2xl">{{school.name}}</span>
                    <span>{{school.program}}</span>
                    <span>{{school.year}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
const education = [
    {
        name: "Concordia University",
        program: "Software Engineering",
        year: "2019 - Present",
        id: 40175423,
        logo: "/concordialogo.jpeg"
    },
    {
        name: "John Abbott College",
        program: "Sciences",
        year: "2017 - 2019",
        id: 1842895,
        logo: "/johnabbottlogo.jpeg"
    },
]

export default {
    name: 'Education',
    data() {
        return {
            education: education
        }
    }
}
</script>

<style>

.education-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>