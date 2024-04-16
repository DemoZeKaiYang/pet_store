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
          title: '宠物',
          icon: 'aim',
          disabled: false
        },
        children: [
          {
            path: 'managerpet',
            name: 'managerpet',
            component: () => import('@/views/pet/index.vue'),
            meta: {
              title: '宠物管理',
              icon: '',
              disabled: false
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
      },
      {
        path: 'usermodel',
        name: 'usermodel',
        meta: {
          title: '用户管理'
        },
        children: [
          {
            path: 'user',
            name: 'user',
            component: () => import('@/views/user/index.vue'),
            meta: {
              title: '用户管理'
            }
          },
          {
            path: 'address',
            name: 'address',
            component: () => import('@/views/address/index.vue'),
            meta: {
              title: '地址管理'
            }
          }

        ]
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
          },
          {
            path: 'good',
            name: 'good',
            component: () => import('@/views/shop/good/index.vue'),
            meta: {
              title: '商品'
            }
          },
          {
            path: 'order',
            name: 'order',
            component: () => import('@/views/shop/order/index.vue'),
            meta: {
              title: '商品订单'
            }
          }
        ]
      },
      {
        path: 'service',
        name: 'service',

        meta: {
          title: '服务管理'
        },
        children: [
          {
            path: 'service_detail',
            name: 'service_detail',
            component: () => import('@/views/service/detail/index.vue'),
            meta: {
              title: '详细服务'
            }
          }
        ]
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
