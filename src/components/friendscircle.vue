<template>
	<!--朋友圈-->
	<div id="friends">
		<div style="height: 200px;">
			<mt-swipe :auto="2000">
			  <mt-swipe-item><img style="height: 200px;width: 100%;" src="../assets/friendsbanner/liu1.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img style="height: 200px;width: 100%;" src="../assets/friendsbanner/liu2.jpg"/></mt-swipe-item>
			  <mt-swipe-item><img style="height: 200px;width: 100%;" src="../assets/friendsbanner/liu3.jpg"/></mt-swipe-item>
			</mt-swipe>
		</div>
		<div class="contain">
			<ul>
				<li v-for="item in frienddata">
					<div class="body">
						<div class="logo">
							<img style="width: 45px;height: 45px;" :src="'data:image/jpeg;base64,'+item.img">
						</div>
						<div class="text">
							<div class="title">{{item.title}}</div>
							<div class="txt">{{item.details}}</span></div>
							<img style="width: 60%;" :src="'data:image/jpeg;base64,'+item.img"/>
							<div class="tm">
								<div class="fl">{{item.timedetails}}</div>
								<!--<div class="fr">评论</div>-->
							</div>
							<!--<div class="cmt">
								<div class="fav line"><i class="iconfont icon-dianzan"></i>小豪,李小爱</div>
								<div><span>小豪：</span>什么</div>
							</div>-->
						</div>
					</div>
				</li>
			</ul>
			
		</div>
	</div>
</template>

<script>
	import { Swipe, SwipeItem } from 'mint-ui';
	export default {
		name:"friends",
		data(){
			return{
				frienddata:[]
			}
		},
		methods:{
			init(){
				this.$http.post('/api/user/friends', {
		         
		        },{}).then((res) => {
		        	if(res.data.code==true){
		        		this.frienddata=res.data.data;
		        	}
		        })
			}
		},
		created(){
			this.init();
		}
	}
</script>

<style>
	
.contain ul{ }
.contain ul li{ border-bottom: 1px solid #d1d1d1;}
.contain .body{ margin: 10px 10px; overflow:hidden;}
.contain .body .logo{width:45px; float: left;}
.contain .body .logo img{ float: left; width: 45px;}

.contain .body .text{ float: left; width: 85%; text-align: left; padding-left: 10px;}
.contain .body .text .my-gallery{ overflow: hidden;}
.contain .body .text .my-gallery div{ width: 28%; overflow: hidden; float: left; margin-top: 5px;margin-right: 5px; }
.contain .body .text .my-gallery img{  }
.contain .body .text .title{ color: #576788; font-size: 14px;}
.contain .body .text .txt{color: #323232; font-size: 12px;}
.contain .body .text .tm{font-size: 12px;    overflow: hidden;}
.contain .body .text .tm .fl{float: left;  padding-left: 5px;}
.contain .body .text .tm .fr{float: right; padding-right: 15px;}
.contain .body .text .cmt{ color: #444444; font-size: 12px;    background-color: #eeeeee; margin-top: 5px; padding: 5px;}
figure{
 -webkit-margin-before: 0;
    -webkit-margin-after: 0;
    -webkit-margin-start: 0;
    -webkit-margin-end: 0;
}
</style>