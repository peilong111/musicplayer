<template>
  <div class="music">
    <ul>
      <li v-for="(item,index) in music">
        <!-- gutter间隔 -->
        <el-row
          class="row-bg"
          justify="space-between"
          
          :gutter="10"
        >
          <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
            <span>{{ index }}&nbsp;</span><span>{{ item.name }}</span>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
            <span>{{ item.singer }}</span>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
            <i class="el-icon-video-pause" @click="selectMusic(item)" v-show="(item.id===playId)"/>
            <i class="el-icon-video-play" @click="selectMusic(item)" v-show="!isPLay||!(item.id===playId)"/>
            <i class="el-icon-download" />
            <i class="el-icon-plus" />
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
// import {musicSrc} from '../assets/js/global_variable'
// console.log('11',musicSrc)
export default {
  props: {
    mes: {
      type: Array
    }
  },
  data() {
    return {
      music: this.mes,
      playId: 9999999,
      isPLay: false
    };
  },
  computed: {},
  created() {
     this.$root.$on("pausePlay", (isplay,isplayId) => {
      // console.log("得到选择的音乐：", music);
      if(isplay){
        // this.playId = 999999
        // this.isPLay = true
        // this.timer2 = new Date().getTime()
      }else{
        console.log(isplayId)
      //  this.playId = isplayId
      //  this.isPLay = true
      //  this.timer1 = new Date().getTime()
      }
      
    });
  },
  mounted() {},
  watch: {},
  methods: {
    selectMusic(music) {
      if(music.id == this.playId) {
        this.isPLay = false
        this.playId = 9999999
        this.$root.$emit("selectMusic", music,this.isPLay);
      }
      else{
        this.isPLay = true
        this.playId = music.id
        this.$root.$emit("selectMusic", music,this.isPLay);
      }
    }
  },
  components: {}
};
</script>

<style scoped>
.music{
  padding-bottom: 70px;
}
.el-row {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  font-size: 14px;
}

li{
  list-style: none;
}

ul li:nth-of-type(odd){ background:#d6d8d8;}/*奇数行 */
ul li:nth-of-type(even){ background:#f0f0ee;}/*偶数行 */
.el-row:hover{
  background: rgb(215, 244, 248);
}
span{
  overflow: hidden;
}

i{
  /* background: rgb(200, 200, 202); */
  height: 90%;
  width: 30%;
}

</style>
