<template>
  <div>
    <table>
      <tbody>
        <!-- <tr v-for="(p, index) in this.tick.askPrices"
        :key="index">
          <td class="text-left">卖{{5-index}}</td>
          <td class="text-right">{{p}}</td>
          <td class="text-right">{{tick.askVolume[index]}}</td>
        </tr> -->
      </tbody>
    </table>
  </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
export default {  
  // props: 父组件可以在 html 属性中赋值或绑定。
  // props中声明的属性，不能在 data 中再定义。
  props: {
  //   'symbol':{type:String, default:'--' }
  },
  
  data() {
    return {
      symbol: '--',
      // tick: undefined,
    };
  },

  // 计算属性可用于快速计算视图（View）中显示的属性。这些计算将被缓存，并且只在需要时更新。
  // 与 methods 相比， computed 只在需要时发生计算，而method 每次渲染时都会执行一次

  // computed 用来监控自己定义的变量，
  // 该变量不在data里面声明，直接在computed里面定义，
  // 然后就可以在页面上进行双向数据绑定展示出结果或者用作其他处理
  // computed比较适合对多个变量或者对象进行处理后返回一个结果值
  // 比如 购物车里面的商品列表和总金额之间的关系
  computed: {    
    tick(){ 
      var getter = this.$store.getters['market/getTickBySymbol'];
      var t = getter(this.symbol);
      return t;
  }
    // ...mapState({
    //   tick: state => store.getters.getTickBySymbol(this.symbol),
    // }),
    // ...mapGetters('market', {
    //   // tick: 'store.getters.getTickBySymbol',
    //   // total: 'cartTotalPrice'
    // })
  },

  //watch主要用于监控vue实例的变化，
  // 它监控的变量当然必须在data里面声明才可以
  // 可以监控一个变量，也可以是一个对象
  // 一般用于监控路由、input输入框的值特殊处理等等，
  // 它比较适合的场景是一个数据影响多个数据
  watch:{
    //只能监控整个对象或单个变量, 单独监控一个属性不行
    // goodsList.price(newVal,oldVal){}
    // 这样是可以的
    // "dialogForm.appversionName"(newVal, oldVal){}

    //监控单个值
  },

  // filters：用于简单的数据格式，在应用程序的多个位置都需要它
  // expressions：不允许使用流操作或其他复杂的逻辑。他们应该保持简单


  methods: {
    // checkout (products) {
    //   this.$store.dispatch('cart/checkout', products)
    // }
  },


  mounted() {

    // this.draw();
    // console.log(this.symbol);
    // console.log(this.$attrs.data.symbol);
    this.symbol = this.$attrs.data.symbol;
  },

  created (){
    // 订阅
    this.$store.dispatch('market/subscribe', this.symbol)

  },

  destroyed() {
    // window.onresize = null;
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>