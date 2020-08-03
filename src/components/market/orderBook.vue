<template>
  <div class="q-pa-md">
    <q-markup-table dark class="bg-indigo-8">
      <tbody>
        <tr>
          <td class="text-left">卖五</td>
          <td class="text-right">3.204</td>
          <td class="text-right">2153</td>
        </tr>
        <tr>
          <td class="text-left">卖四</td>
          <td class="text-right">3.204</td>
          <td class="text-right">2153</td>
        </tr>
        <tr>
          <td class="text-left">卖三</td>
          <td class="text-right">3.204</td>
          <td class="text-right">2153</td>
        </tr>
        <tr>
          <td class="text-left">卖二</td>
          <td class="text-right">3.204</td>
          <td class="text-right">2153</td>
        </tr>
        <tr>
          <td class="text-left">卖一</td>
          <td class="text-right">3.204</td>
          <td class="text-right">2153</td>
        </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>


<script>
import { mapGetters, mapState } from 'vuex'
export default {
  name: '五档行情',
  props: ['symbol'],

  data() {
    return {
      
    };
  },

  computed: {
    ...mapState({
      checkoutStatus: state => state.cart.checkoutStatus
    }),
    ...mapGetters('cart', {
      products: 'cartProducts',
      total: 'cartTotalPrice'
    })
  },
  methods: {
    checkout (products) {
      this.$store.dispatch('cart/checkout', products)
    }
  },


  mounted() {
    this.draw();
  },

  destroyed() {
    window.onresize = null;
  }

}
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>