<template>
    <div class="py-3">
        <div v-if="props.category === 'Passions'" class="flex row py-4 px-2">
            <div v-for="(item, index) in props.list"
                :key="props.category + index"
            >
                <h1 class="text-2xl font-medium p-2">{{ item.clubs}}</h1>
                <div class="flex row">
                    <p class="max-w-sm px-2">{{ item.description }}</p>
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
            <div class="flex row py-4 px-2">
                <prismic-image :field="item.logo" class="mr-3"/>
                <div class="flex flex-col">
                    <span class="text-2xl">{{item.name}}</span>
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
.passion-swiper {
    max-width: 400px;
}
</style>