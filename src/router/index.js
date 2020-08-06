import Vue from 'vue'
import Router from 'vue-router'

// import find from "../common/find.vue"
// import my from "../common/my"
// import friend from "../common/friend"
// import message from "../common/message"
// import unLogin from "../components/unLogin"
// import error from "../common/error"
// import searchResult from "../common/searchResult"

// 按需加载优化
const find = ()=>import('../common/find.vue')//会动态加载组件
const my = ()=>import('../common/my')
const friend = ()=>import('../common/friend')
const message = ()=>import('../common/message.vue')
const unLogin = ()=>import('../components/unLogin')
const error = ()=>import('../common/error.vue')
const searchResult = ()=>import('../common/searchResult.vue')
const list = ()=>import('../common/list.vue')

Vue.use(Router)
// 解决ElementUI导航栏中的vue-router在3.0版本以上重复点菜单报错问题
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
  return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
    mode: 'history',
    routes:[
        {
            path:'*',
            component:error,
            meta: {allowBack: false} 
         },
        {
            path: '/',
            component: find,
            meta: {allowBack: false} 
        },
        {
            path: '/my',
            component: my,
             meta: {allowBack: false} 
        },
        {
            path: '/friend',
            component: friend,
            meta: {allowBack: false} 
        },
        {
            path: '/message',
            component: message,
            meta: {allowBack: false} 
        },
        {
            path: '/unLogin',
            component: unLogin,
            meta: {allowBack: false} 
        },
        {
            path: '/search',
            component: searchResult
        },
        {
            path: '/list:id',
            component: list,
            meta: {allowBack: false} 
        }
    ]
})