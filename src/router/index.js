import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/views/Home.vue'

//一次性加载。 下面 routes 中为延迟加载
// import Profile from 'pages/Profile'
// import Posts from 'pages/Posts'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'home',
    redirect: '/dashboard',    
  }, {
    path: '/index',
    name: 'index',
    component: () => import('@/layouts/window.vue'),
  },  {
    path: '/dashboard',
    component: () => import('@/layouts/dashboard.vue'),
  }, {
    path: '/dashboarddemo', //延迟加载
    component: () => import('@/pages/Dashboard.vue'),
  }, {
    path: '/split-demo',
    component: () => import('@/pages/split-demo.vue'),
  }, {
    path: '/window',
    name: 'window',
    component: () => import('@/layouts/window.vue'),
  }, {
    path: '/tree-layout',
    name: 'tree-layout',
    component: () => import('@/layouts/tree-layout.vue'),
  }, {
    path: '/layoutlet',
    name: 'layoutlet',
    component: () => import('@/layouts/layoutlet.vue'),
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
