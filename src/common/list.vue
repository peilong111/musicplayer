<template>
  <div id="contain">
    <div class="my-music">
      <div class="topImg">
        <div class="im">
          <img :src="musicMes.musicImg" alt="图片" />
        </div>
        <div class="bott">
          <p class="name">歌单名称：{{musicMes.name}}</p>
          <p class="num">共有{{ music.length }}首歌</p>
        </div>
      </div>
      <div class="musicMes">
        <mymusic :mes="music" :key="timer"></mymusic>
      </div>
    </div>
  </div>
</template>

<script>
import mymusic from "../components/my-music";
import { request } from "../request/http.js";
import { setCookie, getCookie, checkCookie } from "../assets/js/cookie";

export default {
  props: {
    // lis: {
    //   type: Array
    // }
  },
  data() {
    return {
      musicMes: this.$route.query.musicList,
      listed: {},
      lengthed:0,
      music:[],
      timer:0
    };
  },
  computed: {},
  created() {
    let defaultListLength = this.musicMes.musicId.split(",").length;
    this.lengthed = defaultListLength;
    request({
      url: "/my/getMusicList",
      params: {
        musicId: this.musicMes.musicId
      }
    })
      .then(res => {
        if (res.data.datus == 1) {
        //   console.log(res.data.data)
          if (res.data.data.length > 0) {
            this.music = res.data.data;
            this.timer = new Date().getTime()
          }
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {
    
  },
  watch: {},
  methods: {
    
  },
  components: {
    mymusic
  }
};
</script>
  
<style scoped>
#contain{
    width: 70% ;
    position: relative;
}

.my-music {
  width: 75%;
  height: 100%;
  box-sizing: border-box;
  position: absolute;
  right: 0px;
  top: 0px;
}
.topImg {
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: row;
}
.im {
  height: 130px;
  width: 130px;
}
.bott{
  height: 100%;
  width: 60%;
}
image {
  height: 100%;
  width: 100%;
}
.name {
  height: 50px;
  width: 40%;
  line-height: 50px;
  font-size: 20px;
  text-align: center;
  overflow: hidden;
}
.num {
  height: 50px;
  width: 50%;
  line-height: 50px;
  text-align: center;
}

</style>
