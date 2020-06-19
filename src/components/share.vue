// 暂时没用
<template>
  <div id="sharecontain">
    <div class="top">
      <img :src="mesg.headImg" alt="头像" id="headImg" />
      <p id="name">{{mesg.name}}</p>
      <p id="time">发表时间：{{mesg.shareTime}}</p>
    </div>
    <div class="center">
      <div class="text">{{mesg.shareText}}</div>
    </div>
    <div class="foot">
      <el-badge :value="mesg.good" :max="99" class="item">
        <el-button size="small" @click="clickgood">点赞</el-button>
      </el-badge>
      <el-badge :value="mesg.send" :max="99" class="item">
        <el-button size="small" @click="clicksend">转发</el-button>
      </el-badge>
      <el-badge :value="mesg.comment" :max="99" class="item">
        <el-button size="small" @click="clickcomment">评论</el-button>
      </el-badge>
    </div>
    <div class="comment">

    </div>
  </div>
</template>

<script>
// console.log(list)
export default {
  props: {
    list: {
      type: Object
    }
  },
  data() {
    return {
      mesg: this.list
    };
  },
  computed: {},
  created() {
    
  },
  mounted() {},
  watch: {},
  methods: {
      clickgood(){
          this.mesg.good++
          this.$emit('update-good', this.mesg.good,this.mesg.id);
      },
      clicksend(){
          this.mesg.send++
          this.$emit('update-send', this.mesg.send,this.mesg.id);
      },
      clickcomment(){
          this.mesg.comment++
          this.$emit('update-comment', this.mesg.comment,this.mesg.id);
      },
  },
  components: {}
};
</script>

<style scoped>
#sharecontain {
  width: 100%;
  border-bottom: black 1px solid;
}
.top {
  width: 100%;
  height: 80px;
  position: relative;
}
#headImg {
  position: absolute;
  top: 25px;
  left: 20px;
  height: 50px;
  width: 50px;
}
#name {
  position: absolute;
  left: 90px;
  top: 25px;
  
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis
}
#time {
  position: absolute;
  left: 90px;
  bottom: 5px;
 font-size: 8px;
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis
}
.center {
  width: 100%;
}
.text {
  width: 70%;
  margin: auto;
  word-wrap: break-word;
  margin-top: 20px;
  margin-bottom: 20px;
  /* overflow: scroll; */
}
.foot{
    width: 50%;
    margin-left: 50%;
    margin-bottom: 10px;
}
.el-badge{
    margin-right: 50px;
}
</style>
