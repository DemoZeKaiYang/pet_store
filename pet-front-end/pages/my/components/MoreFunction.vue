<template>
  <uni-section type="circle" title="更多功能" titleFontSize="18px">
    <uni-list border="true">
      <uni-list-item :show-extra-icon="true" showArrow :extra-icon="{
					color: '#2979ff',
					size: '22',
					type: 'gear-filled'
				}" title="设置" @click="" />
      <uni-list-item :show-extra-icon="true" showArrow :extra-icon="{
      		color: '#2979ff',
      		size: '22',
      		type: 'location-filled'
      	}" title="收货地址"  
       to="/pages/my/Address"
        
        />
      <uni-list-item :show-extra-icon="true" showArrow :extra-icon="{
      		color: '#2979ff',
      		size: '22',
      		type: 'help-filled'
      	}" title="关于" />
    </uni-list>
  </uni-section>
</template>

<script setup>
const handlerAddress=()=>{
  uni.navigateTo({
    url:'/pages/my/address'
  })
}
</script>

<style>

</style>