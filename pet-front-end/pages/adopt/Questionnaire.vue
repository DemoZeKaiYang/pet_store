<template>
  <view class="main">
    <uni-forms
      ref="baseForm"
      :modelValue="baseFormData"
      label-position="top"
      :rules="rules"
      err-show-type="undertext"
      validateTrigger="blur"
    >
      <uni-forms-item label="性别" required name="sex">
        <uni-data-checkbox v-model="baseFormData.sex" placeholder="请输入姓名" :localdata="sexs" />
      </uni-forms-item>

      <uni-forms-item label="年龄" required name="age">
        <uni-easyinput v-model="baseFormData.age" placeholder="请输入年龄" type="number" />
      </uni-forms-item>
      <uni-forms-item label="养宠经验" required name="experience">
        <uni-data-checkbox v-model="baseFormData.experience" :localdata="experience" />
      </uni-forms-item>

      <uni-forms-item label="目前宠物" required name="pet">
        <uni-data-checkbox v-model="baseFormData.pet" :localdata="pet" />
      </uni-forms-item>
      <uni-forms-item label="婚姻状况" required name="marriage">
        <uni-data-checkbox
          v-model="baseFormData.marriage"
          placeholder="请输入姓名"
          :localdata="marriage"
        />
      </uni-forms-item>
      <uni-forms-item label="月收入" required name="income">
        <uni-easyinput v-model="baseFormData.income" placeholder="请输入月收入" type="number" />
      </uni-forms-item>

      <uni-forms-item label="职业" required name="profession">
        <uni-easyinput v-model="baseFormData.profession" placeholder="请输入职业" />
      </uni-forms-item>

      <uni-forms-item label="所在城市" required name="city">
        <uni-easyinput v-model="baseFormData.city" placeholder="请输入所在城市" />
      </uni-forms-item>
      <uni-forms-item label="手机号" required name="phone">
        <uni-easyinput v-model="baseFormData.phone" placeholder="请输入手机号" />
      </uni-forms-item>
      <uni-forms-item label="表达领养诚意" name="intruduction">
        <uni-easyinput
          type="textarea"
          v-model="baseFormData.introduction"
          placeholder="请输入表达领养诚意"
        />
      </uni-forms-item>
    </uni-forms>
    <view class=""><button class="submit" @tap="submit" type="primary">提交申请</button></view>
  </view>
</template>

<script setup>
import { ref } from 'vue'
import { onReady, onLoad } from '@dcloudio/uni-app'
import { applyAdoptAPI } from '@/apis/adopt'
import { useUserStore } from '@/stores/user'
const adoptId = ref('')
const baseForm = ref()
const userStore = useUserStore()
const rules = ref({
  sex: {
    rules: [{ required: true, errorMessage: '请选择性别', trigger: 'change' }],
  },
  age: {
    rules: [
      { required: true, errorMessage: '请输入年龄', trigger: 'change', type: 'number' },
      { type: 'number', errorMessage: '年龄必须为数字', trigger: 'change' },
      { min: 1, errorMessage: '年龄必须大于0', trigger: 'change' },
    ],
  },
  experience: {
    rules: [{ required: true, errorMessage: '请选择养宠经验', trigger: 'change' }],
  },
  pet: {
    rules: [{ required: true, errorMessage: '请选择目前宠物', trigger: 'change' }],
  },
  marriage: {
    rules: [{ required: true, errorMessage: '请选择婚姻状况', trigger: 'change' }],
  },
  income: {
    rules: [
      { required: true, errorMessage: '请输入月收入', trigger: 'change', type: 'number' },
      { type: 'number', errorMessage: '月收入必须为数字', trigger: 'change' },
      { min: 1, errorMessage: '月收入必须大于0', trigger: 'change' },
    ],
  },
  profession: {
    rules: [{ required: true, errorMessage: '请输入职业', trigger: 'change' }],
  },
  city: {
    rules: [{ required: true, errorMessage: '请输入所在城市', trigger: 'change' }],
  },
  phone: {
    rules: [
      { required: true, errorMessage: '请输入手机号', trigger: 'change' },
      { pattern: /^1[3456789]\d{9}$/, errorMessage: '请输入有效的手机号码', trigger: 'change' },
    ],
  },
  introduction: {
    rules: [{ required: true, errorMessage: '请输入表达领养诚意', trigger: 'change' }],
  },
})
const baseFormData = ref({
  sex: '',
  age: null,
  experience: '',
  pet: '',
  marriage: '',
  income: null,
  profession: '',
  city: '',
  phone: '',
  introduction: '',
  status:'拒绝',
  adopt_id:""
})
const sexs = ref([
  {
    text: '男',
    value: '男',
  },
  {
    text: '女',
    value: '女',
  },
])

const experience = ref([
  {
    text: '有',
    value: '有',
  },
  {
    text: '无',
    value: '无',
  },
])
const pet = ref([
  {
    text: '有',
    value: '有',
  },
  {
    text: '无',
    value: '无',
  },
])
const marriage = ref([
  {
    text: '单身',
    value: '单身',
  },
  {
    text: '恋爱',
    value: '恋爱',
  },
  {
    text: '已婚',
    value: '已婚',
  },
])

const submit = async () => {
  try {
    const valid = await baseForm.value.validate()
    if (valid) {
      const result = await applyAdoptAPI({ ...baseFormData.value, user_id: userStore.user.user_id })

      uni.showToast({
        title: '申请成功',
        icon: 'none',
      })

      setTimeout(()=>{
              uni.navigateBack()
      },3000)

    }
  } catch (e) {
    uni.showToast({
      title: '申请失败',
      icon: 'none',
    })
  }
}

onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }

    adoptId.value = obj.adoptId
  baseFormData.value.adopt_id=obj.adoptId
    
  }
})
</script>

<style scoped lang="scss">
.main {
  padding: 40rpx;
}
</style>
