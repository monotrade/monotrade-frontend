<template>
  <div class="q-pa-md bg-grey-10 text-white">
    <q-tree
      :nodes="data"
      node-key="label"
      dark
      :selected.sync="selected"
      selected-color="primary"
      default-expand-all
      @update:selected="handleNodeClick" 
      @node-click="handleNodeClick"
    >
      <template v-slot:default-header="prop" >
        <router-link  :to="prop.node.url" class="text-weight-bold text-primary">{{ prop.node.label }}</router-link>
      </template>
    </q-tree>
  </div>
</template>

<script>
const nav_data = [
  {
     label: '控制台',
     url: '/',
  }, {
     label: '购物车',
     url: '/shopping-cart',
  }, {
     label: '布局',
     url: '/split-demo',
  }, {
     label: '布局2',
     url: '/split-viewui',
  }, {
    label: '组件测试',
    url: '#',
    children: [{
      label: '交易组件',
      url: '/user',
      children: [{
        label: '现货买入',
        url: '/home',
        component: require('@/components/trade/stockBuy').default,
      }],
    }],
  }];
//       }, {
//         label: '现货卖出',
//         component: require('@/components/trade/stockSell').default,
//       }, {        
//         label: '点价交易',
//         component: require('@/components/trade/pointingTrade').default,
//       }, {
//         label: '基金申赎',
//         component: require('@/components/trade/fundDealing').default,
//       }, {
//         label: '期货交易',
//         component: require('@/components/trade/futureTrade').default,
//       }, {
//         label: '期权交易',
//         component: require('@/components/trade/optionTrade').default,
//       }]
//     }, {
//       label: '市场组件',
//       children: [{
//         label: '五档行情',
//         component: require('@/components/market/orderBook').default,
//       }, {
//         label: '通用行情组件',
//         component: require('@/components/market/generalMarket').default,
//       }]
//     }, {
//       label: '监控组件',
//       children: [{
//         label: '做市状态',
//         component: require('@/components/monitor/neeq-mm-dashboard').default,
//       }, {
//         label: '可用资金',
//         component: require('@/components/monitor/account').default,
//       }, {
//         label: '做市时长',
//         component: require('@/components/monitor/mmtime').default,
//       }, {
//         label: '做市时长2',
//         component: require('@/components/monitor/mmtime2').default,
//       }, {
//         label: 'socket.io demo',
//         component: require('@/components/monitor/socketio-demo').default,
//       }, 
//       ]
//     }],
//   }, {
//     label: '视图测试',
//     children: [{
//       label: 'Dashboard',
//       //component: require('@/views/index').default,
//     }, {
//       label: 'ETF做市',
//       children: [{
//         label: '三级 2-1-1'
//       }]
//     }, {
//       label: '股转做市',
//       children: [{
//         label: '三级 2-2-1'
//       }]
//     }]
//   }, {
//     label: 'API测试',
//     component: require('@/views/APIdemo').default,
//   }, 
// ]

export default {
  data() {      
    return {
      selected: null,
      expanded: ['组件测试','交易组件'],
      data: nav_data,
    }
  },

  methods: {
    handleNodeClick(data) {
      console.log('node clicked');
      console.log(data);
      if(data.component)
      {
        // console.log('To go'); 
        // console.log(data.component);
        this.$emit("openComponent", data.label, data.component)
      }
    },
  }
};
</script>