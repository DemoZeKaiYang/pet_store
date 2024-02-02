<template>
  <uni-card >
    <uni-forms label-align="left" :model-value="baseFormData">
      <uni-forms-item class="pet-picture">
        <uni-file-picker limit="1"></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item label="昵称:" name="name">
        <uni-easyinput placeholder="宠物的昵称" />
      </uni-forms-item>

      <uni-forms-item label="品种:" name="name">
        <uni-data-select v-model="value" :localdata="range" @change="change"></uni-data-select>
      </uni-forms-item>
    <uni-forms-item label="绝育:" name="name">
        <uni-data-select v-model="baseFormData.skills" :localdata="skillsRange">
        </uni-data-select>
      </uni-forms-item>

      <uni-forms-item label="性别:" name="name">
        <uni-data-checkbox v-model="baseFormData.sex" :localdata="sexs" />

      </uni-forms-item>

      <uni-forms-item label="出生:" name="name">
        <uni-datetime-picker type="datetime" return-type="timestamp" v-model="baseFormData.datetimesingle" />
      </uni-forms-item>

  
    </uni-forms>

  </uni-card>
  <view class="button-group">
    <button type="warn" class="op-btn">删除</button>
    <button type="primary" class="op-btn">保存</button>
  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  const baseFormData = ref({
    sex: 2,
    skills: 0
  })
  // 单选数据源
  const sexs = ref([{
    text: '男',
    value: 0
  }, {
    text: '女',
    value: 1
  }, {
    text: '保密',
    value: 2
  }])

  const skillsRange = ref([{
      value: 0,
      text: "编程"
    },
    {
      value: 1,
      text: "绘画"
    },
    {
      value: 2,
      text: "运动"
    },
  ])
</script>

<style lang="scss" scoped>
  .pet-picture {
    padding: 0 auto;

  }

  .pet-picture:deep(.uni-file-picker__container) {
    justify-content: center;
  }

  .button-group {
    display: flex;
    justify-content: space-evenly;

    .op-btn {
      display: inline-block;
      margin: 0;
      width: 300rpx;
    }
  }
</style>