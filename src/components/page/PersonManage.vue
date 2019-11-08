<template>
    <section class="main">
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-rank"></i> 就业/培训管理</el-breadcrumb-item>
                  <el-breadcrumb-item><i class="el-icon-price-tag"></i> 培训机构管理</el-breadcrumb-item>
                    <el-breadcrumb-item><i class="el-icon-money"></i> 培训机构补贴管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form">
              <div class="one">
                   <span>企业名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="formData.bussName">
              </div>
               <div class="one">
                   <span>法人/负责人：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="formData.bussHr">
              </div>
                <div class="one">
                   <span>负责人电话：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="formData.bussPhone">
              </div>
                <div class="one">
                   <span>地址：</span>
                    <input type="text" placeholder="请输入内容" v-model="formData.bussLocation">
              </div>
                <div class="one">
                    <span>企业性质：</span>
                     <el-select v-model="formData.bussNature" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="国有企业" value="国有企业"></el-option>
                        <el-option label="私营企业" value="私营企业"></el-option>
                        <el-option label="独资企业" value="独资企业"></el-option>
                        <el-option label="集体企业" value="集体企业"></el-option>
                        <el-option label="外贸企业" value="外贸企业"></el-option>
                    </el-select>
              </div>
              <div class="one">
                   <el-button type="primary" icon="el-icon-search" @click="search(formData)">搜索</el-button>
                    <el-button type="primary" icon="el-icon-plus"  @click="add">添加</el-button>
                    <el-button type="primary" icon="el-icon-refresh-right"  @click="update">更新</el-button>
              </div>
            </div>

                 <div class="table">
              <template>
                    <el-table
                        :data="newData"
                        style="width: 100%" 
                        id="out-table"
                        >
                        <el-table-column
                        label="企业名称"
                        prop="name">
                        </el-table-column>
                        <el-table-column
                        label="法人"
                        prop="user">
                        </el-table-column>
                         <el-table-column
                        label="负责人电话"
                        prop="hrPhone">
                        </el-table-column>
                         <el-table-column
                        label="经济性质"
                        prop="quality">
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
    </section>
</template>

<script>
 import FileSaver from "file-saver";
    import XLSX from "xlsx";
    export default {
        name: 'draglist',
        data() {
            return {
                flag:true,
                msg:'编辑',
                formData:{
                    bussName:'',
                    bussPhone:'',
                    bussHr:'',
                    bussLocation:'',
                    bussNature:''
                },
                newData:[],
                tableData: [
                            {
                            userId:0,
                            name:'阿里巴巴网络科技有限公司',
                            user:'马云',
                            phone:'15033115161',
                            quality:'私营企业',
                            }, 
                            {
                            userId:1,
                            name:'北大青鸟',
                            user:'李强',
                            phone:'15033115161',
                            quality:'私营企业',
                            }, 
                            {
                            userId:2,
                            name:'腾讯科技有限公司',
                            user:'马化腾',
                            phone:'15033115161',
                            quality:'私营企业',
                            }, 
                            {
                            userId:3,
                            name:'爱奇艺科技有限公司',
                            user:'蒋云',
                            phone:'15033115161',
                            quality:'私营企业',
                            }
                            ],
                pages:1
     
            }
        },
        components:{
           
        },
        methods: {
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
            add(){
                console.log("11")
                if(this.bussName=='' || this.bussLabor=='' || this.bussPhone=='' || this.bussNature==''){
                    return false;
                }
                var newData={
                    userId:this.tableData.length,
                    name:this.bussName,
                    user:this.bussLabor,
                    phone:this.bussPhone,
                    quality:this.bussNature,
                }
                this.tableData.push(newData)
            },
            search({bussName,bussPhone,bussHr,bussNature}){
             this.tableData.forEach((item,index)=>{
                 console.log(item.bussName)
                 item.forEach((tip,index)=>console.log(tip))
             })
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
            created(){
                this.search({});
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
.download{
    position:relative;
    left:85%;
    top:10px;
}
.footer{
    width:50%;
    position:relative;
    left:50%;
    top:10%;
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
