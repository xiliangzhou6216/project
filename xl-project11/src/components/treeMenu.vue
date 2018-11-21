<template>
	<li>
		<span @click="toggle">
      <i  :class="['icon', (isFolder || isDynamicFolder) ? folderIcon : 'file-text']" ></i>
      {{ model.menuName  }}
    </span>
		<ul v-if="isOpen">
			<treeMenu v-for="item in model.children" :key="item.id" :model="item"></treeMenu>
		</ul>
	</li>
</template>

<script>
// 触发顺序  先执行事件-计算属性-侦听属性
	export default {
		name: 'treeMenu',//这个name的值对应上面子组件
		props: {
			model: Object,
			subMenuData: Object
		},
		data() {
			return {
				folderIcon: 'folder',
				isDynamicFolder: false,
				isOpen: false
			}
		},
		computed: {
			//注意事项   计算属性是基于它们的依赖进行缓存的。计算属性只有在它的相关依赖发生改变时才会重新求值 VS 方法  每当触发重新渲染时，调用方法将总会再次执行函数  
			isFolder() {
				return !!(this.model.children && this.model.children.length)
			}
		},
		watch: {
			//注意事项   监听数据变化时执行异步或开销较大的操作时，这个方式是最有用的（请求时或者操作频繁时）
			isDynamicFolder() {
				this.isOpen = true
				this.folderIcon = 'folder-open'
			}
		},
		methods: { 
			toggle() {
				console.log(this.model)
				console.log(this.subMenuData)
				const menuData = this.model
				const subMenuData = this.subMenuData
				if(subMenuData && (menuData.id === subMenuData.parentId && subMenuData.list) && !menuData.children) {
					menuData.children = subMenuData.list
					this.isDynamicFolder = !!(menuData.children && menuData.children.length)
					this.isOpen = true
					this.folderIcon = 'folder-open'
				}
				if(this.isFolder || this.isDynamicFolder) {
					this.isOpen = !this.isOpen
					this.folderIcon = this.isOpen ? 'folder-open' : 'folder'
				}
			}
		}
	}
</script>

<style scoped>
	ul {
		list-style: none;
	}
	
	i.icon {
		display: inline-block;
		width: 15px;
		height: 15px;
		background-repeat: no-repeat;
		vertical-align: middle;
	}
	
	.icon.folder {
		background-image: url(../assets/folder.png);
	}
	
	.icon.folder-open {
		background-image: url(../assets/folder-open.png);
	}
	
	.icon.file-text {
		background-image: url(../assets/file-text.png);
	}
	
	.tree-menu li {
		line-height: 1.5;
	}
</style>