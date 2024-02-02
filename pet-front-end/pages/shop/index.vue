<template>
  <!-- 搜素栏 -->
  <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
    @cancel="cancel" @clear="clear">
  </uni-search-bar>

  <!-- 分类选项 -->
  <view class="category-select">
    <CategorySelect bgColor="#2979FF" type="gouliang" title="狗狗主粮" icColor="#fff"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="maoliang" title="猫咪主粮" icColor="#fff"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="lingshi" title="肉类零食" icColor="#fff"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="guantou" title="罐头湿粮" icColor="#fff"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="fenleiorguangchangorqitatianchong" title="全部分类" icColor="#fff" @click="JumpCategory"></CategorySelect>
  </view>
  <!-- 商品列表 -->
  <ShopList></ShopList>
  <!-- 购物车 -->
  <!-- 		<view class="goods-carts">
			<uni-goods-nav :options="options" :fill="true" :button-group="buttonGroup" @click="onClick"
				@buttonClick="buttonClick" />
		</view> -->
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import ShopList from './ShopList.vue'
  import CategorySelect from './CategorySelect.vue'
  const searchValue = ref("")
  
  const JumpCategory=()=>{
    uni.navigateTo({
    	url: '/pages/category/index'
    });
  }
</script>

<style scoped lang="scss">
  .category-select{
    display: flex;
    justify-content: space-between;
  }
  .goods-carts {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>