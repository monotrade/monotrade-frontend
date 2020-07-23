//cl3没有vue.config.js，在根目录下新建一个


let socketIo = require('socket.io');
let express = require('express'); 
//let cxt = require('../src/services-server');

let httpPort = 9001;
let channelId = 1
let app = express();

app.get('/',function(req,res){
    res.send('启动成功：' + httpPort);
});
 
let server = require('http').createServer(app);
let io = socketIo(server);
io.on('connection',function(socket){ 
    console.log('有客户端连接');
//    cxt.createChannel(channelId++,socket)
});
server.listen(httpPort); //用server连接
console.log('io listen success !! ' + httpPort);


module.exports = {

    configureWebpack: {

        // other webpack options to merge in ...

    },

    // devServer Options don't belong into `configureWebpack`

    devServer: {
    	//默认为 “host”，应改为“public”。 解决`Network: unavailable`的问题
        public: '0.0.0.0:8080',
        hot: true,
        disableHostCheck: true,
        //changeOrigin: true,
        // transportMode: {
        //     client: 'ws',
        //     server: 'ws',//require.resolve('./WebsocketServer'),
        // }

        // 通过代理收不到反向消息！！！
        //proxy to websocket.io
        //webpack dev server does not support proxying ws connections yet.
        // proxy: {
        //     '/API': {
        //        target: 'http://localhost:3000',
        //        ws: true
        //     },
        // },

    //     proxy: {
    //   '^/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '^/foo': {
    //     target: '<other_url>'
    //   }
    // }


        // 引入"webpack-hot-middleware"中间件
        // var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        //   log: () => {}
        // })
        // https://github.com/webpack/webpack-dev-middleware 
        // can be configed to work with socket.io
    }


};