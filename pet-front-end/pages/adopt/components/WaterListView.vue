<template>
  <view>
    <view class="uni-list-cell">
      <!-- 自定义了一个data-id的属性,可以通过js获取到它的值!  hover-class 指定按下去的样式类-->
      <view class="cellView" v-for="(item, index) in proList" :key="index" @tap="goProDetail(item)">
        <text
          class="signStatus"
          :style="{ 'background-color': item.status === '618' ? 'orangered' : '' }"
          >{{ item.status === '618' ? '618' : '' }}</text
        >
        <image class="imgV" mode="aspectFill" :src="item.proImg"></image>
        <text class="titleText"> {{ item.proName }} </text>
        <text class="priceText"> {{ item.proPrice }}</text>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: {
    proList: {
      type: Array,
      default() {
        return []
      },
    },
  },
  data() {
    return {}
  },
  methods: {
    goProDetail(item) {
      this.$emit('click', item)
    },
    bindTag(item) {
      return [item.area, item.proType, item.stage]
    },
    bindColor(index) {
      let colorArr = ['#4473FF', '#FFA01B', '#41D380']
      return colorArr[index % 3]
    },
    bindBgColor(index) {
      let bgColorArr = ['#F1F4FA', '#FFF5E8', '#ECFAF2']
      return bgColorArr[index % 3]
    },
  },
}
</script>

<style scoped>
.uni-list-cell {
  display: flex;
  flex-wrap: wrap;
}

.cellView {
  display: flex;
  flex-direction: column;
  margin-left: 3vw;
  width: 44.5vw;
  height: auto;
  margin-top: 12px;
  background-color: white;
  border-radius: 4px;
}

.titleText {
  margin-left: 4px;
  margin-top: 4px;
  color: #333333;
  width: 100%;
  height: 36px;
  line-height: 18px;
  font-size: 12px;
  font-weight: 400;

  /* 超出裁剪 */
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  /* 换行 */
  white-space: pre-line;
}

.priceText {
  margin-left: 4px;
  margin-top: 4px;
  color: orangered;
  font-size: 14px;
  height: 24px;
  font-weight: 500;
  font-family: PingFangSC, PingFang SC;
}

.signStatus {
  margin-left: calc(44.5vw - 36px);
  width: 36px;
  height: 20px;
  line-height: 20px;
  color: #ffffff;
  font-size: 10px;
  text-align: center;
  border-radius: 0px 4px 0px 4px;
  z-index: 9;
  opacity: 0.92;
}

.imgV {
  margin-left: 0px;
  margin-top: -20px;
  margin-bottom: 0px;
  width: 44.5vw;
  height: 44.5vw;
  border-radius: 4px;
}
</style>
