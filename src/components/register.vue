<template>
 
  <div class="hello">
    <mt-header title="注册新用户">
	  <router-link to="/" slot="left">
	    <mt-button icon="back"></mt-button>
	  </router-link>
	</mt-header>
    	<div id="register" style="margin-top: 50px;">
    		<div class="loginw">
		    	<el-input v-model="passname" placeholder="passname"></el-input>
		    </div>
		    <div class="loginw">
		    	<el-input v-model="password" placeholder="password"></el-input>
		    </div>
	    <mt-button style="margin-top: 40px;" size="normal" type="primary" @click="addUser">注册</mt-button>
    	</div>
  </div>
</template>

<script>
	import { Header,Toast } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
        passname: '',
        password: ''
      }
    },
    methods: {
      addUser() {
        var passname = this.passname;
        var password = this.password;
        this.$http.post('/api/user/addUser', {
          passname: passname,
          password: password
        },{}).then((res) => {
          if(res.data.data.code=='0'){
          	Toast({
				  message: '恭喜你，用户添加成功',
				  position: 'middle',
				  duration: 5000
				});
          }else{
          	Toast({
				  message: '用户添加失败',
				  position: 'middle',
				  duration: 5000
				});
          }
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.mint-header {
		background: #ff7802;
	}
	#register {
		text-align: center;
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
