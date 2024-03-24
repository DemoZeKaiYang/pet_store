<template>

  <PersonInfo></PersonInfo>
  <OrderList></OrderList>
  <MyPet></MyPet>
  <MoreFunction></MoreFunction>
  <button type="primary" class="loginout" @tap="loginOut">退出登录</button>
  
  <!-- 悬浮按钮 -->
  <view class="">
    <uni-fab
   
    		:content="content"
    		horizontal="right"
    		vertical="bottom"
        direction="vertical"
    		@fabClick="fabClick"
        @trigger="trigger"
    	>
      
      </uni-fab>
  </view>


</template>

<script setup>
  import {
    ref,
    onMounted
  } from 'vue'
  import PersonInfo from './components/PersonInfo.vue'
  import OrderList from './components/OrderList.vue'
  import MyPet from './components/MyPet.vue'
  import MoreFunction from './components/MoreFunction.vue'
  import requrest from '@/utils/request.js'
  import {
    useUserStore
  } from '@/stores/user.js'
const content=ref([{
  text:'客服',iconPath:'/static/image/kefu.png',selectedIconPath:'/static/image/selectkefu.png',active:false
}])
  const store = useUserStore();
  const loginOut = () => {
    store.resetUser()
    try {
      uni.removeStorageSync('token');
      uni.removeStorageSync('user');
    } catch (e) {
      console.log(e);
     
    }
    uni.switchTab({
      url: '/pages/home/index'
    })
  }
  //悬浮按钮点击事件
  const fabClick=()=>{
    console.log(1);
  }
  //点击悬浮按钮的客服回调
  const trigger=(e)=>{
    content.value[e.index].active = !e.item.active
    uni.navigateTo({
      url:'/pages/messages/Chat'
    })
    //跳转到消息页面
    console.log(e);
  }
</script>

<style lang="scss" scoped>
  .loginout {
    margin-top: 40rpx;
    border-radius: 20px;
  }
</style>