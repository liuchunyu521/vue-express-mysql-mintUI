<template>
  <div id="app1">
  	
    <router-view/>
    
  </div>
</template>

<script>
	export default {
	  name: 'app1',
	  data(){
	  	return{
	  		
	  	}
	  },
	 
	  methods:{
	  	
	  },
	  created(){
	   
	   
	  }
	}
</script>

<style>
body {
	/*background: lightskyblue;*/
	padding: 0px;
	margin: 0px;
	height: 100%;
}
html {
	width: 100%;
	height: 100%;
}
#app1 {
	height: 100%;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
a, label, button, input, select {
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}

* {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}

a {
    text-decoration: none;
    color: #000;
}

img {
    border: 0;
}

body {
    background: #fff;
    color: #666;
}

html, body, div, dl, dt, dd, ol, ul, li, h1, h2, h3, h4, h5, h6, p, blockquote, pre, button, fieldset, form, input, legend, textarea, th, td {
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
    color: #08acee;
}

button {
    outline: 0;
}

img {
    border: 0;
}

button,input,optgroup,select,textarea {
    margin: 0;
    font: inherit;
    color: inherit;
    outline: none;
}

li {
    list-style: none;
}

a {
    color: #666;
}

.clearfix::after {
    clear: both;
    content: ".";
    display: block;
    height: 0;
    visibility: hidden;
}

</style>
