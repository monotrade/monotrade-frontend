<template>
  <div id="nav">
    <el-menu unique-opened :default-active="$route.path" class="my-menu" router background-color="#324157" text-color="#fff" >
            <template  v-for="(item , index) in $router.options.routes" v-if="item.meta.menuShow">
                <el-submenu :index="item.path" v-if="item.children && item.children.length > 1">
                    <template slot="title">
                        {{item.meta.menuName}}
                    </template>
                    <el-menu-item v-for="(itemChild , index) in item.children" :index="itemChild.path" :key="index" v-if="itemChild.meta.menuShow">
                        <span>{{itemChild.meta.menuName}}</span>
                    </el-menu-item>
                </el-submenu>
                <el-menu-item :index="item.children[0].path" v-else>
                    {{item.children[0].meta.menuName}}
                </el-menu-item>
            </template>
        </el-menu>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    // data() {
    //   const item = {
    //     date: '2016-05-02',
    //     name: '王小虎',
    //     address: '上海市普陀区金沙江路 1518 弄'
    //   };
    //   return {
    //     tableData: Array(20).fill(item)
    //   }
    // }
  };
</script>