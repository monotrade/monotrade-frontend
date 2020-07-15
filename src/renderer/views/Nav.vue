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
      }]
    }]
  }, 
  {
    label: '一级 2',
    children: [{
      label: '二级 2-1',
      children: [{
        label: '三级 2-1-1'
      }]
    }, {
      label: '二级 2-2',
      children: [{
        label: '三级 2-2-1'
      }]
    }]
  }, 
  {
    label: '一级 3',
    children: [{
      label: '二级 3-1',
      children: [{
        label: '三级 3-1-1'
      }]
    }, {
      label: '二级 3-2',
      children: [{
        label: '三级 3-2-1'
      }]
    }]
  }
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