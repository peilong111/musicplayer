<template>
  <div id="audio" ref="all">
    <!-- 通过this.$refs.audio获取相关属性 -->
    <audio
      :src="music.src"
      ref="audio"
      @ended="playend"
      @canplay="setTime"
      @timeupdate="updateCurrenttime"
    ></audio>
    <div class="left">
      <el-button type="info" icon="el-icon-caret-left" size="mini" @click="last"></el-button>
      <el-button type="info" icon="el-icon-video-play" v-show="!isplay" @click="play" size="medium"></el-button>
      <el-button
        type="info"
        icon="el-icon-video-pause"
        v-show="isplay"
        @click="pause"
        size="medium"
      ></el-button>
      <el-button type="info" icon="el-icon-caret-right" size="mini" @click="next"></el-button>
    </div>
    <div class="right">
      <p>
        <span>{{music.name}}</span>
        <span id="singer">{{music.singer}}</span>
      </p>
      <div class="progre">
        <div id="progreLeft"><el-slider v-model="value" :format-tooltip="formatTooltip" :show-tooltip="false"></el-slider></div>
        <div id="progreRight">{{currenttime}}/{{musicTime}}</div>
      </div>
    </div>
  </div>
</template>

<script>
// 网络请求，根据 window.playMuscId查找音乐

export default {
  props: {
   
  },
  data() {
    return {
      music:{},
      currentIndex:0,
      // musicName: "",
      percentage: 0,
      isplay: false,
      currenttime: "0:0",
      musicTime: "",
      // singer: "",
      value: 0,
      isplayId:0
    };
  },
  computed: {},
  created() {
    this.$root.$on("selectMusic", (music,isPLay) => {
      // console.log("得到选择的音乐：", music);
      if(isPLay){
        this.music = music
        this.isplayId = music.id

        // this.musicSrc = music.src;
        // this.musicName = music.name;
        // this.singer = music.singer;
        this.isplay = true;
        this.$refs.audio.setAttribute("autoplay", "autoplay");
        this.$refs.audio.play();
      }else{
        this.isplay = false;
        this.$refs.audio.pause();
      }
      
    });

    
  },
  mounted() {
    
  },
  watch: {},
  methods: {
    // 播放按钮
    play() {
      this.isplay = true;
      this.$refs.audio.play();
    },
    // 暂停
    pause() {
      this.isplay = false;
      this.$refs.audio.pause();
    },
    // 设置音频总时间
    setTime() {
      let musictime = parseInt(this.$refs.audio.duration);
      this.musicTime = parseInt(musictime / 60) + ":" + (musictime % 60);
    },
    // 更新音频当前时间
    updateCurrenttime() {
      let currentTime = parseInt(this.$refs.audio.currentTime);
      let musictime = parseInt(this.$refs.audio.duration);
      this.currenttime = parseInt(currentTime / 60) + ":" + (currentTime % 60);
      // console.log(currentTime)
      this.value = parseInt((currentTime / musictime) * 100);
    },
    // 音频播放结束
    playend() {
      this.percentage = 100;
      this.isplay = false;
      this.$refs.audio.pause();
    },

    formatTooltip(val) {},
    last(){
      // console.log(this.$store.state.currentPlayIndex)
      let curretnIndex = this.$store.state.currentPlayIndex
      if(curretnIndex==0) return
      let currentMusic = this.$store.state.musicList[curretnIndex-1]
      // console.log(currentMusic)
      this.music = currentMusic
      this.isplayId = currentMusic.id

        // this.musicSrc = music.src;
        // this.musicName = music.name;
        // this.singer = music.singer;
      this.isplay = true;
      this.$refs.audio.setAttribute("autoplay", "autoplay");
      this.$refs.audio.play();
      this.$store.commit('last')
    },
    next(){
      let curretnIndex = this.$store.state.currentPlayIndex
      // console.log(curretnIndex+1)
      if( curretnIndex+1 == this.$store.state.musicList.length) return
      let currentMusic = this.$store.state.musicList[curretnIndex+1]
      // console.log(currentMusic)
      this.music = currentMusic
      this.isplayId = currentMusic.id

        // this.musicSrc = music.src;
        // this.musicName = music.name;
        // this.singer = music.singer;
      this.isplay = true;
      this.$refs.audio.setAttribute("autoplay", "autoplay");
      this.$refs.audio.play();
      this.$store.commit('next')
    }
  },
  components: {},
  beforeDestroy() {
    
  }
};
</script>

<style scoped>
#audio {
  width: 100%;
  background-color: rgb(206, 226, 248);
  opacity: 0.1;
  display: flex;
  justify-content: center; 
  align-items: center; 
}
#audio:hover{
  opacity: 0.8;
}
@media screen and (max-width: 480px){
    #audio{
      flex-direction: column;
    }
}

.left {
  width: 20%;
  margin-left: 10%;
  display: inline-flex;
  justify-content: center; /* 水平居中 */
  align-items: center; /* 垂直居中 */
}
.right {
  width: 60%;
  display: inline-flex;
  justify-content: center; 
  /* align-items: center; */
  flex-direction: column;
}
.progre {
  width: 100%;
  display: inline-flex;
  justify-content: center; 
  align-items: center; /* 垂直居中*/

  flex-direction: row;
}
#progreLeft{
  display: inline-block;
  width: 80%;
}
#progreRight {
  display: inline-block;
  width: 18%;
}
#singer {
  margin-left: 50px;
}
.el-button:hover{
  background: rgb(119, 188, 241);
}
</style>
