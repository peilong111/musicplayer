<template>
  <div class="centerNav">
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="1">推荐</el-menu-item>
      <el-menu-item index="2">华语</el-menu-item>
      <el-menu-item index="3">流行</el-menu-item>
      <el-menu-item index="4">摇滚</el-menu-item>
      <el-menu-item index="5">民谣</el-menu-item>
      <el-menu-item index="6">电子</el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        activeIndex2: '1'
    };
  },
  computed: {},
  created() {},
  mounted() {
      
  },
  watch: {},
  methods: {
      handleSelect(key, keyPath) {
        // console.log(key)
        this.$emit('selectType', key);
      }
  },
  components: {}
};
</script>

<style scoped>
    
</style>
