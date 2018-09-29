<template>
	<div id="appfooter">
		<mt-navbar v-model="selected">
		  <mt-tab-item id="/main">
		  	<div class="iconfont icon-liaotian"></div>
		  	聊天
		  </mt-tab-item>
		  <mt-tab-item id="/addressbook">
		  	<div class="iconfont icon-chat-communication-office-bubble-talk-business-aadbde"></div>
		  	通讯录</mt-tab-item>
		  <mt-tab-item id="/friendscircle">
		  	<div class="iconfont icon-pengyouquan"></div>
		  	朋友圈</mt-tab-item>
		  <mt-tab-item id="/me">
		  	<div class="iconfont icon-wode"></div>
		  	我的</mt-tab-item>
		</mt-navbar>
	</div>
</template>

<script>
	import { Navbar, TabItem } from 'mint-ui';
	
	export default  {
		name:'appfooter',
		data(){
			return{
				selected:'/main'
			}
		},
		watch:{
			selected(val, oldVal){
				var _this=this;
				this.$emit('footervalue',val)
				_this.$router.push({
                    path: val
                });
			}
		},
		component:{
			Navbar, TabItem
		},
		methods:{
			
		},
		created(){
			   
		}
	}
</script>

<style>
	#appfooter {
	width: 100%;
	position: fixed;
	left: 0px;
	bottom: 0px;
}

.mint-navbar {
	background: #d3e5f9;
}
.mint-navbar .mint-tab-item.is-selected {
	color: #d3e5f9;
	background: #ff8f12;
	border-bottom: none;
	border-radius:6px;
}
.mint-navbar .mint-tab-item {
	padding: 10px 0;
}
</style>