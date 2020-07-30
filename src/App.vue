<template>
  <div id="app">
    <div class="headerNav">
      <headNav @selectPage="changePage" @login="login" @unLogin="unLogin" @search="search"></headNav>
    </div>
    <!-- <div class="centerContain">
      <find v-if="pageIndex===1"></find>
      <my v-if="pageIndex===2 && isLogin" :lis="list"></my>
      <friend v-if="pageIndex===3 && isLogin"></friend>
      <message v-if="pageIndex===4 && isLogin"></message>
      <unLogin v-if="pageIndex!=1 && !isLogin"></unLogin>
    </div>-->
    <div class="centerContain">
      <router-view></router-view>
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
import { request } from "./request/http";

export default {
  name: "App",
  created() {
    if (getCookie("userId").length > 0) {
      this.isLogin = true;
      // 个人歌单列表
      request({
        url: "/my/getMyMusicList",
        params: {
          id: getCookie("userId")
        }
      })
        .then(res => {
          if (res.data.datus == 1) {
            this.list = res.data.data;
            sessionStorage.setItem("userMusicList", JSON.stringify(this.list));
          }
        })
        .catch(err => {
          console.log(err);
        });
      // 请求用户信息
      request({
        url: "/getUserMes",
        params: {
          userId: getCookie("userId")
        }
      })
        .then(res => {
          if (res.data.datus == 1) {
            sessionStorage.setItem("userMmes", JSON.stringify(res.data.data));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
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
      musicList: [],
      list: [],
      // 中转站
      Bus: new Vue({})
    };
  },
  methods: {
    changePage(pageIndex) {
      if (pageIndex > 0 && pageIndex < 5) this.pageIndex = pageIndex;
      switch (this.pageIndex) {
        case 1:
          this.$router.replace("/");
          break;
        case 2:
          if (this.isLogin)
            this.$router.replace({ path: "/my", query: { list: this.list } })
            else this.$router.replace("/unLogin")
          break;
        case 3:
          if (this.isLogin) this.$router.replace("/friend")
          else this.$router.replace("/unLogin")
          break;
        case 4:
          if (this.isLogin) this.$router.replace("/message")
          else this.$router.replace("/unLogin")
          break;
        default:
          if (!this.isLogin) this.$router.replace("/");
      }
    },
    login(isLogin) {
      this.isLogin = isLogin;

      request({
        url: "/my/getMyMusicList",
        params: {
          id: getCookie("userId")
        }
      })
        .then(res => {
          if (res.data.datus == 1) {
            this.list = res.data.data;
            sessionStorage.setItem("userMusicList", JSON.stringify(this.list));
            this.changePage(this.pageIndex)
          }
        })
        .catch(err => {
          console.log(err);
        });
    
    },
    unLogin() {
      this.isLogin = false;
    },
    search(result) {
      this.$router.replace({
        path: "/search",
        query: { searchResult: result }
      });
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
.foot:hover {
  opacity: 0.8;
}
</style>
