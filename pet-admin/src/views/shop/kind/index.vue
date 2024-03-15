<template>
  <el-card>
    <el-button type="primary">添加</el-button>
  </el-card>
  <!-- 内容 -->
  <el-card class="contain">
    <el-table
      ref="multipleTableRef"
      :data="tableData"
      style="width: 100%"
      @selection-change="handleSelectionChange"
    >
      <el-table-column type="selection" width="55" />
      <el-table-column label="种类名称" width="120" prop="name" />
      <el-table-column label="等级" width="120" prop="level" />
      <el-table-column label="种类排序" width="120" prop="name" />
      <el-table-column label="种类显示" width="120" prop="level" />
    </el-table>
  </el-card>
</template>

<script setup>
import { getKind } from '@/apis/shop/good_kind/index.js'
const multipleTableRef = ref()
const multipleSelection = ref([])

const getData = async () => {
  const result = await getKind()
  console.log(result)
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
onMounted(() => {
  getData()
})
</script>

<style lang="scss" scoped>
.contain {
  margin-top: 20px;
}
</style>
