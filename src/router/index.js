import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

//一次性加载。 下面 routes 中为延迟加载
import MainLayout from '@/layouts/main-layout1.vue'

// import Profile from 'pages/Profile'
// import Posts from 'pages/Posts'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'index',
    component: MainLayout,
    children: [
      {
        path: '/', //延迟加载
        component: () => import('@/pages/Dashboard.vue'),
      }, {
        path: '/shopping-cart',
        component: () => import('@/pages/shopping-cart.vue'),
      }, {
        path: '/split-demo',
        component: () => import('@/pages/split-demo.vue'),
      }, {
        path: '/split-viewui',
        component: () => import('@/pages/split-viewui.vue'),
      }
    ]
  },  {
    // layout demo
    path: '/user',
    name: 'default',
    // 我们使用上面导入的/src/layouts/User组件
    // 将组件指向QLayout定义文件的目录
    component: MainLayout,

    // 嘿，它有子路由，并且在它里面用户具有<router-view>；
    // 那真的是一个布局！

    // 现在我们定义子路由。
    // 通过使用<router-view>占位符
    //（需要在布局中指定它）,
    // 这些子路由正在自动注入（上面的）布局

    //可以访问 http://localhost:8080/user/profile 
    //和 http://localhost:8080/user/posts
    children: [
      // Profile page
      {
        path: 'profile', // 在这里，路由/user/profile
        component: () => import('@/pages/Profile.vue') // 我们参考上面导入的/src/pages/Profile.vue
      },

      // Posts page
      {
        path: 'posts', // 在这里，路由/user/posts
        component: () => import('@/pages/Posts.vue') , // 我们参考上面导入的/src/pages/Posts.vue
      }
    ]

  }, {
    path: '/home',
    name: 'Home',
    component: Home
  }, {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },

  // add from old
  {
    path: '*',
    redirect: '/',
    meta: {
          menuShow: false,
    }
  },
];


const router = new VueRouter({
  mode: "history",
  routes
})

export default router
