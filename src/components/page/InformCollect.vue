<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 系统设置</el-breadcrumb-item>
                  <el-breadcrumb-item><i class="el-icon-user"></i> 用户管理</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <div class="form">
              <div class="one">
                   <span>用户名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="personName">
              </div>
                <div class="one">
                   <span>用户密码：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="personPwd">
              </div>
              
               <div class="one">
                  <span >修改时间：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="personDate"
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
                  <el-button type="primary" icon="el-icon-search" >搜索</el-button>
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
                        label="用户名称"
                        prop="personName">
                        </el-table-column>
                        <el-table-column
                        label="用户密码"
                        prop="personPwd">
                        </el-table-column>
                         <el-table-column
                        label="修改时间"
                        prop="personDate">
                        </el-table-column>
                       
                        <el-table-column
                        align="right"
                        label="操作">
                        <template slot-scope="scope">
                           <el-button type="primary" icon="el-icon-delete"  @click="handleDelete(scope.$index, scope.row)"></el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                   
                </template>
            </div>

            <div class="foot-bottom">
                <p>新疆联盛科技有限公司</p>
            </div>

        </div>
    </div>
</template>

<script>
    import Schart from 'vue-schart';
    export default {
        name: 'basecharts',
        data(){
            return{
              tableData:[
                  {
                      personName:'王峰',
                      personPwd:'123456',
                      personDate:'2019-10-12'
                  },
                  {
                      personName:'李强',
                      personPwd:'cc23456',
                      personDate:'2019-10-10'
                  },
                  {
                      personName:'赵武',
                      personPwd:'1256df',
                      personDate:'2019-09-12'
                  },
                  {
                      personName:'孙祥',
                      personPwd:'123456iop',
                      personDate:'2019-10-20'
                  },
                  {
                      personName:'钱员',
                      personPwd:'123456kbndfjla',
                      personDate:'2019-10-12'
                  },
              ],
                personName:'',
                personPwd:'',
                personPower:'',
                personDate:''
            }
        },
        methods:{
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
            add(){
                console.log("11")
                var newData={
                    personName:this.personName,
                    personPwd:this.personPwd,
                    personDate:this.personDate
                }
                if(this.bussName=='' || this.personPwd==''  || this.personDate=='')
                    return false;
                this.tableData.push(newData)
            },
            search(){
                this.tableData='';
                this.tableData=[{
                    personName:this.personName,
                    personPwd:this.personPwd,
                    personDate:this.personDate
                }]
            },
            update(){
                var newData=this.tableData.sort((n1,n2)=>{
                return Math.random()-0.5;
                });
                this.tableData='';
                this.tableData=newData;
            },
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
    margin-top:20px;
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

.foot-bottom{
    width:100%;
    height:30px;
    margin-top:50px;
    border-top:1px solid #ccc;
}
.foot-bottom p{
    text-align: right;
    color:#606266;
}
/* .container{
    width:1300px;
} */
.foot-bottom{
    width:100%;
    height:30px;
    margin-top:50px;
    border-top:1px solid #ccc;
}
</style>