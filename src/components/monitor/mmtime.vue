<template>
	<!-- <dv-full-screen-container> -->
    <dv-border-box-8 style="height:300px;width:300px; background-color: #000000">
        <dv-capsule-chart :config="config" style="width:300px;height:200px" />
    </dv-border-box-8>
        <!-- </dv-full-screen-container> -->
    
</template>

<script>

const config_data = {
  data: [
    {
      name: '510050 啊啊宝宝',
      value: 167
    },
    {
      name: '510350 啊啊宝宝',
      value: 123
    },
    {
      name: '漯河',
      value: 98
    },
    {
      name: '郑州',
      value: 75
    },
    {
      name: '西峡',
      value: 66
    },
  ],
  colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
  unit: '分钟',
  showValue: true,
  Axis:{max:14400}
}

export default {
	data(){
		return {
			config: config_data,
		}
	}
}
</script>

<style>
  /* CSS */
/*  .el-tab-pane,
  .dv-border-box-1 {
    margin: 0px;
    height: 300;
  }*/
</style>

