<template>
    <div class="footer">
        <span class="copyright">
            © Ryan Kim {{ year }}
        </span>
        <div class="socials">
            <a 
                v-for="item in socials" 
                :key="item.name"
                :href="item.link" 
                target="_blank">
                <Icon 
                    :name="item.icon" 
                    size="30px" 
                    class="socials-item"
                />
            </a>
        </div>
    </div>
</template>

<script setup>
// Make year dynamic
const year = new Date().getFullYear();

const prismic = usePrismic();
const { data: page } = await useAsyncData("[home]", () =>
  prismic.client.getSingle("footer")
);

const socials = page?.value?.data?.socials;

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
    background: linear-gradient(342deg, rgba(30,0,255,1) 0%, rgba(222,163,68,1) 38%, rgba(209,64,71,1) 61%, rgba(9,9,121,1) 100%);
    background-size: 100%;
    background-repeat: repeat;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; 
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