<template>
  <div id="headNav">
    <ul id="navul">
      <li @click="handleSelect(0,$event)" :class="{'currentSelect':index==0}"><a href="#"><img src="../assets/img/logo.jpg" alt=""></a></li>
      <li @click="handleSelect(1,$event)" :class="{'currentSelect':index==1}">发现音乐</li>
      <li @click="handleSelect(2,$event)" :class="{'currentSelect':index==2}">我的音乐</li>
      <li @click="handleSelect(3,$event)" :class="{'currentSelect':index==3}">朋友</li>
      <li id="navSearch">
        <form action="http://192.168.0.102:3000/search">
          <input placeholder="请输入内容" v-model="searchText" @input="myinput" clearable></input>
        </form>
      </li>
      <li id="last">
        <img :src="currentUser.headSrc" alt="头像" v-show="isLogin" @click="handleSelect(4,$event)">
        <!-- <el-button type="text" @click="login" v-show="!isLogin">登录</el-button> -->
        <el-button type="text" @click="dialogFormVisible = true" v-show="!isLogin">登录</el-button>
        <el-button type="text" @click="dialogRegistVisible = true" v-show="!isLogin">注册</el-button>
        <el-dialog title="登录" :visible.sync="dialogFormVisible">
          <form action="">
            <p><label for="">账号:</label><input type="text" placeholder="输入账号" v-model="loginAccount"></input></p>
            <p><label for="">密码:</label><input type="text" placeholder="输入密码" v-model="loginPassword"></input></p>
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="login">确 定</el-button>
          </form>
        </el-dialog>
        <el-dialog title="注册" :visible.sync="dialogRegistVisible">
          <form action="">
            <p><label for="">账号:</label><input type="text" placeholder="输入账号" v-model="registAccount"></p>
            <p><label for="">密码:</label><input type="text" placeholder="输入密码" v-model="registPassword"></p>
            <el-button @click="dialogRegistVisible = false">取 消</el-button>
            <el-button type="primary" @click="regist">确 定</el-button>
          </form>
        </el-dialog>
      </li>
    </ul>
    
  </div>
</template>

<script>
import {request} from '../request/http.js'
import {setCookie,getCookie,checkCookie,delectCookie} from '../assets/js/cookie'

export default {
  props: {},
  data() {
    return {
      currentUser:{},
      index: 0,
      searchText: "",
      isLogin: false,
      dialogFormVisible: false,
      dialogRegistVisible: false,
      loginAccount: '',
      loginPassword: '',
      registAccount: '',
      registPassword: '',
      headSrc: ''
    };
  },
  computed: {},
  created() {
    // 自动登录
      var headSrc = getCookie('userHeadSrc')
      var userId = getCookie('userId')
      if(headSrc.length>0) {
        this.currentUser.headSrc = headSrc
        this.isLogin = true
      }
      // 用户注销登录
      this.$root.$on("unLogin", () => {
      delectCookie('userHeadSrc')
      delectCookie('userId')
      this.currentUser = {}
      this.isLogin = false
      this.$emit('unLogin',true)
    });
  },
  mounted() {},
  watch: {},
  methods: {
    handleSelect(index, e) {
      if (this.index != index) {
        this.index = index;
        this.$emit("selectPage", this.index);
      }
    },
    myinput() {
      console.log(this.searchText);
      request({
        url: '/search',
        params: {
          searchText: this.searchText
        }
      }).then(
        res => {
          console.log(res)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
    login(){
      this.dialogFormVisible = false
      // 网络请求，记录用户信息
      // console.log(this.loginAccount,this.loginPassword)
      var that = this
      request({
        url: '/login',
        params: {
          account: this.loginAccount,
          password: this.loginPassword
        }
      }).then(
        res => {
          if(res.data.datus == 1){
            
            this.$emit('login',true)
            this.isLogin = true
            this.currentUser = res.data.data
            // this.headSrc = res.data.data.headSrc
            setCookie('userHeadSrc',res.data.data.headSrc,7)
            setCookie('userId',res.data.data.id,7)
          }else{
            alert('账号或者密码错误')
          }
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    },
    regist(){
      this.dialogRegistVisible = false
      // 网络请求，验证用户信息
      console.log(this.registAccount,this.registPassword)
      request({
        url: '/regist',
        params: {
          account: this.registAccount,
          password: this.registPassword
        }
      }).then(
        res => {
          this.isLogin = true
          this.currentUser = res.data.data
            // this.headSrc = res.data.data.headSrc
          setCookie('userHeadSrc',res.data.data.headSrc,7)
          setCookie('userId',res.data.data.id,7)
        }
      ).catch(
        err => {
          console.log(err)
        }
      )
    }
  },
  components: {}
};
</script>

<style scoped>

#headNav {
  height: 50px;
  width: 100%;
  background-color: rgb(112, 112, 112);
}
#navul {
  height: 100%;
  width: 100%;
}
li {
  height: 50px;
  line-height: 50px;
  text-align: center;
  width: 10%;
  list-style: none;
  margin: 0;
  float: left;
  /* background-color: rgb(214, 65, 140); */
  overflow: hidden;
}
#navul li:hover{
  background: rgb(206, 205, 205);
}
li img{
  height: 50px;
  width: 50px;
  margin: auto;
}
#navSearch {
  width: 20%;
}
#navSearch form{
  height: 100%;
  width: 100%;
}
#navSearch form input{
  height: 30px;
  width: 100%;
  border: aqua 1px solid;
  border-radius: 8px;
  background-color: azure;
  box-sizing: border-box;
}
#last img{
  height: 50px;
  width: 50px;
}
#last{
  width: 20%;
}
.currentSelect{
  background: rgb(206, 205, 205);
}

</style>
