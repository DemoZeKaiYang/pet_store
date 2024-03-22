<template>
  <div class="main">
    <div class="left">
      <!-- 面包屑 -->
      <el-breadcrumb separator-icon="ArrowRight">
        <template v-for="(item, index) in breadList">
          <el-breadcrumb-item>{{ item.meta.title }}</el-breadcrumb-item>
        </template>
      </el-breadcrumb>
    </div>
    <div class="right">
      <!-- 暗黑/明亮 -->
      <div class="change-subject">
        <el-switch
          v-model="theme"
          class="black-switch"
          inline-prompt
          size="large"
          @change="themeChange"
        >
          <template #active-action>
            <Moon></Moon>
          </template>
          <template #inactive-action>
            <Sunny :color="'#000000'"></Sunny>
          </template>
        </el-switch>
      </div>

      <!-- 菜单展开-->
      <el-dropdown trigger="hover">
        <!-- 头像 -->
        <div class="header-avatar" :class="hoverLoginOut">
          <span>admin</span>
          <el-avatar
            :size="50"
            src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
          />
          <el-icon size="20">
            <ArrowDown />
          </el-icon>
          <!-- > -->
        </div>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>Action 1</el-dropdown-item>
            <el-dropdown-item>Action 2</el-dropdown-item>
            <el-dropdown-item>Action 3</el-dropdown-item>
            <el-dropdown-item divided @click="loginOut"
              >退出登录</el-dropdown-item
            >
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup>
import { useAdminStore } from '@/stores/admin'
import { Sunny, Moon } from '@element-plus/icons-vue'
import { useRoute, useRouter } from 'vue-router'
const router = useRouter()
const route = useRoute()
//暗黑主题切换按钮
const theme = ref(false)
const adminStore = useAdminStore()
//面包屑数组
const breadList = ref([])
//暗黑主题改变事件
const themeChange = (value) => {
  if (value) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
}

//获取网址在路由中的路径
const getMatched = () => {
  breadList.value =
    route.matched.length > 0
      ? route.matched.filter((item) => item.meta && item.meta.title)
      : [
          {
            path: '/',
            name: 'home',
            component: () => import('@/views/layouts/index.vue'),
            meta: {
              title: '首页',
              icon: 'home-filled',
              disabled: false
            }
          }
        ]
}

//退出登录
const loginOut = () => {
  adminStore.delAdmin()
  router.push('/login')
}

const hoverLoginOut = computed(() => {
  return theme.value ? 'black-hover' : 'white-hover'
})

watch(
  () => route.path,
  (newValue, oldValue) => {
    breadList.value = route.matched.filter(
      (item) => item.meta && item.meta.title
    )
  }
)

onMounted(() => {
  getMatched()
})
</script>

<style lang="scss" scoped>
.main {
  position: relative;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    height: 60px;
    display: flex;
    align-items: center;
    font-size: 24px;
  }

  .right {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    //暗黑模式和明亮模式的主题按钮
    .black-switch {
      margin-right: 24px;
    }

    //头像
    .header-avatar {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 200px;
      height: 100%;
      &:hover {
        background-color: #f3f2f2;
      }
    }
    .black-hover {
      &:hover {
        background-color: #2c1e1e;
      }
    }

    .white-hover {
      &:hover {
        background-color: #f3f2f2;
      }
    }

    //展开菜单
    .dropdown {
      position: absolute;
      top: 0;
      right: 0;
    }
  }
}
</style>
