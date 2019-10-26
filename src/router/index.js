import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Default from '@/components/Default'
import Home from '@/components/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{//登录后初始页
      path:'/home',
      name:'home',
      component: Home,
      children:[
        {path:'/in',name:'in',component:(resolve)=>require(['../components/User.vue'],resolve)},
      ]
    },{
      path: '/default',
      name:'default',
      component: Default,
      children:[
        {path:'/cmd',name:'command',component:(resolve)=>require(['../components/Command.vue'],resolve)},
        {path:'/user',name:'user',component:(resolve)=>require(['../components/User.vue'],resolve)},
        {path: '/role',name:'role',component: (resolve) => require(['../components/Role.vue'],resolve) },
        {path: '/build',name:'building',component: (resolve) => require(['../components/Building.vue'],resolve) },
        {path: '/device',name:'device',component: (resolve) => require(['../components/Device.vue'],resolve) },
        {path: '/config',name:'config',component: (resolve) => require(['../components/SystemConfig.vue'],resolve) },
        {path: '/password',name:'password',component: (resolve) => require(['../components/Password.vue'],resolve) },
      ]
    },{//有侧边栏，进入系统初始页
    	path:'/index',
    	name:'Index',
    	component:Index,
      children: [
        {path: '/cs',name:'controlsystem',component: (resolve) => require(['../components/ControlSystem.vue'],resolve) },
    ]
    }
  ]
})
