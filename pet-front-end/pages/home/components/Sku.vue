<template>
  <view class="app">
    <button @click="openSkuPopup()">打开SKU组件</button>
    <vk-data-goods-sku-popup ref="skuPopup" v-model="skuKey" border-radius="20" :localdata="goodsInfo" :mode="skuMode"
      @open="onOpenSkuPopup" @close="onCloseSkuPopup" @add-cart="addCart" @buy-now="buyNow"></vk-data-goods-sku-popup>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'

  const skuKey = ref(false)
  
  const skuMode = ref(1)
  const goodsInfo = ref({
    "_id": "002",
    "name": "迪奥香水",
    "goods_thumb": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
    "sku_list": [{
        "_id": "004",
        "goods_id": "002",
        "goods_name": "迪奥香水",
        "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        "price": 19800,
        "sku_name_arr": ["50ml/瓶"],
        "stock": 100
      },
      {
        "_id": "005",
        "goods_id": "002",
        "goods_name": "迪奥香水",
        "image": "https://res.lancome.com.cn/resources/2020/9/11/15998112890781924_920X920.jpg?version=20200917220352530",
        "price": 9800,
        "sku_name_arr": ["70ml/瓶"],
        "stock": 100
      }
    ],
    "spec_list": [{
      "list": [{
          "name": "20ml/瓶"
        },
        {
          "name": "50ml/瓶"
        },
        {
          "name": "70ml/瓶"
        }
      ],
      "name": "规格"
    }],
  })

  const init = (options = {}) => {

  }
  // sku组件 开始-----------------------------------------------------------
  const onOpenSkuPopup = () => {
    console.log("监听 - 打开sku组件");
  }


  const onCloseSkuPopup = () => {
    console.log("监听 - 关闭sku组件");
  }

  // 加入购物车前的判断
  const addCartFn = () => {
    let {
      selectShop
    } = obj;
    // 模拟添加到购物车,请替换成你自己的添加到购物车逻辑
    let res = {};
    let name = selectShop.goods_name;
    if (selectShop.sku_name != "默认") {
      name += "-" + selectShop.sku_name_arr;
    }
    res.msg = `${name} 已添加到购物车`;
    if (typeof obj.success == "function") obj.success(res);
  }

  // 加入购物车按钮
  const addCart = (selectShop) => {
    console.log("监听 - 加入购物车");
    that.addCartFn({
      selectShop: selectShop,
      success: function(res) {
        // 实际业务时,请替换自己的加入购物车逻辑
        that.toast(res.msg);
        setTimeout(function() {
          that.skuKey = false;
        }, 300);
      }
    });
  }

  // 立即购买
  const buyNow = (selectShop) => {
    console.log("监听 - 立即购买");
    that.addCartFn({
      selectShop: selectShop,
      success: function(res) {
        // 实际业务时,请替换自己的立即购买逻辑
        that.toast("立即购买");
      }
    });
  }
  const toast = (msg) => {
    uni.showToast({
      title: msg,
      icon: "none"
    });
  }
</script>

<style lang="scss" scoped>
  .app {
    padding: 30rpx;
    font-size: 28rpx;
  }
</style>