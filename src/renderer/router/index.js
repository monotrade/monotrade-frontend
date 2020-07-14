import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default,
      meta: {
            menuShow: false,
        }
    },
    {
      path: '*',
      redirect: '/',
      meta: {
            menuShow: false,
      }
    },

    {
        path: '/',
        redirect: '/login',
        meta: {
            menuShow: false
        }
    },
    {
        path: '/login',
        name: 'login',
        component: require('@/components/LandingPage').default,
        meta: {
            menuShow: false,
        }
    },
   
    {
        path: '/system',
        name: 'system',
        //component: Home,
        meta: {
            menuShow: true,          // 是否在导航栏中显示
            menuName: '组件',     // 导航栏中显示的名称 
        },
        children: [
            {
                path: '/system/organization',
                name: 'organization',
                component: require('@/components/LandingPage').default,
                meta: {
                    menuShow: true,
                    menuName: '组织架构',
                },
                children: [
                  {
                      path: '/system/organization',
                      name: 'organization',
                      component: require('@/components/LandingPage').default,
                      meta: {
                          menuShow: true,
                          menuName: '组织架构',
                      }
                  },
                  {
                      path: '/system/userManage',
                      name: 'userManage',
                      component: require('@/components/LandingPage').default,
                      meta: {
                          menuShow: true,
                          menuName: '用户管理',
                      }
                  }]
            },
            {
                path: '/system/userManage',
                name: 'userManage',
                component: require('@/components/LandingPage').default,
                meta: {
                    menuShow: true,
                    menuName: '用户管理',
                }
            },
            {
                path: '/system/systemSet',
                name: 'systemSet',
                component: require('@/components/LandingPage').default,
                meta: {
                    menuShow: true,
                    menuName: '系统设置',
                }
            },
            {
                path: '/system/operationLog',
                name: 'operationLog',
                component: require('@/components/LandingPage').default,
                meta: {
                    menuShow: true,
                    menuName: '操作日志',
                }
            },
        ]
    },
  ]
})
