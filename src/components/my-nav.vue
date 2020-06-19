<template>
  <div class="mynav">
    <div class="all">
      <span>全部歌单</span>
      <button id="new" @click="newList">新建</button>
    </div>
    <ul>
      <li>全部歌单</li>
      <li v-for="(item,index) in list" @click="selectSingList(item,index, $event)">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "mynav",
  props: {
    lis: {
      type: Array
    }
  },
  data() {
    return {
      list: this.lis,
      currentList: -1
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    selectSingList(item, index, e) {
      if (this.currentList != index) {
        this.currentList = index;
        this.$emit("selectList", item);
      }
    },
    newList() {
      this.$prompt("请输入歌单名称", "新建歌单", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[\u4E00-\u9FA5A-Za-z0-9]{1,5}$/,
        inputErrorMessage: "输入1到5个数字。字母或者汉字"
      })
        .then(({ value }) => {
          this.$emit("newList", value);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消输入"
          });
        });
    }
  },
  components: {}
};
</script>

<style scoped>
.mynav {
  width: 90%;
  margin: auto;
}
.mynav ul {
  width: 100%;
}
.all{
  width: 100%;
  /* height: 50px;
  line-height: 50px; */
  border-bottom: cornflowerblue 2px solid;
}

#new {
  background-color: rgb(215, 224, 241);
  height: 30px;
  width: 50px;
  border-radius: 10px;
  border: 0px;
  /*消除默认点击边框效果*/
  outline: none;
}
li {
  height: 30px;
  line-height: 30px;
  width: 100%;
  list-style: none;
  background-color: burlywood;
  margin-top: 2px;
  overflow: hidden;;
}
ul li:nth-of-type(odd){ background:#a0d2df;}/*奇数行 */
ul li:nth-of-type(even){ background:#ddd7c1;}/*偶数行 */
ul li:hover{
  background: rgb(130, 145, 173);
}
</style>
