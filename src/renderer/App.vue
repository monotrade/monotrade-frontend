<template>
  <div id="app">
    <Test></Test>
    <router-view></router-view>
  </div>
</template>

<script>
  import Test from './components/TestElementUI.vue'
  
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
