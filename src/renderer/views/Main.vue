<template>
  <div id="main">
    <el-container style="height: 500px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
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
          <div>
        
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
  import Nav from './Nav.vue'
  import Test from '../components/TestElementUI.vue'
  import demoPop from '../components/demoPop.vue'


  //拖拽功能的组件vue-grid-layout
  import VueGridLayout from 'vue-grid-layout';
  

  export default {
    components:{
      Nav,
      Test,
      demoPop,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
    },
    name: 'monotrade-frontend',
    data() {
      return {
        activeName : "first",
        data: [{
          label: '组件测试',
          children: [{
            label: '交易组件',
            children: [{
              label: '现货买入',
              component: require('@/components/trade/stockBuy').default,
            }]
          }]
        }, {
          label: '一级 2',
          children: [{
            label: '二级 2-1',
            children: [{
              label: '三级 2-1-1'
            }]
          }, {
            label: '二级 2-2',
            children: [{
              label: '三级 2-2-1'
            }]
          }]
        }, {
          label: '一级 3',
          children: [{
            label: '二级 3-1',
            children: [{
              label: '三级 3-1-1'
            }]
          }, {
            label: '二级 3-2',
            children: [{
              label: '三级 3-2-1'
            }]
          }]
        }],
        defaultProps: {
          children: 'children',
          label: 'label'
        }
      };
    },
    methods: {
      handleNodeClick(data) {
        console.log(data);
      }
    },

        
  }
</script>

<style>
  /* CSS */
</style>
