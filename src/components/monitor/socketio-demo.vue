<template>
  <div>
    <dv-digital-flop id="a" :config="config" style="width:200px;height:50px;" />
    <button @click = "add()" style = "font-size:25px;">+</button>
    <button @click = "minus()" style = "font-size:25px;">-</button>
  </div>
</template>

<script>

const config1 = {
  number: [100],
  content: '{nt}个'
}

export default {
	data(){
		return {
			config: config1,
		}
	},
  methods: {
    // computed: {
    //   config: {
    //     get: function(){
    //     return {{number: this.newconfig.number, content: this.config}}
    //     }
    //   },
    // },
    add() {
      this.$data.config.number += 100;
    },
    minus() {
      this.config.number-=100;
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

