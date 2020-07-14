<template>
  <div id="app">
    <Test></Test>
    <router-view></router-view>
  </div>
</template>

<script>
  import Test from './components/TestElementUI.vue'
  //拖拽功能的组件vue-grid-layout
  import VueGridLayout from 'vue-grid-layout';
  
  export default {
    components:{
      Test,
      GridLayout: VueGridLayout.GridLayout,
      GridItem: VueGridLayout.GridItem,
    },
    name: 'monotrade-frontend'
  }
</script>

<style>
  /* CSS */
</style>
