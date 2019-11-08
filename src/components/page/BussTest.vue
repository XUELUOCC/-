<!--  -->
<template>
  <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item><i class="el-icon-pie-rank"></i> 就业/培训管理</el-breadcrumb-item>
                 <el-breadcrumb-item><i class="el-icon-pie-chart"></i> 企业信息管理</el-breadcrumb-item>
                  <el-breadcrumb-item><i class="el-icon-pie-money"></i> 企业招聘查询</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container" >
            <div class="content-buss" v-if="flag" >
                <!--添加-->
                 <div class="form"  v-if="flags">
              <div class="ones">
                   <span>企业名称：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussName">
              </div>
                <div class="ones">
                   <span>职位薪资：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussMoney">
              </div>
                <div class="ones">
                   <span>公司地址：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussLocation">
              </div>
               <div class="ones">
                   <span>企业负责人电话：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussPhone">
              </div>
              <div class="ones">
                   <span>企业负责人：</span>
                    <input type="text" placeholder="请输入内容" v-model="bussHr">
              </div>
              <div class="ones">
                    <span>企业性质：</span>
                    <el-select v-model="bussQuality" slot="prepend" placeholder="请选择" style="width:214px">
                        <el-option label="计算机互联网/软件/自主研发" value="1"></el-option>
                        <el-option label="计算机硬件/研发" value="2"></el-option>
                        <el-option label="电子商务" value="3"></el-option>
                        <el-option label="网络科技" value="4"></el-option>
                        <el-option label="网络安全科技" value="5"></el-option>
            
                    </el-select>
              </div>
            
                <div class="ones">
                  <span >发布日期：</span>
                  <template>
                       <el-date-picker
                       style="width:214px"
                        v-model="bussDate"
                        type="date"
                        placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy-MM-dd">
                        </el-date-picker>
                  </template>
              </div>
              <div class="ones">
                   <el-button type="primary" icon="el-icon-search" @click="add">添加</el-button>
                  <el-button type="primary" icon="el-icon-search" >查询</el-button>
              </div>
            </div>
            <!--添加-->
            <div class="content-sum" v-if="flags">
                 <div class="top">
                    <ul>
                        <li v-for="item in dataList" :key="item.id" >
                            <div class="detail">
                                <span>{{item.name}}</span>
                                <span>{{item.money}}</span>
                                <span>{{item.location}}</span>
                                <span>{{item.hr}}</span>
                                <el-button type="primary" icon="el-icon-delete" @click="deletes(item.id)">删除</el-button>
                                <el-button type="primary" icon="el-icon-view" @click="view">预览</el-button>
                            </div>
                            <div class="detail-top">
                                <span>{{item.detail}}</span>
                                <span class="detail-title">计算机互联网/软件/自主研发</span>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="content-right" >
                    <div class="document">
                        <h3>基本信息</h3>
                    <ul>
                        <li @click="view"><span class="el-icon-tickets"></span> 公司信息</li>
                        <li @click="view"><span class="el-icon-menu"></span> 公司中心</li>
                        <li  @click="viewPerson"><span class="el-icon-bell"></span> 简历通知</li>
                        <li  @click="viewPerson"><span class="el-icon-question"></span> 接收简历</li>
                    </ul>
                    </div>

                    <div class="document">
                        <h3>通知</h3>
                    <ul>
                        <li  @click="viewPerson"><span class="el-icon-document"></span> 简历下载</li>
                        <li  @click="viewPerson"><span class="el-icon-message"></span> 简历消息</li>
                        <li><span class="el-icon-bell"></span> 职位沟通</li>
                        <li><span class="el-icon-message"></span> 发送信息</li>
                    </ul>
                    </div>    
                </div>
            </div>
                

            </div>

            <div class="person-center" v-if="!flag">
                <span class="back" @click="view"><span class="el-icon-back back"></span> 返回 </span>
                        <div class="one">
                        <h3>字节跳动</h3>
                        <div class="labels">
                            <span>责任心</span>
                            <span>适应能力</span>
                            <span>抗压能力</span> 
                        </div>
                       <p>
                            北京燕昆石油科技发展有限责任公司是中国石油勘探开发研究院西北分院在北京的科技研发中心，公司成立于1997年。现有各类研发专业技术人员140人，其中硕士以上人30人
                            ，高级工程师20人。主要承担中石油信息化项目的建设和海外勘探开发的油藏评价任务。
                            2002年以来北京燕昆石油公司参加了十多项中国石油集团公司的信息化建设项目及运维工作，其中包括“勘探与生产技术数据管理系统”、“油气水井生产数据管理”、“数据中心
                            建设”、“数据仓库系统”、“办公管理系统”、“电子邮件服务改进”、“网络安全域”、“信息技术标准制定”等。2010年开始，独立承担中石油“油气生产物联网”、“油气生产节能
                            节水系统”、“区域数据中心”等三项重、特大项目的管理和开发工作。目前，以三大项目为重点，强化与勘探、炼化和管道主营业务的融合，发展新技术，培育新成果，形成了
                            行业专家人才队伍，拥有了自主知识产权的软件产品和专利技术，为中国石油信息化建设发挥了重要作用。

                       </p>
                    </div>

                        <div class="one">
                        <h3>联系方式</h3>
                        <div class="labels">
                            <span>责任心</span>
                            <span>适应能力</span>
                            <span>抗压能力</span> 
                        </div>
                       <p>上班地址：北京海淀区牡丹北路14号环星大厦D座3层</p>
                    </div>
                    
                </div>

                <!--简历-->
                <div class="content-person" v-if="!flags">
                     <span class="back" @click="viewPerson"><span class="el-icon-back back"></span> 返回 </span>
                <div class="person">
                    <div class="person-top">
                        <div class="left">
                            <div class="person-img"></div>
                        </div>
                        <div class="center">
                            <h2>用户</h2>
                            <div class="person-bottom">
                                <p class="person-school">湖北大学知行学院 / 本科 / 应届毕业生 / 23岁</p>
                                <span class="el-icon-mobile-phone item">15071436368 </span>
                                <span class="el-icon-message">3196168302@qq.com</span>
                            </div>
                        </div>
                        <div class="right">
                            <span class="el-icon-edit edit ">编辑</span>
                        </div>
                    </div>

                    <div class="person-center">
                        <div class="onee">
                            <h3>自我描述</h3>
                           <div class="one-content">
                                <div class="labels">
                                <span>责任心</span>
                                <span>适应能力</span>
                                <span>抗压能力</span> 
                            </div>
                            <div class="icon-edit">
                                <span class="el-icon-edit edit ">{{msg}}</span>
                            </div>
                            </div> 
                            <div v-if="flag">
                                <p>
                                “性格活泼，乐于接触新事物，对于设定目标能够积极思考达成方法并实践。
                                有自媒体账号运营经验，喜欢从事运营岗位工作，希望能够通过在岗位上
                                输出价值的同时提高自己的专业技能和职场竞争力，成为一个优秀的职场人。”
                                </p> 
                            </div>
                             <!-- <textarea name="" id="" cols="30" rows="10" v-if="!flag"></textarea> -->
                        </div>

                         <div class="onee">
                            <h3>技能展示</h3>
                            <div class="one-content">
                                <div class="labels">
                                <span>责任心</span>
                                <span>适应能力</span>
                                <span>抗压能力</span> 
                            </div>
                            <div class="icon-edit">
                                <span class="el-icon-edit edit " >{{msg}}</span>
                            </div>
                            </div> 
                            <div v-if="flag">
                                <p>1、熟悉W3C标准，能熟练运用HTML、CSS进行合理的网页制作；</p> 
                                <p>2、熟练使用ES6、Vue/React/React Native等语言开发</p> 
                                <p>3、对交互体验、可用性、用户体验有一定程度的理解；</p> 
                                <p>4、有良好的责任心和团队合作能力，能承受较大的压力；</p> 
                            </div>
                            <!-- <textarea name="" id="" cols="30" rows="10" v-if="!flag"></textarea> -->
                        </div>

                         <div class="onee">
                            <h3>项目经验</h3>
                          <div class="one-content">
                                <div class="labels">
                                <span>责任心</span>
                                <span>适应能力</span>
                                <span>抗压能力</span> 
                            </div>
                            <div class="icon-edit">
                                <span class="el-icon-edit edit " >{{msg}}</span>
                            </div>
                            </div> 
                            <div v-if="flag">
                                <p>项目时间：2017-03到2017-07</p> 
                                <p>项目名称：高仿豆瓣电影</p>
                                <p>项目描述：</p>
                                <p>项目介绍</p>
                                <p>1、该项目主要用于提供最新的电影介绍及上映影片的影讯查询及电影搜索服务；</p>
                                <p>2、该项目分为首页、正在热映、即将上映、top250及搜索部分；</p>
                                <p>3、该项目由我独立完成；</p>
                                <p>4、该项目使用AngularJs实现无刷新式页面变化的单页面应用程序开发；</p>
                                <p>5、该项目使用豆瓣公开API；</p> 
                                <p>6、项目中利用路由匹配进行页面的跳转和电影搜索功能；</p>
                                <p>7、该项目使用JSONP跨域获取数据进行电影列表的展示。</p>
                                <p>我的职责</p>
                                <p>web前端开发</p> 
                            </div>
                            <!-- <textarea name="" id="" cols="30" rows="10" v-if="!flag"></textarea> -->
                        </div>

                         <div class="onee">
                            <h3>教育背景</h3>
                           <div class="one-content">
                                <div class="labels">
                                <span>责任心</span>
                                <span>适应能力</span>
                                <span>抗压能力</span> 
                            </div>
                            <div class="icon-edit">
                                <span class="el-icon-edit edit " >{{msg}}</span>
                            </div>
                            </div> 
                            <div v-if="flag">
                                <p>1998年3月至1998年7月，在山东省经济管理干部学院接受脱产培训。课程包括：企业管理学、市场营销、国际商法。</p>
                                <p>2001年9月至2002年7月，在上海外国语大学 日语 系进修语音学、音位学、形态学和词源学等语言学课程。</p>
                            </div>
                            <!-- <textarea name="" id="" cols="30" rows="10" v-if="!flag"></textarea> -->
                        </div>
                        
                    </div>
                   
                </div>
            </div>
            
             <div class="foot-bottom">
                <p>新疆联盛科技有限公司</p>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
         dataList:[
                {id:0,name:'字节跳动',money:'2-4万/月',location:'北京',hr:'王先生',detail:'2019-10-20'},
                {id:1,name:'深圳智空未来信息技术有限公司',money:'1-2.5万/月',location:'北京-海淀区',hr:'张先生',detail:'2019-10-20'},
                {id:2,name:'亚信科技（中国）有限公司',money:'2-4万/月',location:'北京',hr:'李先生',detail:'2019-10-20'},
                {id:3,name:'睿智合创（北京）科技有限公司',money:'1.5-2万/月',location:'北京',hr:'钱先生',detail:'2019-10-20'},
                {id:4,name:'北京东方国信科技股份有限公司',money:'2-4万/月',location:'北京-海淀区',hr:'吴女士',detail:'2019-10-20'},
                {id:5,name:'北京致远互联软件股份有限公司',money:'0.8-1万/月',location:'北京-朝阳区',hr:'周女士',detail:'2019-10-20'},
            ],
            flag:true,
            input:'',
            bussDate:'',
            bussQuality:'',
            bussName:'',
            bussMoney:'',
            bussLocation:'',
            bussPhone:'',
            bussHr:'',
            msg:'编辑',
            flags:true
    }
  },
  methods:{
      view(){
          this.flag=!this.flag;
      },
       viewPerson(){
          this.flags=!this.flags;
          console.log(this.flags)
          console.log("111")
      },
      add(){
          if(this.bussName=='' || this.bussMoney=='' || this.bussLocation=='' || this.bussHr=='' || this.bussDate==''){
              return false;
          }
          var newData={id:this.dataList.length+1,name:this.bussName,money:this.bussMoney,location:this.bussLocation,hr:this.bussHr,detail:this.bussDate}
          this.dataList.push(newData);
      },
        search(){
        //   this.tableData='';
        //   this.tableData=[{id:0,name:'字节跳动',money:'2-4万/月',location:'北京',hr:'王先生',detail:'2019-10-20'},]
      },
      deletes(index){
          this. dataList.splice(index,1);
      }
  }
}

</script>

<style  scoped>
.content-buss{
    width:100%;
    height:auto;
}
.top{
    width:1190px;
    height:auto;
    float: left;
    border:1px solid #ddd;
}
.content-right{
    float: left;
    width:200px;
    height:auto;
    margin-left:20px;
    /* margin-top:10px; */
    border:1px solid #ddd;
}
ul{
    list-style: none;
    width:100%;
    height:auto;
}
.top  ul li{
    width:100%;
    height:100px;
    /* border-bottom:1px solid #ddd; */
    border:1px solid #ddd;
}
.top ul li:hover{
    cursor: pointer;
    background-color: #d1d4db;
    opacity:0.4;
}
.top  ul li .detail{
    width:100%;
    height:40%;
    margin-top:20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* border:1px solid black; */
}
.top  ul li .detail span{
    width:26%;
    height:100%;
}
.top  ul li .detail-top{
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    height:40%;
    width:100%;

    padding-left:20px;
}
.top  ul li .detail-top .detail-title{
    margin-left:12%;
}

.content-right .document h3{
    padding-left:20px;
}
.content-right .document ul li{
    width:100%;
    height:50px;
    line-height:50px;
    padding-left:30px;
    border:0;
}
.content-right .document ul li:hover{
    cursor: pointer;
}
.content-right .document ul li span{
    color:#ddd;
    font-size: 22px;
}
.content-right .document ul li span:hover{
    color:#00B38A;
    cursor: pointer;
}
.content-right .document ul li:hover{
    color:#00B38A;
    cursor: pointer;
}
.content-sum{
    width:100%;
    height:auto;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.person .center h2{
    width: 100%;
    height:60px;
    text-align: left;
    padding-top:50px;
}
.item{
    margin-right:25px;
}
.person-school{
    margin:0 0 20px;
}

.person-center{
    margin-top:50px;
    /* padding-left:70px; */
    width:990px;
    height:auto;
    border:1px solid #ddd;
}
.one{
    width:80%;
    height:auto;
    margin:20px auto;
}
.one h3::before{
    content:' |';
    /* width:1.5em; */
    /* height:2px; */
    color:#00B38A;
    font-size:20px;
}
.one p{
    margin-top:10px;
    line-height:28px;
}
.labels{
    margin-top:20px;
}
.labels span{
    display: inline-block;
    width:auto;
    padding:0 3px;
    height:22px;
    border-radius: 20px;
    border:1px solid #ddd;
    font-size:14px;
    line-height:22px;
    margin-right:20px;
}
.labels span:hover{
    cursor: pointer;
    color:#fff;
    background-color:#00B38A;
}

.btns{
    width:50%;
    height:50%;
    margin-left:180px;
    margin-top:20px;
}
.btn-item{
    width:155px;
    height:45px;
    font-size:18px;
}

.back{
    color: #409eff;;
    /* margin-left:100px; */
    margin-bottom:20px;
    margin-top:20px;
}
.back:hover{
    color:#00B38A;
    cursor: pointer;
}

.form{
    width:100%;
    height:auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap:wrap;
    margin-bottom:50px;
}
.ones{
    width:30%;
    height:40px;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-left:10px;
}
.ones input{
    width:212px;
    height:30px;
    border-radius: 5px;
    border:1px solid #ddd; 
}
.ones span{
    display: inline-block;
    width:160px;
    height:30px;
    text-align:center;
}

/*简历*/
.person{
    width:1200px;
    height:100%;
    /* margin:0 auto; */
    border:1px solid #ddd;
}
.person-top{
    width:100%;
    height:200px;
    background-color:#fafafa;
    border-bottom:1px solid #ddd;
    display:flex;
    justify-content: space-between;
    align-items: flex-start;
}
.person .left,.person .right,.person .right{
    flex:1;
    height:100%;
    /* border:1px solid red; */
}
.person .left .person-img{
    width:100px;
    height:100px;
    border-radius: 50%;
    background-color:cornflowerblue;
    margin:50px  0px 0 70px;
}
.person .center h2{
    width: 100%;
    height:60px;
    text-align: left;
    padding-top:50px;
}
.item{
    margin-right:25px;
}
.person-school{
    margin:0 0 20px;
}
.edit{
    position: relative;
    left:67%;
    top:25%;
    color:#00B38A;
}
.edit:hover{
    cursor:pointer;
}
.person-center{
    /* margin-top:50px; */
    /* padding-left:70px; */
    width:100%;
    height:auto;
}
.onee{
    width:80%;
    height:auto;
    margin:20px auto;
}
.onee h3::before{
    content:' |';
    /* width:1.5em; */
    /* height:2px; */
    color:#00B38A;
    font-size:20px;
}
.onee textarea{
    border:1px solid #ddd;
    width:100%;
    height:auto;
    margin-top:20px;
    font-size: 24px;
}
.onee p{
    width:80%;
    margin-top:20px;
    line-height:28px;
}
.labels{
    margin-top:20px;
    /* float: left; */
}
.labels span{
    display: inline-block;
    width:auto;
    padding:0 3px;
    height:22px;
    border-radius: 20px;
    border:1px solid #ddd;
    font-size:14px;
    line-height:22px;
    margin-right:20px;
}
.labels span:hover{
    cursor: pointer;
    color:#fff;
    background-color:#00B38A;
}
.icon-edit{
    float: right;
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
