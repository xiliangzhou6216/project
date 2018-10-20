// The Vue build version to load with the `import` command    这个js文件是主页面配置的主入口。主要是利用es6的模块化引入模块。
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' /* 这里是引入vue文件 */
import App from './App' /* 这里是引入同目录下的App.vue模块 */
import router from './router/routes.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app', /* 定义作用范围就是index.html里的id为app的范围内 */
  router,	 /* 引入路由 */
  template: '<App/>',/* 给Vue实例初始一个App组件作为template 相当于默认组件 */
  components: { App } /* 注册引入的组件App.vue */
})
