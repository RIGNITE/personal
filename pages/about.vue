<template>
    <div class="about-container max-w-4xl mx-auto">
        <div
            v-for="(data) in about_me_data"
            :key="data.category"
            tabindex="0"
            @keyup.enter="toggleList(data)" 
            @click="toggleList(data)"
            class="about-container__card w-full"
        >
            <div 
                class="text-gradient__spacing underline-gradient" 
                :class="data.open ? 'about-open' : 'isclose'"
            >
                <div class="flex justify-between w-full py-2 my-3">
                    <span class="about-title flex items-center px-3">{{data.category}}</span>
                    <Icon 
                        class="icon__arrow pr-2" 
                        :name="data.open ? 'ep:arrow-up' : 'ep:arrow-down'" 
                        size="50px"
                    />
                </div>
            </div>
            <div 
                class="list-items" 
                :class="data.open ? '' : 'about-close'"
            >
                <ListItems 
                    :category="data.category" 
                    :list="data.data" 
                    :logoWidth="data.logoWidth"
                />
            </div>
        </div>
    </div>
</template>

<script setup>

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("about")
);

const aboutme_data = page?.value?.data;
// console.log(aboutme_data);

const experience = aboutme_data?.experience;
const education = aboutme_data?.education;
const passion = aboutme_data?.passion;

passion.forEach(item => {
    if(item.title.toLowerCase() == "volleyball") {
        item.images = aboutme_data?.volleyball;
    }
});


import {ref} from 'vue'; 
const about_me_data = ref(
[
    {
        category: "Experience",
        open: false,
        data: experience
    }, 
    {
        category: "Education",
        open: false,
        data: education
    }, 
    {
        category: "Passions",
        open: false,
        data: passion
    }
])

const toggleList = (data) => {
    data.open = !data.open;
}
</script>

<style>
@import "../assets/main.css";

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

.about-title {
    font-size: 2.25rem;
    line-height: 2.5rem; 
}

.about-open {
    background: rgb(30,0,255);
    background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
    letter-spacing: 0.5em;
    transition: all 0.3 ease;
}

.about-open::after {
    content: '';
    display: block;
    height: 2px;
    background: rgb(30,0,255);
    background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
    transition: width .3s;
    transition: all 0.3 ease;
    width: 100%;
}

.about-close{
    display: none;
    color: black;
    font-size: 2.25rem;
    line-height: 2.5rem; 
}

.icon__arrow {
    max-width: 50px;
    max-height: 50px;
}

@media screen and (max-width: 520px)  {    
    .about-title {
        font-size: 1.5rem;
        line-height: 1.75rem; 
    }
    .icon__arrow {
        max-width: 30px;
        max-height: 30px;
    }
    
}

@media screen and (max-width: 900px)  {

    .about-open {
        letter-spacing: 0.5em;
        transition: all 0.3 ease;
    }

    .about-header::after {
        content: none;
    }

    .about-open::after {
        content: none;
    }

    .isclose .about-title:hover {
        background: transparent;
        letter-spacing: 0;
        -webkit-background-clip: text;
        -webkit-text-fill-color: black;
    }

}
</style>