<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 系统设置</el-breadcrumb-item>
                   <el-breadcrumb-item><i class="el-icon-warning-outline"></i> 日志查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
             <div class="form"> 
                <div class="one">
                    <span>模板：</span>
                     <el-select v-model="userLogName" slot="prepend" placeholder="请选择(必选)" style="width:214px">
                        <el-option label="子菜单" value="子菜单"></el-option>
                        <el-option label="主菜单" value="主菜单"></el-option>
                    </el-select>
              </div> 
               <div class="one">
                  <span >起始时间：</span>
                  <template>
                      <div class="block">
                        <el-date-picker
                        style="width:214px"
                          v-model="userLogDate"
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
                        label="模板名称"
                        prop="userLogName">
                        </el-table-column>
                        <el-table-column
                        label="用户名称"
                        prop="userLogPerson">
                        </el-table-column>
                         <el-table-column
                        label="菜单类型"
                        prop="userLogType">
                        </el-table-column>
                         <el-table-column
                        label="修改时间"
                        prop="userLogDate">
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
                    userLogName:'权限管理',
                    userLogType:'子菜单',
                    userLogDate:'2019-10-01',
                    userLogPerson:'艰苦的vnj'
                  },
                   {
                    userLogName:'用户管理',
                    userLogType:'子菜单',
                    userLogDate:'2019-10-11',
                    userLogPerson:'云测'
                  },
                    {
                    userLogName:'统计大厅',
                    userLogType:'主菜单',
                    userLogDate:'2019-09-22',
                    userLogPerson:'周的烦恼'
                  },
                    {
                    userLogName:'企业社保管理',
                    userLogType:'子菜单',
                    userLogDate:'2019-06-01',
                    userLogPerson:'灰姑娘'
                  },
                    {
                    userLogName:'资金监管职位',
                    userLogType:'主菜单',
                    userLogDate:'2019-10-14',
                    userLogPerson:'共患难'
                  },
                    {
                    userLogName:'权限管理',
                    userLogType:'子菜单',
                    userLogDate:'2019-09-01',
                    userLogPerson:'艰苦的vnj'
                  },
                   {
                    userLogName:'门户管理',
                    userLogType:'主菜单',
                    userLogDate:'2019-08-04',
                    userLogPerson:'阿道夫'
                  },
              ],
                userLogName:'',
                userLogType:'',
                userLogDate:'',
                userLogPerson:'',
            }
        },
        methods:{
            handleDelete(index, row) {
                this.tableData.splice(index,1);
            },
            add(){
                console.log("11")
                var newData={
                    userLogName:this.userLogName,
                    userLogType:this.userLogType,
                    userLogDate:this.userLogDate,
                    userLogPerson:this.userLogPerson
                }
                if(this.userLogName=='' || this.userLogType=='' || this.userLogDate=='' || this.userLogPerson=='')
                    return false;
                this.tableData.push(newData)
            },
            update(){
                var newData=this.tableData.sort((n1,n2)=>{
                return Math.random()-0.5;
                });
                this.tableData='';
                this.tableData=newData;
            },
        },
        computed:{
             tables () {
        const userLogType = this.userLogType;
        if (search) {
          // filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
          // 注意： filter() 不会对空数组进行检测。
          // 注意： filter() 不会改变原始数组。
          return this.tableData.filter(data => {
            // some() 方法用于检测数组中的元素是否满足指定条件;
            // some() 方法会依次执行数组的每个元素：
            // 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测;
            // 如果没有满足条件的元素，则返回false。
            // 注意： some() 不会对空数组进行检测。
            // 注意： some() 不会改变原始数组。
            return Object.keys(data).some(key => {
              // indexOf() 返回某个指定的字符在某个字符串中首次出现的位置，如果没有找到就返回-1；
              // 该方法对大小写敏感！所以之前需要toLowerCase()方法将所有查询到内容变为小写。
              return String(data[key]).toLowerCase().indexOf(search) > -1
            })
          })
        }
        return this.tableData;
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
    position:relative;
    left:50%;
    top:10%;
}


::-webkit-input-placeholder { /* WebKit browsers */
  color:#606266;
 font-size: inherit;
}

::-moz-placeholder { /* Mozilla Firefox 19+ */
 color:#606266;
  font-size: inherit;
}

:-ms-input-placeholder { /* Internet Explorer 10+ */
 color:#606266;
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