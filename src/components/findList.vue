<template>
  <div id="list">
    <div class="top">推荐歌单</div>
    <el-row :gutter="10">
      <el-col :xs="12" :sm="6" v-for="item in listMes">
        <div class="contain" @click="selectList(item)">
          <div class="containImg">
            <img :src="item.musicImg" alt="歌单图片" />
          </div>
          <div class="containText">
            <p>{{item.name}}</p>
            <p>共有{{item.musicId.length==0?0:item.musicId.split(',').length}}首歌曲</p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { request } from "../request/http";

export default {
  props: {},
  data() {
    return {
      listMes: []
    };
  },
  computed: {},
  created() {
    // 网络请求，请求歌单
    request({
      url: "/find/popularList"
    })
      .then(res => {
        if (res.data.datus == 1) {
          this.listMes = res.data.data;
        }
      })
      .catch(err => {
        console.log(err);
      });
  },
  mounted() {},
  watch: {},
  methods: {
    selectList(item){
      
      // console.log(item.id)
      this.$router.push({
        
        path: '/list'+item.id,
        query:{musicList: item}
      })
    }
  },
  components: {}
};
</script>

<style scoped>
#list {
  width: 80%;
  margin: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  /* border: blue 1px solid; */
}
.top {
  border-bottom: cornflowerblue 2px solid;
  height: 30px;
  line-height: 30px;
  color: rgb(157, 181, 226);
  padding-left: 5px;
}
.el-col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 5px;
}
.contain{
  /* border: 1px solid #adabab; */
}
.containImg {
  width: 130px;
  height: 130px;
}
img {
  height: 100%;
  width: 100%;
}
.containText {
  width: 130px;
  overflow: hidden;
}
p {
  font-size: 14px;
  color: rgb(118, 159, 248);
}
</style>
