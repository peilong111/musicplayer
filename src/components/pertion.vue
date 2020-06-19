// 朋友页右侧个人信息模块

<template>
    <div id="pertion">
        <div class="top">
            <img src="../assets/img/head.png" alt="" id="headImg">
            <p id="name">微凉</p>
            <div class="btn"><el-button plain @click="my">我的动态</el-button></div>
        </div>
        <div class="friendList">
            <div class="listTop">好友列表</div>
            <ul>
                <li v-for="item in friendList">{{item.name}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fList:{
            type: Array
        }
    },
    data() {
        return {
            friendList: this.fList
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
        my(){
            console.log('我的动态')
        }
    },
    components: {

    },
};
</script>

<style scoped>
#pertion{
    width: 100%;
}
.top{
    width: 80%;
    margin: auto;
    height: 150px;
    position: relative;
}
#headImg{
    width: 50px;
    height: 50px;
    position: absolute;
    top:10px;
    left: 10px;
}
#name{
    position: absolute;
    overflow: hidden;
    top: 10px;
    left: 70px;
}
.btn{
    position: absolute;
    top: 70px;
    left: 10px;
}
.friendList{
    width: 80%;
    margin: auto
}
.listTop{
    height: 30px;
    width: 100%;
    border-bottom: black 2px solid;
}
ul{
    margin-top: 10px;
}
li{
    height: 30px;
    line-height: 30px;
    width: 100%;
    list-style: none;
    background-color: blanchedalmond;
    border-bottom: blueviolet 1px solid;
}
.friendList ul li:hover{
    background-color: rgb(214, 249, 253);
}
ul li:nth-of-type(odd){ background:#ebd4bb;}/*奇数行 */
ul li:nth-of-type(even){ background:#ddadbf;}/*偶数行 */
</style>
