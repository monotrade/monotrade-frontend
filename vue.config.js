//cl3没有vue.config.js，在根目录下新建一个
const path = require("path");

const WS_PATH = '/API';
const WS_PORT = 3000;

if(process.env.NODE_ENV === 'development'){
    let socketio = require('./socket.io.server.js');
    socketio.createServer(WS_PATH, WS_PORT); 
}

module.exports = {
    // 输出文件目录     
    //outputDir: 'dist',
    outputDir: '../resources',

    // eslint-loader 是否在保存的时候检查
    lintOnSave: true,

    configureWebpack: {
        // 解决 you are using the runtime-only build of Vue
        resolve: {
          alias: {
            // 别名
            vue$: "vue/dist/vue.esm.js", //加上这一句
            "@api": path.resolve(__dirname, "./src/api"),
            "@utils": path.resolve(__dirname, "./src/utils")
          }
        }
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

        
        //proxy to websocket.io
        //webpack dev server does not support proxying ws connections yet.
        proxy: {
            '/API': {
               target: 'http://localhost:3000',//+ WS_PORT,
               ws: true,
               changeOrigin: true
            },
            //   '^/api': {
            //     target: '<url>',
            //     ws: true,
            //     changeOrigin: true
            //   },
            //   '^/foo': {
            //     target: '<other_url>'
            //   }
        },

        // 引入"webpack-hot-middleware"中间件
        // var hotMiddleware = require('webpack-hot-middleware')(compiler, {
        //   log: () => {}
        // })
        // https://github.com/webpack/webpack-dev-middleware 
        // can be configed to work with socket.io
    },

    // add by quasar plugin
    pluginOptions: {
      quasar: {
        importStrategy: 'kebab',
        rtlSupport: false
      }
    },

    // add by quasar plugin
    transpileDependencies: [
      'quasar'
    ]
};
