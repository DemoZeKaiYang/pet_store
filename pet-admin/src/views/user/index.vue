<template>
  <el-card class='top-edit'>
    <el-button type='primary' size='large' style='font-size: 20px' @click='addKind' disabled>添加用户</el-button>
    <el-button type='danger' size='large' style='font-size: 20px' @click='delSelectKind' disabled>删除选中</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim='search'
      placeholder='请输入要搜素的用户名称'
      size='large'
      class='pet-search'
      prefix-icon='Search'
    />
    <el-button type='primary' size='large' style='font-size: 20px' @click='searchBtn'>搜索</el-button>
  </el-card>
  <!-- 内容 -->
  <el-card class='contain'>
    <el-table
      ref='multipleTableRef'
      :data='tableData'
      style='width: 100%'
      size='large'
      :border='true'
      stripe
      class='kind-table'
      @selection-change='selectChange'
      height='600'
    >
      <el-table-column type='selection' width='100' label='序号' fixed />
      <el-table-column label='用户名称' width='200' prop='user_name' />
      <el-table-column label='用户电话' width='120' prop='user_phone' />
      <el-table-column label='用户生日' width='200' prop='user_birthday' />
      <el-table-column label='用户个性签名' width='400' prop='user_signature' />
      <el-table-column label='用户头像' prop='pet_avatar' width='200'>
        <template #default='scope'>
          <el-image style='width: 100px; height: 100px' :src='imagePrefix + scope.row.user_avatar' :fit='fill' />
        </template>
      </el-table-column>
      <el-table-column label='编辑' width='300'>
        <template #default='scope'>
          <el-button size='large' type='primary' @click='handleEdit(scope.$index, scope.row)'>编辑</el-button>
          <el-button size='large' type='danger' @click='openDrawer(scope.row)'>修改密码</el-button>
          <el-button size='large' type='info' disabled>删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 编辑对话框 -->
  <EditUser
    :dialogFormVisible='dialogFormVisible'
    @cancelDialog='cancelDialog'
    :editData='editData'
    @renderData='getData'
  ></EditUser>


  <!--  修改密码-->
  <el-drawer
    v-model='drawer'
    title='修改密码'
    direction='rtl'
    :before-close='handlerClose'
  >
    <el-form :model='passwordForm' :rules='passwordRules' ref='pwdForm' :inline-message='true'>
      <el-form-item label='旧密码' prop='old_password'>
        <el-input v-model='passwordForm.old_password' size='large' autocomplete='off' show-password />
      </el-form-item>
      <el-form-item label='新密码' prop='new_password'>
        <el-input v-model='passwordForm.new_password' size='large' autocomplete='off' show-password />
      </el-form-item>
      <el-form-item label='再次输入密码' prop='again_password'>
        <el-input v-model='passwordForm.again_password' size='large' autocomplete='off' show-password />
      </el-form-item>
      <el-button size='large' type='primary' @click='updatePassword'>修改密码</el-button>
      <el-button size='large' type='primary'>取消修改</el-button>
    </el-form>
  </el-drawer>
</template>

<script setup>

import EditUser from './components/EditUser.vue'
import { successMessage, failMessage } from '@/utils/message'

import { getUserAPI, searchUserAPI, updatePasswordAPI } from '@/apis/user/index.js'

//实例
const multipleTableRef = ref()

//搜索框的数据
const search = ref()
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/uploads/')

//选中的数据
const selectData = ref()

//测试数据
const tableData = ref([])

//编辑框的显示
const dialogFormVisible = ref(false)

//编辑传递的数据
const editData = ref({})

// 抽屉的显示
const drawer = ref(false)


//密码的表单
const passwordForm = ref({
  old_password: '',
  new_password: '',
  again_password: ''
})

const pwdForm = ref()
const updateUserId = ref('')
//修改密码
const openDrawer = (row) => {
  drawer.value = true
  updateUserId.value = row.user_id
}
const updatePassword = async () => {
  if (!pwdForm) return
  await pwdForm.value.validate(async (valid, fields) => {
    if (valid) {
      let obj = {
        old_password: passwordForm.value.old_password,
        new_password: passwordForm.value.new_password,
        user_id: updateUserId.value
      }
      const result = await updatePasswordAPI(obj)
      if (result.code === 2000) {
        successMessage('修改成功')
        resetPasswordForm()
        drawer.value=false
        return
      }
      if (result.code === 2002) return failMessage('修改失败，原密码错误')
      return failMessage('修改失败，请检查密码格式')
    }
  })
}

const handlerClose=()=>{
  resetPasswordForm()
  drawer.value=false

}
const resetPasswordForm = () => {
  pwdForm.value.resetFields()
  passwordForm.value = {
    old_password: '',
    new_password: '',
    again_password: ''
  }
}

//获取
const getData = async () => {
  const result = await getUserAPI()
  if (result.code === 2000) {
    tableData.value = result.data
  }
}


//搜索框事件
const searchBtn = async () => {
  if (!search.value) {
    getData()
    return
  }
  const result = await searchUserAPI(search.value)
  if (result.code === 2000) {
    tableData.value = result.data
    successMessage('查询成功')
  } else {
    failMessage(result.message)
  }
}

//编辑事件
const handleEdit = (index, row) => {
  let obj = {
    ...row
  }
  editData.value = obj
  dialogFormVisible.value = true
}

//添加
const addKind = () => {
  dialogFormVisible.value = true
}

//取消对话框
const cancelDialog = () => {
  dialogFormVisible.value = false
  editData.value = {}
}

//多选表格改变事件
const selectChange = (val) => {
  selectData.value = val
}


// 密码的校验规则
const passwordRules = reactive({
  old_password: [
    { required: true, message: '请输入原密码', trigger: 'blur' }
  ],
  new_password: [
    { required: true, message: '请输入新密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        const reg = /^[a-zA-Z]\w{5,17}$/ // 密码正则表达式
        if (reg.test(value)) {
          if (value !== passwordForm.value.old_password) {
            callback() // 校验通过
          } else {
            callback(new Error('新密码不能和原密码相同')) // 校验不通过，返回错误信息
          }
        } else {
          callback(new Error('密码以字母开头，长度在6~18之间，只能包含字母、数字和下划线')) // 校验不通过，返回错误信息
        }
      },
      trigger: 'blur'
    }
  ],
  again_password: [
    { required: true, message: '请再次输入新密码', trigger: 'blur' },
    {
      validator: (rule, value, callback) => {
        if (value === passwordForm.value.new_password) {
          callback() // 校验通过
        } else {
          callback(new Error('两次输入的密码不一致')) // 校验不通过，返回错误信息
        }
      },
      trigger: 'blur'
    }
  ]
})
onMounted(() => {
  getData()
})
</script>

<style lang='scss' scoped>
.contain {
  margin-top: 20px;

  .kind-table {
    font-size: 20px;
  }

  .select-check {
    font-size: 20px;
  }

  /* 如果需要调整选中后的图标大小，可以添加以下样式 */
  :deep(.el-checkbox__inner) {
    width: 28px; /* 修改选中状态下选择框的宽度 */
    height: 28px; /* 修改选中状态下选择框的高度 */
  }

  :deep(.el-checkbox__inner::after) {
    height: 14px;
    width: 6px;
    left: 10px;
  }

  :deep(.el-checkbox__inner::before) {
    top: 10px;
  }
}

.pet-search {
  margin-left: 750px;
  width: 400px;
  font-size: 20px;
  margin-right: 20px;
}
</style>
