<template>
  <el-dialog :model-value='dialogFormVisible' title='编辑商品' width='800' @close='cancelHandler'>
    <el-form :model='formData' class='kind-form' :rules='rules' ref='formRef' show-message>

      <el-form-item label='用户名称 :' size='large' class='item' prop='user_name'>
        <el-input v-model='formData.user_name' autocomplete='off' />
      </el-form-item>
      <el-form-item label='地址电话 :' size='large' class='item' prop='address_phone'>
        <el-input v-model='formData.address_phone' autocomplete='off' />
      </el-form-item>
      <el-form-item label='收件人姓名 :' size='large' class='item' prop='address_name'>
        <el-input v-model='formData.address_name' autocomplete='off' />
      </el-form-item>
      <el-form-item label='区域地址 :' size='large' class='item' prop='address_area'>

        <el-select v-model='formData.address_area[0]' placeholder='请输入省级' style='width: 200px;margin-left: 10px;'

                   @change='handlerProvince'
        >
          <el-option
            v-for='(item,index) in provinceOptions'
            :key='item'
            :label='item'
            :value='item'
          />
        </el-select>

        <el-select v-model='formData.address_area[1]' placeholder='请输入市级' style='width: 200px;margin-left: 10px;'
                   @change='handlerCity'
        >
          <el-option
            v-for='item in cityOptions'
            :key='item'
            :label='item'
            :value='item'
          />
        </el-select>

        <el-select v-model='formData.address_area[2]' placeholder='请输入市区县'
                   style='width: 200px;margin-left: 10px;'>
          <el-option
            v-for='item in regionOptions'
            :key='item'
            :label='item'
            :value='item'
          />
        </el-select>

      </el-form-item>
      <el-form-item label='详细地址 :' size='large' class='item' prop='address_details'>
        <el-input v-model='formData.address_details' autocomplete='off' />
      </el-form-item>
      <el-form-item label='默认地址 :' size='large' class='item' prop='address_default'>
        <el-radio-group v-model='formData.address_default' class='ml-4'>
          <el-radio :value='1' size='large'>默认地址</el-radio>
          <el-radio :value='0' size='large'>非默认地址</el-radio>
        </el-radio-group>
      </el-form-item>


    </el-form>
    <template #footer>
      <div class='dialog-footer'>
        <el-button @click='cancelHandler' size='large' class='edit-btn' round>取消</el-button>
        <el-button type='primary' @click='confirm(formRef)' size='large' class='edit-btn' round>
          {{ isAdd ? '添加' : '修改' }}
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>

<script setup>
import { successMessage, failMessage } from '@/utils/message'
import { updateAddressAPI } from '@/apis/address/index.js'
import { getAreas, getMyCity } from '@/views/address/area.js'
import { getProvinces } from '../area.js'
const props = defineProps(['dialogFormVisible', 'editData'])
const emit = defineEmits(['cancelDialog', 'renderData'])

//
const formData = ref({
  address_id: '',
  user_name: '', // 用户名称
  address_phone: '', // 地址电话
  address_name: '', // 收件人姓名
  address_area: [], // 区域地址，省级和市级分别对应数组中的第一个和第二个元素
  address_details: '', // 详细地址
  address_default: '',// 默认地址
  user_id: ''
})

//是添加还是删除
const isAdd = ref(true)

//实例
const formRef = ref()


//省份的数组
const provinceOptions = ref([])
//市级的数组
const cityOptions = ref([])
//地区的数组
const regionOptions = ref([])

//
const getProvincialCityRegion = () => {
  provinceOptions.value = getProvinces()
  const provinceIndex = provinceOptions.value.findIndex(item => {
    return item === formData.value.address_area[0]
  })
  cityOptions.value = getMyCity(provinceIndex)

  const cityIndex = cityOptions.value.findIndex(item => {
    return item === formData.value.address_area[1]
  })

  regionOptions.value = getAreas(provinceIndex, cityIndex)


}


//校验规则
const rules = reactive({
  user_name: [
    { required: true, message: '请输入用户名称', trigger: 'blur' },
    { min: 1, max: 20, message: '用户名称长度在 3 到 10 个字符', trigger: 'blur' }
  ],
  address_phone: [
    { required: true, message: '请输入地址电话', trigger: 'blur' },
    { pattern: /^1[34578]\d{9}$/, message: '请输入正确的手机号码', trigger: 'blur' }
  ],
  address_name: [
    { required: true, message: '请输入收件人姓名', trigger: 'blur' }
  ],
  address_area: [
    { required: true, message: '请选择区域地址', trigger: 'change' },
    {
      validator: (rule, value, callback) => {
        const isSpace = value.every(item => item !== '')
        if (isSpace) {
          callback()

        } else {
          callback(new Error('请选择完整的省市区'))
        }
      }, trigger: 'change'
    }
  ],
  address_details: [
    { required: true, message: '请输入详细地址', trigger: 'blur' }
  ]

})

//取消
const cancelHandler = () => {
  resetFormData()
  emit('cancelDialog')
}

const resetFormData = () => {
  formData.value = {
    address_id: '',
    user_name: '', // 用户名称
    address_phone: '', // 地址电话
    address_name: '', // 收件人姓名
    address_area: [], // 区域地址，省级和市级分别对应数组中的第一个和第二个元素
    address_details: '', // 详细地址
    address_default: '', // 默认地址
    user_id: ''
  }
  formRef.value.resetFields()
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        return
      } else {
        //修改
        const result = await updateAddressAPI({ ...formData.value,address_area: formData.value.address_area.join('-') })
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

//省级发生变化
const handlerProvince = () => {
  //清除区级
  regionOptions.value = []
  formData.value.address_area[1] = ''
  formData.value.address_area[2] = ''

  const provinceIndex = provinceOptions.value.findIndex(item => {
    return item === formData.value.address_area[0]
  })
  cityOptions.value = getMyCity(provinceIndex)
}

//市级变化
const handlerCity = () => {
  if (formData.value.address_area[1] !== '') {
    //清除区级
    formData.value.address_area[2] = ''

    const provinceIndex = provinceOptions.value.findIndex(item => {
      return item === formData.value.address_area[0]
    })
    const cityIndex = cityOptions.value.findIndex(item => {
      return item === formData.value.address_area[1]
    })
    regionOptions.value = getAreas(provinceIndex, cityIndex)
  }

}


watch(
  () => props.dialogFormVisible,
  (newVal, oldVal) => {
    if (newVal && JSON.stringify(props.editData) !== '{}') {
      formData.value = props.editData
      isAdd.value = false
      getProvincialCityRegion()
    } else {
      isAdd.value = true
    }
  }
)

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
