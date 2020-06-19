// 音乐属性描述
<template>
  <div class="musicDire">
    <el-row :gutter="10">
      <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
        <span>歌名</span>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
        <span>歌手</span>
      </el-col>
      <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
        
      </el-col>


      <!-- <el-col :span="8">
        <span>歌名</span>
      </el-col>
      <el-col :span="8">
        <span>时长</span>
      </el-col>
      <el-col :span="8">
        <span>歌手</span> -->
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {},
  components: {}
};
</script>

<style scoped>
.musicDire {
  height: 40px;
  line-height: 40px;
  background-color: rgb(243, 239, 239);
  /* text-align: center; */
}
</style>
