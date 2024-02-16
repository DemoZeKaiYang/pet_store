<template>
  <uni-section title="我的宠物" type="line" padding titleFontSize="18px">
    <template v-slot:right>
      添加宠物<uni-icons type="plusempty" size="18" @tap="addPet"></uni-icons>
    </template>
    <!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
    <swiper class="swiper" :indicator-dots="true">
      <swiper-item v-for="(p,index) in petData" class="pet-swiper-item">
        <view class="grid-item-box" style="background-color: #fff;" @click="editPet(pet)" v-for="(pet,index) in p"
          :key="pet.pet_id">
          <img :src="'http://192.168.2.99:9000/pet_uploads/'+pet.pet_avatar" alt="" srcset="" />
          <text class="text">{{pet.pet_name}}</text>
        </view>
      </swiper-item>

    </swiper>
  </uni-section>
</template>

<script setup>
  //测试数据
  import {
    computed,
    onMounted,
    ref,
  } from 'vue'
  import {
    useUserStore
  } from '@/stores/user.js'
  import request from '@/utils/request.js'
 import {
   onLoad,
   onUnload
 } from '@dcloudio/uni-app'
  const store = useUserStore()
  const petData = ref([])


  const editPet = (item) => {
    const targetPage = '/pages/my/EditPet';
    // 拼接查询字符串
    const queryString = Object.keys(item)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(item[key])}`)
      .join('&');
    uni.navigateTo({
      url: `${targetPage}?${queryString}`,
    })
  }
  const getPetData = async () => {
    const result = await request('/pet', {
      user_id: store.user.user_id
    })
    if (result.code === 200) {
      petData.value = result.data
    }

  }

  const addPet = () => {
    uni.navigateTo({
      url: `/pages/my/EditPet`,
    })
  }
  onMounted(() => {
    getPetData()
  })
  onLoad(() => {
    uni.$on('renderPet', getPetData)
  })
  onUnload(() => {
    // 移除监听事件  
    uni.$off('renderPet');
  })
</script>

<style scoped lang="scss">
  .swiper {
    height: 230rpx;
  }

  .grid-item-box {
    width: 187.5rpx;
    height: 180rpx;
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      display: block;
      width: 150rpx;
      height: 150rpx;
      border-radius: 5rpx;
      box-sizing: border-box;
    }

    .text {
      margin-top: 5rpx;
      font-size: 25rpx;
      color: $uni-secondary-color;
    }
  }

  :deep(.uni-section-header__slot-right) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  .pet-swiper-item {
    display: flex;
  }
</style>