import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Home from '@/components/Home'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
      path:'/home',
      name:'home',
      component: Home,
      children:[
        {path:'/user',name:'user',component:(resolve)=>require(['../components/User.vue'],resolve)}
      ]
    },{
    	path:'/index',
    	name:'Index',
    	component:Index,
      children: [
      {path: '/cs',name:'controlsystem',component: (resolve) => require(['../components/ControlSystem.vue'],resolve) },
      {path: '/build',name:'building',component: (resolve) => require(['../components/Building.vue'],resolve) },
      {path: '/device',name:'device',component: (resolve) => require(['../components/Device.vue'],resolve) },
      {path: '/config',name:'config',component: (resolve) => require(['../components/SystemConfig.vue'],resolve) }
    ]
    }
  ]
})
