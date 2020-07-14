<template>
  <div id="main">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="['1', '3']">
          <el-submenu index="1">
            <template slot="title"><i class="el-icon-message"></i>导航一</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="1-1">选项1</el-menu-item>
              <el-menu-item index="1-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="1-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="1-4">
              <template slot="title">选项4</template>
              <el-menu-item index="1-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title"><i class="el-icon-menu"></i>导航二</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="2-1">选项1</el-menu-item>
              <el-menu-item index="2-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="2-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title"><i class="el-icon-setting"></i>导航三</template>
            <el-menu-item-group>
              <template slot="title">分组一</template>
              <el-menu-item index="3-1">选项1</el-menu-item>
              <el-menu-item index="3-2">选项2</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group title="分组2">
              <el-menu-item index="3-3">选项3</el-menu-item>
            </el-menu-item-group>
            <el-submenu index="3-4">
              <template slot="title">选项4</template>
              <el-menu-item index="3-4-1">选项4-1</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>
        <!-- <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header> -->
        
        <el-main>
          <div background="red">
        
          <el-tabs v-model="activeName">
            <el-tab-pane label="tab1" name="first" :key="'first'">
                    <div style="background: yellow; display: inline">
                         <Test></Test>
                    </div>
            </el-tab-pane>

            <el-tab-pane label="tab2" name="second" :key="'second'">
                    <div style="background: green; display: inline">
                        3、在模板中使用kebab-case 两种都可以
                        <demoPop></demoPop> 
                        <demo-pop></demo-pop>
                    </div>
            </el-tab-pane>

            <el-tab-pane label="tab3" name="third" :key="'third'">
                    <div style="background: yellow; display: inline">
                         <router-view></router-view>
                    </div>
            </el-tab-pane>


        </el-tabs>
        </div>
        </el-main>
      <el-container>
   
     
    
  </el-container>
  </el-container>
  </div>
</template>

<script>
  import Test from '../components/TestElementUI.vue'
  import demoPop from '../components/demoPop.vue'


  //拖拽功能的组件vue-grid-layout
  import VueGridLayout from 'vue-grid-layout';
  

  export default {
    components:{
      Test,
      demoPop,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
    },
    name: 'monotrade-frontend',
    data() {
          const item = {
            date: '2016-05-02',
            name: '王小虎',
            address: '上海市普陀区金沙江路 1518 弄'
          };
          return {
            tableData: Array(20).fill(item),
            activeName: "first",
          }
        }
  }
</script>

<style>
  /* CSS */
</style>
