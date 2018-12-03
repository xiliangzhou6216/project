import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import Layouts from '@/components/layouts'

Vue.use(Router) //全局注册Router组件，它会绑定到Vue实例里面。

export default new Router({
  routes: [
    {
      path: '/',//访问路径
      name: 'Layouts',// 路径名
      component: Layouts//访问的组件,即访问‘/’,它会加载 Layouts 组件所有的内容。
    }
  ]
})
