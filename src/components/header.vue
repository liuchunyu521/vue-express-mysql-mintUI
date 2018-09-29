<template>
  <div class="hello">
  	<mt-header fixed :title="header"></mt-header>
  	
  </div>
</template>

<script>
  import { Toast } from 'mint-ui';
  export default {
    name: 'hello',
    data () {
      return {
      
      }
    },
    props:['header'],
    methods: {
     
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.aui-navBar {
	    height: 44px;
	    position: relative;
	    background-color: #36353b;
	    color: #fff;
	    text-align: center;
	    line-height: 44px;
	}
	.aui-navBar_r {
		position: absolute;
		top: 0px;
		right: 16px;
		font-size: 24px;
		color: #fff;
	}
	
	.aui-footer {
	    width: 100%;
	    position: relative;
	    z-index: 100;
	    display: -webkit-box;
	    display: -webkit-flex;
	    display: -ms-flexbox;
	    display: flex;
	    -webkit-box-align: center;
	    -webkit-align-items: center;
	    -ms-flex-align: center;
	    align-items: center;
	    padding: 7px 5px 7px 5px;
	    background-color: #f2f0f0;
	}
	.mint-header.is-fixed {
		z-index: 999;
	}
</style>
