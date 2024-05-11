<template>
  <el-card class="top-edit">
    <el-button type="primary" size="large" style="font-size: 20px" @click="addKind" disabled>禁用禁用</el-button>
    <el-button type="danger" size="large" style="font-size: 20px" @click="delSelectKind" disabled>禁用禁用</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim="search"
      placeholder="请输入要搜素的订单编号"
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
      <el-table-column type="selection" width="50" label="序号" fixed />
      <el-table-column label="用户名称" width="200" prop="user.user_name" />
      <el-table-column label="订单状态" width="120" prop="order_status">
        <template #default="scope">
          <el-tag type="primary" size="large">{{ statusText(scope.row.order_status) }}</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单地址" width="200" prop="shipping_address" />
      <el-table-column label="支付方式" width="120" prop="payment_method">
        <template #default="scope">
          <el-tag type="primary" v-if="scope.row.payment_method === 1">支付宝</el-tag>
          <el-tag type="danger" v-else>未支付</el-tag>
        </template>
      </el-table-column>
      <el-table-column label="订单编码" width="200" prop="order_number" sortable />
      <el-table-column label="收货姓名" width="120" prop="address_name" />
      <el-table-column label="手机号" width="170" prop="address_number" />
      <el-table-column label="价格" width="120" prop="order_price" />
      <el-table-column label="编辑" width="200">
        <template #default="scope">
          <el-button
            size="large"
            type="danger"
            @click="handleEdit(scope.$index, scope.row)"
            :disabled="(scope.row.order_status !== 1 && scope.row.order_status !== 2) || scope.row.payment_method !== 1"
            >完成
          </el-button>
          <el-button size="large" type="primary" @click="showGood(scope.$index, scope.row)">查看</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>

  <el-drawer v-model="drawer" title="对应的订单商品" direction="ltr" :before-close="handleClose">
    <div class="good-content" v-for="item in drawerData">
      <img :src="imagePrefix + item.good_image" />
      <div class="text">
        <div class="name">{{ item.good_name }}</div>
        <div class="number">数量:{{ item.good_number }}</div>
        <div class="price">价格:{{ item.good_price }}</div>
        <div class="total">价格:{{ item.total_price }}</div>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { delMessageBox } from '@/utils/messageBox.js'
import { successMessage, failMessage } from '@/utils/message'
import { delOrderAPI, getOrderAPI, searchOrderAPI, searchOrderGoodAPI, successOrderAPI } from '@/apis/order/index.js'

const drawerData = ref([])
//实例
const multipleTableRef = ref()
//搜索框的数据
const search = ref()
const drawer = ref(false)
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/good_uploads/')
//获取种类
const getData = async () => {
  const result = await getOrderAPI()
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
    const order_id_arr = selectData.value.map((item) => item.order_id)
    const result = await delOrderAPI(order_id_arr)
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
  const result = await searchOrderAPI(search.value)
  if (result.code === 2000) {
    tableData.value = result.data
    successMessage('查询成功')
  } else {
    failMessage(result.message)
  }
}

//完成事件
const handleEdit = async (index, row) => {
  try {
    const confirmResult = await ElMessageBox.confirm('是否完成', 'Warning', {
      confirmButtonText: '确认完成了吗',
      cancelButtonText: '取消',
      type: 'error'
    })
    if (!confirmResult) return
    const result = await successOrderAPI(row.order_id)
    if (result.code === 2000) {
      successMessage('订单已完成')
      getData()
    }
  } catch (e) {}
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
const statusText = (status) => {
  switch (status) {
    case 1:
      return '确认订单'
    case 2:
      return '已付款'
    case 3:
      return '已发货'
    case 4:
      return '已取消'
    case 5:
      return '已完成'
  }
}
const showGood = async (index, row) => {
  drawer.value = true
  const result = await searchOrderGoodAPI(row.order_id)
  if (result.code === 2000) {
    drawerData.value = result.data
  }
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

  :deep(.el-checkbox__inner) {
    width: 28px;
    height: 28px;
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

.good-content {
  margin-bottom: 10px;

  img {
    width: 150px;
    height: 150px;
    border-radius: 10px;
  }

  .text {
    margin-left: 10px;

    div {
      margin-top: 20px;
    }

    name {
      margin-top: 10px;
      overflow: hidden;
    }
  }

  display: flex;
}
</style>
