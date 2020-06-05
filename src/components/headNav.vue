<template>
  <div id="headNav">
    <ul id="navul">
      <li @click="handleSelect(0,$event)">logo</li>
      <li @click="handleSelect(1,$event)">发现音乐</li>
      <li @click="handleSelect(2,$event)">我的音乐</li>
      <li @click="handleSelect(3,$event)">朋友</li>
      <li id="navSearch" @click="handleSelect(4,$event)">
        <form action>
          <el-input placeholder="请输入内容" v-model="searchText" @input="myinput" clearable></el-input>
        </form>
      </li>
      <li @click="handleSelect(5,$event)">头像</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      index: 0,
      searchText: ''
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    handleSelect(index, e) {
      if (this.index != index) {
        this.index = index;
      }
    },
    myinput(){
      console.log(this.searchText)
    }
  },
  components: {}
};
</script>

<style>
#headNav {
  height: 50px;
  width: 100%;
  background-color: hotpink;
}
#navul {
  height: 50px;
  width: 100%;
}
li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 100px;
  list-style: none;
  margin: 0;
  display: inline-block;
  /* float: left; */
  background-color: hotpink;
}
#navSearch{
  width: 200px;
}

</style>
