<template>
  <div id="app">
    <Test></Test>
    <!--3、在模板中使用kebab-case 两种都可以-->
    <demoPop></demoPop> 
    <demo-pop></demo-pop> 
    <router-view></router-view>
  </div>
</template>

<script>
  import Test from './components/TestElementUI.vue'
  import demoPop from './components/demoPop.vue'


  //拖拽功能的组件vue-grid-layout
  import VueGridLayout from 'vue-grid-layout';
  
  export default {
    components:{
      Test,
      demoPop,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
    },
    name: 'monotrade-frontend'
  }
</script>

<style>
  /* CSS */
</style>
