<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑种类" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="宠物头像 :" size="large" prop="adopt_image">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.adopt_image" :src="imagePrefix + formData.adopt_image" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="宠物名称 :" size="large" class="item" prop="adopt_name">
        <el-input v-model="formData.adopt_name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="宠物生辰 :" size="large" prop="adopt_birthday">
        <el-date-picker :disabled-date='disabledDate' v-model="formData.adopt_birthday" type="date" placeholder="请选择宠物的生日" :size="size" />
      </el-form-item>
      <el-form-item label="宠物领养 :" size="large" class="item" prop="adopt_status">
        <el-radio-group v-model="formData.adopt_status">
          <el-radio :value="1" size="large">未领养</el-radio>
          <el-radio :value="0" size="large">已领养</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="宠物地区 :" size="large" class="item" prop="adopt_address">
        <el-input v-model="formData.adopt_address" autocomplete="off" />
      </el-form-item>

      <el-form-item label="宠物性别 :" size="large" prop="adopt_sex">
        <el-radio-group v-model="formData.adopt_sex">
          <el-radio :value="1" size="large">靓仔</el-radio>
          <el-radio :value="0" size="large">靓女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="宠物主人 :" size="large" prop="user_id">
        <el-input v-model="formData.user_id" autocomplete="off"  />
      </el-form-item>
      <el-form-item label="宠物品种 :" size="large" prop="adopt_var">
        <el-input v-model="formData.adopt_var" autocomplete="off"  />
      </el-form-item>
      <el-form-item label="宠物描述 :" size="large" class="item" prop="adopt_description">
        <el-input v-model="formData.adopt_description"   type="textarea" autocomplete="off" />
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
import {   uploadPetAPI } from '@/apis/pet/index.js'
import { addAdoptAPI, updateAdoptAPI } from '@/apis/adopt/index.js'
const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])
const formData = ref({
  adopt_id:"",
  adopt_name:"",
  adopt_birthday:"",
  adopt_image:"",
  adopt_status:null,
  adopt_address:"",
  adopt_description:"",
  adopt_sex:null,
  user_id:"",
  adopt_var:""
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/pet_uploads/')

//实例
const formRef = ref()

//校验规则
const rules = reactive({
  adopt_name: [{ required: true, message: '请输入宠物名称', trigger: 'blur' }],
  adopt_image: [{ required: true, message: '请输入宠物图片', trigger: 'blur' }],
  adopt_birthday: [{ required: true, message: '请选择宠物生日', trigger: 'change' }],
  adopt_address: [{ required: true, message: '请输入宠物地址', trigger: 'blur' }],
  adopt_sex: [{ required: true, message: '请选择宠物性别', trigger: 'change' }],
  adopt_status: [{ required: true, message: '请选择宠物状态', trigger: 'change' }],
  adopt_description: [{ required: true, message: '请输入宠物描述', trigger: 'blur' }], // 假设描述不是必填项
  adopt_var: [{ required: true, message: '请输入宠物品种', trigger: 'blur' }], // 假设描述不是必填项
})

//取消
const cancelHandler = () => {
  resetFormData()

  emit('cancelDialog')
}
const resetFormData = () => {
  formData.value = {
    adopt_id:"",
    adopt_name:"",
    adopt_birthday:"",
    adopt_image:"",
    adopt_status:null,
    adopt_address:"",
    adopt_description:"",
    adopt_sex:null,
    user_id:"",
    adopt_var:""
  }
  formRef.value.resetFields()
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addAdoptAPI(formData.value)
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
        const result = await updateAdoptAPI(formData.value)
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
  fd.append('pet_avatar', uploadFile.raw)
  const result = await uploadPetAPI(fd)
  if (result.code === 2000) {
    formData.value.adopt_image = result.data.pet_avatar
  }
}

watch(
  () => props.dialogFormVisible,
  (newVal, oldVal) => {
    if (newVal && JSON.stringify(props.editData) !== '{}') {
      formData.value = props.editData

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
onMounted(() => {

})
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
