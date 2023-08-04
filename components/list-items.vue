<template>
    <div>
        <div class="list__items-container"
            v-for="(item, index) in list" 
            :key="index"
        >
            <div class="flex row py-4 px-2">
                <img :src="item.logo" :width="logoWidth" class="mr-3"/>
                <div class="flex flex-col">
                    <span class="text-2xl">{{item.name}}</span>
                    <span>{{item.title}}</span>
                    <span>{{item.year}}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ListItems',
    props: {
        list: {
            type: Array,
            required: true
        },
        logoWidth: {
            type: String,
            required: false
        }
    },
}
</script>

<style>

.list__items-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

</style>