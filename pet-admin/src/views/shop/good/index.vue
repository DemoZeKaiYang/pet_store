<template>
  <el-card class="top-edit">
    <el-button type="primary" size="large" style="font-size: 20px" @click="addKind">添加商品</el-button>
    <el-button type="danger" size="large" style="font-size: 20px" @click="delSelectKind">删除选中</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim="search"
      placeholder="请输入要搜素的商品名称"
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
      <el-table-column label="商品名称" width="300" prop="good_name" />
      <el-table-column label="商品价格" width="150" prop="good_price" />
      <el-table-column label="商品原价" width="150" prop="good_origin_price" />
      <el-table-column label="评论数量" width="150" prop="good_comment_num" />
      <el-table-column label="封面图片" prop="good_image" width="150">
        <template #default="scope">
          <el-image style="width: 100px; height: 100px" :src="imagePrefix + scope.row.good_image" :fit="fill" />
        </template>
      </el-table-column>
      <el-table-column label="销售数量" prop="good_sold_num" width="150" />
      <el-table-column label="商品种类" prop="good_category.good_category_name" width="120" />

      <el-table-column label="编辑" width="200">
        <template #default="scope">
          <el-button size="large" type="primary" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="large" type="danger" @click="delKind(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <!-- 编辑对话框 -->
  <EditCategory
    :dialogFormVisible="dialogFormVisible"
    @cancelDialog="cancelDialog"
    :editData="editData"
    @renderData="getData"
  ></EditCategory>
</template>

<script setup>
import { delMessageBox } from '@/utils/messageBox.js'
import EditGood from './components/EditGood.vue'
import { successMessage, failMessage } from '@/utils/message'
import { getGoodAPI, searchGoodAPI } from '@/apis/shop/good/index.js'
//实例
const multipleTableRef = ref()

//搜索框的数据
const search = ref()

const imagePrefix = ref(import.meta.env.VITE_API_URL + '/good_uploads/')

//选中的数据
const selectData = ref()

//测试数据
const tableData = ref([])

//编辑框的显示
const dialogFormVisible = ref(false)

//编辑传递的数据
const editData = ref({})

//获取种类
const getData = async () => {
  const result = await getGoodAPI()
  if (result.code === 2000) {
    tableData.value = result.data
  }
}

//删除选中得数据
const delSelectKind = async () => {
  const confirmDel = await delMessageBox()
  if (confirmDel) {
    const good_category_id_arr = selectData.value.map((item) => item.good_category_id)
    const result = await delShopCategoryAPI(good_category_id_arr)
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
    const result = await delShopCategoryAPI(row.good_category_id)
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
  const result = await searchGoodAPI(search.value)
  if (result.code === 2000) {
    tableData.value = result.data
    successMessage('查询成功')
  } else {
    failMessage(result.message)
  }
}

//编辑事件
const handleEdit = (index, row) => {
  let obj = { ...row }
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
