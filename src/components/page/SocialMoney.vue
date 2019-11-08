<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-lx-calendar"></i> 资金监管职位</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-box"></i> 企业社保补贴统计</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
          <div class="form">
              <div class="one">
                   <span>企业名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussName">
              </div>
                <div class="one">
                   <span>法人姓名：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussPerson">
              </div>
               <div class="one">
                   <span>劳资联系人：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussConnect">
              </div>
                <div class="one">
                   <span>企业地址：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussLocation">
              </div>
               <div class="one">
                   <span>联系电话：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussPhone">
              </div>
              <div class="one">
                    <span>经济性质：</span>
                     <el-select v-model="bussNature" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="国有企业" value="国有企业"></el-option>
                        <el-option label="民营企业" value="民营企业"></el-option>
                        <el-option label="独资企业" value="独资企业"></el-option>
                        <el-option label="集体企业" value="集体企业"></el-option>
                        <el-option label="外贸企业" value="外贸企业"></el-option>
                    </el-select>
              </div>
              <div class="one">
                    <span>企业社保补贴职位：</span>
                     <el-select v-model="bussSubsidy" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="2000" value="2000"></el-option>
                        <el-option label="4000" value="4000"></el-option>
                        <el-option label="6000" value="6000"></el-option>
                        <el-option label="8000" value="8000"></el-option>
                        <el-option label="10000" value="10000"></el-option>
                    </el-select>
              </div>
                <div class="one">
                  <span >成立日期：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="bussDate"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </div>
                  </template>
              </div>
              <div class="one">
                   <el-button type="primary" icon="el-icon-search">搜索</el-button>
                    <el-button type="primary" icon="el-icon-plus"  @click="add">添加</el-button>
                     <el-button type="primary" icon="el-icon-refresh-right"  @click="update">更新</el-button>
              </div>
            </div>

            <div class="table">
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
                        label="劳资联系人"
                        prop="bussConnect">
                        </el-table-column>
                         <el-table-column
                        label="联系电话"
                        prop="bussPhone">
                        </el-table-column>
                        
                         <el-table-column
                        label="经济性质"
                        prop="bussNature">
                        </el-table-column>
                         <el-table-column
                        label="企业社保补贴职位统计"
                        prop="bussSubsidy">
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

            <div class="footer">
                 <el-pagination
                background
                layout="prev, pager, next"
                :total="pages">
                </el-pagination>
            </div>

             <div class="echart-content">
                <div class="title">企业社保职位统计</div>
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
        name: 'editor',
        data: function(){
            return {
                  bussName:'',
                bussPerson:'',
                bussConnect:'',
                bussLocation:'',
                bussPhone:'',
                bussNature:'',
                bussDate:'',
                bussSubsidy:'',
                tableData: [
                            {
                            bussName:'阿里巴巴网络科技有限公司',
                            bussPerson:'马云',
                            bussConnect:'马风',
                            bussPhone:'15412352409',
                            bussNature:'民营企业',
                            bussSubsidy:'8000'
                            }, 
                            {
                            bussName:'腾讯科技有限公司',
                            bussPerson:'马化腾',
                            bussConnect:'李翔',
                            bussPhone:'15123465279',
                            bussNature:'民营企业',
                            bussSubsidy:'8000'
                            }, 
                            {
                            bussName:'爱奇艺网络科技有限公司',
                            bussPerson:'孙瑞',
                            bussConnect:'周云',
                            bussPhone:'15235352409',
                            bussNature:'民营企业',
                            bussSubsidy:'8000'
                            }, 
                            {
                            bussName:'小米科技有限公司',
                            bussPerson:'吴嘉',
                            bussConnect:'王青',
                            bussPhone:'15789352409',
                            bussNature:'民营企业',
                            bussSubsidy:'8000'
                            }
                            ],
                pages:1,
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
                            data:[2200, 3000, 5500, 4300, 5900, 6200, 8000]
                        }
                    ]
                },
            }
        },
        components: {
           
        },
        methods: {
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
              add(){
                  if(this.bussName=='' || this.bussPerson=='' || this.bussConnect=='' || this.bussPhone=='' || this.bussNature=='' || this.bussSubsidy==''){
                      return false;
                  }
                var newData= {
                        bussName:this.bussName,
                        bussPerson:this.bussPerson,
                        bussConnect:this.bussConnect,
                        bussPhone:this.bussPhone,
                        bussNature:this.bussNature,
                        bussSubsidy:this.bussSubsidy
                            }
                this.tableData.push(newData)
            },
            search(){
                this.tableData='';
                this.tableData=[{
                    userId:this.tableData.length,
                    name:this.bussName,
                    user:this.bussLabor,
                    hr:this.bussHr,
                    phone:this.bussPhone,
                    hrPhone:this.bussHrPhone,
                    quality:this.bussNature,
                }]
            },
            update(){
                var newData=this.tableData.sort((n1,n2)=>{
                return Math.random()-0.5;
                });
                this.tableData='';
                this.tableData=newData;
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
.form{
    width:100%;
    height:auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
}
.one{
    width:30%;
    height:40px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-left:10px;
}
.one input{
    width:212px;
    height:30px;
    border-radius: 5px;
    border:1px solid #ddd;
}
.one span{
    display: inline-block;
    width:160px;
    height:30px;
    text-align:center;
}
.table{
    margin-top:20px;
}
.footer{
    width:50%;
    position:relative;
    left:50%;
    top:10%;
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
.title{
    color:#409EFF;
    margin:60px 0;
    font-size: 18px;
}
</style>