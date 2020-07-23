<template>
  <div>
    <input v-model="channel" placeholder="message channel"/><br/>
    <textarea v-model="message" placeholder="add multiple lines"></textarea>

    <p>will send to channel {{ channel }}: {{ message }}</p>
    <button v-on:click="send">send</button>

    <button v-on:click="callback">callback</button>

    <p> received message : {{ response }}</p>
  </div>
</template>


<script>

export default {


  data() {
    return {
        channel: "abc",
        message: "{msg: 'a', others: 'b',}",
        response: 'waiting...',
    };
  },
  components: {
    
  },
  mounted() {

  //######  vue-socket.io 中， 使用 socket.on 接收不到消息，只能使用 sockets.listener.subscribe

//this.$socket.on('server',  function(data){
this.sockets.listener.subscribe('server', (data) => {	
            console.log('received server message');
            console.log(data);
            this.response = data;
          });

  },
  methods: {
      send(){
          this.$socket.emit(this.channel, this.message); 

          
      },

      callback(){
         this.$socket.emit(this.channel, this.message, (data)=>{
            console.log('received server message');
            console.log(data);
            this.response = data;
         }); 
      }

  }
};    

</script>
