<template>
  <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>

const nav_data = [
  {
    label: '组件测试',
    children: [{
      label: '交易组件',
      children: [{
        label: '现货买入',
        component: require('@/components/trade/stockBuy').default,
      }, {
        label: '现货卖出',
        component: require('@/components/trade/stockSell').default,
      }, {        
        label: '点价交易',
        component: require('@/components/trade/pointingTrade').default,
      }, {
        label: '基金申赎',
        component: require('@/components/trade/fundDealing').default,
      }, {
        label: '期货交易',
        component: require('@/components/trade/futureTrade').default,
      }, {
        label: '期权交易',
        component: require('@/components/trade/optionTrade').default,
      }]
    }, {
      label: '市场组件',
      children: [{
        label: '五档行情',
        component: require('@/components/market/orderBook').default,
      }, {
        label: '通用行情组件',
        component: require('@/components/market/generalMarket').default,
      }]
    }, {
      label: '监控组件',
      children: [{
        label: '可用资金',
        component: require('@/components/monitor/account').default,
      }, {
        label: '做市时长',
        component: require('@/components/monitor/mmtime').default,
      }, {
        label: '做市时长2',
        component: require('@/components/monitor/mmtime2').default,
      }, {
        label: 'socket.io demo',
        component: require('@/components/monitor/socketio-demo').default,
      }, 
      ]
    }],
  }, 
  {
    label: '视图测试',
    children: [{
      label: 'Dashboard',
      component: require('@/views/index').default,
    }, {
      label: 'ETF做市',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '股转做市',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, 
]

export default {
  data() {      
    return {
      defaultProps: {
          children: 'children',
          label: 'label'
      },
      data: nav_data,
    }
  },

  methods: {
    handleNodeClick(data) {
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