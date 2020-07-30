#### html5 原生拖拽
https://blog.csdn.net/baidu_31333625/article/details/53811510
draggable="true"


事件	产生事件的元素	描述
dragstart	被拖放的元素	开始拖放操作
drag	被拖放的元素	拖放过程中
dragenter	拖放过程中鼠标经过的元素	被拖放元素开始进入本元素的范围内
dragover	拖放过程中鼠标经过的元素	被拖放元素正在本元素范围内移动
dragleave	拖放过程中鼠标经过的元素	被拖放元素离开本元素的范围
drop	拖放的目标元素	有其他元素被拖放到本元素中
dragend	拖放的对象元素	拖放操作结束



三. DataTransfer对象的属性与方法
3.1 DataTransfer对象的属性：
属性	描述
dropEffect	表示拖放操作的视觉效果，允许对其进行值的设定。该效果必须在用effectAllowed属性指定的允许的视觉效果范围内，允许指定的值有：none、copy、link、move。
effectAllowed	用来指定当元素被拖放时所允许的视觉效果。可以指定的值有：none、copy、copyLink、copyMove、link、linkMove、all、uninitialize。
files	返回表示被拖拽文件的 FileList。
types	存入数据的MIME类型。如果任意文件被拖拽，那么其中一个类型将会是字符串”Files”。





# monotrade-frontend

10 分钟上手 Vue 组件 Vue-Draggable
https://zhuanlan.zhihu.com/p/84433257

每个位置是一个 tab list
https://sortablejs.github.io/Vue.Draggable/#/two-lists



http://v0-16.quasarchs.com/components/typography.html
http://v0-16.quasarchs.com/quasar-play/android/index.html#/showcase/layout-demo/play-with-layout


https://quasarframework.github.io/app-extension-qwindow/examples
https://github.com/quasarframework/app-extension-qwindow


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

https://cn.vuejs.org/v2/guide/




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



####  vue-grid-layout

https://github.com/jbaysolutions/vue-grid-layout/blob/master/README-zh_CN.md

https://jbaysolutions.github.io/vue-grid-layout/examples/05-mirrored.html

拖拽 ‘vue-grid-layout’ 插件了解下
https://www.cnblogs.com/fengxin666/p/10059058.html

#### 浅谈使用element ui + vuedraggable + sortablejs实现多种版式布局及托拽
1. https://blog.csdn.net/github_37847992/article/details/77900441
2. https://blog.csdn.net/github_37847992/article/details/77900603


#### 使用Vue和thrift建立前后端交互的demo
https://www.cnblogs.com/dreamless/p/8494551.html

利用thrift实现js与C#通讯的例子
https://www.cnblogs.com/xxxteam/archive/2013/04/15/3023159.html

golang高性能RPC：Apache Thrift安装使用完全攻略
https://www.cnblogs.com/apocelipes/p/9420825.html


#### Electron 项目（三）：本地日志（electron-log）
https://blog.csdn.net/qq_32596527/article/details/106415532


布局：

每个窗口分为 上下左右主五个部分
每个放置窗口的部分，继续划分上下左右主五个部分
无限增加

打开新组件时，放到一个新窗口的主部分

拖放时，显示: 当前hover窗口所在容器的梅花， 和顶级窗口上下左右

当与原有窗口位置完全相同时，用页签并列(所有组件都有页签，不允许关闭的除外)

所有分割线可以调节位置

如此，能实现任意组合


https://github.com/ivanjolic95/vue-layout-composer

https://vuejsexamples.com/a-draggable-and-resizable-grid-layout-for-vue-js/

7 Best Drag And Drop Components To Create Draggable Elements
https://www.vuescript.com/best-drag-drop/


使用vue如何实现grid-layout功能
https://www.php.cn/js-tutorial-403424.html


Vue Drag and Drop
https://www.jianshu.com/p/4d997bd855d3

vuedraggable快速入门
http://www.qiutianaimeili.com/html/page/2019/09/uudmg0p3mbc.html

vue-draggable 学习和使用
https://www.jianshu.com/p/03f0f58f84cc



_vue-split-layout:  vue split drag layout_

https://github.com/vue-hxs/vue-split-layout

demo: https://vue-hxs.github.io/vue-split-layout/
