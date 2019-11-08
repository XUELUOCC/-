<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 系统设置</el-breadcrumb-item>
                <el-breadcrumb-item><i class="el-icon-setting"></i> 菜单配置</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <div class="form">
              <div class="one">
                   <span>菜单名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="menuName">
                    <!-- <el-input v-model="menuName" placeholder="请输入内容"></el-input> -->
              </div>
                <div class="one">
                   <span>用户名称：</span>
                    <input type="text" placeholder="请输入内容(必填)" v-model="menuPerson">
              </div>
              <div class="one">
                    <span>菜单类型：</span>
                     <el-select v-model="menuType" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="子菜单" value="子菜单"></el-option>
                        <el-option label="主菜单" value="主菜单"></el-option>
                    </el-select>
              </div>
              
               <div class="one">
                  <span >修改时间：</span>
                  <template>
                      <div class="block">
                    
                        <el-date-picker
                        style="width:214px"
                          v-model="menuDate"
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
                        label="菜单名称"
                        prop="menuName">
                        </el-table-column>
                        <el-table-column
                        label="用户名称"
                        prop="menuPerson">
                        </el-table-column>
                         <el-table-column
                        label="菜单类型"
                        prop="menuType">
                        </el-table-column>
                         <el-table-column
                        label="修改时间"
                        prop="menuDate">
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
                    menuName:'系统设置',
                    menuPerson:'123456C从',
                    menuType:'主菜单',
                    menuDate:'2019-10-12'
                  },
                 {
                    menuName:'门户管理',
                    menuPerson:'云从',
                    menuType:'主菜单',
                    menuDate:'2019-10-09'
                  },
                   {
                    menuName:'资金监管职位',
                    menuPerson:'电饭煲',
                    menuType:'主菜单',
                    menuDate:'2019-11-12'
                  },
                   {
                    menuName:'统计大厅',
                    menuPerson:'法国cb',
                    menuType:'主菜单',
                    menuDate:'2019-08-10'
                  },
                   {
                    menuName:'就业/培训管理',
                    menuPerson:'飞不高s',
                    menuType:'主菜单',
                    menuDate:'2019-06-03'
                  },
                   {
                    menuName:'用户管理',
                    menuPerson:'灰姑娘m',
                    menuType:'子菜单',
                    menuDate:'2019-10-15'
                  },
                   {
                    menuName:'权限管理',
                    menuPerson:'聚合酶',
                    menuType:'子菜单',
                    menuDate:'2019-10-28'
                  },
              ],
                menuName:'',
                menuPerson:'',
                menuType:'',
                menuDate:''
            }
        },
        methods:{
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
            add(){
                console.log("11")
                var newData={
                    menuName:this.menuName,
                    menuPerson:this.menuPerson,
                    menuType:this.menuType,
                    menuDate:this.menuDate
                }
                if(this.menuName=='' || this.menuPerson=='' || this.menuType=='' || this.menuDate=='')
                    return false;
                this.tableData.push(newData)
            },
            search(){
                this.tableData='';
                this.tableData=[{
                    menuName:this.menuName,
                    menuPerson:this.menuPerson,
                    menuType:this.menuType,
                    menuDate:this.menuDate
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
  font-size: 16px;
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