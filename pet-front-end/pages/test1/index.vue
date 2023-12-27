<template>
	<view>
		<scroll-view scroll-x class="navscroll">
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
			<view class="item">国内</view>
		</scroll-view>
		<view class="connent">
			<view class="row" v-for="item in 10">
				数据
			</view>
		</view>
	</view>
  {{demo}}
</template>
 
<script setup>
import { ref } from 'vue';
  const demo=ref("1")
</script>
 
<style lang="scss" scoped>
.navscroll{
	height: 100rpx;
	background: #F7F8FA;
	white-space: nowrap;
	// 去掉H5端的滚动条
	// /deep/ ::-webkit-scrollbar {
	// 	width: 4px !important;
	// 	height: 1px !important;
	// 	overflow: auto !important;
	// 	background: transparent !important;
	// 	-webkit-appearance: auto !important;
	// 	display: block;
	// }
	.item{
		font-size: 40rpx;
		display: inline-block;
		line-height: 100rpx;
		padding: 0 30rpx;
 
	}
}
 
.connent {
	padding: 30rpx;
	.row{
		border: 1px dotted #efefef;
		padding: 15rpx 0;
	}
}
</style>