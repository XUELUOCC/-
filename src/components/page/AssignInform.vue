<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-cascades"></i> 门户管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>
                    <i class="el-icon-notebook-2"></i> 信息发布
                </el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
           <div class="form">
              <div class="one">
                   <span>标题名称：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussName" style="width:214px">
              </div>
              <div class="one">
                  <span >发布日期：</span>
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

            <div class="table" v-if="flag">
              <template>
                    <el-table
                        :data="tableData"
                        style="width: 100%">
                        <el-table-column
                        label="标题名称"
                        prop="bussName">
                        </el-table-column>
                        <el-table-column
                        label="发布时间"
                        prop="bussDate">
                        </el-table-column>
                         <el-table-column
                        label="发布人"
                        prop="bussPerson">
                        </el-table-column>
                        
                        <el-table-column
                        align="right"
                        label="操作">
                        <template slot-scope="scope">
                           <el-button type="primary" icon="el-icon-delete"  @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                           <el-button type="primary" icon="el-icon-view"  @click="view">预览</el-button>
                        </template>
                        </el-table-column>
                    </el-table>
                </template>
            </div>

             <div class="content-detail" v-if="!flag">
               <div> <span class="el-icon-back back" @click="view"></span> <span class="el-icon-right forward"></span></div>
               <h3 class="item">人力资源社会保障部教育部全国总工会全国工商联关于开展2017年全国民营企业招聘周活动的通知</h3>
               <p>
                   各省、自治区、直辖市及新疆生产建设兵团人力资源社会保障厅（局）、教育厅（教委、教育局）、总工会、工商联：
                    为发挥好民营企业吸纳就业的作用，引导高校毕业生等各类人才到民营企业就业，人力资源社会保障部、教育部、全国总工会、全国工商联将于4月下旬在全国县级以上城市开展
                    “2017年全国民营企业招聘周”活动。现就有关事项通知如下：
               </p>
               <h4>一、活动时间</h4>
               <p>
                   2017年4月20日至26日。
               </p>
               <h4>二、活动主题</h4>
               <p>
                   促进供需精准对接，助力创新驱动发展。
               </p>
               <h4>三、服务对象</h4>
               <p>
                   （一）以2017届高校毕业生为重点，同时面向农村进城务工人员、建档立卡贫困人员等各类求职者。
                    （二）以民营企业、中小微企业为重点，同时鼓励各类企事业单位参加招聘活动。
               </p>
               <h4>四、活动内容</h4>
               <p>
                   （一）摸清求职者就业需求。要通过公共就业服务机构业务办理、基层平台劳动力资源调查统计、与社会机构开展合作等有效途径，对2017届高校毕业生特别是零就业家庭中的高校毕业生、
                   就业困难人员、农村进城务工人员、建档立卡贫困人员、退伍军人及随军家属等各类求职者的就业情况进行统计，摸清本地未就业人员底数，建立基础台账，掌握他们的就业需求。
                    （二）收集发布岗位信息。要组织民营企业提供更多高质量的就业岗位，鼓励各类企事业单位开发更多基层就业岗位，做好岗位信息的收集、分类、筛选和整理工作；要通过招聘活动、互联网、移动客户端和新闻媒体
                    等多种形式，集中向社会发布空岗信息。人力资源社会保障部将在中国公共招聘网（www.cjob.gov.cn）设立“2017年全国民营企业招聘周”活动专栏，免费发布招聘会和岗位信息。
                    （三）组织供需对接活动。要组织民营企业及各类用人单位进入校园，集中开展针对高校毕业生的供需对接活动；要深入街道（乡镇）、社区（行政村）以及求职人员较为集中的场所，开展专场招聘等活动；要充分利用
                    互联网等现代技术手段，同步开展线上招聘活动。同时，要大力推动远程招聘、视频面试、网络直播等新型招聘手段的广泛应用，为供求双方提供便利、高效的对接服务。
                    （四）提供相关指导和咨询服务。要在活动现场设立就业政策咨询、职业指导、技能培训、创业服务等服务窗口或服务台，根据求职者不同需求提供个性化服务，加强对求职者的就业创业指导；要完善对企业等用人单位的
                    用工指导，结合市场供求变化指导民营企业、中小微企业科学制定招聘计划，做好岗位设置、岗位描述等方面的指导和咨询服务；要设立维权服务台，为求职者和用人单位提供劳动合同签订、工资支付、社会保障、劳动争
                    议和参加工会组织等方面的咨询服务。
               </p>
               <h4>五、工作要求</h4>
               <p>
                   （一）加强组织领导，明确工作任务。招聘周活动由人力资源社会保障部门牵头，教育、工会、工商联等部门配合。
                    各地人力资源社会保障部门要摸清本辖区内求职者就业需求，做好招聘周活动的组织协调工作，及时汇总招聘活动和岗位信息，按照统一格式上传中国公共招聘网（上传信息的具体要求可从
                    http://www.cjob.gov.cn/download/index.jhtml下载），并通过多种形式在当地广泛发布。
                    各地教育部门要组织好2017届高校毕业生参加招聘周活动。
                    各地工会组织要做好求职人员的权益维护和法律援助工作，组织媒体做好宣传报道工作。
                    各地工商联要积极动员民营企业参加招聘周活动，收集和整理民营企业岗位信息，并经当地人力资源社会保障部门汇总，上传中国公共招聘网统一发布。
                    （二）广泛开展宣传，营造良好氛围。各地要充分利用电视、广播、报刊、互联网、移动终端等多种媒体，提前宣传招聘周活动时间和内容，及时组织媒体进行跟踪报道；要大力宣传推介中国公
                    共招聘网，实现与本地线上招聘活动的有效链接，引导各类求职者登录查询招聘会和岗位信息；要加强对新一轮就业创业政策的集中宣传，全面解读政策内容和办理程序，提升政策知晓度，扩大
                    政策宣传覆盖面。
                    （三）制定应急预案，做好安全检查。各地要制定招聘周活动现场安全工作方案及突发事件应急预案，检查活动现场出入通道、消防器材、电器及线路、通风设备等，确保招聘活动安全有序。
                    （四）按时上报情况。请各省（区、市）人力资源社会保障厅（局）、教育厅（教委、教育局）、总工会、工商联于4月19日前以电子邮件方式分别向人力资源社会保障部、教育部、全国总工会、
                    全国工商联上报招聘周活动的准备情况。请各省（区、市）人力资源社会保障厅（局）于5月5日前汇总招聘周活动情况，上报活动总结和“2017年民营企业招聘周活动情况统计表”（见附件）。
               </p>
               <h4></h4>
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
                {bussName:'八师石河子市召开2018年公共就业服务工作会议',bussDate:'2019-10-10',bussPerson:'管理员'},
                {bussName:'2017年兵团民营企业招聘周',bussDate:'2019-10-11',bussPerson:'管理员'},
                {bussName:'2017年兵团民营企业招聘周暨师市创业成果展示会大型专',bussDate:'2019-10-12',bussPerson:'管理员'},
                {bussName:'八师石河子市召开2018年公共就业服务工作会议',bussDate:'2019-10-13',bussPerson:'管理员'},
            ],
            bussDate:'',
            bussName:'',
            id:'',
            pages:1,
            flag:true
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
      //查询
      search(){
          this.tableData='';
          this.tableData=  [{bussName:this.bussName,bussDate:this.bussDate,bussPerson:'管理员'}]
      },
      //预览
      view(){
        this.flag=!this.flag;
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
    width:180px;
    height:30px;
    border-radius: 5px;
    border:1px solid #ddd;
    
}
.table{
    margin-top:20px;
}
.footer{
    width:50%;
    margin:20px 600px;
}

/* */
.content-detail{
    margin:0 auto;
    width:1200px;
    font-family: "微软雅黑";
    color:gray;
}
.content-detail .item{
    text-align: center;
    margin:20px;
}
.content-detail p{
    text-align: left;
    line-height:30px;
}
.content-detail h4 {
    margin:20px;
}
.back{
  color:red;
  font-size:20px;
  margin-right:15px;
}
.back:hover{
  cursor: pointer;
}
.forward{
  font-size: 20px;
}
.forward:hover{
  font-size:20px;
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
