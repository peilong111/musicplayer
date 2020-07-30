<template>
  <div class="mynav">
    <div class="all">
      <span>全部歌单</span>
      <button id="new" @click="newList">新建</button>
    </div>
    <ul :key="timer">
      <li>全部歌单</li>
      <li v-for="(item,index) in list" id="listMes">
        <el-row :gutter="10">
          <el-col :xs="15" :sm="18" :md="18" :lg="18" :xl="18">
            <div @click="selectSingList(item,index, $event)">{{item.name}}</div>
          </el-col>
          <el-col :xs="9" :sm="6" :md="6" :lg="6" :xl="6">
            <div @click="deletList(item)">
              <i class="el-icon-delete"></i>
            </div>
          </el-col>
        </el-row>
      </li>
    </ul>
  </div>
</template>

<script>
import { getCookie } from "../assets/js/cookie";
import { request } from "../request/http";

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
      currentList: -1,
      timer: 0
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
    },
    deletList(item) {
      this.$confirm("此操作将永久删除该歌单, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          // 删除歌单
          request({
            url: "/my/deletList",
            params: {
              userId: getCookie("userId"),
              listId: item.id
            }
          })
            .then(res => {
              if (res.data.datus == 1) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
                this.timer = new Date().getTime()
              }
            })
            .catch(err => {
              this.$message({
                type: "info",
                message: "删除失败"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
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
.all {
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
  overflow: hidden;
}
ul li:nth-of-type(odd) {
  background: #a0d2df;
} /*奇数行 */
ul li:nth-of-type(even) {
  background: #ddd7c1;
} /*偶数行 */
ul li:hover {
  background: rgb(130, 145, 173);
  cursor: default;
}
</style>
