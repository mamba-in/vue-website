// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'es6-promise/auto'
import Vue from 'vue'
import axios from 'axios'
import  VueResource  from 'vue-resource'
import './assets/css/base.css';
import './assets/css/index.css'
import Home from './Home'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由
import router from "./assets/js/router.js"
//ie兼容
import 'babel-polyfill'


Vue.use(VueResource);
Vue.use(ElementUI);



// Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#home',
  router,  // 注入到根实例中
  render: h => h(Home),
  components: { Home },
  template: '<Home/>'
});

