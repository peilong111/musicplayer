<template>
  <div id="app">
    <div class="headerNav">
      <headNav @selectPage="changePage" @login="login" @unLogin="unLogin"></headNav>
    </div>
    <div class="centerContain">
      <find v-if="pageIndex===1"></find>
      <my v-if="pageIndex===2 && isLogin"></my>
      <friend v-if="pageIndex===3 && isLogin"></friend>
      <message v-if="pageIndex===4 && isLogin"></message>
      <unLogin v-if="pageIndex!=1 && !isLogin"></unLogin>
    </div>
    <div class="foot">
      <foot></foot>
    </div>
  </div>
</template>

<script>
import headNav from "./components/headNav";
import find from "./common/find";
import my from "./common/my";
import friend from "./common/friend";
import message from "./common/message";
import foot from "./components/foot";
import unLogin from "./components/unLogin";
import Vue from "vue";
import { setCookie, getCookie, checkCookie } from "./assets/js/cookie";

export default {
  name: "App",
  created(){
    console.log('id',getCookie("userId"))
    if(getCookie("userId").length>0) this.isLogin = true
    console.log('login?',this.isLogin)
  },
  components: {
    headNav: headNav,
    find,
    my,
    friend,
    foot,
    message,
    unLogin
  },
  data() {
    return {
      pageIndex: 1,
      isLogin: false,
      // 中转站
      Bus: new Vue({})
    };
  },
  methods: {
    changePage(pageIndex) {
      if (pageIndex > 0 && pageIndex < 5) this.pageIndex = pageIndex;
    },
    login(isLogin){
      this.isLogin = isLogin
    },
    unLogin(){
      this.isLogin = false
    }
  }
};
</script>

<style scoped>
@import "./assets/css/normalize.css";
#app {
  width: 100%;
  background-color: rgb(245, 244, 244);
}
.headerNav {
  width: 100%;
  height: 50px;
}
.centerContain {
  width: 80%;
  margin: auto;
  margin-top: 20px;
}
.foot {
  width: 100%;
  position: fixed;
  bottom: 0;
  opacity: 0.1;
  background-color: rgb(206, 226, 248);
}
.foot:hover{
  opacity: 0.8;
}
</style>
