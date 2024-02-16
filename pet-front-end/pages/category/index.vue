<template>
  <view>
    <view class="category-list">
      <!-- 左侧分类导航 -->
      <scroll-view scroll-y="true" class="left">
        <view class="row" :class="[showAll? 'on' : '']" @click="showCategory(null)">
          <view class="text">
            <view class="block"></view>
            全部
          </view>
        </view>
        <view class="row" v-for="(kind, index) in kindList" :key="kind.good_kind_order"
          :class="[kind.good_kind_order== showCategoryIndex ? 'on' : '']" @click="showCategory(kind.good_kind_order)">
          <view class="text">
            <view class="block"></view>
            {{ kind.good_kind_name}}
          </view>
        </view>
      </scroll-view>
      <!-- 右侧子导航 -->
      <scroll-view scroll-y="true" class="right">
        <!-- :style="{height:kind.children.length>3?'500rpx':'300rpx'}" -->
        <view class="category" v-for="(kind, index) in kindList" :key="kind.good_kind_order"
          v-show="showAll || kind.good_kind_order === showCategoryIndex">
          <view>
            <view style="text-align: center">
              <text style="color: gainsboro">—</text>
              <text style="color: #000000;margin-right: 8px;margin-left: 8px">{{kind.good_kind_name}}</text>
              <text style="color: gainsboro">—</text>
            </view>
            <view class="list" v-if="kind.children.length>0">
              <view class="box" v-for="(category, i1) in kind.children" :key="category.good_category_order"
                @click="toCategory(category.good_category_id)">
                <image :src="'http://192.168.2.99:9000/good_uploads/'+category.good_image"
                  lazy-load="https://taobao.xianmxkj.com/logo.png">
                </image>
                <view class="text">{{ category.good_category_name }}</view>
              </view>
            </view>
          </view>
        </view>
      </scroll-view>
    </view>
  </view>
</template>
<script setup>
  import {
    onMounted,
    ref,
    computed
  } from 'vue'
  import {
    onPageScroll,
    onLoad
  } from '@dcloudio/uni-app'
  //测试数据
  import request from '@/utils/request.js'
  const emit = defineEmits(['itemClick'])
  const showCategoryIndex = ref(0)
  const headerPosition = ref("fixed")
  const kindList = ref([])
  const showAll = ref(true)
  onPageScroll((e) => {
    //兼容iOS端下拉时顶部漂移
    if (e.scrollTop >= 0) {
      headerPosition.value = 'fixed';
    } else {
      headerPosition.value = 'absolute';
    }
  })
  const showCategory = (index) => {
    if (index === null) {
      showAll.value = true;
      showCategoryIndex.value = null;
    } else {
      showAll.value = false;
      showCategoryIndex.value = index;
    }

  }
  const toCategory = (item) => {
    const targetPage = '/pages/category/categoryproductlist'
    const queryString = `${encodeURIComponent('good_category_id')}=${encodeURIComponent(item)}`


    uni.navigateTo({
      url: `${targetPage}?${queryString}`,
    })

  }

  const getData = async () => {
    const result = await request('/shop/category')
    if (result.code === 200) {
      kindList.value = result.data
    }

  }
  onMounted(() => {
    getData()
  })
</script>
<style lang="scss">
  .category-list {
    width: 100%;
    background-color: #fff;
    display: flex;

    .left,
    .right {
      // 修复不能置顶问题
      top: 0rpx;
      bottom: 0rpx;
    }

    .left {
      position: fixed;
      width: 24%;
      left: 0upx;
      background-color: #f2f2f2;
      top: 88rpx;

      .row {
        width: 100%;
        height: 90upx;
        display: flex;
        align-items: center;

        .text {
          width: 100%;
          position: relative;
          font-size: 28upx;
          display: flex;
          justify-content: center;
          color: #3c3c3c;

          .block {
            position: absolute;
            width: 0upx;
            left: 0;
          }
        }

        &.on {
          height: 100upx;
          background-color: #fff;

          .text {
            font-size: 30upx;
            font-weight: 600;
            color: #2d2d2d;

            .block {
              width: 10upx;
              height: 80%;
              top: 10%;
              background-color: #f06c7a;
            }
          }
        }
      }
    }

    .right {
      margin-left: 24%;
      width: 76%;
      left: 24%;
      white-space: nowrap;

      .category {
        width: 94%;
        padding: 20upx 3%;

        .banner {
          width: 100%;
          height: 24.262vw;
          border-radius: 10upx;
          overflow: hidden;
          box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.3);

          image {
            width: 100%;
            height: 24.262vw;
          }
        }

        .list {
          margin-top: 40upx;
          width: 100%;
          display: flex;
          flex-wrap: wrap;

          .box {
            width: calc(65.44vw / 3);
            margin-bottom: 30upx;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-wrap: wrap;

            image {
              width: 60%;
              height: calc(71.44vw / 3 * 0.6);
            }

            .text {
              margin-top: 5upx;
              width: 100%;
              display: flex;
              justify-content: center;
              font-size: 26upx;
            }
          }
        }
      }
    }
  }
</style>