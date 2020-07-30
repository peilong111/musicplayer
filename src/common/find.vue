<template>
  <div class="find">
    <!-- v-if:等待请求数据返回后再加载子组件 -->
    <carousel v-bind:cars="carousel" v-if="carousel.length>0"></carousel>
    <findList></findList> 
    
    
    <div class="music">
      <centerNav @selectType="selectType"></centerNav>
      <musicDire></musicDire>
      
    </div>
    <music :mes="musicMes" v-if="musicMes.length>0" :key="timer"></music>
  </div>
</template>

<script>
import carousel from "../components/carousel";
import centerNav from "../components/centerNav";
import musicDire from "../components/musicDire";
import music from "../components/music";
import findList from "../components/findList"
import { request } from "../request/http.js";

export default {
  props: {},
  data() {
    return {
      type: "tuijian",
      musicMes: [],
      carousel: [],
      timer: 0
    };
  },
  computed: {},
  created: function() {
    // 网络请求，请求轮播图
    request({
      url: "/find/carousel"
    })
      .then(res => {
        if (res.data.datus == 1) {
          // console.log("得到数据", res.data.data);
          this.carousel = res.data.data;
          // console.log(this.data)
        }
      })
      .catch(err => {
        console.log(err);
      });
    // 网络请求歌单,请求推荐类型
    request({
      url: "/find/music/type",
      params: {
        type: 1
      }
    })
      .then(res => {
        // console.log(res);
        if (res.data.datus == 1) {
          this.musicMes = res.data.data;
          // console.log(res.data.data);
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  watch: {},
  methods: {
    selectType(index) {
      // 根据类型，网络请求歌单
      switch (parseInt(index)) {
        case 1: 
          this.type = 1;
          break;
        case 2: 
          this.type = 2;
          break;
        case 3:
          this.type = 3;
          break;
        case 4:
          this.type = 4;
          break;
        case 5:
          this.type = 5;
          break;
        case 6:
          this.type = 6;
          break;
      }
      request({
        url: "/find/music/type",
        params: {
          type: this.type
        }
      })
        .then(res => {
          if (res.data.datus == 1) {
            this.timer = new Date().getTime();
            this.musicMes = res.data.data;
            // console.log(this.musicMes)
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  components: {
    carousel,
    centerNav,
    musicDire,
    music,
    findList
  }
};
</script>

<style scoped>
.music{
  width: 80%;
  margin: auto;
}
</style>
