<template>
  <!-- 搜素栏 -->
  <uni-search-bar @confirm="search" ref="searchRef">
  </uni-search-bar>

  <!-- 分类选项 -->
  <view class="category-select">
    <CategorySelect bgColor="#2979FF" type="gouliang" title="狗狗主粮" icColor="#fff"
      @tap="selectType('5ac481da-1eb6-4694-a3ee-42a74992c903')"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="maoliang" title="猫咪主粮" icColor="#fff"
      @tap="selectType('563c3b0e-9362-467b-8937-924694e258c2')"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="lingshi" title="肉类零食" icColor="#fff"
      @tap="selectType('32240347-9250-424e-b07b-83388d772c08')"></CategorySelect>
    <CategorySelect bgColor="#2979FF" type="guantou" title="罐头湿粮" icColor="#fff"
      @tap="selectType('1a5382dd-990e-4c71-891d-b617831e8931')"></CategorySelect>

    <CategorySelect bgColor="#2979FF" type="fenleiorguangchangorqitatianchong" title="全部分类" icColor="#fff"
      @click="JumpCategory"></CategorySelect>
  </view>
  <!-- 商品列表 -->
  <ShopList :goodList="goodList"></ShopList>
  <!-- 购物车 -->
      <uni-fab ref="fab" horizontal="right" vertical="bottom" @fabClick="fabClick" :pattern="{icon:'cart'}">
      </uni-fab>
</template>

<script setup>
  import {
    onMounted,
    ref
  } from 'vue'
  import {
    onLoad,
    onUnload,
    onReachBottom
  } from '@dcloudio/uni-app'
  import ShopList from './ShopList.vue'
  import CategorySelect from './CategorySelect.vue'
  import {getGoodApi} from '@/apis/good.js'
  
  const searchRef = ref()
  const searchValue = ref("")
  const goodList = ref([])
  const categoryId = ref('')
  const currentPage = ref(1)
  const pageSize = ref(10)

  const search = async (e) => {
    categoryId.value = ""
    goodList.value = []
    currentPage.value = 1
    searchValue.value = e.value
    getData()
  }
  const JumpCategory = () => {
    uni.navigateTo({
      url: '/pages/category/index'
    });
  }
  const getData = async () => {
    try {
      const result = await getGoodApi({
        id: categoryId.value || '',
        currentPage: currentPage.value,
        pageSize: pageSize.value,
        searchValue: searchValue.value
      })
      if (result.code === 200) {
        goodList.value = [...goodList.value, ...result.data]
      }
    } catch (e) {
      console.log(e);
    }
  }

  const selectType = (id) => {
    categoryId.value = id
    goodList.value = []
    currentPage.value = 1
    searchValue.value = ""
    searchRef.value.clear()
    getData()
  }
  //跳转购物车
  const fabClick = () => {
    uni.navigateTo({
      url: '/pages/car/car'
    })
  }
  onMounted(() => {
    getData()
  })
  onReachBottom(() => {
    currentPage.value += 1
    getData()
  })
</script>

<style scoped lang="scss">
  .category-select {
    display: flex;
    justify-content: space-between;
  }

  .goods-carts {
    position: fixed;
    left: 0;
    bottom: 0;
  }
</style>