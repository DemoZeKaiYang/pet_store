<template>
  <el-dialog :model-value="addDialogFormVisible" title="编辑商品" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="图片 :" size="large" prop="service_image_name">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.service_image_name" :src="imagePrefix + formData.service_image_name" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label="图片类型 :" size="large" prop="service_image_type">
        <el-input-number
          v-model="formData.service_image_type"
          autocomplete="off"
          size="large"
          style="width: 500px"
          placeholder="1为轮播图，2为长图"
          :min="1"
          :max="2"
        />
      </el-form-item>
      <el-form-item label="图片顺序 :" size="large" prop="service_image_order">
        <el-input-number
          v-model.number="formData.service_image_order"
          :min="1"
          :max="4"
          autocomplete="off"
          size="large"
          style="width: 500px"
          placeholder="1起步"
        />
      </el-form-item>

      <el-form-item label="服务名称 :" size="large" prop="service_detail_name">
        <el-select
          v-model="formData.service_detail_name"
          placeholder="请选择对应的商品分类"
          size="large"
          @change="optionsChange"
        >
          <el-option
            v-for="item in options"
            :key="item.service_detail_id"
            :label="item.service_name"
            :value="item.service_name"
          />
        </el-select>

        <el-form-item label="服务id:" size="large" class="item" prop="service_detail_id" v-show="false">
          <el-select v-model="formData.service_detail_id" placeholder="请选择种类" size="large" disabled></el-select>
        </el-form-item>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="cancelHandler" size="large" class="edit-btn" round>取消</el-button>
        <el-button type="primary" @click="confirm(formRef)" size="large" class="edit-btn" round> 添加 </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { successMessage, failMessage } from '@/utils/message'

import { addServiceImageAPI, getAllServiceAPI, uploadServiceImageAPI } from '@/apis/service/index.js'

const props = defineProps(['addDialogFormVisible'])
const emit = defineEmits(['cancelAddDialog', 'renderData'])

const formData = ref({
  service_image_name: '',
  service_image_type: '',
  service_image_order: '',
  service_detail_id: '',
  service_detail_name: '',
  service_name: ''
})

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/service_uploads/')

//实例
const formRef = ref()

//种类选项
const options = ref([])

//校验规则
const rules = reactive({
  service_detail_name: [{ required: true, message: '请上传服务名称', trigger: 'change' }],
  service_image_type: [{ required: true, message: '请输入图片类型', trigger: 'change' }],
  service_image_order: [{ required: true, message: '请输入图片顺序', trigger: 'change' }],
  service_image_name: [{ required: true, message: '请选择服务名称', trigger: 'change' }],
  service_detail_id: [{ required: true, message: '请选择服务ID', trigger: 'change' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  emit('cancelAddDialog')
}

const resetFormData = () => {
  formData.value = {
    service_image_name: '',
    service_image_type: '',
    service_image_order: '',
    service_detail_id: '',
    service_detail_name: ''
  }
  formRef.value.resetFields()
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const result = await addServiceImageAPI(formData.value)
      if (result.code === 2000) {
        successMessage('添加成功')
        resetFormData()
        emit('cancelAddDialog')
        emit('renderData')
      } else {
        successMessage('添加失败')
      }
    } else {
      failMessage('失败,请填写数据')
    }
  })
}

//图片改变事件
const getFile = async (uploadFile, uploadFiles) => {
  const fd = new FormData()
  fd.append('service_image', uploadFile.raw)
  const result = await uploadServiceImageAPI(fd)
  if (result.code === 2000) {
    formData.value.service_image_name = result.data.service_image_name
  }
}

const getGood = async () => {
  const result = await getAllServiceAPI()
  if (result.code === 2000) {
    options.value = result.data
  }
}

//optionsChange:选择种类时自动填充id
const optionsChange = (value) => {
  formData.value.service_detail_id = options.value.find((element) => {
    return element.service_name === value
  }).service_detail_id
}

onMounted(() => {
  getGood()
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
