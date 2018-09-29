<template>
 
  <div class="hello">
  	
  	<div class="loginmain">
  		<img style="width: 200px;height: 200px;border-radius: 100%;margin-top: 40px;" src="../assets/pengyou.jpg">
    	<h1>{{ msg }}</h1>
    	<div class="loginw">
	    	<el-input v-model="passname" placeholder="passname"></el-input>
	    </div>
	    <div class="loginw">
	    	<el-input v-model="password" placeholder="password"></el-input>
	    </div>
	    
	    <mt-button style="margin-top: 20px;" size="normal" type="primary" @click="addUser">登录</mt-button>
	    <mt-button style="margin-top: 20px;" size="normal"  @click="add()">注册</mt-button>
  	</div>
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        msg: '晒一晒',
        passname: '',
        password: ''
      }
    },
    methods: {
    	add(){
    		this.$router.push({
    			path:"/register"
    		})
    	},
      addUser() {
      	var _this=this;
      	var passname = this.passname;
        var password = this.password;
        this.$http.post('/api/user/login', {
          passname: passname,
          password: password
        },{}).then((res) => {
        	if(res.data.flag==true){
        		Toast({
				  message: '恭喜你，登录成功',
				  position: 'middle',
				  duration: 1000
				});
        		setTimeout(function(){
        			_this.$router.push({
                        path: "/main"
                    });
        		},1000)
        		
        	}else {
        		Toast({
				  message: res.data.msg,
				  position: 'middle',
				  duration: 1000
				});
        	}
          
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.hello {
		position: relative;
		
		height: 100%;
	}
	.loginmain {
		position: relative;
		top: 0px;
		bottom: 0px;
		width: 100%;
		height: 100%;
		text-align: center;
		background:url(../assets/loginbg.jpg) no-repeat;
		background-size: 100% 100%;
	}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.loginw {
	width: 200px;
	margin-bottom: 10px;
	left: 50%;
	position: relative;
	margin-left: -100px;
}
.loginwrap {
	text-align: center;

	
}
</style>
