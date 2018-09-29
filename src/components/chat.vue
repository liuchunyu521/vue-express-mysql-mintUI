<template>
	<div id="chat">
		<div style="height: 45px;">
    		<mt-search v-model="value"></mt-search>
		</div>
		<div>
			<div class="aui-flex-list">
				
				<a href="javascript:;" class="aui-flex-list-item" v-for="item in chatData">
		            <div class="aui-flex-list-image">
		                <img style="height: 45px;width: 45px;" :src="'data:image/jpeg;base64,'+item.img" alt="">
		                <span class="aui-badge"></span>
		            </div>
		            <div class="aui-flex-list-text">
		                <h4>{{item.title}}</h4>
		                <p>{{item.details}}</p>
		            </div>
		            <span class="aui-flex-list-right">{{item.time}}</span>
		        </a>
			</div>
			
		</div>
    	
    	
	</div>
</template>

<script>
	import { CellSwipe } from 'mint-ui';
	export default {
		name:'chat',
		data(){
			return {
				value:'',
				chatData:''
			}
		},
		methods:{
			init(){
				this.$http.post('/api/user/chat', {
		         
		        },{}).then((res) => {
		        	if(res.data.code==true){
		        		this.chatData=res.data.data;
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
	
	.aui-flex-list {
    position: relative;
    margin-top: -1px;
}

.aui-flex-list-item {
    padding: 10px 14px;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    color: #000000;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    position: relative;
}

.aui-flex-list-image {
    margin-right: 10px;
    width: 45px;
    height: 45px;
    line-height: 60px;
    text-align: center;
    position: relative;
}

.aui-flex-list-image img {
    width: 100%;
    max-height: 100%;
    vertical-align: top;
    display: block;
    border: none;
    border-radius: 4px;
}

.aui-flex-list-text {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    min-width: 0;
}

.aui-flex-list-text h4 {
    font-weight: 400;
    font-size: 15px;
    width: auto;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    word-wrap: normal;
    word-wrap: break-word;
    word-break: break-all;
}

.aui-flex-list-text p {
    padding-top: 5px;
    color: #9b9b9b;
    font-size: 12px;
    line-height: 1.2;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    padding-right: 40px;
}

.aui-flex-list-item:before {
    content: " ";
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    height: 1px;
    border-top: 1px solid #E5E5E5;
    color: #E5E5E5;
    -webkit-transform-origin: 0 0;
    transform-origin: 0 0;
    -webkit-transform: scaleY(0.5);
    transform: scaleY(0.5);
    left: 15px;
}

.aui-red-text {
    color: #b71414 !important;
}

.aui-blue-text {
    color: #576b95 !important;
}

.aui-badge {
    display: inline-block;
    padding: .15em .4em;
    min-width: 8px;
    border-radius: 18px;
    background-color: #F43530;
    color: #FFFFFF;
    line-height: 1.2;
    text-align: center;
    font-size: 12px;
    vertical-align: middle;
    padding: .4em;
    min-width: 0;
    position: absolute;
    right: -3px;
    top: -3px;
}

.aui-flex-list-right {
    padding-right: 13px;
    position: relative;
    text-align: right;
    font-size: 12px;
    position: absolute;
    color: #b2b2b2;
    right: 0;
    top: 22px;
}

</style>