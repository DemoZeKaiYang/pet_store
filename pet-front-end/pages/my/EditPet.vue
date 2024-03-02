<template>
  <uni-card>
    <uni-forms label-align="left" :modelValue="formData" ref="form">
      <uni-forms-item class="pet-picture">
        <uni-file-picker
          limit="1"
          v-model="imageValue"
          fileMediatype="image"
          :auto-upload="false"
          @select="select"
          return-type="object"
        ></uni-file-picker>
      </uni-forms-item>
      <uni-forms-item label="昵称:" name="pet_name">
        <uni-easyinput placeholder="宠物的昵称" v-model="formData.pet_name" />
      </uni-forms-item>

      <uni-forms-item label="品种:" name="pet_kind_id">
        <uni-data-select
          v-model="formData.pet_kind_id"
          :localdata="kinds"
          @change="change"
        ></uni-data-select>
      </uni-forms-item>
      <uni-forms-item label="绝育:" name="pet_sterilize">
        <uni-data-select v-model="formData.pet_sterilize" :localdata="sterilize"> </uni-data-select>
      </uni-forms-item>

      <uni-forms-item label="性别:" name="pet_sex">
        <uni-data-checkbox v-model="formData.pet_sex" :localdata="sexs" />
      </uni-forms-item>
      <uni-forms-item label="出生:" name="pet_birthday">
        <uni-datetime-picker
          type="date"
          :clear-icon="false"
          v-model="formData.pet_birthday"
          ref="date"
          :end="end"
        />
      </uni-forms-item>
    </uni-forms>
  </uni-card>
  <view class="button-group">
    <button type="warn" class="op-btn" @tap="delPet" :disabled="showDel">删除</button>
    <button type="primary" class="op-btn" @tap="savePet">保存</button>
  </view>
</template>

<script setup>
import { computed, onMounted, ref } from 'vue'
import request from '@/utils/request'
import { delPetApi, getKindPetApi, updatePetApi } from '@/apis/pet.js'
import { onLoad, onReady, onUnload } from '@dcloudio/uni-app'
import { useUserStore } from '../../stores/user'
import petRules from './petRules.js'
import { devUrl } from '@/config'
const store = useUserStore()
const form = ref()
const formData = ref({
  pet_name: '',
  pet_kind_id: '',
  pet_sex: 1,
  pet_avatar: '',
  pet_sterilize: 1,
  pet_birthday: '',
  user_id: store.user.user_id,
})
const kinds = ref([])
// 单选本地数据
const sexs = ref([
  {
    text: '男',
    value: 0,
  },
  {
    text: '女',
    value: 1,
  },
  {
    text: '保密',
    value: 2,
  },
])
//本地数据
const sterilize = ref([
  {
    value: 0,
    text: '未绝育',
  },
  {
    value: 1,
    text: '绝育',
  },
])
//日期的限制
// const end=ref(new )
//图片的数据
const imageValue = computed(() => {
  if (!formData.value.pet_avatar && formData.value.pet_avatar === '') {
    return {}
  }
  return {
    name: formData.value.pet_avatar,
    extname: 'png',
    url: `${devUrl}/pet_uploads/${formData.value.pet_avatar}`,
  }
})
//获取品种
const getKind = async () => {
  const result = await getKindPetApi()
  if (result.code === 200) {
    kinds.value = result.data.map((item) => {
      return {
        value: item.pet_kind_id,
        text: item.pet_kind,
      }
    })
  }
}

//上传头像
const select = async (e) => {
  if (e.errMsg) {
    uni.showToast({
      title: '请选择正确的图片格式',
      icon: 'none',
    })
    return
  }
  let token = null
  token = uni.getStorageSync('token')
  //后面修改
  const { data } = await uni.uploadFile({
    url: devUrl+'/pet/upload',
    filePath: e.tempFilePaths[0],
    name: 'pet_avatar',
    fileType: 'image',
    header: {
      Authorization: token,
    },
  })
  const result = JSON.parse(data)
  if (result.code === 200) {
    formData.value.pet_avatar = result.data.pet_avatar
    uni.showToast({
      title: '上传成功',
      icon: 'none',
    })
  } else {
    uni.showToast({
      title: result.message,
      icon: 'none',
    })
  }
}
//保存
const savePet = async () => {
  try {
    await form.value.validate()
    const result = await updatePetApi(formData.value)
    if (result.code === 200) {
      uni.showToast({
        title: result.message,
      })
      uni.navigateBack({
        delta: 1,
        animationType: 'slide-out-left',
        animationDuration: 1000,
      })
      uni.$emit('renderPet')
    } else {
      uni.showToast({
        title: '添加失败',
      })
    }
    console.log(result)
  } catch (e) {
    console.log(e)
  }
}

const delPet = async (item) => {
  const result = await delPetApi(formData.value.pet_id)
  if (result.code === 200) {
    uni.showToast({
      title: '删除成功',
    })
    uni.navigateBack({
      delta: 1,
      animationType: 'slide-out-left',
      animationDuration: 1000,
    })
    uni.$emit('renderPet')
  } else {
    uni.showToast({
      title: '删除失败',
      icon: 'none',
    })
  }
}
const showDel = computed(() => {
  return formData.value.pet_id ? false : true
})
const end = computed(() => {
  const now = new Date()
  const year = now.getFullYear()
  const month = String(now.getMonth() + 1).padStart(2, '0')
  const date = String(now.getDate()).padStart(2, '0')
  return `${year}-${month}-${date}`
})
onMounted(() => {
  getKind()
})
onLoad((query) => {
  if (Object.keys(query).length !== 0) {
    let obj = {}
    for (let i in query) {
      if (decodeURIComponent(i) === 'pet_sex' || decodeURIComponent(i) === 'pet_sterilize')
        obj[decodeURIComponent(i)] = parseInt(decodeURIComponent(query[i]))
      else obj[decodeURIComponent(i)] = decodeURIComponent(query[i])
    }
    formData.value = obj
  }
})
onReady(() => {
  form.value.setRules(petRules)
})
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
