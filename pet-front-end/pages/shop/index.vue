<template>
  <!-- 搜素栏 -->
  <uni-search-bar @confirm="search" ref="searchRef"> </uni-search-bar>

  <!-- 分类选项 -->
  <view class="category-select">
    <CategorySelect
      bgColor="#2979FF"
      type="gouliang"
      title="狗狗主粮"
      icColor="#fff"
      @tap="selectType('e7e82096-30ef-4081-8b25-418929e6cd12')"
    ></CategorySelect>
    <CategorySelect
      bgColor="#2979FF"
      type="maoliang"
      title="猫咪主粮"
      icColor="#fff"
      @tap="selectType('44f4caf1-1fc0-41d4-9199-b44e33bd7c63')"
    ></CategorySelect>
    <CategorySelect
      bgColor="#2979FF"
      type="lingshi"
      title="肉类零食"
      icColor="#fff"
      @tap="selectType('ddaa2cf0-9b48-4baa-8478-bdee6ffc0307')"
    ></CategorySelect>
    <CategorySelect
      bgColor="#2979FF"
      type="guantou"
      title="罐头湿粮"
      icColor="#fff"
      @tap="selectType('72593b88-55a9-4283-919f-e7a4930b21bb')"
    ></CategorySelect>

    <CategorySelect
      bgColor="#2979FF"
      type="fenleiorguangchangorqitatianchong"
      title="全部分类"
      icColor="#fff"
      @click="JumpCategory"
    ></CategorySelect>
  </view>
  <!-- 商品列表 -->
  <ShopList :goodList="goodList"></ShopList>
  <!-- 购物车 -->
  <uni-fab
    ref="fab"
    horizontal="right"
    vertical="bottom"
    @fabClick="fabClick"
    :pattern="{ icon: 'cart' }"
  >
  </uni-fab>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { onLoad, onUnload, onReachBottom } from '@dcloudio/uni-app'
import ShopList from './ShopList.vue'
import CategorySelect from './CategorySelect.vue'
import { getGoodApi } from '@/apis/good.js'

const searchRef = ref()
const searchValue = ref('')
const goodList = ref([])
const categoryId = ref('')
const currentPage = ref(1)
const pageSize = ref(10)

const search = async (e) => {
  categoryId.value = ''
  goodList.value = []
  currentPage.value = 1
  searchValue.value = e.value
  getData()
}
const JumpCategory = () => {
  uni.navigateTo({
    url: '/pages/category/index',
  })
}
const getData = async () => {
  try {
    const result = await getGoodApi({
      id: categoryId.value || '',
      currentPage: currentPage.value,
      pageSize: pageSize.value,
      searchValue: searchValue.value,
    })
    if (result.code === 200) {
      goodList.value = [...goodList.value, ...result.data]
    }
  } catch (e) {
    console.log(e)
  }
}

const selectType = (id) => {
  categoryId.value = id
  goodList.value = []
  currentPage.value = 1
  searchValue.value = ''
  searchRef.value.clear()
  getData()
}
//跳转购物车
const fabClick = () => {
  uni.navigateTo({
    url: '/pages/car/car',
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
