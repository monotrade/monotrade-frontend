<template>
	<!-- <dv-full-screen-container> -->
    <dv-border-box-8 style="height:300px;width:500px; background-color: #000000">
        <dv-percent-pond :config="config1" style="width:300px;height:60px;" />
        <dv-percent-pond :config="config2" style="width:300px;height:60px;" />
        <dv-percent-pond :config="config3" style="width:300px;height:60px;" />
    </dv-border-box-8>
        <!-- </dv-full-screen-container> -->
    
</template>

<script>

const fullWidth = 300
const borderGap = 3
const borderWidth = 3
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [0.25, 0.5, 0.25]
const pieceGap = 3

const lineDash = pieceLength
  .map(l => [usefulWidth * l, pieceGap])
  .reduce((all, current) => [...all, ...current], [])


// const config_data = {
//   value: 80,
//   colors: ['#01c4f9', '#c135ff'],
//   lineDash
// }

export default {
	data(){
		return {
			config1: {value: 80, colors: ['#01c4f9', '#c135ff'], lineDash	},
      config2: {value: 20, colors: ['#01c4f9', '#c135ff'], lineDash },
      config3: {value: 60, colors: ['#01c4f9', '#c135ff'], lineDash },
	}}
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

