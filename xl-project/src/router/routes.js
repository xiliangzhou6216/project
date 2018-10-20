import Vue from 'vue'  /* 引用vue文件 */
import Router from 'vue-router'  /* 引用vue路由模块，并赋值给变量Router */
import Hello from '@/components/Hello' /* 英文Hello.vue模版，并赋值给变量Hello,这里是“@”相当于“../” */
import mall_list from '@/components/mall_list'
import mall_list2 from '@/components/mall_list2'

Vue.use(Router) /* 使用路由 */

// routes这里一定这个，千万要注意


export default new Router({
	mode : 'history',
  routes: [   /* 进行路由配置，规定“/”引入到Hello组件 */  
    {
      path: '/Hello',
      name: 'Hello',
      component: Hello /* 注册Hello组件 */
    }, {
      path: '/mall_list',
      name: 'mall_list',
      component: mall_list /* 注册mall_list组件 */
    },
    {
      path: '/mall_list2',
      name: 'mall_list2',
      component: mall_list2 /* 注册mall_list组件 */
    }
  ]
})

/*如果需要增加组件那就在components文件下定义xx.vue文件并编写代码即可，如果需要配置路由就要进行在index.js进行路由“路径”配置，
还需要点击跳转就要用到<router-link></router-link>标签了*/
