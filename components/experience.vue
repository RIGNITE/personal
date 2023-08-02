<template>
    <div>
        <span class="text-4xl">Experience</span>
        <div class="education-container"
            v-for="work in experience" 
            :key="work.name"
        >
            <div class="flex row py-4">
                <div class="flex flex-col">
                    <span class="text-2xl">{{work.name}}</span>
                    <span>{{work.title}}</span>
                    <span>{{work.year}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Experience',
    data() {
        return {
            experience: experience
        }
    },
}

const experience = [
    {
        name: "DIFF",
        year: "May 2023 - August 2023",
        title: "FrontEnd Developer Intern",
    }, 
    {
        name: "Ubisoft",
        year: "May 2022 - August 2022",
        title: "CRM FrontEnd Developer Intern",
    }, 
    {
        name: "HRWize",
        year: "May 2021 - August 2021",
        title: "Software Developer Intern",
    }
]
</script>

<style>

</style>