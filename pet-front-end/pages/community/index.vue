<template>
  <!-- tabnav -->
  <tab-nav :fixed="false" :tabnav="orderList"></tab-nav>
  <!--  proList: 条目数组数据  goProDetail:条目点击事件跳转（实现了点击条目数据传值）-->
  <WaterListView :proList="projectList" @click="goProDetail(1)" v-if="false"></WaterListView>
  <!--图文信息 -->
  <ImageText @click="gotoDetailArticle"></ImageText>
  <!-- 发布爱宠日记 -->
  <uni-fab
    ref="fab"
    :pattern="pattern"
    :content="content"
    :horizontal="horizontal"
    :vertical="vertical"
    :direction="direction"
    @trigger="trigger"
    @fabClick="fabClick"
  />
</template>

<script setup>
import { ref, onMounted } from 'vue'
import WaterListView from './components/WaterListView.vue'
import ImageText from './components/ImageText.vue'
const tabnav = ref([])
//列表数组
const projectList = ref([])

//获取弹出弹框的ref
const popup = ref()
const orderList = ref([
  {
    type: '0', //状态值
    name: '爱宠日记',
    list: [], //数据
  },
  {
    type: '1', //状态值
    name: '科普',
    list: [], //数据
  },
  {
    type: '2', //状态值
    name: '种草',
    list: [], //数据
  },
  {
    type: '3', //状态值
    name: '已完成',
    list: [], //数据
  },
])

// 列表条目点击事件
const goProDetail = (item) => {
  console.log('条目数据 = ' + JSON.stringify(item))
  uni.showModal({
    title: '选择条目',
    content: '选择条目数据 = ' + JSON.stringify(item),
  })
}
const requestData = () => {
  // 模拟请求参数设置
  let reqData = {
    area: '',
    pageSize: 10,
    pageNo: 10,
  }

  // 模拟请求接口
  // this.totalNum = 39;
  projectList.value = []

  let imgArr = [
    'https://images.pexels.com/photos/7214784/pexels-photo-7214784.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://cdn.pixabay.com/photo/2014/07/08/14/14/resolution-387446_1280.jpg',
    'https://images.pexels.com/photos/5202162/pexels-photo-5202162.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/4967533/pexels-photo-4967533.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/8679339/pexels-photo-8679339.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.pexels.com/photos/209339/pexels-photo-209339.jpeg?auto=compress&cs=tinysrgb&w=800',
  ]

  let nameArr = [
    '冰糖心苹果 红富士大果出售 应季水果 繁荣种植园',
    '农鲜洛川红富士苹果16枚，单果160g,新鲜饱满水分充足',
    '甜醉了 烟台苹果栖霞红富士新鲜水...',
    '惠寻 山东烟台红富士苹果12枚 果径...',
  ]

  for (let i = 0; i < 20; i++) {
    projectList.value.push({
      proImg: imgArr[i % 6],
      proName: nameArr[i % 4],
      proDetail: '我是产品详情' + i,
      proPrice: 60 + 6 * i + '元',
      status: i % 3 == 0 ? '618' : '',
      id: i + '',
    })
  }
}

// 跳转到详细文章
const gotoDetailArticle = () => {
  uni.navigateTo({
    url: '/pages/community/DetailArticle',
  })
}

const fabClick = () => {
  uni.navigateTo({
    url: '/pages/community/PublishContent',
  })
}

onMounted(() => {
  requestData()
})
</script>

<style>
page {
  background-color: #f7f7f7;
}

.content {
  display: flex;
  flex-direction: column;
}

.mui-content-padded {
  margin: 0px 14px;
  /* background-color: #ffffff; */
}
</style>
