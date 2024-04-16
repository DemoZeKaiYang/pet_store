<template>
  <el-card class="top-edit">
    <el-button type="primary" size="large" style="font-size: 20px" @click="addKind" disabled>添加种类</el-button>
    <el-button type="danger" size="large" style="font-size: 20px" @click="delSelectKind">删除选中</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim="search"
      placeholder="请输入要搜素的种类名称"
      size="large"
      class="pet-search"
      prefix-icon="Search"
    />
    <el-button type="primary" size="large" style="font-size: 20px" @click="searchBtn">搜索</el-button>
  </el-card>
  <!-- 内容 -->
  <el-card class="contain">
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      size="large"
      :border="true"
      stripe
      class="kind-table"
      @selection-change="selectChange"
      height="600"
    >
      <el-table-column type="selection" width="100" label="序号" fixed />
      <el-table-column label="宠物名称" width="200" prop="pet_name" />
      <el-table-column label="宠物种类" width="120" prop="pet_kind.pet_kind" />
      <el-table-column label="宠物绝育" width="120" prop="pet_sterilize" />
      <el-table-column label="宠物生辰" width="200" prop="pet_birthday" />
      <el-table-column label="宠物性别" width="120" prop="pet_sex" />
      <el-table-column label="宠物主人" width="200" prop="user.user_name" />
      <el-table-column label="宠物头像" prop="pet_avatar" width="200">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="imagePrefix + scope.row.pet_avatar" :fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="编辑" width="200">
        <template #default="scope">
          <el-button size="large" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="large" type="danger" @click="delKind(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 编辑对话框 -->
  <EditPet
    :dialogFormVisible="dialogFormVisible"
    @cancelDialog="cancelDialog"
    :editData="editData"
    @renderData="getData"
  ></EditPet>
</template>

<script setup>
import { getShopCategoryAPI } from '@/apis/shop/good_category/index.js'
import { delMessageBox } from '@/utils/messageBox.js'
import EditPet from './components/EditPet.vue'
import { successMessage, failMessage } from '@/utils/message'
import { delPetAPI, getPetAPI, searchPetAPI } from '@/apis/pet/index.js'
//实例
const multipleTableRef = ref()

//搜索框的数据
const search = ref()

const imagePrefix = ref(import.meta.env.VITE_API_URL + '/pet_uploads/')
//获取种类
const getData = async () => {
  const result = await getPetAPI()
  if (result.code === 2000) {
    tableData.value = result.data
  }
}

//选中的数据
const selectData = ref()

//测试数据
const tableData = ref([])

//编辑框的显示
const dialogFormVisible = ref(false)

//编辑传递的数据
const editData = ref({})

//删除选中得数据
const delSelectKind = async () => {
  const confirmDel = await delMessageBox()
  if (confirmDel) {
    const pet_id_arr = selectData.value.map((item) => item.pet_id)
    const result = await delPetAPI(pet_id_arr)
    if (result.code === 2000) {
      successMessage('删除成功')
      getData()
    } else {
      failMessage(result.message)
    }
  }
}

//删除单个种类
const delKind = async (row) => {
  const confirmDel = await delMessageBox()
  if (confirmDel) {
    const result = await delPetAPI(row.pet_id)
    if (result.code === 2000) {
      successMessage('删除成功')
      getData()
    } else {
      failMessage(result.message)
    }
  }
}

//搜索框事件
const searchBtn = async () => {
  if (!search.value) {
    getData()
    return
  }
  const result = await searchPetAPI(search.value)
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
    ...row,
    user_id: row.user.user_id,
    user_name: row.user.user_name,
    pet_kind_id: row.pet_kind.pet_kind_id,
  }
  delete obj.user
  delete obj.pet_kind
  obj.pet_kind=row.pet_kind.pet_kind
  console.log(obj)
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
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
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
