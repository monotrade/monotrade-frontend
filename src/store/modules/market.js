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
    market.subscribe(symbol, tick => {
      commit('updateTick', tick)
    })
  }
}


// getters  可以认为是 store 的计算属性
const getters = {  
  getTickBySymbol: (state) => (symbol) => {
    // return state.ticks.find(tick=>tick.symbol===symbol);
    return state.ticks[symbol];

  },
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
