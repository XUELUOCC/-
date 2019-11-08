<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 统计大厅
                </el-breadcrumb-item>
                 <el-breadcrumb-item>
                    <i class="el-icon-money"></i> 精准就业辅助统计
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            
              <div class="echart-content">
                <div id="chartFee" style="width:100%;height:500px"></div>
                <div class="table-echart">
                    <div class="title">精准就业辅助年度统计图</div>
                    <div id="myChart" style="width:100%;height:500px"></div>
                </div>
                
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
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
           option : {
                title : {
                    text: '精准就业辅助单年度统计图',
                    subtext: '',
                    x:'center'
                },
                tooltip : {
                    trigger: 'item',
                    formatter: "{a} <br/>{b} : {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    left: 'left',
                    data: ['公益性补贴管理职位','灵活就业管理职位','企业社保管理职位']
                },
                series : [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius : '55%',
                        center: ['50%', '50%'],
                        data:[
                            {value:335, name:'公益性补贴管理职位'},
                            {value:410, name:'灵活就业管理职位'},
                            {value:534, name:'企业社保管理职位'},
                        ],
                        itemStyle: {
                            emphasis: {
                                shadowBlur: 10,
                                shadowOffsetX: 0,
                                shadowColor: 'rgba(0, 0, 0, 0.5)'
                            }
                        }
                    }
                ]
            },
            option1 :{
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
                            name:'就业统计',
                            type:'bar',
                            barWidth: '60%',
                            data:[2200, 3000, 5500, 6300, 7000, 8800, 9000]
                        }
                    ]
            },
   
        };
    },
    created() {
    },
    mounted(){
        this.drawBar();
        this.chartTable();
    },
    methods: {
        drawBar(){
            let chartFee=echarts.init(document.getElementById('chartFee'));
            chartFee.setOption(this.option);
        },
        chartTable(){
              let mychart=echarts.init(document.getElementById('myChart'));
           mychart.setOption(this.option1);
        }

    }

};
</script>

<style scoped>
.title{
    margin:20px auto;
    text-align: center;
    font-size:18px;
    font-weight:700;
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
