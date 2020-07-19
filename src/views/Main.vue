<template>
    <el-container style="height:100%; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <Nav v-on:openComponent="openComponent"></Nav>
      </el-aside>        
      <el-main>
        <el-tabs type="border-card" v-model="editableTabsValue"
          editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="item.name"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"            
          >
           <component v-bind:is="item.component" :id="index"></component>
          
          </el-tab-pane>           
      </el-tabs>
    </el-main>      
  </el-container>
</template>

<script>
  import Nav from './Nav.vue'
  import Test from '../components/TestElementUI.vue'
  import demoPop from '../components/demoPop.vue'
  import orderBook from '../components/market/orderBook.vue'

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
        editableTabsValue: '1',
        editableTabs: [
          {
            title: 'Tab 1',
            name: '1',
            //content: 'Tab 1 content',
            //comName: 'Test'
            component: orderBook,
          }, 
          {
            title: 'Tab 2',
            name: '2',
            //content: 'Tab 2 content',
            //comName: 'demoPop'
            component: demoPop,
          }
        ],

        tabIndex: 2,
      
        activeName : "first",
        
        
      };
    },
    methods: {
      openComponent(label,component) {
        //console.log("openComponent", component);
        let newTabName = ++this.tabIndex + '';
        this.editableTabs.push({
          title: label,
          name: newTabName,
          component: component,
        });
        this.editableTabsValue = newTabName;
      },

     handleTabsEdit(targetName, action) {
        // if (action === 'add') {
        //   let newTabName = ++this.tabIndex + '';
        //   this.editableTabs.push({
        //     title: 'New Tab',
        //     name: newTabName,
        //     content: 'New Tab content'
        //   });
        //   this.editableTabsValue = newTabName;
        // }
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
      }
    },

        
  }
</script>

<style>
  /* CSS */
  html,
  body,
  #app,
  .el-tabs,
  .el-container {
    margin: 0px;
    height: 100%;
  }
</style>
