<template>
	<!-- <dv-full-screen-container> -->
    <dv-border-box-1 style="height:300px;width:300px; background-color: #000000">
        <dv-charts :option="option" style="height:300px"/>
    </dv-border-box-1>
        <!-- </dv-full-screen-container> -->
    
</template>

<script>

const option1 = {
  title: {text: '可用资金',style: {fill: '#fff'}},
  series: [
    {
      type: 'gauge',
      data: [ { name: 'itemA', value: 55 } ],
      center: ['50%', '55%'],	//调整序列所在位置
      axisLabel: {
        formatter: '{value}%',
        style: {fill: '#fff'}
      },
      details: {
        show: true,
        offset: [0, 95],
        formatter: '剩余{value}%\n可用资金: 900000\n资金限额: 100000000'
      },
      axisTick: {style: {stroke: '#fff'}},
      animationCurve: 'easeOutBack'
    }
  ]	
}

export default {
	data(){
		return {
			option: option1,
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

