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
export default {
  name: '五档行情',
  data() {
    return {
      
    };
  },
  //Prop 是你可以在组件上注册的一些自定义 attribute,  使用时可以用html 属性，或者用 :xxx 绑定
  // prop 可以是复杂对象
  props: ['symbol'],
  mixins: [echartMixins],
  mounted() {
    this.draw();
  },
  methods: {
  },
  destroyed() {
    window.onresize = null;
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>