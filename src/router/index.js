import Vue from 'vue'
import Router from 'vue-router'

import find from "../common/find.vue"
import my from "../common/my"
import friend from "../common/friend"
import message from "../common/message"
import unLogin from "../components/unLogin"
import error from "../common/error"
import searchResult from "../common/searchResult"

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
            name: 'mes',
            component: find,
            meta: {allowBack: false} 
        },
        {
            path: '/my',
            name: 'mes',
            component: my,
             meta: {allowBack: false} 
        },
        {
            path: '/friend',
            name: 'mes',
            component: friend,
            meta: {allowBack: false} 
        },
        {
            path: '/message',
            name: 'mes',
            component: message,
            meta: {allowBack: false} 
        },
        {
            path: '/unLogin',
            name: 'mes',
            component: unLogin,
            meta: {allowBack: false} 
        },
        {
            path: '/search',
            name: 'mes',
            component: searchResult
        }
    ]
})