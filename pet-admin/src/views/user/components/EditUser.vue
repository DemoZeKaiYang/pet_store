<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑用户" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="用户头像 :" size="large" prop="user_avatar">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.user_avatar" :src="imagePrefix + formData.user_avatar" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="用户名称 :" size="large" class="item" prop="user_name">
        <el-input v-model="formData.user_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="用户电话 :" size="large" prop="user_phone">
        <el-input v-model="formData.user_phone" autocomplete="off" />
      </el-form-item>
      <el-form-item label="用户生日 :" size="large" class="item" prop="user_birthday">
        <el-date-picker
          v-model="formData.user_birthday"
          type="date"
          placeholder="请选择日期"
          :size="large"
          :disabled-date="disabledDate"
        />
      </el-form-item>

      <el-form-item label="个性签名 :" size="large" prop="user_signature">
        <el-input v-model="formData.user_signature" :rows="3" type="textarea" placeholder="请填写用户的个性签名" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelHandler" size="large" class="edit-btn" round>取消</el-button>
        <el-button type="primary" @click="confirm(formRef)" size="large" class="edit-btn" round>
          {{ isAdd ? '添加' : '修改' }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { successMessage, failMessage } from '@/utils/message'

import { updateUserAPI, uploadUserAPI } from '@/apis/user/index.js'

const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])
const formData = ref({
  user_id: '',
  user_name: '',
  user_phone: '',
  user_birthday: '',
  user_signature: '',
  user_avatar: ''
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/uploads/')

//实例
const formRef = ref()

//校验规则
const rules = reactive({
  user_name: [{ required: true, message: '请输入用户名称', trigger: 'blur' }],
  user_phone: [
    { required: true, message: '请选择用户电话', trigger: 'change' },
    {
      validator: (rule, value, callback) => {
        const reg = /^[1][3-9]\d{9}$/
        if (reg.test(value)) {
          callback() // 校验通过
        } else {
          callback(new Error('请输入正确的手机号')) // 校验不通过，返回错误信息
        }
      },
      trigger: 'blur'
    }
  ],
  user_birthday: [{ required: true, message: '请选择用户生日', trigger: 'change' }],
  user_signature: [{ required: true, message: '请选择用户个性签名', trigger: 'change' }],
  user_avatar: [{ required: true, message: '请选择用户头像', trigger: 'change' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  formRef.value.resetFields()
  emit('cancelDialog')
}
const resetFormData = () => {
  formData.value = {
    user_id: '',
    user_name: '',
    user_phone: '',
    user_birthday: '',
    user_signature: '',
    user_avatar: ''
  }
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        // const result = await (formData.value)
        if (result.code === 2000) {
          successMessage('添加成功')
          resetFormData()
          emit('cancelDialog')
          emit('renderData')
        } else {
          successMessage('添加失败')
        }
      } else {
        //修改
        const result = await updateUserAPI(formData.value)
        if (result.code === 2000) {
          successMessage('修改成功')
          resetFormData()
          emit('cancelDialog')
          emit('renderData')
        } else {
          successMessage('修改失败')
        }
      }
    } else {
      failMessage('失败')
    }
  })
}

//图片改变事件
const getFile = async (uploadFile, uploadFiles) => {
  const fd = new FormData()
  fd.append('user_avatar', uploadFile.raw)
  const result = await uploadUserAPI(fd)
  if (result.code === 2000) {
    formData.value.user_avatar = result.data.user_avatar
  }
}
watch(
  () => props.dialogFormVisible,
  (newVal, oldVal) => {
    if (newVal && JSON.stringify(props.editData) !== '{}') {
      formData.value = props.editData
      console.log(formData.value)
      isAdd.value = false
    } else {
      isAdd.value = true
    }
  }
)
//判断是否会超出日期
const disabledDate = (time) => {
  return time.getTime() > Date.now()
}
onMounted(() => {})
</script>

<style scoped lang="scss">
:deep(.el-form-item__label) {
  font-size: 18px;
}

.item {
  font-size: 24px;
  margin-top: 30px;
}

.kind-form {
  margin-top: 20px;
}

.dialog-footer {
  display: flex;
  justify-content: space-evenly;
}

.edit-btn {
  height: 50px;
  width: 200px;
  font-size: 20px;
}

:deep(.el-upload) {
  border: 1px dashed #8c939d;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: var(--el-transition-duration-fast);
}

.avatar {
  width: 178px;
  height: 178px;
}

:deep(.el-upload:hover) {
  border-color: #8c939d;
}

:deep(.avatar-uploader-icon) {
  font-size: 28px;
  color: #66696d;
  width: 178px;
  height: 178px;
  text-align: center;
}
</style>
