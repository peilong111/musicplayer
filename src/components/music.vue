<template>
  <div class="music">
    <ul>
      <li v-for="(item,index) in music">
        <!-- gutter间隔 -->
        <el-row class="row-bg" justify="space-between" :gutter="10">
          <el-col :xs="8" :sm="12" :md="12" :lg="12" :xl="12">
            <span>{{ index }}&nbsp;</span>
            <span>{{ item.name }}</span>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
            <span>{{ item.singer }}</span>
          </el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="6" :xl="6">
            <i class="el-icon-video-pause" @click="selectMusic(item)" v-show="(item.id===playId)" />
            <i
              class="el-icon-video-play"
              @click="selectMusic(item)"
              v-show="!isPLay||!(item.id===playId)"
            />
            <i class="el-icon-download" @click="save(item)" />
            <i class="el-icon-plus" @click="add(item)" />
          </el-col>
        </el-row>
      </li>
    </ul>
    <el-dialog title="选择歌单" :visible.sync="dialogTableVisible">
      <div v-if="listMes==null">
        <p>请先登录</p>
      </div>

      <div v-if="listMes!=null&&listMes.lenght==0">
        <p>请先创建歌单</p>
      </div>
      <ul class="musicList">
        <li v-for="item in listMes" @click="addMusic(item)">{{item.name}}</li>
      </ul>
    </el-dialog>
  </div>
</template>

<script>
import { request } from "../request/http";

export default {
  props: {
    mes: {
      type: Array
    }
  },
  data() {
    return {
      music: this.mes,
      playId: 9999999,
      isPLay: false,
      dialogTableVisible: false,
      listMes: [],
      addMusicId: 0
    };
  },
  computed: {},
  created() {},
  mounted() {},
  watch: {},
  methods: {
    selectMusic(music) {
      if (music.id == this.playId) {
        this.isPLay = false;
        this.playId = 9999999;
        this.$root.$emit("selectMusic", music, this.isPLay);
      } else {
        this.isPLay = true;
        this.playId = music.id;
        this.$root.$emit("selectMusic", music, this.isPLay);
      }
    },
    add(item) {
      this.listMes = JSON.parse(sessionStorage.getItem("userMusicList"));
      // console.log(item.id)
      this.addMusicId = item.id;
      this.dialogTableVisible = true;
    },
    addMusic(item) {
      request({
        url: "/addMusicToList",
        params: {
          musicId: this.addMusicId,
          listId: item.id
        }
      })
        .then(res => {
          if (res.data.datus == 1) {
            this.$message({
              showClose: true,
              message: "恭喜你，添加成功",
              type: "success"
            });
            this.$root.$emit("addMusic");
          }
        })
        .catch(err => {
          this.$message({
            showClose: true,
            message: "出错了哦，添加失败",
            type: "error"
          });
        });
      this.dialogTableVisible = false;
    },
    save(item) {
      
    }
  
      // downloadMp3 = filePath => {
      //   fetch(filePath)
      //     .then(res => res.blob())
      //     .then(blob => {
      //       const a = document.createElement("a");
      //       document.body.appendChild(a);
      //       a.style.display = "none";
      //       // 使用获取到的blob对象创建的url
      //       const url = window.URL.createObjectURL(blob);
      //       a.href = url;
      //       // 指定下载的文件名
      //       a.download = "语音音频.mp3";
      //       a.click();
      //       document.body.removeChild(a);
      //       // 移除blob对象的url
      //       window.URL.revokeObjectURL(url);
      //     });
      // };
    
  },
  components: {}
};
</script>

<style scoped>
.music {
  padding-bottom: 70px;
}
.el-row {
  height: 40px;
  line-height: 40px;
  overflow: hidden;
  font-size: 14px;
}

li {
  list-style: none;
}

ul li:nth-of-type(odd) {
  background: #d6d8d8;
} /*奇数行 */
ul li:nth-of-type(even) {
  background: #f0f0ee;
} /*偶数行 */
.musicList li {
  height: 30px;
  line-height: 30px;
  text-align: center;
}
.musicList li:hover {
  background: rgb(215, 244, 248);
}

.el-row:hover {
  background: rgb(215, 244, 248);
  cursor: pointer;
}
span {
  overflow: hidden;
}

i {
  /* background: rgb(200, 200, 202); */
  height: 90%;
  width: 30%;
}
</style>
