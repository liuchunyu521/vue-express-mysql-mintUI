<template>
  <div id="app">
  	<!--header-->
  	<header-nav :header='msg'></header-nav>
		<div class="section">
  			<router-view/>
  		</div>
     <!--footer-->
    <footer-nav @footervalue="footerpath" class="footerstyle"></footer-nav>
  </div>
</template>

<script>
	import { Search } from 'mint-ui';
	import headerNav from './header';
	import footerNav from './footer';
  export default {
    name: 'app',
    data () {
      return {
      	msg:''
      }
    },
     components:{
	  	headerNav,footerNav
	  },
    methods: {
      init(){
      	this.$http.post('/api/user/login', {
          passname: passname,
          password: password
        },{}).then((res) => {
        	if(res.data.flag==true){
        		this.$message({
		          message: '恭喜你，登录成功',
		          type: 'success'
		        });
        	}
          
        })
      },
      footerpath(res){
      	this.pathfun(res);
      },
      pathfun(path){
      	switch(path){
		   	case '/main':
		   		this.msg="聊天"
		   		break;
		   	case '/friendscircle':
		   		this.msg="朋友圈"
		   		break;
		   	case '/me':
		   		this.msg="我的"
		   		break;
		   	case '/addressbook':
		   		this.msg="通讯录"
		   		break;
		   	default:
		   		this.msg="晒一晒"
		   }
      }
    },
    created(){
       var path=this.$route.path;
	   this.pathfun(path)
    
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
	.mint-header {
		background: #ff8f12;
		height: 50px;
	}
	.section {
		position: relative;
		top: 50px;
	}
</style>
