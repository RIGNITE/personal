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
        class="max-w-3xl mx-auto"
    >
    <SwiperSlide 
        v-for="skill in skills" :key="skill.id"
        class="!flex flex-col items-center justify-between !h-[120px]"
    >
        <Icon :name="skill.logo" size="80px"/>
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
        logo: "logos:java"
    },
    {
        skill: "JavaScript",
        logo: "logos:javascript"
    },
    {
        skill: "React",
        logo: "logos:react"
    },
    {
        skill: "Vue",
        logo: "logos:vue"
    },
    {
        skill: "HTML",
        logo: "logos:html-5"
    },
    {
        skill: "CSS",
        logo: "logos:css-3"
    },
    {
        skill: "SQL",
        logo: "logos:mysql" //logos:mysql
    },    
    {
        skill: "C#",
        logo: "logos:c-sharp"
    },
]

</script>