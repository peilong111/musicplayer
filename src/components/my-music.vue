<template>
    <div id="my-music">
        <musicDire></musicDire>
        <music :mes="music"></music>
    </div>
</template>

<script>
import musicDire from './musicDire'
import music from './music'

export default {
    props: {
        mes:{
            type:Array
        }
    },
    data() {
        return {
            music: this.mes
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    watch: {

    },
    methods: {

    },
    components: {
        musicDire,
        music
    },
};
</script>

<style scoped>

</style>
