<template>
  <el-card class='top-edit'>
    <el-button type='primary' size='large' style='font-size: 20px' @click='add'>添加商品对应图片</el-button>
    <!-- 搜索框 -->
    <el-input
      v-model.trim='search'
      placeholder='请输入要搜素的服务名称'
      size='large'
      class='pet-search'
      prefix-icon='Search'
    />
    <el-button type='primary' size='large' style='font-size: 20px' @click='searchBtn'>搜索</el-button>
  </el-card>
  <!-- 内容 -->
  <el-card class='contain'>
    <div class='title'>
      <h2>服务名称</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>轮播图</h2>
      <h2>长图</h2>
      <h2>长图</h2>
      <h2>长图</h2>
      <h2>操作</h2>
    </div>
    <div class='image-contain' v-for='(item1,index) in tableData' :key='index'>
      <div class='image'>
        <h2>{{ item1[0].service_detail.service_name }}</h2>
      </div>
      <div class='image' v-for='item in item1' :key='item.service_image_id' @click='handlerEdit(item)'>
        <img :src='imagePrefix+item.service_image_name'>
      </div>
      <el-button type='danger' size='large' @click='handlerDel(item1[0].service_detail_id)'>删除</el-button>
    </div>
  </el-card>

  <!-- 编辑对话框 -->
  <EditImage
    :dialogFormVisible='dialogFormVisible'
    @cancelDialog='cancelDialog'
    :editData='editData'
    @renderData='getData'
  ></EditImage>
  <AddImage
    v-model='addDialogFormVisible'
    @cancelAddDialog='cancelAddDialog'
    @renderData='getData'
  ></AddImage>

</template>

<script setup>
import { delMessageBox } from '@/utils/messageBox.js'
import EditImage from './components/EditImage.vue'
import AddImage from './components/AddImage.vue'
import { successMessage, failMessage } from '@/utils/message'
import { delGoodImageAPI, searchGoodImageAPI } from '@/apis/shop/good_image/index.js'
import { delServiceImageAPI, getServiceImageAPI, searchServiceImageAPI } from '@/apis/service/index.js'
//搜索框的数据
const search = ref()
const imagePrefix = ref(import.meta.env.VITE_API_URL + '/service_uploads/')
//测试数据
const tableData = ref([])
//编辑框的显示
const dialogFormVisible = ref(false)
const addDialogFormVisible = ref(false)
//编辑传递的数据
const editData = ref({})
//获取种类
const getData = async () => {
  const result = await getServiceImageAPI()
  if (result.code === 2000) {
    tableData.value = result.data
  }
}
//删除单个种类
const handlerDel = async (service_detail_id) => {
  const confirmDel = await delMessageBox()
  if (confirmDel) {
    const result = await delServiceImageAPI(service_detail_id)
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
  const result = await searchServiceImageAPI(search.value)
  if (result.code === 2000) {
    tableData.value = result.data
    successMessage('查询成功')
  } else {
    failMessage(result.message)
  }
}
//编辑事件
const handlerEdit = (obj) => {

  let newObj= { ...obj,service_name:obj.service_detail.service_name }
  delete newObj['service_detail']
    editData.value=newObj
  dialogFormVisible.value = true
}
//添加
const add = () => {
  addDialogFormVisible.value = true
}
//取消对话框
const cancelDialog = () => {
  dialogFormVisible.value = false
}
//取消添加对话框
const cancelAddDialog = () => {
  addDialogFormVisible.value = false
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
  margin-left: 800px;
  width: 400px;
  font-size: 20px;
  margin-right: 20px;
}


.contain {
  .title {
    display: flex;
    text-align: center;

    h2 {
      display: inline-block;
      width: 200px;
      height: 50px;
    }
  }
}


.image-contain {
  width: 100%;
  display: flex;
  margin-bottom: 10px;
  align-items: center;

  .image {
    width: 200px;
    height: 200px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;

    :hover {
      cursor: pointer;
    }

    img {
      width: 150px;
      height: 150px;
      border-radius: 10px;
    }
  }

}
</style>
