<template>
    <div class="pb-3">
        <div v-if="props.category === 'Passions'" class="list__items-container">
            <div v-for="(item, index) in props.list"
                :key="props.category + index"
            >
                <h1 class="passion-header">{{ item.clubs }}</h1>
                <div class="passion-container__info">
                    <p class="max-w-sm mx-auto px-2">{{ item.description }}</p>
                    <swiper
                        class="passion-swiper"
                        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
                        :slides-per-view="1"
                        :centeredSlides="true"
                        :loop="true"
                        :autoplay="{
                            delay: 2000,
                            disableOnInteraction: false,
                        }"
                    >
                        <swiper-slide v-for="image in item.images" :key="image">
                            <prismic-image :field="image.image" />
                        </swiper-slide>
                    </swiper>
                </div>
            </div>
        </div>
        <div v-else class="list__items-container"
            v-for="(item, index) in props.list"
            :key="props.category + index"
        >
            <div class="list-item-container">
                <prismic-image :field="item.logo" class="logo"/>
                <div class="flex flex-col">
                    <span class="header-text">{{item.name}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.year}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    category: String,
    list: Array,
    logoWidth: String,
}
)
</script>

<style>
.list-item-container {
    display: flex; 
    flex-direction: row;
    padding: 1rem 0.5rem;
}

.passion-container__info {
    display: flex;
    flex-direction: row;
}

.passion-swiper {
    max-width: 400px;
}

.passion-header {
    padding: 0.5rem; 
    font-size: 1.5rem;
    line-height: 2rem; 
    font-weight: 500;
}

.logo {
    margin-right: 0.75rem;
}

.header-text {
    font-size: 1.5rem;
    line-height: 2rem; 
}

.text {
    font-size: 1.25rem;
    line-height: 1.75rem; 
}

@media screen and (max-width: 650px) {
    .list-item-container {
        display: block;
    }

    .passion-container__info {
        display: block;
        flex-direction: column;
    }

    .passion-swiper {
        margin-top: 20px;
        max-width: 24rem; 
    }

    .passion-header {
        max-width: 24rem; 
        margin-right: auto;
        margin-left: auto;
    }

    .logo {
        margin-right: 0;
        margin-bottom: 0.75rem;
    }
}
</style>