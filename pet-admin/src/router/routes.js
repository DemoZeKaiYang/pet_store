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
          },
          {
            path: 'adopt',
            name: 'adopt',
            component: () => import('@/views/adopt/index.vue'),
            meta: {
              title: '领养管理',
              icon: '',
              disabled: false
            }
          },
          {
            path: 'apply',
            name: 'apply',
            component: () => import('@/views/apply/index.vue'),
            meta: {
              title: '申请管理',
              icon: '',
              disabled: false
            }
          },
          {
            path: 'article',
            name: 'article',
            component: () => import('@/views/article/index.vue'),
            meta: {
              title: '宠物文章',
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
              title: '订单'
            }
          },
          {
            path: 'image',
            name: 'image',
            component: () => import('@/views/shop/image/index.vue'),
            meta: {
              title: '商品图片'
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
          },
          {
            path: 'service_image',
            name: 'service_image',
            component: () => import('@/views/service/image/index.vue'),
            meta: {
              title: '服务图片'
            }
          }
        ]
      }
    ]
  },
  {
    path: '',
    name: '',
    redirect: { name: 'managerpet' }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/:catchAll(.*)',
    name: 'not-found',
    component: () => import('@/views/404.vue')
  }
]

export default routes
