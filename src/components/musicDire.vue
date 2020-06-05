// 音乐属性描述
<template>
  <div class="musicDire">
    <el-row>
      <el-col :span="8">
        <span>歌名</span>
      </el-col>
      <el-col :span="8">
        <span>时长</span>
      </el-col>
      <el-col :span="8">
        <span>歌手</span>
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

<style>
.musicDire {
  height: 30px;
  line-height: 30px;
  background-color: rgb(168, 158, 158);
  text-align: center;
}
</style>
