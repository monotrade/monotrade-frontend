# monotrade-frontend



> An electron-vue project

#### Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9080
npm run dev

# build electron application for production
npm run build


```

---

This project was generated with [electron-vue](https://github.com/SimulatedGREG/electron-vue) using [vue-cli](https://github.com/vuejs/vue-cli). Documentation about the original structure can be found [here](https://simulatedgreg.gitbooks.io/electron-vue/content/index.html).

#### ref

- [2019 年如何搭建你的 Vue 项目](https://zhuanlan.zhihu.com/p/70752505)

  + @vue/cli
  + vue ui
  + 安装electron-builder插件

- [Vue和DataV强强联合，这个大数据可视化模板你一定要拥有](https://zhuanlan.zhihu.com/p/150440638)

`git@gitee.com:holbrook/big-screen-vue-datav.git`

- [DataV 官方文档](http://datav.jiaminghi.com/guide/)

- [echarts 实例](https://www.echartsjs.com/examples/zh/index.html)

- [echarts 官方文档](https://www.echartsjs.com/zh/option.html#title)


- [axojs数据交互](http://axios-js.com/zh-cn/docs/)


如何动态渲染图表

在components/echart下的文件，比如drawPie()是渲染函数，echartData是需要动态渲染的数据，当外界通过props传入新数据，我们可以使用watch()方法去监听，一但数据变化就调用this.drawPie()并触发内部的.setOption函数，重新渲染一次图表。



#### go

go-astilectron-demo:

`Homepage:			"http://127.0.0.1:8080",`

但是如何启动服务？ 参考原始文档： https://github.com/asticode/go-astilectron



#### socket.io
https://www.jianshu.com/p/6c557dcc7ec8

socket.emit(),socket.on(),socket.in()

在使用Socket.IO类库时，服务器端和客户端之间可以使用socket端口对象的emit方法，互相发送事件。

socket.emit(event,data,[callback])
event表示：参数值为一个用于指定事件名的字符串。data参数值：代表该事件中携带的数据。这个数据就是要发送给对方的数据。数据可以是字符串，也可以是对象。callback参数：值为一个参数，用于指定一个当对方确定接收到数据时调用的回调函数。
一方使用emit发送事件后，另一方可以使用on,或者once方法，对该事件进行监听。once和on不同的地方就是，once只监听一次，会在回调函数执行完毕后，取消监听。


socket.on(event,function(data,fn){})
socket.once(event,function(data,fn){})



#### vuex

https://www.jianshu.com/p/a804606ad8e9


