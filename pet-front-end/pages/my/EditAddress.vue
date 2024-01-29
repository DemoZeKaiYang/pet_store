<template>
	<view>
		<view class="editaddress">
			<view class="content">
				<view class="row">
					<view class="nominal">收货人</view>
					<view class="input"><input placeholder="请输入收货人姓名" v-model="addressData.name" type="text" />
					</view>
				</view>
				<view class="row">
					<view class="nominal">电话号码</view>
					<view class="input"><input placeholder="请输入收货人电话号码" v-model="addressData.phone" type="number"
							maxlength="11" /></view>
				</view>
				<view class="row">
					<view class="nominal">所在地区</view>
					<view class="input selectcity" @tap="openPicker">
						<input placeholder="请选择省市区" disabled type="text" v-model="addressData.address" />
						<image src="/static/right.png" class="rights"></image>
					</view>
				</view>
				<view class="row">
					<view class="nominal">详细地址</view>
					<view class="input"><textarea style="font-size: 28rpx;" v-model="addressData.moreAddres"
							auto-height="true" placeholder="输入详细地址" v-if="show == false"></textarea></view>
				</view>
				<view class="row">
					<view class="nominal" style="color: 666;margin-top: 10rpx;">设为默认地址</view>
					<view class="input switch">
						<switch :color="colors" style="transform:scale(0.8)" @change="switchChange"
							:checked="addressData.isdefult == 1"></switch>
					</view>
				</view>
			</view>
			<view class="save">
				<view class="btn" :style="'background:' + colors">保存地址</view>
			</view>

			<!-- 省市区选择 province city area初始省市区设置 show:是否显示  @sureSelectArea：确认事件 @hideShow：隐藏事件-->
			<SelectCit :province="province" :city="city" :area="area" :show="show" @changeClick="changeClick" @sureSelectArea="onsetCity"
				@hideShow="onhideShow"></SelectCit>

		</view>

	</view>
</template>

<script>
  
  import SelectCit from './components/SelectCity.vue'
	export default {
    components:{
      SelectCit
    },
		data() {
			return {
				colors: '#f37b1d',
				show: false,
				province:"广东省",
				city:"广州市",
				area: "天河区",
				addressData: {
					name: '',
					phone: '',
					address: '',
					moreAddres: '',
					isdefult: 0
				},
				isShow: true
			};
		},
		methods: {

			openPicker() {
				console.log('执行打开地址选择器')
				this.show = true
			},
			
			changeClick(value, value2, value3){
				
				console.log('地址选择器 = ' + value + value2 + value3);
				
				this.province = value;
				this.city = value2;
				this.area = value3;
				
			},
			onhideShow() {
				this.show = false
				console.log('执行了关闭地址选择器')
			},
			//选中省市区
			onsetCity(e) {
				let data = e.detail.target.dataset;
				let address = data.province + data.city + data.area;
				this.show = false
				this.addressData.address = address
			},
			// 
			switchChange(e) {

			}

		}
	};
</script>
<style lang="scss" scoped>
	.save {
		position: fixed;
		bottom: 0;
		width: 100%;
		height: 120rpx;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.save view {
		display: flex;
	}

	.save .btn {
		box-shadow: 0rpx 5rpx 10rpx rgba(0, 0, 0, 0.4);
		width: 70%;
		height: 80rpx;
		border-radius: 80rpx;
		background-color: #f23a3a;
		color: #fff;
		justify-content: center;
		align-items: center;
		font-size: 30rpx;
		margin-bottom: 60px;
	}

	.save .btn .icon {
		height: 80rpx;
		color: #fff;
		font-size: 30rpx;
		justify-content: center;
		align-items: center;
	}

	.content {
		display: flex;
		flex-wrap: wrap;
		margin-top: 40rpx;
	}

	.content view {
		display: flex;
	}

	.content .row {
		width: 92%;
		margin: 0 4%;
		border-bottom: solid 1rpx #eee;
	}

	.content .row .nominal {
		width: 30%;
		height: 80rpx;
		font-size: 28rpx;
		font-family: Droid Sans Fallback;
		font-weight: 400;
		color: rgba(51, 51, 51, 1);
		align-items: center;
	}

	.content .row .input {
		width: 70%;
		padding: 20rpx 0;
		align-items: center;
		font-size: 28rpx;

	}

	.content .row .input input {
		font-size: 28rpx;
		color: #333333;
	}

	.content .row .switch {
		justify-content: flex-end;
	}

	.content .row .input textarea {
		min-height: 40rpx;
		line-height: 40rpx;
	}

	.content .del_box {
		width: 100%;
		display: block;
		overflow: hidden;
		margin-right: 30rpx;
	}

	.content .del {
		width: 240rpx;
		height: 80rpx;
		float: right;
		justify-content: center;
		align-items: center;
		font-size: 28rpx;
		color: #F23A3A;
		margin: 0 auto;
		margin-top: 50rpx;
		border-radius: 38rpx;
		background-color: rgba(255, 0, 0, 0.05);
		border-bottom: solid 1rpx #eee;
	}

	.selectcity input {
		width: 90%;
	}

	.selectcity image {
		width: 40rpx;
		height: 40rpx;
		float: right;
	}
</style>