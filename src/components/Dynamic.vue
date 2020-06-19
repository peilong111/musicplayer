<template>
  <div id="Dynamic">
    <div id="sharecontain" v-for="item in Dynamic">
      <div class="top">
        <img :src="item.headImg" alt="头像" id="headImg" />
        <p id="name">{{item.name}}</p>
        <p id="time">发表时间：{{item.time}}</p>
      </div>
      <div class="center">
        <div class="text">{{item.shareText}}</div>
      </div>
      <div class="foot">
        <el-row :gutter="10">
          <el-col :xs="8" :sm="15" :md="15" :lg="19" :xl="19">
            <el-badge :value="item.good" :max="99" class="item" :hidden="true">
              <i class="el-icon-thumb" @click="clickgood(item)">点赞({{item.good}})</i>
            </el-badge>
          </el-col>
          <el-col :xs="8" :sm="4" :md="4" :lg="2" :xl="2">
            <el-badge :value="item.send" :max="99" class="item" :hidden="true">
              <i class="el-icon-share" @click="clicksend(item)">转发({{item.send}})</i>
            </el-badge>
          </el-col>
          <el-col :xs="8" :sm="4" :md="4" :lg="2" :xl="2">
            <el-badge :value="item.comment" :max="99" class="item" :hidden="true">
              <i class="el-icon-comment" @click="clickcomment(item)">评论({{item.comment}})</i>
            </el-badge>
          </el-col>
        </el-row>

        <!-- <el-badge :value="item.good" :max="99" class="item" :hidden="true">
          <i class="el-icon-thumb" @click="clickgood(item)">点赞({{item.good}})</i>
        </el-badge>
        <el-badge :value="item.send" :max="99" class="item" :hidden="true">
          <i class="el-icon-share" @click="clicksend(item)">转发({{item.send}})</i>
        </el-badge>
        <el-badge :value="item.comment" :max="99" class="item" :hidden="true">
          <i class="el-icon-comment" @click="clickcomment(item)">评论({{item.comment}})</i>
        </el-badge>-->
      </div>
    </div>

    <!-- <share v-for="item in Dynamic" :list="item"
    @update-good="updategood"
    @update-send="updatesend"
    @update-comment="updatecomment">
    </share>-->
  </div>
</template>

<script>
// import share from "./share";

export default {
  props: {
    mic: {
      type: Array
    }
  },
  data() {
    return {
      Dynamic: this.mic
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    clickgood(item) {
      item.good++;
      // console.log(item.id)
    },
    clicksend(item) {
      item.send++;
      // this.$emit('update-send', this.mesg.send,this.mesg.id);
    },
    clickcomment(item) {
      item.comment++;
      // this.$emit('update-comment', this.mesg.comment,this.mesg.id);
    }
  },
  components: {
    // share
  }
};
</script>

<style scoped>
#Dynamic {
  height: 100%;
  width: 100%;
  background-color: rgb(241, 220, 241);
}

#sharecontain {
  width: 100%;
  border-bottom: black 1px solid;
}
#sharecontain:hover {
  background-color: rgb(212, 234, 252);
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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
#time {
  position: absolute;
  left: 90px;
  bottom: 5px;
  font-size: 8px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
.foot {
  /* width: 30%; */
  /* margin-left: 70%; */
  margin-bottom: 10px;
  font-size: 12px;
  color: rgb(176, 191, 238);
}
.el-badge {
  /* width: 33%; */
  float: right;
  margin: auto;
}
</style>
