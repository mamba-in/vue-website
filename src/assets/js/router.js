import Vue from "vue";
import VueRouter from "vue-router";

// 引入组件
import index from "../../components/index";
import headerbar from "../../components/headerbar.vue";
import banner from "../../components/banner.vue";
import middlebar from "../../components/middlebar.vue";
import mainpart from "../../components/mainpart.vue";
import partner from "../../components/partner.vue";
import footerbar from "../../components/footerbar.vue";

import personalCenter from '../../components/users/personalCenter.vue';
import myrouter from "../../components/myrouter.vue";

// 要告诉 vue 使用 vueRouter
Vue.use(VueRouter);

const routes = [
  {
    path:'/',
    name:'index',
    component:index
  },
  {
      path:"/headerbar",
      component: headerbar
  },
  {
    path:'/banner',
    component:banner
  },
  {
    path:'/middlebar',
    component:middlebar
  },
  {
    path:'/mainpart',
    component:mainpart
  },
  {
    path:'/partner',
    component:partner
  },
  {
    path:'/footerbar',
    component:footerbar
  },
  {
      path:"/myrouter",
      component: myrouter
  },
  {
    path:"/personalCenter",
    component: personalCenter
  },
  // 重定向
  {
    path: '/',
    redirect: '/Home'
  }
];

var router =  new VueRouter({
    routes
});
export default router
