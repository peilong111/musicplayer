<template>
  <div id>
    <div class="left">
      <div v-if="musicMes.length>0">
        <div class="music">
          <div class="topImg">
            <div class="im">
              <img :src="musicMes[0].musicImg" />
            </div>
            <div class="bott">
              <p class="num">共找到{{musicMes.length}}首歌</p>
            </div>
          </div>

          <musicDire></musicDire>
        </div>
        <music :mes="musicMes" v-if="musicMes.length>0" :key="timer"></music>
      </div>
      <div class="noMusic" v-if="musicMes.length==0">暂无相关歌曲</div>
    </div>

    <div class="right"></div>
  </div>
</template>

<script>
import musicDire from "../components/musicDire";
import music from "../components/music";

export default {
  props: {},
  data() {
    return {
      musicMes: this.$route.query.searchResult,
      timer: 0
    };
  },
  computed: {},
  created() {
    // console.log(this.musicMes);
  },
  mounted() {},
  watch: {},
  methods: {},
  components: {
    musicDire,
    music
  },
  watch: {
    $route(to, from) {
      //这样就可以获取到变化的参数了，然后执行参数变化后相应的逻辑就行了
      // console.log(this.$route.query.searchResult);
      this.timer = new Date().getTime;
      this.musicMes = this.$route.query.searchResult;
    }
  }
};
</script>

<style scoped>
.music {
  width: 80%;
  margin: auto;
}
.noMusic {
  width: 100%;
  height: 500px;
  line-height: 500px;
  text-align: center;
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

.num {
  height: 50px;
  width: 50%;
  line-height: 50px;
  text-align: center;
}
</style>
