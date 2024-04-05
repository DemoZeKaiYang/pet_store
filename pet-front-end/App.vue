<script>
import initPermission from './utils/permission.js'
export default {
  onLaunch: function () {
    initPermission()
  },
}
</script>

<style lang="scss">
/*每个页面公共css */
@import '@/uni_modules/uni-scss/index.scss';
/* #ifndef APP-NVUE */
@import '@/static/iconfont/iconfont.css';

// 设置整个项目的背景色
page {
  background-color: #ffffff;
}

/* #endif */
.example-info {
  font-size: 14px;
  color: #333;
  padding: 10px;
}
</style>
