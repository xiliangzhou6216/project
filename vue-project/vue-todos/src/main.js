// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// Webpack 预编译入口

import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

new Vue({
  el: '#app', //挂载id,这个实例下所有的内容都会在index.html 
  router, // 注入路由配置。
  components: { App },// 注入组件
  template: '<App/>'//配置根模板 即打开页面显示那个组件
})
