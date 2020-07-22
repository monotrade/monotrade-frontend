//cl3没有vue.config.js，在根目录下新建一个

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
    }



};