<template>
  <div>
  <el-row :gutter="20">
    <el-col :span="8">卖5</el-col>
    <el-col :span="8">18.20</el-col>
    <el-col :span="8">390000</el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="8">abc</el-col>
  <el-col :span="8">abc</el-col>
  <el-col :span="4">abc</el-col>
  <el-col :span="4">abc</el-col>
</el-row>
<el-row :gutter="20">
  <el-col :span="4">abc</el-col>
  <el-col :span="16">abc</el-col>
  <el-col :span="4">abc</el-col>
</el-row>
</div>
</template>

<script>
  export default {
    data() {
      return {
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }]
      }
    }
  }
</script>


<style>
  .el-row {
    margin-bottom: 20px;
    width:260px;
    &:last-child {
      margin-bottom: 0;

    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>