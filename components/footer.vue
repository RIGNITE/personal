<template>
    <div class="footer">
        <span class="">
            © Ryan Kim 2023
        </span>
        <div class="socials">
            <a href="https://www.instagram.com/k.im_ryan/" target="_blank"><Icon name="mdi:instagram" size="30px" class="socials-item"/></a>
            <a href="https://www.linkedin.com/in/ryan-kim-26445414b/"><Icon name="mdi:linkedin" size="30px" class="socials-item"/></a>
            <a href="https://github.com/RIGNITE"><Icon name="mdi:github" size="30px" class="socials-item"/></a>
            <a href="https://www.facebook.com/ryan.5.kim/"><Icon name="mdi:facebook" size="30px" class="socials-item"/></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Footer'
}
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