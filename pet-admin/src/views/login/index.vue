<template>
  <div class="main">
    <!-- 登录 -->
    <div class="login">
      <h1 class="title">账户登录</h1>
      <el-form
        :model="formData"
        :rules="rules"
        ref="formRef"
        show-message
        inline-message
        status-icon
      >
        <el-form-item prop="username">
          <el-input
            placeholder="用户名"
            class="item"
            v-model="formData.username"
          ></el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            placeholder="密码"
            class="item"
            v-model="formData.password"
            type="password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button
            type="primary"
            @click="submitForm(formRef)"
            size="large"
            round
            class="login-btn"
            >登录</el-button
          >
          <el-button
            @click="resetForm(formRef)"
            class="login-btn"
            size="large"
            round
            type="primary"
            >重置</el-button
          >
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script setup>
import { successMessage, failMessage } from '@/utils/message'
import { loginAPI } from '@/apis/login/index.js'
import { useRouter } from 'vue-router'
import { useAdminStore } from '@/stores/admin.js'
const adminStore = useAdminStore()
const router = useRouter()
const formData = ref({
  username: '',
  password: ''
})

const formRef = ref()

const rules = reactive({
  username: [
    { required: true, message: '请输入用户名', trigger: 'blur' },
    { min: 3, max: 9, message: '长度必须为3-9位', trigger: 'blur' }
  ],
  password: [
    { required: true, message: '请输入密码', trigger: 'blur' },
    { min: 3, max: 9, message: '长度必须为3-9位', trigger: 'blur' }
  ]
})

//登录事件
const submitForm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      const result = await loginAPI(formData.value)
      if (result.code === 2000) {
        successMessage('登录成功')
        adminStore.updateAdmin(result.data)
        //跳转到主页面
        router.push('/')
      } else {
        failMessage(result.message)
      }
    } else {
      failMessage('登录失败,请检查用户名或密码的格式')
    }
  })
}

//重置事件
const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  width: 100%;
  height: 100%;
  background: url('@/static/images/background.png') no-repeat;
  background-size: cover;

  .login {
    position: absolute;
    width: 500px;
    height: 400px;
    background-color: rgb(253, 253, 253);
    top: 200px;
    right: 250px;
    padding: 50px;
    box-sizing: border-box;
    border-radius: 20px;
    opacity: 0.8;

    .title {
      font-size: 26px;
      text-align: center;
      margin-bottom: 30px;
      color: #409eff;
    }

    .item {
      height: 50px;
    }

    .login-btn {
      width: 189px;
      height: 50px;
      margin-top: 20px;
      font-size: 22px;
    }
  }
}
</style>
