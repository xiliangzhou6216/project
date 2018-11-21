<template>
  <div class="tree-menu">
    <ul>
      <myTree v-for="menuItem in theModel" :model="menuItem" :subMenuData="subMenuData" :key="menuItem.id" ></myTree>
    </ul>
  </div>
</template>

<!--  渲染用v-for时,有相同父元素的子元素必须有独特的 key,重复的 key 会造成渲染错误。-->

<script>
const myData = [
  {
    id: "1",
    menuName: "基础管理",
    menuCode: "10"
  },
  {
    id: "2",
    menuName: "商品管理",
    menuCode: "20"
  },
  {
    id: "3",
    menuName: "订单管理",
    menuCode: "30",
    children: [
      {
        menuName: "订单列表",
        menuCode: "31"
      },
      {
        menuName: "退货列表",
        menuCode: "32",
        children: []
      }
    ]
  },
  {
    id: "4",
    menuName: "商家管理",
    menuCode: "",
    children: []
  }
];
const subMenuData = {
  parentId: "1",
  list: [
    {
      menuName: "用户管理",
      menuCode: "11"
    },
    {
      menuName: "角色管理",
      menuCode: "12",
      children: [
        {
          menuName: "管理员",
          menuCode: "121"
        },
        {
          menuName: "CEO",
          menuCode: "122"
        },
        {
          menuName: "CFO",
          menuCode: "123"
        },
        {
          menuName: "COO",
          menuCode: "124"
        },
        {
          menuName: "普通人",
          menuCode: "124"
        }
      ]
    },
    {
      menuName: "权限管理",
      menuCode: "13"
    }
  ]
};
import myTree from "@/components/treeMenu";

export default {
  components: {
    myTree: myTree
  },
  data() {
    return {
      theModel: myData,
      subMenuData:subMenuData
    };
  }
};
</script>