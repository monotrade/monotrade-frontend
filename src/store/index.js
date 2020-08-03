//我们组装模块并导出 store 的地方
import Vue from 'vue'
import Vuex from 'vuex'

// 购物车 demo
import cart from './modules/cart'
import products from './modules/products'

import market from './modules/market'
//import createLogger from '../../../src/plugins/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    cart,
    products,
    market,
  },
  strict: debug,
  plugins: []//debug ? [createLogger()] : []
})