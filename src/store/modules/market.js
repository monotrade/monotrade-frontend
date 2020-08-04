// market datas, include instruments, last price, etc...
import types from '@/types/Market_types'
import market from '@/api/market'
// initial state
// there is no market.Tick


const state = () => ({
  ticks: {      
  },
})


// actions
const actions = {
  subscribe ({ commit }, symbol) {
    market.subscribe(tick => {
      commit('updateTick', tick)
    })
  }
}


// getters
const getters = {
  getTickBySymbol: (state) => (symbol) => {
    // return state.ticks.find(tick=>tick.symbol===symbol);
    return state.ticks[symbol];

  }
	ticks: (state, getters) => {
    // return getters.cartProducts.reduce((total, product) => {
    //   return total + product.price * product.quantity
    // }, 0)
    return state.ticks;
  }
}


// mutations
const mutations = {
  updateTick (state, tick) {
    state.ticks[tick.symbol] = tick
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
