import market from '@/types/Market_types'

var tick = new Tick({

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


function createTick(symbol){
	var tick = new Tick({
		symbol: symbol, 
		askPrices: [0.0,0.0,0.0,0.0,0.0],
		askVolumes : [1000,2000,3000,4000,5000],
		bidPrices : [4.10, 4.09, 4.08, 4.05, 0],
		bidVolumes : [1000,2000,3000,4000,0],
	});

	var basePrice = Math.random()*5.0;

	//tick.askPrices = 
	

	return tick;
}
export default {	
	subscribe(symbol,callback) {
		setTimeout(() => callback(createTick(symbol)), 5)
	},
}