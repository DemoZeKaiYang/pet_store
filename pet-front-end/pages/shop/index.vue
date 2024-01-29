<template>
  <!-- 搜素栏 -->
  <uni-search-bar @confirm="search" :focus="true" v-model="searchValue" @blur="blur" @focus="focus" @input="input"
    @cancel="cancel" @clear="clear">
  </uni-search-bar>

  <!-- 分类选项 -->
  <view class="category-select">
    <CategorySelect bgColor="pink" type="dianzan" title="进口猫粮" icColor="#FB635E"></CategorySelect>
    <CategorySelect bgColor="pink" type="dianzan" title="进口猫粮" icColor="#FB635E"></CategorySelect>
    <CategorySelect bgColor="pink" type="dianzan" title="进口猫粮" icColor="#FB635E"></CategorySelect>
    <CategorySelect bgColor="pink" type="dianzan" title="进口猫粮" icColor="#FB635E"></CategorySelect>
    <CategorySelect bgColor="pink" type="dianzan" title="全部分类" icColor="#FB635E" @click="JumpCategory"></CategorySelect>
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