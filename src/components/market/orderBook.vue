<template>
  <div class="q-pa-md">
    <q-markup-table dark class="bg-indigo-8">
      <tbody>
        <tr v-for="(p, index) in tick.askPrices">
          <td class="text-left">卖{{5-index}}</td>
          <td class="text-right">{{p}}</td>
          <td class="text-right">{{tick.askVolume[index]}}</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
export default {
  // name: '五档行情',
  props: ['symbol'],

  data() {
    return {
      
    };
  },

  computed: {
    ...mapState({
      tick: state => state.market.ticks['510050.SSHE']
    }),
    ...mapGetters('market', {
      ticks: 'ticks',
      // total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  },


  mounted() {
    // this.draw();
  },

  destroyed() {
    // window.onresize = null;
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>