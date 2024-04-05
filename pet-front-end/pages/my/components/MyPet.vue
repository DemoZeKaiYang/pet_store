<template>
  <uni-section title="我的宠物" type="line" padding titleFontSize="18px" class="pet-main">
    <template v-slot:right>
      添加宠物<uni-icons type="plusempty" size="18" @tap="addPet"></uni-icons>
    </template>
 
      <!-- 因为swiper特性的关系，请指定swiper的高度 ，swiper的高度并不会被内容撑开-->
      <swiper class="swiper" :indicator-dots="petData.length>0">
        <!-- 没有宠物的时候添加一个占位 -->
        <swiper-item v-if="petData.length<=0 " class="nopet-swiper-item">
          <view class="none-pet" @tap="addPet">
            <uni-icons type="plusempty" size="50" color="#c3c3c3" ></uni-icons>
          <view  >
            请添加一只宠物
          </view>
          <!-- 图标 -->
          <img :src="`./static/image/addCat.png`" alt=""  class="add-pet-img"/>
          </view>
        </swiper-item>
        <swiper-item v-for="(p, index) in petData" class="pet-swiper-item" v-else>
          <view
            class="grid-item-box"
            style="background-color: #fff"
            @click="editPet(pet)"
            v-for="(pet, index) in p"
            :key="pet.pet_id"
          >
            <img :src="`${devUrl}/pet_uploads/${pet.pet_avatar}`" alt="" srcset="" />
            <text class="text">{{ pet.pet_name }}</text>
          </view>
        </swiper-item>
      </swiper>
 
  
  </uni-section>
</template>

<script setup>
//测试数据
import { computed, onMounted, ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { onLoad, onUnload } from '@dcloudio/uni-app'
import { devUrl } from '@/config'
import { getPetApi } from '@/apis/pet.js'
import { reqParams } from '../../../utils/reqParams'
const userStore = useUserStore()
const petData = ref([])

//编辑宠物
const editPet = (item) => {
  const url = reqParams('/pages/my/EditPet', item)
  uni.navigateTo({ url })
}

//获取宠物数据
const getPetData = async () => {
  const result = await getPetApi(userStore.user.user_id)
  if (result.code === 200) {
    petData.value = result.data
  }
}

//跳转添加宠物页面
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
  uni.$off('renderPet')
})
</script>

<style scoped lang="scss">
  
.add-pet-img{
  width: 100rpx;
  height: 100rpx;
}
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

  
.nopet-swiper-item{
  display: flex;
  justify-content: center;
  align-items: center;
}
.none-pet{
  width: 650rpx;
  height: 160rpx;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border-radius: 24rpx;
  box-shadow: 0 0 3px #999;
  
}
</style>
