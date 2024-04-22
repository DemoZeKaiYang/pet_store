<template>
  <el-card class='top-edit'>
    <el-button type='primary' size='large' style='font-size: 20px' @click='addKind' disabled>禁用禁用</el-button>
    <el-button type='danger' size='large' style='font-size: 20px' @click='delSelectKind' disabled>禁用禁用</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim='search'
      placeholder='请输入要搜素的种类名称'
      size='large'
      class='pet-search'
      prefix-icon='Search'
    />
    <el-button type='primary' size='large' style='font-size: 20px' @click='searchBtn' disabled>搜索</el-button>
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
      <el-table-column type='selection' width='80' label='序号' fixed />
      <el-table-column label='性别' width='80' prop='sex'>
        <template #default='scope'>
          <el-tag type='primary' hit size='large'>{{ scope.row.sex ? '男' : '女' }}</el-tag>
        </template>

      </el-table-column>

      <el-table-column label='年龄' width='80' prop='age' />
      <el-table-column label='经验' width='80' prop='experience'>
        <template #default='scope'>
          <el-tag type='danger' hit size='large'>{{ scope.row.experience }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label='有无宠物' width='120' prop='pet'>
        <template #default='scope'>
          <el-tag type='primary' hit size='large'>{{ scope.row.pet }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label='是否结婚' width='80' prop='marriage' class='description' />
      <el-table-column label='薪资收入' width='120' prop='income' />
      <el-table-column label='职业' width='80' prop='profession' />
      <el-table-column label='城市' width='80' prop='city' />
      <el-table-column label='联系电话' width='170' prop='phone' />
      <el-table-column label='申请描述' width='140' prop='introduction' />
      <el-table-column label='用户' width='120' prop='user.user_name' />
      <el-table-column label='申请状态' width='120' prop='status' sortable />
      <el-table-column label='编辑' width='200'>
        <template #default='scope'>
          <el-button size='large' type='primary' @click='handleEdit(scope.$index, scope.row)'>允许</el-button>
          <el-button size='large' type='danger' @click='delKind(scope.row)'>拒绝</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script setup>

import { delMessageBox } from '@/utils/messageBox.js'

import { successMessage, failMessage } from '@/utils/message'
import {  searchAdoptAPI } from '@/apis/adopt/index.js'
import { getApplyAPI, updateApplyAPI } from '@/apis/apply/index.js'
//实例
const multipleTableRef = ref()

//搜索框的数据
const search = ref()

const imagePrefix = ref(import.meta.env.VITE_API_URL + '/pet_uploads/')
//获取种类
const getData = async () => {
  const result = await getApplyAPI()
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

//搜索框事件
const searchBtn = async () => {
  if (!search.value) {
    getData()
    return
  }
  const result = await searchAdoptAPI(search.value)
  if (result.code === 2000) {
    tableData.value = result.data
    successMessage('查询成功')
  } else {
    failMessage(result.message)
  }
}

//编辑事件
const handleEdit = async (index, row) => {
  const confirmResult = await delMessageBox()
  if (confirmResult) {
    const result = await updateApplyAPI({ apply_id: row.apply_id, status: '允许'})
    if (result.code === 2000) {
      successMessage('修改成功')
      getData()
    }else{
      failMessage(result.message)
    }
  }
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
const delKind = async (row) => {
  try {
    const confirmResult = await delMessageBox()
    if (confirmResult) {
      const result = await updateApplyAPI({ apply_id: row.apply_id, status: '拒绝' })
      if (result.code === 2000) {
        successMessage('修改成功')
        getData()
      }else{
        failMessage(result.message)
      }
    }
  }catch (err){
    console.log(err)
  }


}
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

.description {
  overflow: hidden;
}
</style>
