<template>
	<!--我的-->
	<div id="addressbook">
		<mt-index-list>
		  <mt-index-section index="A">
		    <mt-cell title="爱华"></mt-cell>
		    <mt-cell title="爱琴海"></mt-cell>
		    <mt-cell title="爱爱"></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="B">
		    <mt-cell title="毕姥爷"></mt-cell>
		    <mt-cell title="毕尚婷"></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="C">
		    <mt-cell title="曹志勋"></mt-cell>
		    <mt-cell title="曹尚妮"></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="D">
		    <mt-cell title="狄世豪"></mt-cell>
		    <mt-cell title="狄成妮"></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="E">
		    <mt-cell title="易万浩"></mt-cell>
		    <mt-cell title="易大天"></mt-cell>
		  </mt-index-section>
		  <mt-index-section index="Z">
		    <mt-cell title="张万斌"></mt-cell>
		    <mt-cell title="张诗琪"></mt-cell>
		  </mt-index-section>
		</mt-index-list>
	</div>
</template>

<script>
	import { IndexList, IndexSection } from 'mint-ui';
	export default {
		name:"addressbook",
		data(){
			return{
				
			}
		}
	}
</script>

<style>
</style>