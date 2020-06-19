<template>
  <div id="titleDire">
    <div id="main">
      <span>好友动态</span>
      <button id="mesBtn">发动态</button>
      <button id="videoBtn">发视频</button>
    </div>
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
#titleDire {
  height: 100%;
  width: 100%;
}
#main {
  border-bottom: darkcyan 3px solid;
  position: relative;
  display: flex;
  flex-direction: row;
  /* justify-content: center; 水平居中 */
  align-items: center; /* 垂直居中 */
  height: 100%;
}
button{
    width: 50px;
    background-color: rgb(189, 223, 236);
    border: 1px solid #000;
    border-radius: 5px;
}
span{
    position: absolute;
    left: 10px;
    color: darkturquoise;
}
#mesBtn{
    position: absolute;
    right: 70px;
}
#videoBtn{
    position: absolute;
    right: 10px;
}
</style>
