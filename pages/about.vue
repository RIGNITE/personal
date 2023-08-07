<template>
    <div class="about-container max-w-4xl mx-auto">
        <div
            v-for="(data) in about_me_data"
            :key="data.category"
            @click="toggleList(data)"
            class="about-container__card w-full"
        >
        <div class="about-header flex justify-between w-full" :class="data.open ? 'about-open' : ''">
            <h1 class="text-4xl p-2">{{data.category}}</h1>
            <Icon class="pr-2" :name="data.open ? 'ep:arrow-up' : 'ep:arrow-down'" size="50px"/>
        </div>

            <div class="list-items" :class="data.open ? '' : 'about-close'">
                <ListItems :category="data.category" :list="data.data" :logoWidth="data.logoWidth"/>
            </div>
        </div>
    </div>
</template>

<script setup>

import {ref} from 'vue'; 
const about_me_data = ref(
[
    {
        category: "Experience",
        open: false,
        logoWidth: "80px",
        data: [
            {
                name: "DIFF",
                year: "May 2023 - August 2023",
                title: "Frontend Developer Intern",
                logo: "/diff.jpg"
            },
            {
                name: "Ubisoft",
                year: "May 2022 - August 2022",
                title: "CRM Frontend Developer Intern",
                logo: "/ubilogo.png"
            },
            {
                name: "HRWize",
                year: "May 2021 - August 2021",
                title: "Software Developer Intern",
                logo: "/hrwize.jpg"
            }
        ]
    }, 
    {
        category: "Education",
        open: false,
        logoWidth: "250px",
        data: [
            {
                name: "Concordia University",
                title: "Software Engineering",
                year: "2019 - Present",
                id: 40175423,
                logo: "/concordialogo.jpeg"
            },
            {
                name: "John Abbott College",
                title: "Sciences",
                year: "2017 - 2019",
                id: 1842895,
                logo: "/johnabbottlogo.jpeg"
            },
        ]
    }, 
    {
        category: "Passions",
        open: false,
        data: [
            {
                title: 'Volleyball',
                images: [
                    'DSC_0106.jpg',
                    'DSC_0135.jpg',
                    'DSC_0313.jpg',
                    'DSC_0348.jpg',
                    'DSC_0953.jpg',
                ],
                clubs: 'Montreal Sunbirds',
                description: `CHANGE LOLOLOL. I've been playing volleyball for the past 9 years, and I have never gotten tired of it. 
                It is a sport that requires a lot of teamwork and communication, which are two skills that I value a lot.
                I have been playing for the Montreal Sunbirds for the past 2 years, and I have been able to travel to many places in Canada and the United States.
                I have also been able to meet many people from different backgrounds, and I have been able to learn a lot from them.`,
                instagram: 'https://www.instagram.com/mtlsunbirds9man/'
            }
        ]
    }
])

const toggleList = (data) => {
    data.open = !data.open;
}

</script>

<style>
.about-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    padding: 40px;
}
.about-container__card {
    max-width: 800px;
}
.about-header{
    cursor: pointer;
    transition: all 0.3s ease; /* Adjust the duration and easing as needed */
    background: linear-gradient(to right,black 50%,  white 50% ) right;
    background-size: 200% 100%;
}
.about-header:hover{
    letter-spacing: 0.1em;
    background-position: left;
    transition:all 0.8s ease;
    color: white;
}

.about-open {
    letter-spacing: 0.1em;
    background-color: black;
    background-position: left;
    transition:all 0.8s ease;
    color: white;
}

.about-close{
    display: none;
}
</style>