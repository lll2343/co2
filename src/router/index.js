import Vue from 'vue'
import Router from 'vue-router'
import dingzhikaifa from '@/components/dingzhikaifa'
import about from '@/components/about'
import home from '@/components/home'
import changjianwenti from '@/components/changjianwenti'
import login from '@/components/login'
import register from '@/components/register'
import shujuchanpin from '@/components/shujuchanpin'
import zhucexuzhi from '@/components/zhucexuzhi'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/dingzhikaifa',
      name: 'dingzhikaifa',
      component: dingzhikaifa
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/changjianwenti',
      name: 'changjianwenti',
      component: changjianwenti
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/shujuchanpin',
      name: 'shujuchanpin',
      component: shujuchanpin
    },
    {
      path: '/zhucexuzhi',
      name: 'zhucexuzhi',
      component: zhucexuzhi
    }
  ]
})
