<template>
    
    <div class="about-container max-w-4xl mx-auto">
        <div 
            v-for="about in about_me_data" 
            :key="about.title" 
            class="about-container__card w-full"
        >
            <h1 class="about-title text-4xl p-2">{{about.title}}</h1>
            <div class="list-items close">
                <ListItems :list="about.data" :logoWidth="about.logoWidth"/>
            </div>
        </div>
    </div>

    <!-- <div class="about-container max-w-4xl mx-auto">
        <div 
            v-for="data in about_me_data" 
            :key="data.title"
            @click="toggleList(data.open)"
            class="about-container__card w-full"
        >
            <h1 class="about-title text-4xl p-2">{{data.title}}</h1>
                <div class="list-items" :class="data.open ? 'close' : ''">
                <ListItems :list="data.data" :logoWidth="data.logoWidth"/>
            </div>
        </div>
    </div> -->
</template>

<script setup>
const about_me_data = reactive([
    {
        title: "Experience",
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
    }, {
        title: "Education",
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
    }, {
        title: "Passions",
        open: false,
        data: [
            {
                title: 'Volleyball',
                image: '',
                clubs: '',
                description: '',
                instagram: ''
            }
        ]
    }
])


// const toggleList = (open) => {
//     console.log(open);
//     open.value = !open.value;
//     // console.log('hello');
// }

onMounted(() => {
    const aboutCards = document.querySelectorAll('.about-container__card');
    // console.log(aboutCards);
    aboutCards.forEach(card => {
        const listItems = card.querySelector('.list-items');
        card.addEventListener('click', () => {
            listItems.classList.toggle('close');
        })
        // Keep black space open once user clicks header

        // card.addEventListener('mouseleave', () => {
        //     listItems.classList.add('close');
        // })
    })
})

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

.about-title{
    cursor: pointer;
    transition: all 0.3s ease; /* Adjust the duration and easing as needed */    
    background: linear-gradient(to right,black 50%,  white 50% ) right;
    background-size: 200% 100%;
}

.about-title:hover{
    letter-spacing: 0.1em;
    background-position: left;
    transition:all 0.8s ease;
    color: white;
}

.close{
    display: none;
}

</style>