<template>
    <div class="footer">
        <span class="copyright">
            © Ryan Kim {{ year }}
        </span>
        <div class="socials">
            <PrismicLink 
                v-for="item in props.socials" 
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
</template>

<script setup>
// Make year dynamic
const year = new Date().getFullYear();


const props = defineProps({
    socials: {
        type: Array,
        required: true
    }
});
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
    cursor: pointer;
    color: rgba(9,9,121,1);
}

.copyright {
    font-size: 1rem;
    color: #828282;
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
}
</style>