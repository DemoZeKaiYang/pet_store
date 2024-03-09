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
  }
]

export default routes
