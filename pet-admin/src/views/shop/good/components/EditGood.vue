<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑商品" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="封面图片 :" size="large" prop="good_image">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.good_image" :src="imagePrefix + formData.good_image" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon">
            <Plus />
          </el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="商品名称 :" size="large" class="item" prop="good_name">
        <el-input v-model="formData.good_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="商品价格 :" size="large" prop="good_price">
        <el-input-number
          v-model.number="formData.good_price"
          autocomplete="off"
          size="large"
          precision="2"
          style="width: 500px"
          min="1"
        />
      </el-form-item>

      <el-form-item label="商品原价 :" size="large" class="item" prop="good_origin_price">
        <el-input-number
          v-model.number="formData.good_origin_price"
          autocomplete="off"
          size="large"
          precision="2"
          style="width: 500px"
          min="1"
        />
      </el-form-item>
      <el-form-item label="评论数量 :" size="large" prop="good_comment_num">
        <el-input-number
          v-model.number="formData.good_comment_num"
          autocomplete="off"
          size="large"
          style="width: 500px"
        />
      </el-form-item>

      <el-form-item label="销售数量 :" size="large" prop="good_sold_num">
        <el-input-number v-model.number="formData.good_sold_num" autocomplete="off" size="large" style="width: 500px" />
      </el-form-item>

      <el-form-item label="商品种类 :" size="large" prop="good_category_name">
        <el-select
          v-model="formData.good_category_name"
          placeholder="请选择对应的商品分类"
          size="large"
          @change="optionsChange"
        >
          <el-option
            v-for="item in options"
            :key="item.good_category_id"
            :label="item.good_category_name"
            :value="item.good_category_name"
          />
        </el-select>

        <el-form-item label="分类id:" size="large" class="item" prop="good_category_id" v-show="false">
          <el-select v-model="formData.good_category_id" placeholder="请选择种类" size="large" disabled></el-select>
        </el-form-item>
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
import { getShopCategoryAPI } from '@/apis/shop/good_category/index.js'
import { uploadGoodAPI, addGoodAPI, updateGoodAPI } from '@/apis/shop/good/index.js'

const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])

//
const formData = ref({
  good_name: '',
  good_price: 1,
  good_origin_price: '',
  good_comment_num: 0,
  good_image: '',
  good_sold_num: 0,
  good_category_name: '',
  good_category_id: ''
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/good_uploads/')

//实例
const formRef = ref()

//种类选项
const options = ref([])

//校验规则
const rules = reactive({
  good_name: [
    { required: true, message: '请输入商品名称', trigger: 'blur' },
    { min: 1, message: '长度必须为4位', trigger: 'blur' }
  ],
  good_price: [{ required: true, message: '请输入商品价格', trigger: 'blur' }],
  good_origin_price: [{ required: true, message: '请输入商品原价', trigger: 'blur' }],
  good_comment_num: [{ required: true, message: '请输入商品评论数量', trigger: 'blur' }],
  good_image: [{ required: true, message: '请选择商品封面图', trigger: 'blur' }],
  good_category_id: [{ required: true, message: '请选择商品id', trigger: 'blur' }],
  good_sold_num: [{ required: true, message: '请选择销售数量', trigger: 'blur' }],
  good_category_name: [{ required: true, message: '请选择商品分类', trigger: 'blur' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  emit('cancelDialog')
}

const resetFormData = () => {
  formData.value = {
    good_name: '',
    good_price: 1,
    good_origin_price: '',
    good_comment_num: 0,
    good_image: '',
    good_sold_num: 0,
    good_category_name: '',
    good_category_id: ''
  }
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addGoodAPI(formData.value)
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
        const result = await updateGoodAPI(formData.value)
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
  fd.append('good_image', uploadFile.raw)
  const result = await uploadGoodAPI(fd)
  if (result.code === 2000) {
    formData.value.good_image = result.data.good_image
  }
}

//获取所有的种类
const getShopCategory = async () => {
  const result = await getShopCategoryAPI()
  if (result.code === 2000) {
    options.value = result.data
  }
}

//optionsChange:选择种类时自动填充id
const optionsChange = (value) => {
  formData.value.good_category_id = options.value.find((element) => {
    return element.good_category_name === value
  }).good_category_id
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
onMounted(() => {
  getShopCategory()
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
