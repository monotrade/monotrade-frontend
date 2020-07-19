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

1. [Vue和DataV强强联合，这个大数据可视化模板你一定要拥有](https://zhuanlan.zhihu.com/p/150440638)

`git@gitee.com:holbrook/big-screen-vue-datav.git`

[DataV 官方文档](http://datav.jiaminghi.com/guide/)

[echarts 实例](https://www.echartsjs.com/examples/zh/index.html)

[echarts 官方文档](https://www.echartsjs.com/zh/option.html#title)


[axojs数据交互](http://axios-js.com/zh-cn/docs/)


如何动态渲染图表

在components/echart下的文件，比如drawPie()是渲染函数，echartData是需要动态渲染的数据，当外界通过props传入新数据，我们可以使用watch()方法去监听，一但数据变化就调用this.drawPie()并触发内部的.setOption函数，重新渲染一次图表。

