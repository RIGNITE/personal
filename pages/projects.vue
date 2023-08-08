<template>
    <div class="socials-container">
        <!-- <h1>Coming soon</h1> -->
        <div class="circle"></div>
    </div>
</template>

<style>
.socials-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 40px;
}

.circle {
    background: rgb(252,255,60);
    background: radial-gradient(circle, rgba(252,255,60,1) 0%, rgba(171,0,9,1) 46%, rgba(9,9,121,1) 74%, rgba(9,0,77,1) 100%);
    height: 200px;
    width: 200px;
    border-radius: 100px;
}
</style>