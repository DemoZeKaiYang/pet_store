<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑种类" width="1500" @close="cancelHandler">
    <el-form :model="formData" class="kind-form" :rules="rules" ref="formRef" show-message>
      <el-form-item label="文章封面 :" size="large" prop="article_image">
        <el-upload
          class="avatar-uploader"
          :show-file-list="false"
          accept="image/png, image/gif, image/jpg, image/jpeg"
          :on-change="getFile"
          :auto-upload="false"
        >
          <img v-if="formData.article_image" :src="formData.article_image" class="avatar" />
          <el-icon v-else class="avatar-uploader-icon"><Plus /></el-icon>
        </el-upload>
      </el-form-item>
      <el-form-item label="文章标题 :" size="large" class="item" prop="article_title">
        <el-input v-model="formData.article_title" autocomplete="off" />
      </el-form-item>

      <el-form-item label="文章日期 :" size="large" prop="article_date">
        <el-date-picker
          :disabled-date="disabledDate"
          v-model="formData.article_date"
          type="date"
          placeholder="请选择文章日期"
        />
      </el-form-item>

      <!-- 富文本 -->
      <el-form-item label="文章内容 :" size="large" prop="article_content">
        <div style="border: 1px solid #ccc">
          <Toolbar
            style="border-bottom: 1px solid #ccc"
            :editor="editorRef"
            :defaultConfig="toolbarConfig"
            :mode="mode"
          />
          <Editor
            style="height: 500px; overflow-y: hidden"
            v-model="formData.article_content"
            :defaultConfig="editorConfig"
            :mode="mode"
            @onCreated="handleCreated"
          />
        </div>
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
import '@wangeditor/editor/dist/css/style.css' // 引入 css
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { successMessage, failMessage } from '@/utils/message'
import { addArticleAPI, updateArticleAPI, uploadArticleAPI } from '@/apis/article'
import { useAdminStore } from '@/stores/admin'
const props = defineProps(['dialogFormVisible', 'editData'])
//富文本
const adminStore = useAdminStore()
const emit = defineEmits(['cancelDialog', 'renderData'])
const toolbarConfig = {}
const editorConfig = {
  placeholder: '请输入内容...',

  MENU_CONF: {
    uploadImage: {
      server: 'http://192.168.6.4:9000/admin/uploadArticle',
      // 上传图片的配置
      fieldName: 'article_image',
      headers: {
        Authorization: adminStore.token
      }
    }
  }
}

//富文本

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

const formData = ref({
  article_id: '',
  article_content: '',
  article_date: '',
  article_image: '',
  article_title: ''
})

//是添加还是删除
const isAdd = ref(true)

//图片的地址

//实例
const formRef = ref()

//宠物种类
const options = ref([])
//校验规则
const rules = reactive({
  article_content: [{ required: true, message: '请输入文章内容', trigger: 'blur' }],
  article_date: [{ required: true, message: '请选择文章日期', trigger: 'change' }],
  article_image: [{ required: true, message: '请上传文章图片', trigger: 'change' }],
  article_title: [{ required: true, message: '请输入文章标题', trigger: 'blur' }]
})

//取消
const cancelHandler = () => {
  resetFormData()
  formRef.value.resetFields()
  emit('cancelDialog')
}
const resetFormData = () => {
  formData.value = {
    article_id: '',
    article_content: '',
    article_date: '',
    article_image: '',
    article_title: ''
  }
}

//确认
const confirm = async (formEl) => {
  if (!formEl) return
  await formEl.validate(async (valid, fields) => {
    if (valid) {
      if (isAdd.value) {
        const result = await addArticleAPI(formData.value)
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
        const result = await updateArticleAPI(formData.value)
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
  fd.append('article_image', uploadFile.raw)
  const result = await uploadArticleAPI(fd)
  console.log(result)
  if (result.errno === 0) {
    formData.value.article_image = result.data.url
  }
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
//判断是否会超出日期
const disabledDate = (time) => {
  return time.getTime() > Date.now()
}

onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})
const handleCreated = (editor) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

onMounted(() => {})
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
