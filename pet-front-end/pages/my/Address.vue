<template>
  <view class="myaddress">
    <view v-for="(item, index) in addressList" :key="index" class="order_address">
      <view class="address_box">
        <view class="weizhi_icon">
          <icon-base type="dizhiguanli" :color="colors" :size="50"></icon-base>
        </view>
        <!-- 编辑地址 -->
        <view @click="onSetAddress(item)">
          <view class="center">
            <!-- 默认 -->
            <view class="moren" v-if="item.address_default == 1">
              <icon-base type="moren" :color="colors" :size="100"></icon-base>
            </view>
            <view class="name">
              <text class="text1">{{item.address_name}}</text>
              <text class="phones">{{item.address_phone}}</text>
            </view>
            <view class="address_name">{{item.address_area}}{{item.address_details}}</view>
          </view>
        </view>
        <view class="caozuo">
          <view class="del" @tap="delAddress(item,index)">
            <text class="iconfont icon-shanchu"></text>
            删除
          </view>
          <view class="edit" @tap="editAddress(item)">
            <text class="iconfont icon-bianji"></text>
            编辑
          </view>
        </view>
      </view>
    </view>
  </view>
  <button type="primary" class="addAddress" @tap="addAddress">添加地址</button>
</template>


<script setup>
  import {
    onMounted,
    ref,
  } from 'vue';
  import request from '@/utils/request';
  import {
    useUserStore
  } from '@/stores/user.js'
  import {
    onLoad,
    onUnload
  } from '@dcloudio/uni-app'
  const emit = defineEmits(['editClick', 'chooseClick']); // 定义组件可以触发的自定义事件 
  const colors = ref('#2979FF');
  const store = useUserStore()
  const addressList = ref([])



  //编辑地址:要传递props
  const editAddress = (item) => {
    const targetPage = '/pages/my/EditAddress';


    // 拼接查询字符串
    const queryString = Object.keys(item)
      .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(item[key])}`)
      .join('&');
    uni.navigateTo({
      url: `${targetPage}?${queryString}`,
    })
  };
  //点击地址
  const onSetAddress = (item) => {
    emit('chooseClick', item);
  };
  //删除地址
  const delAddress = async (item, index) => {
    const {
      confirm
    } = await uni.showModal({
      title: '提示',
      content: '确认要删除该地址吗?',
      confirmText: '删除',
      confirmColor: colors.value,

    })
    if (confirm) {
      const delResult = await request('/address/del', {
        address_id: item.address_id
      }, {
        method: 'post'
      })
      if (delResult.code === 200) {
        uni.showToast({
          title: '删除成功~',
          icon: 'none'
        })
        getAddressData()
      }
    }
  }
  //添加地址
  const addAddress = () => {
    uni.navigateTo({
      url: '/pages/my/EditAddress'
    })
  }
  const getAddressData = async () => {
    const result = await request('/address', {
      user_id: store.user.user_id
    })
    if (result.code === 200) {
      addressList.value = result.data
    }
  }
  onMounted(() => {
    //调接口
    getAddressData()
  })
  onLoad(() => {
    uni.$on('renderAddress', getAddressData)
  })
  onUnload(() => {
    uni.$off('renderAddress', getAddressData)
  })
</script>



<style lang="scss" scoped>
  /*每个页面公共css */
  // @import "./icon.css";

  .myaddress {
    padding: 10upx 4%;
    padding-bottom: 140upx;
    margin-top: 10upx;
  }

  .order_address {
    height: 180upx;
    width: 100%;
    background-color: #fff;
    border-radius: 10upx;
    position: relative;
    box-shadow: 0upx 0upx 10upx #ddd;
    margin-bottom: 20upx;
  }

  .order_address image {
    width: 100%;
    height: 100%;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;
  }

  .address_box {
    width: 100%;
    height: 100%;
    display: block;
    z-index: 10;
    box-sizing: border-box;
    padding: 20upx;
    display: flex;
    align-items: center;
  }

  .weizhi_icon text {
    font-size: 40upx;
    margin-left: 10upx;
  }

  .address_box .center {
    margin-left: 20upx;
  }

  .address_box .center .name {
    height: 60upx;
    line-height: 60upx;
  }

  .address_box .center .name .text1 {
    font-size: 26upx;
    font-weight: bold;
    color: #333;
    display: inline-block;
    margin-right: 20upx;

  }

  .phones {
    font-size: 24upx;
    color: #999;
    z-index: 0;
  }

  .address_box .address_name {
    font-size: 26upx;
    font-weight: bold;
    color: #333;
    // overflow: hidden;
    white-space: nowrap;
    /* 不允许文本换行 */
    overflow: hidden;
    /* 隐藏超出容器的部分 */
    text-overflow: ellipsis;
    /* 当文本溢出时显示省略号 */
    width: 500rpx;
  }

  .noaddress {
    margin-left: 40upx;
    font-weight: bold;
    color: #333;
    font-size: 26upx;
  }

  .caozuo {
    position: absolute;
    right: 20upx;
    display: flex;
    top: 20upx;
  }

  .caozuo view {
    font-size: 24upx;
    color: #666;
    margin-left: 30upx;
  }

  .caozuo view text {
    font-size: 24upx;
  }

  .moren {
    position: absolute;
    top: 0;
    left: 0;
  }

  .moren text {
    font-size: 60upx;
  }

  .addAddress {
    position: fixed;
    left: 10%;
    bottom: 10%;
    width: 80%;
    height: 100rpx;
    border-radius: 20px;
    font-size: 40rpx;
  }
</style>