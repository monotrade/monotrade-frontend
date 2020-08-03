// market datas, include instruments, last price, etc...
import market from '@/types/Market_types'

// initial state
// there is no market.Tick
var tick = Tick({

	"symbol" : '510050.SSHE',
	"exchange" : 'SSHE',
	"name" : '50ETF',
	"timestamp" : '',
	"preClosePrice" : '',
	"lastPrice" : '',
	"openPrice" : '',
	"highPrice" : '',
	"lowPrice" : '',
	"volume" : '',
	"amount" : '',
	"askPrices" : [4.11, 4.12, 4.13, 4.15, 4.18],
	"askVolumes" : [1000,2000,3000,4000,5000],
	"bidPrices" : [4.10, 4.09, 4.08, 4.05, 0],
	"bidVolumes" : [1000,2000,3000,4000,0],

});

const state = () => ({
  ticks: {
      '510050.SSHE': tick,
  },
})

// getters
const getters = {
	tick: (state, getters,symbol) => {
    return getters.cartProducts.reduce((total, product) => {
      return total + product.price * product.quantity
    }, 0)
  }
}

// actions
const actions = {}

//mutations
const mutations = {}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}
