<template>
  <el-table :data="tableData">
        <el-table-column
        label="标题">
        <template slot-scope="scope" >
            <span height="20">{{ scope.row.date}}</span>
        </template>
        </el-table-column>
 
        <el-table-column
        label="ID">
        <template slot-scope="scope">
            <span>{{ scope.row.name}}</span>
        </template>
        </el-table-column>
     
        <el-table-column>
            <template slot-scope="scope">
                <el-button @click="TellMeId(scope.row.address)">TellMe</el-button> 
            </template>
        </el-table-column>
  </el-table>
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
.el-table {
    margin: 0px;
    height: 100%;
    background-color: 0xff0000;
}
</style>