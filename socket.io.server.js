//to run
// `node socket.io.server.js` or `node socket.io.server`


//直接 `export createServer` 会报错
exports.createServer =  function(path,port) {
  console.log('hello socket.io');
  const server = require('http').createServer();
  const io = require('socket.io')(server, {
    path: path,
    serveClient: false,
    // below are engine.IO options
    pingInterval: 10000,
    pingTimeout: 5000,
    cookie: false
  });
  server.listen(port);

  io.on('connection',  (socket)=>{
  console.log('client connect server, ok!');
  console.log(socket.id);

  // io.emit()方法用于向服务端发送消息，参数1表示自定义的数据名，参数2表示需要配合事件传入的参数
  //io.emit('server message', {msg:'client connect server success'});

  

  // 监听断开连接状态：socket的disconnect事件表示客户端与服务端断开连接
  socket.on('disconnect', ()=>{
    console.log('connect disconnect');
  });
  
  // 与客户端对应的接收指定的消息
  socket.on('client message', (data)=>{
    console.log('client message');
    console.log(data);// hi server
    // 应答
    socket.emit('server', {msg:'response'});
    //socket.send('server message', {msg:'response'});
    io.sockets.emit('server message', {msg:'broadcast xxx'});
  });

  socket.on('abc', (data)=>{
    console.log('from channel abc:'+ data);

    socket.emit('server', {msg:'response abc'});
    //socket.send('server', {msg:'responsexxx'});
    return (123);
  });

  

  //socket.disconnect();
});

}


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




  /*
https://blog.csdn.net/nathanhuang1220/article/details/41348213

以及用户筛选，通道选择

服务器信息传输
// send to current request socket client
socket.emit('message', "this is a test");
 
// sending to all clients except sender
socket.broadcast.emit('message', "this is a test");
 
// sending to all clients in 'game' room(channel) except sender
socket.broadcast.to('game').emit('message', 'nice game');
 
// sending to all clients, include sender
io.sockets.emit('message', "this is a test");
 
// sending to all clients in 'game' room(channel), include sender
io.sockets.in('game').emit('message', 'cool game');
 
// sending to individual socketid
io.sockets.socket(socketid).emit('message', 'for your eyes only');

  */