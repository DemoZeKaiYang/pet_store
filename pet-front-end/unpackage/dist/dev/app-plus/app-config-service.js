
  ;(function(){
  let u=void 0,isReady=false,onReadyCallbacks=[],isServiceReady=false,onServiceReadyCallbacks=[];
  const __uniConfig = {"pages":[],"globalStyle":{"backgroundColor":"#2979ff","onReachBottomDistance":50,"background":"#efeff4","navigationBar":{"backgroundColor":"#2979ff","titleText":"宠物家园","type":"default","titleColor":"#ffffff"},"isNVue":false},"nvue":{"compiler":"uni-app","styleCompiler":"uni-app","flex-direction":"column"},"renderer":"auto","appname":"pet-front-end","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":true},"compilerVersion":"3.99","entryPagePath":"pages/shop/index","entryPageQuery":"","realEntryPagePath":"","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000},"tabBar":{"position":"bottom","color":"#7A7E83","selectedColor":"#2979ff","borderStyle":"black","blurEffect":"none","fontSize":"10px","iconWidth":"24px","spacing":"3px","height":"50px","backgroundColor":"#ffffff","list":[{"iconPath":"/static/image/chongwushouye.png","selectedIconPath":"/static/image/chongwushouye-selected.png","pagePath":"pages/home/index","text":"主页"},{"text":"商城","pagePath":"pages/shop/index","iconPath":"/static/image/shangcheng.png","selectedIconPath":"/static/image/shangcheng-selected.png"},{"iconPath":"/static/image/faxian.png","selectedIconPath":"/static/image/faxian-selected.png","pagePath":"pages/community/index","text":"发现"},{"iconPath":"/static/image/xiaoxi.png","selectedIconPath":"/static/image/xiaoxi-selected.png","pagePath":"pages/messages/index","text":"消息"},{"iconPath":"/static/image/icon7.png","selectedIconPath":"/static/image/icon7-selected.png","pagePath":"pages/my/index","text":"我的"}],"selectedIndex":0,"shown":true},"locales":{},"darkmode":false,"themeConfig":{}};
  const __uniRoutes = [{"path":"pages/my/index","meta":{"isQuit":true,"isEntry":true,"isTabBar":true,"tabBarIndex":4,"navigationBar":{"titleText":"个人中心","type":"default"},"isNVue":false}},{"path":"pages/home/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":0,"enablePullDownRefresh":false,"navigationBar":{"titleText":"首页","type":"default"},"isNVue":false}},{"path":"pages/messages/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":3,"enablePullDownRefresh":false,"navigationBar":{"titleText":"消息","type":"default"},"isNVue":false}},{"path":"pages/shop/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":1,"enablePullDownRefresh":false,"navigationBar":{"titleText":"商城","type":"default"},"isNVue":false}},{"path":"pages/category/index","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"全部分类","type":"default"},"isNVue":false}},{"path":"pages/category/categoryproductlist","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"详细分类","type":"default"},"isNVue":false}},{"path":"pages/category/productdetail","meta":{"enablePullDownRefresh":false,"titleNView":false,"navigationBar":{"titleText":"详细商品","style":"custom","type":"default"},"isNVue":false}},{"path":"pages/cat/cat","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"购物车","type":"default"},"isNVue":false}},{"path":"pages/my/Address","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"地址","type":"default"},"isNVue":false}},{"path":"pages/my/EditAddress","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"编辑地址","type":"default"},"isNVue":false}},{"path":"pages/my/EditPerson","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"编辑个人信息","type":"default"},"isNVue":false}},{"path":"pages/home/DetailService","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"详细服务","type":"default"},"isNVue":false}},{"path":"pages/my/OrderDetail","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"详细订单","type":"default"},"isNVue":false}},{"path":"pages/community/index","meta":{"isQuit":true,"isTabBar":true,"tabBarIndex":2,"enablePullDownRefresh":false,"navigationBar":{"titleText":"发现","type":"default"},"isNVue":false}},{"path":"pages/community/DetailArticle","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"消息","type":"default"},"isNVue":false}},{"path":"pages/messages/Chat","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"聊天","type":"default"},"isNVue":false}},{"path":"pages/community/PublishContent","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"推送内容","type":"default"},"isNVue":false}},{"path":"pages/cat/ConfirmAddress","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"确认地址","type":"default"},"isNVue":false}},{"path":"pages/my/EditPet","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"编辑宠物","type":"default"},"isNVue":false}},{"path":"pages/home/OrderService","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"服务订单","type":"default"},"isNVue":false}},{"path":"pages/cat/ConfirmOrder","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"确认订单","type":"default"},"isNVue":false}},{"path":"pages/login/login","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"登录","type":"default"},"isNVue":false}},{"path":"pages/login/register","meta":{"enablePullDownRefresh":false,"navigationBar":{"titleText":"注册","type":"default"},"isNVue":false}}].map(uniRoute=>(uniRoute.meta.route=uniRoute.path,__uniConfig.pages.push(uniRoute.path),uniRoute.path='/'+uniRoute.path,uniRoute));
  __uniConfig.styles=[];//styles
  __uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  __uniConfig.onServiceReady=function(callback){if(__uniConfig.serviceReady){callback()}else{onServiceReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"serviceReady",{get:function(){return isServiceReady},set:function(val){isServiceReady=val;if(!isServiceReady){return}const callbacks=onServiceReadyCallbacks.slice(0);onServiceReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
  service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:16})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,global:u,window:u,document:u,frames:u,self:u,location:u,navigator:u,localStorage:u,history:u,Caches:u,screen:u,alert:u,confirm:u,prompt:u,fetch:u,XMLHttpRequest:u,WebSocket:u,webkit:u,print:u}}}}); 
  })();
  