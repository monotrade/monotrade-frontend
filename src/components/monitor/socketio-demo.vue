<template>
  <!-- 4个主要的数据 -->
  <div class="bottom-data">
    <div class="item-box" v-for="(item,index) in numberData" :key="index">
      <dv-digital-flop :config="item.number" style="width:200px;height:.625rem;" />
      <br/>
      <button @click="add()">+++</button>

      <button @click="minus()">---</button> 
    </div>
  </div>
</template>

<script>
export default {
	data(){
		return {
			numberData: [
        {
          number: {
            number: [15],
            toFixed: 1,
            content: "{nt}(件)"
          },
          text: "今日构建总量"
        },
        {
          number: {
            number: [1144],
            toFixed: 1,
            content: "{nt}"
          },
          text: "总共完成数量"
        },
      ]
		}
	},
  
  mounted() {
    this.changeTiming();
  },
  methods: {
    changeTiming() {
      setInterval(() => {
        this.changeNumber();
      }, 3000);
    },
    changeNumber() {
      this.numberData.forEach((item, index) => {
        item.number.number[0] += ++index;
        item.number = { ...item.number };
      });
    },
    add(){
      console.log('add');
      this.$socket.emit('add', {numberData: this.numberData}); 
    },
    minus(){
      console.log('minus');
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

