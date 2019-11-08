<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="onRoutes"
            :collapse="collapse"
            background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff"
            unique-opened
            router
        >
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
export default {
    data() {
        return {
            collapse: false,
            items: [
                {
                    icon: 'el-icon-lx-home',
                    index: '0',
                    title: '系统设置',
                    subs:[
                        {
                            index:'informCollect',
                            title:'用户管理'
                        },
                        {
                            index:'dashboard',
                            title:'权限菜单管理'
                        },
                        {
                            index:'menuConfig',
                            title:'菜单配置'
                        },
                        {
                            index:'userLog',
                            title:'日志查询'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-cascades',
                    index: '2',
                    title: '门户管理',
                    subs:[
                        {
                            index:'assign',
                            title:'栏目维护'
                        },
                        {
                            index:'assignInform',
                            title:'信息发布'
                        }
                    ]
                },
               
                {
                    icon: 'el-icon-lx-calendar',
                    index: '4',
                    title: '资金监管职位',
                    subs: [
                        {
                            index: 'bussInform',
                            title: '企业信息管理'
                        },
                        {
                            index: 'InformSum',
                            title: '用工信息管理',
                        },
                        {
                            index: 'commonSubsidy',
                            title: '公益性补贴管理'
                        },
                        {
                            index:'flexibleBuss',
                            title:'灵活就业补贴管理'
                        },
                        {
                            index:'socialMoney',
                            title:'企业社保管理'
                        }
                    ]
                },
                {
                    icon: 'el-icon-lx-emoji',
                    index: '5',
                    title: '统计大厅',
                    subs:[
                        {
                            index:'personGray',
                            title:'经费发放'
                        },
                        {
                            index:'bussGray',
                            title:'资金监管职位统计'
                        },
                        {
                            index:'bussList',
                            title:'精准就业辅助统计'
                        }
                    ]
                },
                {
                    icon: 'el-icon-rank',
                    index: '7',
                    title: '就业/培训管理',
                    subs: [
                        {
                            index:'8',
                            title:'培训机构管理',
                            subs:[
                                {
                                    index: 'personManage',
                                    title: '培训机构补贴管理'
                                }
                            ]
                        },
                        {
                            index:'9',
                            title:'企业信息管理',
                            subs:[
                                {
                                    index:'bussTest',
                                    title:'企业招聘查询'
                                }
                            ]
                        }
                    ]
                },
               
            ]
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    created() {
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    }
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
