<template>
  <view class="commu-fn">
    <CommuniFn title="赞与收藏" type="dianzan" icColor="#FB635E" bgColor="#FDEBE9"></CommuniFn>
    <CommuniFn title="新增粉丝" type="fensi" icColor="#F88440" bgColor="#FBF3E5"></CommuniFn>
    <CommuniFn title="评论与@" type="xiaoxi11" icColor="#5ED99A" bgColor="#DCF8EC"></CommuniFn>
    <CommuniFn title="谁看过我" type="yanjing-" icColor="#4785FC" bgColor="#E5EEFF"></CommuniFn>
    <!-- 消息列表 -->
  </view>
  <view class="message-list">
    <uni-list :border="true">
      <!-- 显示圆形头像 -->
      <uni-list-chat :avatar-circle="true" title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息"
        time="2020-02-02 20:20"></uni-list-chat>
      <uni-list-chat :avatar-circle="true" title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息"
        time="2020-02-02 20:20"></uni-list-chat>
      <uni-list-chat :avatar-circle="true" title="uni-app"
        avatar="https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/unicloudlogo.png" note="您收到一条新的消息"
        time="2020-02-02 20:20"></uni-list-chat>

    </uni-list>
  </view>
</template>

<script setup>
  import CommuniFn from './CommuniFn.vue'
</script>

<style>
  .commu-fn {
    display: flex;
  }
</style>