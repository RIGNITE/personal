<template>
    <Swiper
        :modules="[SwiperAutoplay]"
        :slides-per-view="4"
        :centered-slides="false"
        :loop="true"
        :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }"
    >
    <SwiperSlide 
    v-for="skill in skills" :key="skill.id"
    class="!flex flex-col items-center justify-between !h-[120px]"
    >
    <img :src="skill.logo" width="80" height="80"/>
        <span class="flex text-xl">{{skill.skill}}</span>
    </SwiperSlide>
  </Swiper>
</template>

<script>
export default {
    name: 'Skills',
    data() {
        return {
            skills: skills
        }
    },
}

const skills = [
    {
        skill: "Java",
        logo: "/java.png"
    },
    {
        skill: "JavaScript",
        logo: "/javascript.png"
    },
    {
        skill: "React",
        logo: "/react.png"
    },
    {
        skill: "Vue",
        logo: "/vue.png"
    },
    {
        skill: "HTML",
        logo: "/html.png"
    },
    {
        skill: "CSS",
        logo: "/csslogo.png"
    },
    {
        skill: "SQL",
        logo: "/sql.png"
    },    
    {
        skill: "C#",
        logo: "/csharp.png"
    },
]

</script>