<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑服务" width="1500" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="服务名称 :" size="large" class="item" prop="service_name">
        <el-input v-model="formData.service_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="服务价格 :" size="large" prop="good_price">
        <el-input-number
          v-model.number="formData.service_price"
          autocomplete="off"
          size="large"
          precision="2"
          style="width: 500px"
          min="1"
        />
      </el-form-item>
      <el-form-item label="服务描述 :" size="large" class="item" prop="service_detail_describe">
        <el-input v-model="formData.service_detail_describe" autocomplete="off" type="textarea" />
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
import { updateServiceDetailAPI, addServiceDetailAPI } from '@/apis/service/index.js'

const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])

//
const formData = ref({
  service_detail_id: '',
  service_detail_describe: '',
  service_price: 0,
  service_name: '',
  service_id: ''
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/service_uploads/')

//实例
const formRef = ref()

//校验规则
const rules = reactive({
  service_detail_describe: [{ required: true, message: '请输入服务描述', trigger: 'blur' }],
  service_price: [{ required: true, message: '请输入服务价格', trigger: 'blur' }],
  service_name: [{ required: true, message: '请输入服务名称', trigger: 'blur' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  emit('cancelDialog')
}

const resetFormData = () => {
  formData.value = {
    service_detail_id: '',
    service_detail_describe: '',
    service_price: 0,
    service_name: '',
    service_id: ''
  }
  formRef.value.resetFields()
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addServiceDetailAPI(formData.value)
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
        const result = await updateServiceDetailAPI(formData.value)
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

onMounted(() => {})
</script>

<style scoped lang="scss">
.image-contain {
  display: flex;
  justify-content: space-evenly;
  .detail-image {
    display: flex;
    flex-direction: column;
  }
}

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
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
