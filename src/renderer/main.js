import Vue from 'vue'

import App from './App'	//可以不写 .vue
import Main from './views/Main.vue'


import router from './router'

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI


import store from './store';
//import dataV from '@jiaminghi/data-view';
//Vue.use(dataV);

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';


// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
//import './assets/scss/style.scss';


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  components: { App,Main },
  router,
  store,
  //render: (h) => h(Main),
  template: '<Main/>'
}).$mount('#app')
