const whiteList = ['/pages/login/login', '/pages/login/register', , '/pages/home/index', '/pages/shop/index',
  '/pages/category/index', '/pages/category/categoryproductlist', '/pages/category/productdetail',
  '/pages/home/DetailService', '/pages/detail/detail', '/pages/community/PublishContent'
]


//登录页
const loginPage = "/pages/login/login"
export default function initPermission() {
  /**
   * 页面跳转拦截器
   */
  const list = ["navigateTo", "reLaunch", "switchTab"];
  list.forEach(item => { //用遍历的方式分别为,uni.navigateTo,uni.redirectTo,uni.reLaunch,uni.switchTab这4个路由方法添加拦截器
    uni.addInterceptor(item, {
      invoke(e) { // 调用前拦截
        // console.log('拦截', e)
        //获取用户的token
        let token = null
        token=uni.getStorageSync("token")
        //获取要跳转的页面路径（url去掉"?"和"?"后的参数）
        let url = e.url.split('?')[0];
        let notNeed = whiteList.includes(url)
        // 如果在whiteList里面就不需要登录
        if (notNeed) {
          return e
        } else {
          //需要登录
          if (!token) {
            uni.showToast({
              title: '请先登录',
              duration: 2000,
              icon: "none"
            })
            uni.navigateTo({
              url: loginPage
            })
            return false
          } else {
            return e
          }
        }
      },
      fail(err) { // 失败回调拦截 
        console.log(err);
      }
    })
  })
}