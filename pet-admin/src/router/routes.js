const routes = [
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layouts/index.vue'),
    meta: {
      icon: 'home-filled',
      disabled: false
    },
    children: [
      {
        path: 'pet',
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
        path: 'address',
        name: 'address',
        meta: {
          title: '地址管理'
        }
      },
      {
        path: 'shop',
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
              title: '商品种类'
            }
          },
          {
            path: 'category',
            name: 'category',
            component: () => import('@/views/shop/category/index.vue'),
            meta: {
              title: '商品分类'
            }
          }
        ]
      },
      {
        path: 'message',
        component: () => import('@/views/message/index.vue'),
        meta: {
          title: '客户处理'
        }
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  }
]

export default routes
