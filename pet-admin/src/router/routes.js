const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: {
      title: '首页',
      icon: 'home-filled',
      disabled: false
    }
  },
  {
    path: '/pet',
    name: 'pet',
    redirect: { name: 'addPet' },
    meta: {
      title: '宠物管理',
      icon: 'aim',
      disabled: false
    },
    children: [
      {
        path: 'add',
        name: 'addPet',
        meta: {
          title: '添加宠物',
          icon: '',
          disabled: false
        }
      },
      {
        path: 'del',
        name: 'delPet',
        meta: {
          title: '添加宠物',
          icon: '',
          disabled: false
        }
      }
    ]
  },
  {
    path: '/address',
    name: 'address',
    meta: {
      title: '地址管理'
    }
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('@/views/shop/index.vue'),
    meta: {
      title: '商城管理'
    },
    children: [
      {
        path: 'kind',
        name: 'kind',
        component: () => import('@/views/shop/kind/index.vue'),
        meta: {
          title: '商品分类'
        }
      }
    ]
  }
]

export default routes
