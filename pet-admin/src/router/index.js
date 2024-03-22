import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import { useAdminStore } from '@/stores/admin'
const whiteList = ['/login', '/reg']
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})
router.beforeEach(function (to, from, next) {
  const adminStore = useAdminStore()
  if (adminStore.token) {
    next()
  } else {
    //跳转到login页面也会拦截,所以要给login页面放行
    if (whiteList.includes(to.path)) {
      next()
    } else {
      next('/login')
    }
  }
})
export default router
