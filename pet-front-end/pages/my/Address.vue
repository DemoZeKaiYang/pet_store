<template>
  <view class="myaddress">
    <view v-for="(item, index) in addressList" :key="index" class="order_address">
      <view class="address_box">
        <view class="weizhi_icon">
           <icon-base type="dizhiguanli" :color="colors" :size="50"></icon-base>
          
        </view>
        <view @click="onsetAddress(item)">
          <view class="center">
            <view class="moren" v-if="item.isdefult == 1">
              <icon-base type="moren" :color="colors" :size="100"></icon-base>
              <!-- <text class="iconfont icon-moren" :style="'color:' + colors"></text> -->
            </view>
            <view class="name">
              <text class="text1">{{item.name}}</text>
              <text class="phones">{{item.phone}}</text>
            </view>
            <view class="address_name">{{item.address}}{{item.moreAddres}}</view>
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
</template>


<script>

  export default {

    data() {
      return {
        colors: '#2979FF',
        addressList: [{
          name: '小明',
          phone: '12345678915',
          address: '佛山市南海区',
          moreAddres: '桂城街道',
          isdefult: 1,
          id: 1
        }, {
          name: '小红',
          phone: '12345678915',
          address: '广州市海珠区',
          moreAddres: '昌岗路15号',
          isdefult: 0,
          id: 2
        }],
      };
    },
    props: {
      // colors: {
      // 	type: String
      // },
      // addressList: {
      // 	type: Array
      // }
    },
    methods: {

      editAddress(item) {
        this.$emit("editClick", item)
        uni.navigateTo({
          url:'/pages/my/EditAddress'
        })
      },


      //选择收货地址后 返回上一层路由
      onsetAddress(item) {
        this.$emit("chooseClick", item)
      },
      delAddress(item, index) {
        uni.showModal({
          title: '提示',
          content: '确认要删除该地址吗?',
          confirmText: '删除',
          confirmColor: this.colors,
          success: (res) => {
            if (res.confirm) {
              uni.showToast({
                title: '删除成功~',
                icon: 'none'
              })
              this.addressList.splice(index, 1)
            }
          }
        })
      }


    }
  }
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
</style>