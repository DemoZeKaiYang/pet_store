<template>
  <div class="not-found">
    <h1>404</h1>
    <p>页面未找到</p>
    <p>请检查您输入的 URL 是否正确，或者返回 <router-link to="/">首页</router-link>。</p>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style scoped>
.not-found {
  text-align: center;
  padding: 20px;
}
</style>
