<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑种类" width="600" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="种类名称 :" size="large" class="item" prop="good_kind_name">
        <el-input v-model="formData.good_kind_name" autocomplete="off" />
      </el-form-item>

      <el-form-item label="等 级 :" size="large" label-width="105" prop="level">
        <el-input :value="formData.level" autocomplete="off" disabled />
      </el-form-item>

      <el-form-item label="商品排序 :" size="large" prop="good_kind_order">
        <el-input v-model.number="formData.good_kind_order" autocomplete="off" />
      </el-form-item>

      <el-form-item label="商品显示 :" size="large" prop="good_display">
        <el-input v-model.number="formData.good_display" autocomplete="off" />
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
import { addShopKindAPI, updateShopKindAPI } from '@/apis/shop/good_kind/index.js'
const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])
const formData = ref({
  good_kind_name: '',
  level: 1,
  good_kind_order: '',
  good_display: ''
})

//是添加还是删除
const isAdd = ref(true)

//实例
const formRef = ref()
//校验规则
const rules = reactive({
  good_kind_name: [
    { required: true, message: '请输入种类名称', trigger: 'blur' },
    { min: 4, max: 4, message: '长度必须为4位', trigger: 'blur' }
  ],
  level: [{ required: true, message: '请输入等级', trigger: 'blur' }],
  good_kind_order: [{ required: true, message: '请输入排序', trigger: 'blur' }],
  good_display: [{ required: true, message: '请输入是否显示', trigger: 'blur' }]
})

//取消
const cancelHandler = () => {
  formData.value = {
    good_kind_name: '',
    level: 1,
    good_kind_order: '',
    good_display: ''
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
        const result = await addShopKindAPI(formData.value)
        if (result.code === 2000) {
          successMessage('添加成功')
          formData.value = {
            good_kind_name: '',
            level: 1,
            good_kind_order: '',
            good_display: ''
          }
          formRef.value.resetFields()
          emit('cancelDialog')
          emit('renderData')
        } else {
          successMessage('添加失败')
        }
      } else {
        console.log(1)

        //修改
        const result = await updateShopKindAPI(formData.value)
        if (result.code === 2000) {
          successMessage('修改成功')

          formData.value = {
            good_kind_name: '',
            level: 1,
            good_kind_order: '',
            good_display: ''
          }
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
</style>
