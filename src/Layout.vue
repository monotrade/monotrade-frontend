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
  //import VueGridLayout from 'vue-grid-layout';
  
  export default {
    components:{
      Test,
      demoPop,
      
    },
    name: 'monotrade-frontend'
  }



  //context menu
  const { remote } = require('electron');
  const { Menu } = remote;

  const createContextMenu = () => {
    const contextTemplate = [
        {
            label: 'Cut',
            role: 'cut'
        },
        {
            label: 'Copy',
            role: 'copy'
        }
    ];
    const contextMenu = Menu.buildFromTemplate(contextTemplate);
    return contextMenu;
}

window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    const contextMenu = createContextMenu();
    contextMenu.popup({
        window: remote.getCurrentWindow()
    });
}, false);
</script>

<style>
  /* CSS */
</style>

<style lang="scss">
body {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
