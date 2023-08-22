<template>
    <div class="footer-container">
        <div class="footer__top">
            <p class="footer-blurp">{{ props.data.blurp }}</p>
            <p class="footer-email" @click="copyToClipboard">{{ props.data.email }}</p>
        </div>
        <div class="footer__bottom">
            <span class="copyright">
                © Ryan Kim {{ year }}
            </span>
            <div class="socials">
                <PrismicLink 
                    v-for="item in props.data.socials" 
                    :key="item.name"
                    :field="item.link" 
                    target="_blank">
                    <Icon 
                        :name="item.icon" 
                        size="30px" 
                        class="socials-item"
                    />
                </PrismicLink>
            </div>
        </div>
    </div>
    
</template>

<script setup>
// Make year dynamic
const year = new Date().getFullYear();

const props = defineProps({
    data: {
        type: Object,
        required: true
    }
});

// console.log(props.data

function copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = props.data.email;
    document.body.appendChild(el);
    el.select();
    document.body.removeChild(el);
    alert('Copied to clipboard!');
}

</script>

<style>
.footer-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: #212121;
    color: white;
}

.footer__top {
    height: 150px;
    display: flex;
    max-width: 48rem;
    flex-direction: column;
    justify-content: center;
    padding: 1.5rem 0;
    margin-left: auto;
    margin-right: auto;
}

.footer__bottom {
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
    color: rgb(135, 141, 150);
}

.socials-item:hover {
    cursor: pointer;
    color: #ffffff;
}

.copyright {
    font-size: 1rem;
    color: rgb(135, 141, 150);
}

.footer-blurp {
    margin-bottom: 1rem;
    color: rgb(120, 120, 120);
}

.footer-email {
    font-size: 1.75rem;
    line-height: 1.75rem;
    color: rgb(119, 119, 119);
    transition: all 0.3s ease-in-out;
}

.footer-email:hover {
    cursor: pointer;
    letter-spacing: 0.5rem;
    font-size: 2rem;
    color: white;
    transition: all 0.3s ease-in-out;
}

@media screen and (max-width: 520px) {
    .copyright {
        font-size: 0.75rem;
    }

    .socials-item {
        max-width: 20px;
        max-height: 20px;
        width: 20px;
        height: 20px;
    }

    .footer-email {
        font-size: 1.25rem;
        line-height: 1.25rem;
    }
    
    .footer-email:hover {
        content: none;
    }
}
</style>