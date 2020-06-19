<template>
  <div class="carousel">
    <div class="block">
      <el-carousel height="300px">
        <el-carousel-item v-for="(img,index) in carousel" :key="index">
          <img v-bind:src="img" />
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cars: {
      type: Array
    }
  },
  data() {
    return {
      carousel: this.cars
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    
  },
  components: {}
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
img {
  height: 100%;
  width: 100%;
}
</style>
