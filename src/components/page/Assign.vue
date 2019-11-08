<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 门户管理
                </el-breadcrumb-item>
                 <el-breadcrumb-item>
                    <i class="el-icon-reading"></i> 栏目维护
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
           <div class="form">
              <div class="one">
                   <span>栏目名称：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussName" style="width:214px">
              </div>
              <div class="one">
                  <span >修改日期：</span>
                  <template>
                      <div class="block">
                        <el-date-picker
                        style="width:214px"
                          v-model="bussDate"
                          type="date"
                          format="yyyy 年 MM 月 dd 日"
                             value-format="yyyy-MM-dd"
                          placeholder="选择日期">
                        </el-date-picker>
                      </div>
                  </template>
              </div>
              <div class="one">
                   <el-button type="primary" icon="el-icon-search" >查询</el-button>
                    <el-button type="primary" icon="el-icon-plus"  @click="add">添加</el-button>
              </div>
            </div>

            <div class="table">
              <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                        label="栏目名称"
                        prop="bussName">
                        </el-table-column>
                        <el-table-column
                        label="修改时间"
                        prop="bussDate">
                        </el-table-column>
                         <el-table-column
                        label="修改人"
                        prop="bussPerson">
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
import { fetchData } from '../../api/index';
export default {
    name: 'basetable',
    data() {
        return {
           
            tableData:[
                {bussName:'机构概况',bussDate:'2019-10-10',bussPerson:'管理员'},
                {bussName:'政策法规',bussDate:'2019-10-11',bussPerson:'管理员'},
                {bussName:'就业动态',bussDate:'2019-10-12',bussPerson:'管理员'},
                {bussName:'就业指南',bussDate:'2019-10-13',bussPerson:'管理员'},
                {bussName:'创业园地',bussDate:'2019-10-14',bussPerson:'管理员'},
                {bussName:'下载中心',bussDate:'2019-10-15',bussPerson:'管理员'},
                {bussName:'互动交流',bussDate:'2019-10-16',bussPerson:'管理员'},
                {bussName:'知识库',bussDate:'2019-10-17',bussPerson:'管理员'},
                {bussName:'办事指南',bussDate:'2019-10-18',bussPerson:'管理员'},
                {bussName:'求职招聘',bussDate:'2019-10-19',bussPerson:'管理员'},
                {bussName:'培训中心',bussDate:'2019-10-20',bussPerson:'管理员'},
            ],
            bussDate:'',
            bussName:'',
           id:'',
           pages:1
        };
    },
    created() {
    },
    mounted(){
        //判断数据的数量
       this.pages=this.tableData.length;
    },
    methods: {
         handleDelete(index, row) {
        this.tableData.splice(index,1);
      },
      add(){
          console.log("11")
          if(this.bussDate=='' || this.bussName=='' || this.bussPerson==''){
              return false;
          }
          var newData={
              bussDate:this.bussDate,
              bussName:this.bussName,
              bussPerson:'管理员'
          }
        this.tableData.push(newData)
      },
      search(){
          this.tableData='';
          this.tableData=  [{bussName:this.bussName,bussDate:this.bussDate,bussPerson:'管理员'}]
      }
    }

};
</script>

<style scoped>

/* .inputs{
    height:100px;
} */
.contents{
    width:1200px;
    height:100%;
}
.contents ul{
    list-style: none;
    width:100%;
}
.contents ul li{
    width:600px;
    height:30px;
    line-height:30px;
}
.left{
    float: left;
}
.right{
    float: right;
}


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
