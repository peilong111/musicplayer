<template>
  <div id="friend">
    <div class="titleDire">
      <titleDire></titleDire>
    </div>
    <div class="Dynamic">
      <Dynamic :mic="Dynamic" :key="timer"></Dynamic>
    </div>
    <div class="pertion">
      <pertion :fList="friendList" :key="timer1"></pertion>
    </div>
  </div>
</template>

<script>
import titleDire from "../components/titleDire";
import Dynamic from "../components/Dynamic";
import pertion from "../components/pertion";
import {request} from "../request/http"
import {setCookie,getCookie,checkCookie} from '../assets/js/cookie'

export default {
  props: {},
  data() {
    return {
      Dynamic: [],
      timer: 0,
      timer1: 0,
      friendList: []
    };
  },
  computed: {},
  created() {
    // 获取分享信息
    request({
          url: "/friend/getShare",
          params: {
              userId: getCookie('userId')
          }
        }).then(res => {
          if (res.data.datus == 1) {
            // console.log("得到数据", res.data.data);
            
            this.Dynamic = res.data.data;
            this.timer = new Date().getTime()
            // console.log("用户id",getCookie('userId'))
          }
        }).catch(err => {
            console.log(err);
          });
    //获取好友列表 
    request({
          url: "/friend/getFriendList",
          params: {
              userId: getCookie('userId')
          }
        }).then(res => {
          if (res.data.datus == 1) {
            
            this.friendList = res.data.data;
            this.timer1 = new Date().getTime()
            // console.log("用户id",getCookie('userId'))
          }
        }).catch(err => {
            console.log(err);
          });
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {
    titleDire,
    Dynamic,
    pertion
  }
};
</script>

<style scoped>
#friend {
  position: relative;
}
.titleDire {
  width: 70%;
  height: 50px;
}
.Dynamic {
  width: 70%;
  padding-bottom: 70px;
}
.pertion {
  width: 30%;
  position: absolute;
  right: 0px;
  top: 0px;
}
</style>
