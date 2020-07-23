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
  sockets: {
    connect() {
      console.log('链接成功');
    },
    disconnect() {
      console.log('断开链接')
    },
  },
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
    if(!this.$socket.connected){
      this.$socket.connect();
    }
    this.$socket.emit('client message', {msg:'hi, server'});
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
        console.log(this.$socket.connected);
        this.$socket.emit('client message', {msg:'hi, server',data: this.numberData});
      });
    },
    add(){
      console.log('add');
      console.log(this.$socket.connected);
      this.$socket.emit('add', {numberData: this.numberData}); 
    },
    minus(){
      console.log('minus');
      // socket.emit()用户客户端向服务端发送消息，服务端与之对应的是socket.on()来接收信息。
      this.$socket.emit('client message', {msg:'hi, server'});

      // socket.on()用于接收服务端发来的消息
      this.$socket.on('connect',  ()=>{
        console.log('client connect server');
      });
      this.$socket.on('disconnect', ()=>{
        console.log('client disconnect');
      });

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

