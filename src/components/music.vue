<template>
  <div class="music">
    <el-row type="flex" class="row-bg" justify="space-between" v-for="(item,index) in musicMes" :key="(item,index)" @click.native="selectMusic(item.id)">
      <el-col :span="6">
        <span>{{ item.name }}</span>
      </el-col>
      <el-col :span="6">
        <span>{{ item.time }}</span>
      </el-col>
      <el-col :span="6">
        <span>{{ item.singer }}</span>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      musicMes: [
        {
          name: "突然的自我",
          time: "3:45",
          singer: "伍佰",
          id: 111
        },
        {
          name: "突然的自我",
          time: "3:45",
          singer: "伍佰",
          id: 222
        },
        {
          name: "突然的自我",
          time: "3:45",
          singer: "伍佰",
          id: 333
        }
      ]
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
      selectMusic(index){
          console.log(index)
      }
  },
  components: {}
};
</script>

<style>
.el-row{
    background-color: #beb0b0;
    height: 30px;
}
.el-col{
    
    text-align: center;
    line-height: 100%;
}
</style>
