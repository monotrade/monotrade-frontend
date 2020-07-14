import Vue from 'vue'

import App from './App'
import Main from './views/Main.vue'


import router from './router'

import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css
Vue.use(ElementUI) //使用elementUI





if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App,Main },
  router,
  template: '<Main/>'
}).$mount('#app')
