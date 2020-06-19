<template>
  <div id="friend">
    <div class="titleDire">
      <titleDire></titleDire>
    </div>
    <div class="Dynamic">
      <Dynamic :mic="Dynamic" :key="timer"></Dynamic>
    </div>
    <div class="pertion">
      <pertion :fList="friendList"></pertion>
    </div>
  </div>
</template>

<script>
import titleDire from "../components/titleDire";
import Dynamic from "../components/Dynamic";
import pertion from "../components/pertion";
import {request} from "../request/http"
import {setCookie,getCookie,checkCookie} from '../assets/js/cookie'
// 网络请求 请求好友列表，请求好友的动态

export default {
  props: {},
  data() {
    return {
      Dynamic: [],
      timer: 0,
      friendList: [
        {
          id: 1,
          name: "用户已"
        },
        {
          id: 2,
          name: "用户已"
        },
        {
          id: 3,
          name: "用户已"
        }
      ]
    };
  },
  computed: {},
  created() {
    request({
          url: "/friend/getShare",
          params: {
              userId: getCookie('userId')
          }
        }).then(res => {
          if (res.data.datus == 1) {
            console.log("得到数据", res.data.data);
            
            this.Dynamic = res.data.data;
            this.timer = new Date().getTime()
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
