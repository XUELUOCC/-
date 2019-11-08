<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-emoji"></i> 统计大厅</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-money"></i> 经费发放</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="table ">
                <div class="title">培训机构年度人员费用统计表</div>
              <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%" 
                        id="out-table"
                        >
                        <el-table-column
                        label="培训年度"
                        prop="trainDate">
                        </el-table-column>
                        <el-table-column
                        label="机构名称"
                        prop="trainName">
                        </el-table-column>
                        <el-table-column
                        label="培训人员费用统计"
                        prop="trainFee">
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
            <!--柱状图-->
            <div class="echart-content">
                <div class="title">培训机构年度人员费用统计柱状图</div>
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
        data: function(){
            return {
                option :{
                    color: ['#3398DB'],
                    tooltip : {
                        trigger: 'axis',
                        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                        }
                    },
                    grid: {
                        left: '3%',
                        right: '4%',
                        bottom: '3%',
                        containLabel: true
                    },
                    xAxis : [
                        {
                            type : 'category',
                            data : ['2013年', '2014年', '2015年', '2016年', '2017年', '2018年', '2019年'],
                            axisTick: {
                                alignWithLabel: true
                            },
                        }
                    ],
                    yAxis : [
                        {
                            type : 'value',
                            min:2000,
                            max:10000,
                            interval:2000
                            
                        }
                    ],
                    series : [
                        {
                            name:'职位统计',
                            type:'bar',
                            barWidth: '60%',
                            data:[2200, 3000, 5500, 6300, 7000, 8800, 9000]
                        }
                    ]
                },
                tableData:[
                    {
                        trainDate:'2013',
                        trainName:'北大青鸟',
                        trainFee:'2200'
                    },
                     {
                        trainDate:'2014',
                        trainName:'达内',
                        trainFee:'3000'
                    },
                     {
                        trainDate:'2015',
                        trainName:'黑马',
                        trainFee:'5500'
                    },
                     {
                        trainDate:'2016',
                        trainName:'千峰教育',
                        trainFee:'6300'
                    },
                     {
                        trainDate:'2017',
                        trainName:'潭州教育',
                        trainFee:'7000'
                    },
                     {
                        trainDate:'2018',
                        trainName:'传智播客',
                        trainFee:'8800'
                    },
                     {
                        trainDate:'2019',
                        trainName:'优就业',
                        trainFee:'9000'
                    },
                ]

            }
        },
        computed: {
           
        },
        methods:{
            drawBar(){
               let chartFee=echarts.init(document.getElementById('chartFee'));
               chartFee.setOption(this.option);
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
            update(){
                var newData=this.tableData.sort((n1,n2)=>{
                return Math.random()-0.5;
                });
                this.tableData='';
                this.tableData=newData;
            },
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
        },
        mounted(){
            this.drawBar()
        }
    }
</script>

<style scoped>
.example-p{
    height: 45px;
    display: flex;
    align-items: center;
}
.search-box{
    text-align: center;
    margin-top: 10px;
}
.search{
    width: 300px;
}
ul,li{
    list-style: none;  
}

.download{
    position:relative;
    left:85%;
    top:10px;
}
.table{
    margin-top:20px;
}
.title{
    color:#409EFF;
    margin:60px 0;
    font-size: 18px;
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