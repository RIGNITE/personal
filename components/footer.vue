<template>
    <div class="footer">
        <span class="">
            © Ryan Kim 2023
        </span>
        <div class="socials">
            <a 
                v-for="link in links" 
                :key="link.name"
                :href="link.link" 
                target="_blank">
                <Icon :name="link.icon" size="30px" class="socials-item"/>
            </a>
        </div>
    </div>
</template>

<script setup>
const links = [
    {
        name: 'Instagram',
        link: 'https://www.instagram.com/k.im_ryan/',
        icon: 'mdi:instagram'
    },
    {
        name: 'LinkedIn',
        link: 'https://www.linkedin.com/in/ryan-kim-26445414b/',
        icon: 'mdi:linkedin'
    },
    {
        name: 'Github',
        link: 'https://github.com/RIGNITE',
        icon: 'mdi:github'
    },
    {
        name: 'Facebook',
        link: 'https://www.facebook.com/ryan.5.kim/',
        icon: 'mdi:facebook'
    }
]
</script>

<style>
.footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    width: 100%;
    height: 50px;
    padding: 0 20px;
}

.socials {
    display: flex;
    justify-content: center;
    align-items: center;
}

.socials-item {
    margin: 0 10px;
    color: #828282;
}

.socials-item:hover {
    color: #000000;
}
</style>