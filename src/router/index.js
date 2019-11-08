import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/login'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '自述文件' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '权限菜单管理' }
                },
                {
                    path: '/menuConfig',
                    component: () => import(/* webpackChunkName: "menuConfig" */ '../components/page/MenuConfig.vue'),
                    meta: { title: '菜单配置' }
                },
                {
                    path: '/userLog',
                    component: () => import(/* webpackChunkName: "userLog" */ '../components/page/UserLog.vue'),
                    meta: { title: '日志查询' }
                },
                {
                    path: '/personGray',
                    component: () => import(/* webpackChunkName: "personGray" */ '../components/page/PersonGray.vue'),
                    meta: { title: '经费发放' }
                },
                {
                    path: '/bussGray',
                    component: () => import(/* webpackChunkName: "personGray" */ '../components/page/BussGray.vue'),
                    meta: { title: '资金监管各职位统计' }
                },
                {
                    path: '/assign',
                    component: () => import(/* webpackChunkName: "assign" */ '../components/page/Assign.vue'),
                    meta: { title: '栏目维护'}
                },
                {
                    path: '/assignInform',
                    component: () => import(/* webpackChunkName: "assignInform" */ '../components/page/AssignInform.vue'),
                    meta: { title: '信息发布' }
                },
                {
                    path: '/bussList',
                    component: () => import(/* webpackChunkName: "bussList" */ '../components/page/BussList.vue'),
                    meta: { title: '精准就业辅助统计' }
                },
                {
                    path: '/informSum',
                    component: () => import(/* webpackChunkName: "informSum" */ '../components/page/InformSum.vue'),
                    meta: { title: '用工信息统计' }
                },
                {
                    path: '/bussInform',
                    component: () => import(/* webpackChunkName: "bussInform" */ '../components/page/BussInform.vue'),
                    meta: { title: '企业信息管理' }
                },
                {
                   
                    path: '/flexibleBuss',
                    component: () => import(/* webpackChunkName: "flexibleBuss" */ '../components/page/FlexibleBuss.vue'),
                    meta: { title: '灵活就业补贴统计' }
                },
                {
                 
                    path: '/socialMoney',
                    component: () => import(/* webpackChunkName: "socialMoney" */ '../components/page/SocialMoney.vue'),
                    meta: { title: '企业社保补贴统计' }
                },
                {
                  
                    path: '/commonSubsidy',
                    component: () => import(/* webpackChunkName: "commonSubsidy" */ '../components/page/CommonSubsidy.vue'),
                    meta: { title: '公益性补贴统计' }
                },
                {
                  
                    path: '/informCollect',
                    component: () => import(/* webpackChunkName: "informCollect" */ '../components/page/InformCollect.vue'),
                    meta: { title: '用户管理' }
                },
                {
                  
                    path: '/personManage',
                    component: () => import(/* webpackChunkName: "personManage" */ '../components/page/PersonManage.vue'),
                    meta: { title: '培训机构补贴管理' }
                },
                {
             
                    path: '/bussTest',
                    component: () => import(/* webpackChunkName: "bussTest" */ '../components/page/BussTest.vue'),
                    meta: { title: '企业招聘查询' }
                },
               
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue')
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
