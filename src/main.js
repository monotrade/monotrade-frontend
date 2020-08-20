import Vue from 'vue';

//路由
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from '@/router';

//vuex
import store from '@/store';

import { currency } from '@/currency'
Vue.filter('currency', currency)

//view-design
import ViewUI from 'view-design';
import 'view-design/dist/styles/iview.css';

Vue.use(ViewUI);


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
//import io from "socket.io-server"


//import { Dark } from 'quasar'
// 设置状态
//Dark.set(true) // 或者false或者"auto"

// 切换
//Dark.toggle()

Vue.use(new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8080',

    // vuex: {
    //     store,
    //     actionPrefix: 'SOCKET_',
    //     mutationPrefix: 'SOCKET_'
    // },
    //origins: '*:*',
    options: { 
      path: "/API/", // "/my-app/",
        
      } //Optional options
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

// for dashboard
import '@/assets/scss/style.scss';

//if (!process.env.IS_WEB) Vue.use(require('vue-electron'))

 


Vue.config.productionTip = false;
//购物车应用
//import App from './components/App.vue'
//空路由
//import App from './App.vue';
//导航 ElementUI
import App from '@/App.vue'
// import '@/quasar'



//import App from './App'	//可以不写 .vue
// new Vue({
//   // 全局注册组件
//   components: { App,Main },
//   router,
//   store,
//   render: (h) => h(Main),
//   //template: '<Main/>'
// }).$mount('#app');

// new Vue({
//   //使用路由，不再需要 render
//   router,
//   // el: '#app',
//   store,
//   // render: h => h(App)
// }).$mount('#app')


new Vue({
//   //注入路由，从而让整个应用都有路由功能
//   //可以在任何组件内通过 this.$router 访问路由器，也可以通过 this.$route 访问当前路由
  router,
  el: '#app',
  store,
  render: h => h(App)
});
