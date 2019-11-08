<template>
  <div>
    <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 统计大厅
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <i class="el-icon-money"></i> 资金监管各职位统计
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <div class="table ">
                <div class="title">资金监管各公司各职位统计</div>
                <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%" 
                        id="out-table"
                        >
                        <el-table-column
                        label="企业名称"
                        prop="bussName">
                        </el-table-column>
                        <el-table-column
                        label="法人"
                        prop="bussPerson">
                        </el-table-column>
                        <el-table-column
                         align="center"
                        label="公益性补贴管理职位"
                        prop="bussCommon">
                        </el-table-column>
                        <el-table-column
                         align="center"
                        label="灵活就业补贴管理职位"
                        prop="bussFlexible">
                        </el-table-column>
                        <el-table-column
                         align="center"
                        label="企业社保管理职位"
                        prop="bussSocial">
                        </el-table-column>
                        
                        <el-table-column
                        align="right"
                        label="操作">
                        <template slot-scope="scope">
                           <el-button type="primary" icon="el-icon-delete"  @click="handleDelete(scope.$index, scope.row)"></el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                    <div class="download">
                        <el-button type="primary" icon="el-icon-download"  @click="download">导出</el-button>
                    </div>
                </template>
            </div>

             <div class="echart-content">
                <div class="title">培训机构年度人员职位统计著柱状图</div>
                <div id="chartFee" style="width:100%;height:500px"></div>
            </div>

             <div class="foot-bottom">
                <p>新疆联盛科技有限公司</p>
            </div>
        </div>
  </div>
</template>

<script>
import echarts from 'echarts'
 import FileSaver from "file-saver";
    import XLSX from "xlsx";
export default {
  data () {
    return {
      msg: '',
      tableData:[
          {
            bussName:'阿里巴巴网络科技有限公司',
            bussPerson:'马云',
            bussCommon:'5000',
            bussFlexible:'6000',
            bussSocial:'8000',
          },
          {
            bussName:'北大青鸟',
            bussPerson:'李强',
            bussCommon:'5000',
            bussFlexible:'6000',
            bussSocial:'8000'
          },
          {
            bussName:'腾讯科技有限公司',
            bussPerson:'马化腾',
            bussCommon:'5000',
            bussFlexible:'6000',
            bussSocial:'8000'
          },
          {
            bussName:'小米科技有限公司',
            bussPerson:'孙睿',
            bussCommon:'5000',
            bussFlexible:'6000',
            bussSocial:'8000'
          },
          {
            bussName:'爱奇艺科技有限公司',
            bussPerson:'王烈',
            bussCommon:'5000',
            bussFlexible:'6000',
            bussSocial:'8000'
          }
      ],
option :{
    legend: {},
    tooltip: {},
    dataset: {
        dimensions: ['product', '2015', '2016', '2017'],
        source: [
            {product: '公益性补贴管理', '2015': 2330, '2016': 4858, '2017': 6937},
            {product: '灵活性补贴管理', '2015': 3831, '2016': 6734, '2017': 3551},
            {product: '企业环保管理', '2015': 1864, '2016': 3652, '2017': 8825},
        ]
    },
    xAxis: {type: 'category'},
    yAxis: {
      min:1000,
      max:9000,
      interval:2000
    },
    // Declare several bar series, each will be mapped
    // to a column of dataset.source by default.
    series: [
        {type: 'bar'},
        {type: 'bar'},
        {type: 'bar'}
    ]
}



    }
  },
  methods: {
      handleDelete(index, row) {
        this.tableData.splice(index,1);
      },
      download(){
        /* 从表生成工作簿对象 */ 
        var wb = XLSX.utils.table_to_book(document.querySelector("#out-table")); 
        /* 获取二进制字符串作为输出 */ 
        var wbout = XLSX.write(wb, { 
                  bookType: "xlsx", 
                  bookSST: true, 
                  type: "array" 
                });
        try { 
            FileSaver.saveAs( 
            //Blob 对象表示一个不可变、原始数据的类文件对象。 //Blob 表示的不一定是JavaScript原生格式的数据。 
            //File 接口基于Blob，继承了 blob 的功能并将其扩展使其支持用户系统上的文件。 
            //返回一个新创建的 Blob 对象，其内容由参数中给定的数组串联组成。 
            new Blob([wbout], { type: "application/octet-stream" }), 
            //设置导出文件名称
            "sheetjs.xlsx" 
            ); 
        } catch (e) { 
            if (typeof console !== "undefined") 
                console.log(e, wbout); 
          } 
          return wbout;
      },
      drawBar(){
            let chartFee=echarts.init(document.getElementById('chartFee'));
            chartFee.setOption(this.option);
      },
  },
  mounted(){
    this.drawBar()
  }
}
</script>

<style scoped>
.title{
    color:#409EFF;
    margin:60px 0;
    font-size: 18px;
}
.download{
    position:relative;
    left:85%;
    top:10px;
}

::-webkit-input-placeholder { /* WebKit browsers */
  color: #DCDFE6;
  font-size: inherit;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
  color: #DCDFE6;
  font-size: inherit;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
  color: #DCDFE6;
  font-size: inherit;
}
.foot-bottom p{
    text-align: right;
    color:#606266;
}
.foot-bottom{
    width:100%;
    height:30px;
    margin-top:50px;
    border-top:1px solid #ccc;
}
</style>
