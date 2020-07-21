import Vue from 'vue';
import App from './App.vue';
//import App from './App'	//可以不写 .vue
import Main from './views/Main.vue'

import router from './router';
import store from './store';

// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);
//按需引入
//import { borderBox1 } from '@jiaminghi/data-view'
//Vue.use(borderBox1)

//全局引入socket.io
//npm install vue-socket.io --save
//npm install socket.io-client --save
import VueSocketIO from 'vue-socket.io'
//import SocketIO from "socket.io-client"

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:1221',
    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
    options: { path: "/my-app/" } //Optional options
}))
//socket可以与vuex结合使用
//import store from'./yourstore'
//Vue.use(VueSocketio,socketio('http://socketserver.com:1923'), store);


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
import './assets/scss/style.scss';






import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI


//if (!process.env.IS_WEB) Vue.use(require('vue-electron'))





Vue.config.productionTip = false;

new Vue({
  components: { App,Main },
  router,
  store,
  render: (h) => h(Main),
  //template: '<Main/>'
}).$mount('#app');
