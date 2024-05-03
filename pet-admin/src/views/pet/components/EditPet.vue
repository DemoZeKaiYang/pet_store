<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑宠物" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="宠物头像 :" size="large" prop="pet_avatar">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.pet_avatar" :src="imagePrefix + formData.pet_avatar" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="宠物名称 :" size="large" class="item" prop="pet_name">
        <el-input v-model="formData.pet_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="宠物种类 :" size="large" prop="pet_kind">
        <el-select v-model="formData.pet_kind" placeholder="请选择种类" size="large" @change="optionsChange">
          <el-option v-for="item in options" :key="item.pet_kind_id" :label="item.pet_kind" :value="item.pet_kind" />
        </el-select>
      </el-form-item>
      <el-form-item label="宠物绝育 :" size="large" class="item" prop="pet_sterilize">
        <el-radio-group v-model="formData.pet_sterilize">
          <el-radio value="1" size="large">绝育</el-radio>
          <el-radio value="0" size="large">未绝育</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="宠物生辰 :" size="large" prop="pet_birthday">
        <el-date-picker
          :disabled-date="disabledDate"
          v-model="formData.pet_birthday"
          type="date"
          placeholder="请选择宠物的生日"
          :size="size"
        />
      </el-form-item>

      <el-form-item label="宠物性别 :" size="large" prop="pet_sex">
        <el-radio-group v-model="formData.pet_sex">
          <el-radio value="1" size="large">靓仔</el-radio>
          <el-radio value="0" size="large">靓女</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="宠物主人 :" size="large" prop="user_name">
        <el-input v-model="formData.user_name" autocomplete="off" disabled />
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
import { uploadShopCategoryAPI } from '@/apis/shop/good_category/index.js'
import { getPetKindAPI, addPetAPI, updatePetAPI, uploadPetAPI } from '@/apis/pet/index.js'
const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])
const formData = ref({
  pet_avatar: '',
  pet_birthday: '',
  pet_id: '',
  pet_kind_id: '',
  pet_kind: '',
  pet_name: '',
  user_id: '',
  user_name: ''
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/pet_uploads/')

//实例
const formRef = ref()

//宠物种类
const options = ref([])
//校验规则
const rules = reactive({
  pet_name: [{ required: true, message: '请输入宠物名称', trigger: 'blur' }],
  pet_kind: [{ required: true, message: '请选择宠物种类', trigger: 'change' }],
  pet_sterilize: [{ required: true, message: '请选择宠物绝育状态', trigger: 'change' }],
  pet_birthday: [{ required: true, message: '请选择宠物生日', trigger: 'change' }],
  pet_sex: [{ required: true, message: '请选择宠物性别', trigger: 'change' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  formRef.value.resetFields()
  emit('cancelDialog')
}
const resetFormData = () => {
  formData.value = {
    pet_avatar: '',
    pet_birthday: '',
    pet_id: '',
    pet_kind_id: '',
    pet_kind: '',
    pet_name: '',
    user_id: '',
    user_name: ''
  }
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addPetAPI(formData.value)
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
        const result = await updatePetAPI(formData.value)
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
    formData.value.pet_avatar = result.data.pet_avatar
  }
}

//获取所有的种类
const getPetKind = async () => {
  const result = await getPetKindAPI()
  if (result.code === 2000) {
    options.value = result.data
  }
}

//optionsChange:选择种类时自动填充id
const optionsChange = (value) => {
  formData.value.pet_kind_id = options.value.find((element) => {
    return element.pet_kind === value
  }).pet_kind_id
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
onMounted(() => {
  getPetKind()
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
