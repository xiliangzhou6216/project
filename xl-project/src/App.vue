<template>
	<div id="app">
		<!--<img src="./assets/logo.png">-->
		<router-link class="nav-item" to="Hello">首页</router-link>
		<!--  这里是用来展示路由页面内容的，如果想用跳转就用<router-link to='xxx'></router-link> -->
		<router-link class="nav-item" to="mall_list">页面一11</router-link>
		<router-link class="nav-item" to="mall_list2">页面二</router-link>
		<footers v-for ="(value, key) in object "   :key="key.id" ></footers>
	
		<!--嵌套路由-->
		<router-view></router-view>
		<!--嵌套路由-->
	</div>
</template>

<script>
//引入组件
import footers from "@/components/footers";
//注册组件
export default {
  components: {
    footers: footers
  },
  data() {
    return {
      object: {
        firstName: "John",
        lastName: "Doe",
        age: 30
      }
    }
	
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>