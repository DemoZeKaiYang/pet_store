<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑分类" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="分类图片 :" size="large" prop="good_category_image">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.good_category_image" :src="imagePrefix + formData.good_category_image" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="分类名称 :" size="large" class="item" prop="good_category_name">
        <el-input v-model="formData.good_category_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="等 级 :" size="large" label-width="105" prop="level">
        <el-input :value="formData.level" autocomplete="off" disabled />
      </el-form-item>

      <el-form-item label="种类名称 :" size="large" class="item" prop="good_kind_name">
        <el-select v-model="formData.good_kind_name" placeholder="请选择种类" size="large" @change="optionsChange">
          <el-option
            v-for="item in options"
            :key="item.good_kind_id"
            :label="item.good_kind_name"
            :value="item.good_kind_name"
          />
        </el-select>
      </el-form-item>
      <el-form-item label="分类排序 :" size="large" prop="good_category_order">
        <el-input v-model.number="formData.good_category_order" autocomplete="off" />
      </el-form-item>

      <el-form-item label="分类显示 :" size="large" prop="good_category_display">
        <el-input v-model.number="formData.good_category_display" autocomplete="off" />
      </el-form-item>

      <el-form-item label="种 类 i d :" size="large" class="item" prop="good_kind_name" v-show="false">
        <el-select v-model="formData.good_kind_id" placeholder="请选择种类" size="large" disabled> </el-select>
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
import { uploadShopCategoryAPI, addShopCategoryAPI, updateShopCategoryAPI } from '@/apis/shop/good_category/index.js'
import { getShopKindAPI } from '@/apis/shop/good_kind/index.js'
const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])

//
const formData = ref({
  good_category_name: '',
  level: 2,
  parent_category_id: '',
  good_kind_name: '',
  good_category_order: '',
  good_category_image: '',
  good_category_display: ''
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
  good_category_name: [
    { required: true, message: '请输入分类名称', trigger: 'blur' },
    { min: 4, max: 4, message: '长度必须为4位', trigger: 'blur' }
  ],
  level: [{ required: true, message: '请输入等级', trigger: 'blur' }],
  good_kind_name: [{ required: true, message: '请输入种类名称', trigger: 'blur' }],
  good_category_order: [{ required: true, message: '请输入分类排序', trigger: 'blur' }],
  good_category_image: [{ required: true, message: '请输入分类排序', trigger: 'blur' }],
  good_category_display: [{ required: true, message: '请输入分类排序', trigger: 'blur' }]
})

//取消
const cancelHandler = () => {
  formData.value = {
    good_category_name: '',
    level: 2,
    parent_category_id: '',
    good_kind_name: '',
    good_category_order: '',
    good_category_image: ''
  }
  formRef.value.resetFields()
  emit('cancelDialog')
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addShopCategoryAPI(formData.value)
        if (result.code === 2000) {
          successMessage('添加成功')

          formRef.value.resetFields()
          emit('cancelDialog')
          emit('renderData')
        } else {
          successMessage('添加失败')
        }
      } else {
        //修改
        const result = await updateShopCategoryAPI(formData.value)
        if (result.code === 2000) {
          successMessage('修改成功')
          formRef.value.resetFields()
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
  fd.append('good_category_image', uploadFile.raw)
  const result = await uploadShopCategoryAPI(fd)
  if (result.code === 2000) {
    formData.value.good_category_image = result.data.good_category_image
  }
}

//获取所有的种类
const getShopKind = async () => {
  const result = await getShopKindAPI()
  if (result.code === 2000) {
    // console.log(`output->result`, result)
    options.value = result.data
  }
}

//optionsChange:选择种类时自动填充id
const optionsChange = (value) => {
  formData.value.good_kind_id = options.value.find((element) => {
    return element.good_kind_name === value
  }).good_kind_id
  console.log(formData.value)
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
  getShopKind()
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
