<template>
	<div id="example-2">
		<input v-model.number="hello" type="number" @click="num" >
		<p>{{hello}}</p>
		<input  :style="objStyle" type="text" v-model="msg" placeholder="请输入信息" v-on:keyup.enter ='show' />
		<button   @click="btnClilk1">点击动态改变数据（渲染） </button>
		<ol>
			<li v-for="(todo,index) in todos"  :key="todo.id" @click="change(index)"   v-bind:class='{active:index===number}'>
				　<span v-html="todo.name "></span>
				<button @click ="remove(index)" v-if="todo.locked" >X</button>
			</li>
		</ol>
		<div :class="{'active':isA,'active1':!isA}">颜色变化</div>
		<div v-show="!isA">占据空间文档流的显示隐藏（简单地基于 CSS 进行切换）</div>
		<br />
		<div v-if = "isA" >partA移除元素的显示隐藏</div>
		<span v-else>partb移除元素的显示隐藏</span>
		<div  :class = "[classB ? activeClass:errorClass,classA,{active:isA},'s1']">
			数组语法绑定的class（三目写法和对象写法）
		</div>
		
		<div v-if="type === 'A'">
			{{msg}}
		  A
		</div>
		<div v-else-if="type === 'B'">
		  B
		</div>
		<div v-else-if="type === 'C'">
		  C
		</div>
		<div v-else>
		  Not A/B/C
		</div>
		<button @click="toggle">点击切换颜色</button>
	</div>
</template>
<!--
	 渲染模块组件时在每个页面内只能有一个根元素。
-->

<script>
//data 必须声明为返回一个初始数据对象的函数，因为组件可能被用来创建多个实例(防止被其他污染)
//通过提供 data 函数，每次创建一个新实例后，我们能够调用 data 函数，从而返回初始数据的一个全新副本数据对象。


// 引入Vue组件
import Vue from 'vue' 

	export default {
		data() {
				return {
					msg: "hello world",
					hello:'',
					objStyle:{
						color: 'red',
    					fontSize: '13px'
					},
					type:'A',
					activeClass: 'activeclass',
  					errorClass: 'text-danger',
					classA:'class1',
					classB:true,
					todos: [{
						name: '学习 JavaScript',
						locked:true
					}, {
						name: '学习 Vue',
						locked:true
					}, {
						name: '整个牛项目',
						locked:false
					}],
					number: 0,
					isA: false

				}
			},
			methods: {
				show() {
					if(this.msg!=''){
							this.todos.push({
							name: this.msg,
							locked: true
						})
						this.msg = '';
					}else{
						alert('输出为空')
					}
				},
				toggle:function() {
					this.isA = !this.isA;
				},
				change(index) {
					this.number= index;  
				},
				num(){
				console.log(typeof(this.hello))	
				}
				,
				btnClilk1(){
					// this.$set() 也可以这么写 
					Vue.set(this.todos,1,{
						name: '动态添加的数据可以重新渲染',
						locked:true
					})

					// JavaScript 的限制，Vue 不能检测以下变动的数组
					// this.todos[0] = {
					// 	name: '动态添加的数据可以重新渲染',
					// 	locked:true
					// }
					
				},
				remove(index){
					this.todos.splice(index,1)
						
				}
			}
	}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only  属性仅将CSS限制为此组件。-->
<style scoped>

	h1,
	h2 {
		font-weight: normal;
	}
	
	ul {
		list-style-type: none;
		padding: 0;
	}
	
	li {
		/*display: inline-block;*/
		width: 30%;
		height: 50px;
		line-height: 50px;
		border: 1px solid #2c3e50;
		margin: auto;
	}
	
	a {
		color: #42b983;
	}
	.active{
		font-size: 20px;
		color: springgreen;
	}
	.active1{
		font-size: 20px;
		color: blueviolet;
	}
	.class1{
		color: red;
	}
</style>