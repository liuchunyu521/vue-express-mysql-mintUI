import Vue from 'vue'
import Router from 'vue-router'
import register from '@/components/register'//添加用户
import login from '@/components/login'//登录
import main from '@/components/main'//主页
import chat from '@/components/chat'//聊天页
import friendscircle from '@/components/friendscircle'//朋友圈
import me from '@/components/me'//我的
import addressbook from '@/components/addressbook'//通讯录

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/',
      name: 'login',
      component: login
    },{
    	path:'/main',
    	name:'main',
    	component:main,
    	children: [  
		    { 
		    	path: "/",
		    	name: '/chat',
		    	component: chat 
		    },
		    {
		    	path:'/friendscircle',
		    	name:"/friendscircle",
		    	component:friendscircle
		    },
		    {
		    	path:'/me',
		    	name:'/me',
		    	component:me
		    },
		    {
		    	path:'/addressbook',
		    	name:'/addressbook',
		    	component:addressbook
		    }
    	]
    }
  ]
})
