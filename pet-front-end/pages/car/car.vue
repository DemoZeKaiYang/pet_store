<template>
  <view>
    <view class="layer-box">
      <!-- 商品列表 -->
      <view class="goods-list">
        <view class="tis" v-if="store.insideCarGoods.length == 0">暂无商品~</view>
        <view class="row" v-for="(item, index) in store.insideCarGoods" :key="item.good_id">
          <!-- 滑动删除按钮 -->
          <view class="menu" @tap.stop="deleteGoods(item.good_id)">
            <image class="icon_dele" src="/static/image/delete.png"></image>
          </view>
          <!-- 商品 -->
          <view
            class="carrier"
            :class="[theIndex == index ? 'open' : oldIndex == index ? 'close' : '']"
            @touchstart="touchStart(index, $event)"
            @touchmove="touchMove(index, $event)"
            @touchend="touchEnd(index, $event)"
          >
            <!-- checkbox -->
            <view class="checkbox-box" @tap="store.selectedTap(item.good_id)">
              <view class="checkbox">
                <view :class="[item.selected ? 'on' : '']"></view>
              </view>
            </view>
            <!-- 商品信息 -->
            <view class="goods-info">
              <!-- <uni-image class="tp_img" :src="item.good_image" :fade="true" radius="5" width="80" height="80"
                duration="450"></uni-image> -->
              <img
                :src="`${devUrl}/good_uploads/${item.good_image}`"
                width="80"
                height="80"
                alt=""
              />
              <view class="info">
                <view class="title">{{ item.good_name }}</view>
                <view class="price-number">
                  <view class="price">￥{{ item.good_price }}</view>
                  <view class="number">
                    <uni-number-box
                      v-model="item.addNum"
                      :name="index"
                      integer
                      @change="onChange"
                      :min="1"
                      :max="999"
                    ></uni-number-box>
                  </view>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </view>
    <!-- 底部购物车 -->
    <view class="m-footer-car">
      <view class="allSelect_box" @tap="store.allSelectTap">
        <view class="checkbox">
          <view :class="[store.isAllselected ? 'on' : '']"></view>
        </view>
        <view class="text">全选</view>
      </view>
      <!-- 计算选中的个数 -->
      <view class="delBtn" @tap="deleteList" v-if="selectedList.length > 0">删除</view>
      <view class="settlement">
        <view class="footer_sum"
          ><span>合计:</span><view class="footer_price">￥{{ store.sumPrice }}</view>
        </view>
        <view class="footer_but" @tap="toConfirmation">结算({{ store.checkOutNum }})</view>
      </view>
    </view>
  </view>
</template>

<script setup>
/**
 * 左移动触发删除的思路：
 * 通过比对theIndex== oldIndex，给元素添加open和close类名触发动画
 * index记的是第几个商品
 */

import { ref } from 'vue'
import { onLoad, onShow } from '@dcloudio/uni-app'
import { useCarStore } from '../../stores/car'
import { devUrl } from '@/config';

const store = useCarStore()
// 使用 ref 创建响应式引用

//初始化的
const initXY = ref([])

const showHeader = ref(true)
const selectedList = ref([])
const isAllselected = ref(false)
// 控制滑动效果的响应式引用
const theIndex = ref(null) //选中哪一个商品的下标
const oldIndex = ref(null) //元素开始的时元素索引
const isStop = ref(false) //标识触发的反馈

//控制左滑删除效果-begin
const touchStart = (index, event) => {
  //多点触控,就是多个手指触摸屏幕
  if (event.touches.length > 1) {
    isStop.value = true
    return
  }
  oldIndex.value = theIndex.value
  theIndex.value = null
  //初始坐标
  initXY.value = [event.touches[0].pageX, event.touches[0].pageY]
}
const touchMove = (index, event) => {
  //多点触控不触发
  if (event.touches.length > 1) {
    this.isStop = true
    return
  }
  //计算触摸点在 X 轴上的移动距离。
  let moveX = event.touches[0].pageX - initXY.value[0]

  // 计算触摸点在 Y 轴上的移动距离。
  let moveY = event.touches[0].pageY - initXY.value[1]

  //防止轻微触动
  if (isStop.value || Math.abs(moveX) < 5) {
    return
  }
  // 竖向滑动-不触发左滑效果
  if (Math.abs(moveY) > Math.abs(moveX)) {
    isStop.value = true
    return
  }

  if (moveX < 0) {
    theIndex.value = index
    isStop.value = true
  } else if (moveX > 0) {
    if (theIndex.value != null && oldIndex.value == theIndex.value) {
      oldIndex.value = index
      theIndex.value = null
      isStop.value = true
      setTimeout(() => {
        oldIndex.value = null
      }, 150)
    }
  }
}

const touchEnd = (index, event) => {
  isStop.value = false
}
//删除购物车的商品
const deleteGoods = (id) => {
  store.deleteGoods(id)
  oldIndex.value = null
  theIndex.value = null
}

//清空列表
const deleteList = () => {
  insideCarGoods.value = []
  selectedList.value = []
  store.carNum.value = 0
}

//清空购物车
const clearCar = () => {
  insideCarGoods.value = []
  carPrice.value = '0.00'
}
// 全选
const checkedAll = () => {
  checked.value = !checked.value
  let flag = checked.value
  let items = cartList.value
  items.forEach((val) => {
    if (flag) {
      val.check = true
    } else {
      val.check = false
    }
  })
}

//支付      
const toConfirmation = () => {
  if (store.checkOutCar.length < 1) {
    uni.showToast({
      title: '请选择商品结算',
      icon: 'none',
    })
    return
  }
  uni.navigateTo({
    url:'/pages/car/ConfirmOrder'
  })
  uni.showModal({
    title: '温馨提示',
    content: '支付后续更新调用微信支付',
    showCancel: false,
    confirmText: '确定',
    confirmColor: '#458bd0',                                                                 
    success: (res) => {
      if (res.confirm) {
      }
    },
  })
}
</script>

<style scoped lang="scss">
.layer-box {
  width: 100%;
  padding: 0;
  height: 70%;
  border-radius: 20upx 20upx 0 0;
  background-color: #fff;
  display: flex;
  flex-wrap: wrap;
  align-content: space-between;
}

.checkbox-box {
  display: flex;
  align-items: center;
}

.checkbox {
  width: 35upx;
  height: 35upx;
  border-radius: 100%;
  border: solid 2upx #f06c7a;
  display: flex;
  justify-content: center;
  align-items: center;

  .on {
    width: 25upx;
    height: 25upx;
    border-radius: 100%;
    background-color: #f06c7a;
  }
}

.text {
  font-size: 28upx;
  margin-left: 10upx;
}

.status {
  width: 100%;
  height: 0;
  position: fixed;
  z-index: 10;
  background-color: #fff;
  top: 0;
  /*  #ifdef  APP-PLUS  */
  height: var(--status-bar-height); //覆盖样式
  /*  #endif  */
}

.header {
  width: 92%;
  padding: 0 4%;
  height: 100upx;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 10;
  background-color: #fff;
  /*  #ifdef  APP-PLUS  */
  top: var(--status-bar-height);
  /*  #endif  */
}

.header .title {
  font-size: 38upx;
}

.place {
  background-color: #ffffff;
  height: 100upx;
  /*  #ifdef  APP-PLUS  */
  margin-top: var(--status-bar-height);
  /*  #endif  */
}

.goods-list {
  width: 100%;
  margin-top: 10rpx;
}

.tis {
  width: 100%;
  height: 60upx;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32upx;
}

.row {
  width: 92%;
  height: calc(22vw + 40upx);
  margin: 20upx auto;
  border-radius: 15upx;
  box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  z-index: 4;
  border: 0;
}

.menu {
  .icon {
    color: #fff;
  }

  position: absolute;
  width: 30%;
  height: 100%;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;
  color: #fff;
  z-index: 2;
}

.icon_dele {
  width: 60rpx;
  height: 60rpx;
}

.carrier {
  @keyframes showMenu {
    0% {
      transform: translateX(0);
    }

    100% {
      transform: translateX(-30%);
    }
  }

  @keyframes closeMenu {
    0% {
      transform: translateX(-30%);
    }

    100% {
      transform: translateX(0);
    }
  }

  &.open {
    animation: showMenu 0.25s linear both;
  }

  &.close {
    animation: closeMenu 0.15s linear both;
  }

  background-color: #fff;

  .checkbox-box {
    padding-left: 20upx;
    flex-shrink: 0;
    height: 22vw;
    margin-right: 20upx;
  }

  position: absolute;
  width: 100%;
  padding: 0 0;
  height: 100%;
  z-index: 3;
  display: flex;
  align-items: center;

  .goods-info {
    width: 100%;
    display: flex;
    padding-right: 20upx;

    .tp_img {
      border: 1px dashed #b2b2b2;
    }
  }
}

.info {
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  margin-left: 20rpx;

  .title {
    width: 100%;
    font-size: 28upx;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
  }

  .price-number {
    position: absolute;
    width: 100%;
    bottom: 0upx;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    font-size: 28upx;
    height: 60upx;

    .price {
    }

    .number {
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .input {
        width: 60upx;
        height: 60upx;
        margin: 0 10upx;
        background-color: #f3f3f3;

        input {
          width: 60upx;
          height: 60upx;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 26upx;
        }
      }

      .sub,
      .add {
        width: 45upx;
        height: 45upx;
        background-color: #f3f3f3;
        border-radius: 5upx;

        .icon {
          font-size: 22upx;
          width: 45upx;
          height: 45upx;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }

      .icon_jian {
        width: 30upx;
        height: 30upx;
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 8rpx 8rpx;
      }
    }
  }
}

.delBtn {
  border: solid 1upx #f06c7a;
  color: #f06c7a;
  padding: 0 20upx;
  height: 50upx;
  border-radius: 30upx;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 20rpx;
  margin-top: 5rpx;
}

// 底部
.allSelect_box {
  display: flex;
  align-items: center;
  margin-left: 20rpx;
}

.m-footer-car {
  position: fixed;
  bottom: 0upx;
  width: 100%;
  height: 99upx;
  border-top: solid 1upx #eee;
  background-color: #fff;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.settlement {
  width: 70%;
  display: flex;
  justify-content: flex-end;
  align-items: center;

  .footer_sum {
    width: 50%;
    font-size: 28rpx;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 100rpx;
    span {
      display: inline-block;
    }
    .footer_price {
      display: inline-block;
      font-weight: bold;
      font-size: 32rpx;
      color: #ff0000;
    }
  }
}

.footer_but {
  background: #2979ff;
  color: #fff;
  height: 100%;
  line-height: 99upx;
  padding: 0 40upx;
}
</style>
