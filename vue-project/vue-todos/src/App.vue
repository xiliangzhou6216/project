<template>
  <div data-id='ssss' id="app1">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <Layouts></Layouts> 
  </div>
</template>

<script>
import Layouts from '@/components/layouts'
export default {
  // template里面最外层必须是只有一个容器
  name: 'App',
  components: {
      Layouts  //新加的
    }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
