<template>
    <div id="">
        <button @click="unLogin">注销</button>
        <button @click="test">测试</button>
        <h1>功能待完善</h1></h1>
    </div>
</template>

<script>
import {setCookie,getCookie,checkCookie,delectCookie} from '../assets/js/cookie'

export default {
    props: {

    },
    data() {
        return {

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
        unLogin(){
            
            console.log("用户注销");
            this.$root.$emit('unLogin')
        },
        test(){
            console.log(getCookie('userId'))
        }
    },
    components: {

    },
};
</script>

<style scoped>
button{
    margin-left: 20px;
    background: cornflowerblue;
}
</style>
