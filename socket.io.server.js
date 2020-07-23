//to run
// `node socket.io.server.js` or `node socket.io.server`

console.log('hello')

const server = require('http').createServer();

const io = require('socket.io')(server, {
  path: '/API',
  serveClient: false,
  // below are engine.IO options
  pingInterval: 10000,
  pingTimeout: 5000,
  cookie: false
});

server.listen(3000);

io.on('connection',  (socket)=>{
  console.log('client connect server, ok!');

  // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
  //io.emit('server message', {msg:'client connect server success'});

  // socket.broadcast.emit()表示向除了自己以外的客户端发送消息
  socket.broadcast.emit('server message', {msg:'broadcast'});

  // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
  socket.on('disconnect', ()=>{
    console.log('connect disconnect');
  });
  
  // 与客户端对应的接收指定的消息
  socket.on('client message', (data)=>{
  	console.log('client message');
    cosnole.log(data);// hi server
  });

  socket.disconnect();
});


 // io.on('connection',function(socket) {
  //   //接收数据
  //   socket.on('login', function (obj) {                
  //       console.log(obj.username);
  //       // 发送数据
  //       socket.emit('relogin', {
  //         msg: `你好${obj.username}`,
  //         code: 200
  //       });  
  //   });
  // });
   
  // http.listen(3000, function(){
  //   console.log('listening on *:3000');
  // });