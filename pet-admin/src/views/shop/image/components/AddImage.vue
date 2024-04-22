<template>
  <el-dialog :model-value='addDialogFormVisible' title='编辑商品' width='600' @close='cancelHandler'>
    <el-form :model='formData' class='kind-form' :rules='rules' ref='formRef' show-message>
      <el-form-item label='图片 :' size='large' prop='good_image_url'>
        <el-upload
          class='avatar-uploader'
          :show-file-list='false'
          accept='image/png, image/gif, image/jpg, image/jpeg'
          :on-change='getFile'
          :auto-upload='false'
        >
          <img v-if='formData.good_image_url' :src='imagePrefix + formData.good_image_url' class='avatar' />
          <el-icon v-else class='avatar-uploader-icon'>
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>

      <el-form-item label='图片类型 :' size='large' prop='good_comment_num'>
        <el-input-number
          v-model='formData.good_image_type'
          autocomplete='off'
          size='large'
          style='width: 500px'
          placeholder='0为轮播图，1为长图'
          :min='0'
          :max='1'
        />
      </el-form-item>
      <el-form-item label='图片顺序 :' size='large' prop='good_comment_num'>
        <el-input-number
          v-model.number='formData.good_image_order'
          :min='1'
          :max='3'
          autocomplete='off'
          size='large'
          style='width: 500px'
          placeholder='1起步'


        />
      </el-form-item>

      <el-form-item label='商品名称 :' size='large' prop='good_category_name'>
        <el-select
          v-model='formData.good_name'
          placeholder='请选择对应的商品分类'
          size='large'
          @change='optionsChange'
        >
          <el-option
            v-for='item in options'
            :key='item.good_id'
            :label='item.good_name'
            :value='item.good_name'
          />
        </el-select>

        <el-form-item label='商品id:' size='large' class='item' prop='good_category_id' v-show='false'>
          <el-select v-model='formData.good_category_id' placeholder='请选择种类' size='large' disabled></el-select>
        </el-form-item>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class='dialog-footer'>
        <el-button @click='cancelHandler' size='large' class='edit-btn' round>取消</el-button>
        <el-button type='primary' @click='confirm(formRef)' size='large' class='edit-btn' round>
          添加
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { successMessage, failMessage } from '@/utils/message'
import { getGoodAPI } from '@/apis/shop/good/index.js'
import {  addGoodImageAPI, uploadGoodImageAPI } from '@/apis/shop/good_image/index.js'

const props = defineProps(['addDialogFormVisible'])
const emit = defineEmits(['cancelAddDialog', 'renderData'])

//
const formData = ref({
  good_image_url: '',
  good_id: '',
  good_name: '',
  good_image_type: '',
  good_image_order: ''

})

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/good_uploads/')

//实例
const formRef = ref()

//种类选项
const options = ref([])

//校验规则
const rules = reactive({
  good_image_url: [{ required: true, message: '请上传图片', trigger: 'change' }],
  good_image_type: [{ required: true, message: '请输入图片类型', trigger: 'change' }],
  good_image_order: [{ required: true, message: '请输入图片顺序', trigger: 'change' }],
  good_name: [{ required: true, message: '请选择商品名称', trigger: 'change' }],
  good_id: [{ required: true, message: '请选择商品ID', trigger: 'change' }]
}
)

//取消
const cancelHandler = () => {
  resetFormData()
  emit('cancelAddDialog')
}

const resetFormData = () => {
  formData.value = {
    good_image_url: '',
    good_id: '',
    good_name: '',
    good_image_type: '',
    good_image_order: ''
  }
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
 await formEl.validate(async (valid, fields) => {
    if (valid) {
      const result = await addGoodImageAPI(formData.value)
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
  fd.append('good_image', uploadFile.raw)
  const result = await uploadGoodImageAPI(fd)
  if (result.code === 2000) {
    formData.value.good_image_url = result.data.good_image
  }
}

//获取所有商品
const getGood = async () => {
  const result = await getGoodAPI()
  if (result.code === 2000) {
    options.value = result.data
  }
}

//optionsChange:选择种类时自动填充id
const optionsChange = (value) => {
  formData.value.good_id = options.value.find((element) => {
    return element.good_name === value
  }).good_id
}

onMounted(() => {
  getGood()
})
</script>

<style scoped lang='scss'>
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
