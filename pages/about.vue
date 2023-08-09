<template>
    <div class="about-container max-w-4xl mx-auto">
        <div
            v-for="(data) in about_me_data"
            :key="data.category"
            @click="toggleList(data)"
            class="about-container__card w-full"
        >
            <div 
                class="about-header flex justify-between w-full py-2 my-3" 
                :class="data.open ? 'about-open' : ''"
            >
                <span class="flex items-center text-4xl px-3">{{data.category}}</span>
                <Icon 
                    class="pr-2" 
                    :name="data.open ? 'ep:arrow-up' : 'ep:arrow-down'" 
                    size="50px"
                />
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
console.log(aboutme_data);

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
    transition: all 0.3s ease;
    background: linear-gradient(to right,black 50%,  #ffffff00 50% ) right;
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