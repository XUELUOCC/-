<template>
  <div>
      <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i>资金监管职位
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <i class="el-icon-postcard"></i>用工信息管理
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form">
              <div class="one">
                   <span>企业名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussName">
              </div>
                <div class="one">
                   <span>企业地址：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussLocation">
              </div>
                <div class="one">
                   <span>招聘岗位：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussPosition">
              </div>
               <div class="one">
                   <span>联系姓名：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussConnect">
              </div>
                <div class="one">
                   <span>联系电话：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="bussPhone">
              </div>
              <div class="one">
                    <span>学历要求：</span>
                     <el-select v-model="bussEducate" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="本科" value="本科"></el-option>
                        <el-option label="大专" value="大专"></el-option>
                    </el-select>
              </div>
               <div class="one">
                    <span>薪资要求：</span>
                     <el-select v-model="bussMoney" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="600以下" value="600以下"></el-option>
                        <el-option label="600-2000" value="600-2000"></el-option>
                        <el-option label="2001-4000" value="2001-4000"></el-option>
                        <el-option label="4001-6000" value="4001-6000"></el-option>
                        <el-option label="6001-8000" value="6001-8000"></el-option>
                        <el-option label="8001-10000" value="8001-10000"></el-option>
                        <el-option label="10000以上" value="10000以上"></el-option>
                        <el-option label="面议" value="面议"></el-option>
                    </el-select>
              </div>
               <div class="one">
                  <span >发布时间：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="bussDate"
                          type="date"
                          placeholder="选择日期(必选)"
                          format="yyyy 年 MM 月 dd 日"
                           value-format="yyyy-MM-dd"
                          >
                        </el-date-picker>
                      </div>
                  </template>
              </div>
                 <div class="one">
                  <span>采集起始日期：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="value1"
                          type="date"
                          placeholder="选择日期">
                        </el-date-picker>
                      </div>
                  </template>
              </div>
                 <div class="one">
                  <span>采集结束日期：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="value1"
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
                        label="企业地址"
                        prop="bussLocation">
                        </el-table-column>
                         <el-table-column
                        label="招聘职位"
                        prop="bussPosition">
                        </el-table-column>
                         <el-table-column
                        label="联系人"
                        prop="bussConnect">
                        </el-table-column>
                         <el-table-column
                        label="联系电话"
                        prop="bussPhone">
                        </el-table-column>
                         <el-table-column
                        label="学历"
                        prop="bussEducate">
                        </el-table-column>
                        <el-table-column
                        label="薪资待遇"
                        prop="bussMoney">
                        </el-table-column>
                        <el-table-column
                        label="发布时间"
                        prop="bussDate">
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

             <div class="foot-bottom">
                <p>新疆联盛科技有限公司</p>
            </div>

        </div>
  </div>
</template>

<script>
 import FileSaver from "file-saver";
    import XLSX from "xlsx";
export default {
  data () {
    return {
      input:'',
      select:'',
      value1:'', 
      bussName:'',
      bussLocation:'',
      bussPosition:'',
      bussConnect:'',
      bussPhone:'',
      bussEducate:'',
      bussMoney:'',
      bussDate:'',
      tableData: [
                  {
                  bussName:'阿里巴巴网络科技有限公司',
                  bussLocation:'杭州',
                  bussPosition:'公益性补贴管理',
                  bussConnect:'李湘',
                  bussPhone:'15145678956',
                  bussEducate:'本科',
                  bussMoney:'4001-6000',
                  bussDate:'2019-10-22'
                  }, 
                  {
                  bussName:'北大青鸟',
                  bussLocation:'武汉',
                  bussPosition:'灵活就业补贴管理',
                  bussConnect:'赵千',
                  bussPhone:'15145678956',
                  bussEducate:'大专',
                  bussMoney:'4001-6000',
                  bussDate:'2019-10-22'
                  }, 
                  {
                 bussName:'腾讯科技有限公司',
                  bussLocation:'深圳',
                  bussPosition:'企业社保管理',
                  bussConnect:'王鑫',
                  bussPhone:'15145678956',
                  bussEducate:'本科',
                  bussMoney:'4001-6000',
                  bussDate:'2019-10-22'
                  }, 
                  {
                  bussName:'小米科技有限公司',
                  bussLocation:'北京',
                  bussPosition:'公益性补贴管理',
                  bussConnect:'孙睿',
                  bussPhone:'15145678956',
                  bussEducate:'本科',
                  bussMoney:'4001-6000',
                  bussDate:'2019-10-22'
                  }
                  ],
            pages:1
               
    }
  },
  methods: {
     handleDelete(index, row) {
        this.tableData.splice(index,1);
      },
      add(){
        console.log("11")
        if(this.bussName=='' || this.bussPosition=='' || this.bussLocation=='' || this.bussConnect=='' || this.bussPhone=='' || this.bussEducate=='' || this.bussMoney=='' || this.bussDate==''){
          return false;
        }
        var newData={
            bussName: this.bussName,
            bussLocation:this.bussLocation,
            bussPosition:this.bussPosition,
            bussConnect:this.bussConnect,
            bussPhone: this.bussPhone,
            bussEducate:this.bussEducate,
            bussMoney:this.bussMoney,
            bussDate: this.bussDate
        }
        this.tableData.push(newData);
      },
      search(){
        this.tableData='';
        this.tableData=[{
           bussName: this.bussName,
            bussLocation:this.bussLocation,
            bussPosition:this.bussPosition,
            bussConnect:this.bussConnect,
            bussPhone: this.bussPhone,
            bussEducate:this.bussEducate,
            bussMoney:this.bussMoney,
            bussDate: this.bussDate
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

      }
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
    margin:20px 600px;
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
