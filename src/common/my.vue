<template>
  <div class="my">
    <div class="my-nav">
      <mynav @newList="newList" @selectList="selectList" :lis="list" :key="timer0"></mynav>
    </div>
    <div class="my-music">
      <div class="topImg">
        <img src="" alt="歌单背景图片" />
      </div>
      <mymusic :mes="musicMes" :key="timer"></mymusic>
    </div>
  </div>
</template>

<script>
import mynav from "../components/my-nav";
import mymusic from "../components/my-music";
import { request } from "../request/http.js";
import {setCookie,getCookie,checkCookie} from '../assets/js/cookie'


export default {
  props: {
    lis:{
      type:Array
    }
  },
  data() {
    return {
      currentList: 0,
      musicMes: [],
      list: this.lis,
      timer: 0,
      timer0: 0
    };
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  watch: {},
  methods: {
    selectList(item) {
      // 网络请求，根据歌单id数组请求音乐
      if(item.musicId.length==0){
        this.$message({
                message: '该歌单中没有歌曲',
                center: true,
                type: 'warning'
              });
      }else{
        request({
          url: "/my/getMusicList",
          params: {
              musicId: item.musicId
          }
        }).then(res => {
          if (res.data.datus == 1) {
            // console.log(res.data.data)
            if(res.data.data.length>0){
              this.timer = new Date().getTime()
              this.musicMes = res.data.data;
            }
          }
        }).catch(err => {
            console.log(err);
          });
      }
      
    },
    newList(listName){
      // 网络请求，新建歌单
      request({
          url: "/my/newList",
          params: {
              name: listName,
              userId: getCookie('userId')
          }
        }).then(res => {
          if (res.data.datus == 1) {
            // 新建歌单后重新请求歌单
            request({
                url: "/my/getMyMusicList",
                params: {
                    id: getCookie('userId')
                }
              }).then(res => {
                if (res.data.datus == 1) {
                  // console.log("得到数据", res.data.data);
                  this.list = res.data.data;
                  this.timer0 = new Date().getTime()
                  // console.log("用户id",getCookie('userId'))
                }
              }).catch(err => {
                console.log(err);
              });
          }
        }).catch(err => {
            console.log(err);
          });
    }
  },
  components: {
    mynav,
    mymusic
  }
};
</script>
  
<style scoped>
.my {
  position: relative;
}
.my-nav {
  width: 25%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 0px;
  border: rgb(14, 13, 13) 1px solid;
  border-bottom: none;
  box-sizing: border-box;
}
.my-music {
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  border: rgb(228, 8, 8) 1px solid;
  right: 0px;
  top: 0px;
}
.topImg {
  width: 100%;
  height: 200px;
  background-color: aqua;
}
image {
  height: 100%;
  width: 100%;
}
</style>
