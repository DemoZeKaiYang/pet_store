<template>
	<view class="pay-page">
		<view class="address-box">
			<view class="address-icon"><u-icon name="plus-circle" color="#999" size="36rpx"></u-icon></view>
			<view class="address-text">添加收货地址</view>
		</view>
		<!-- 商品信息 -->
		<view class="shopping-box">
			<view class="shopping-top">
				<view class="lable-title">商品信息</view>
				<view class="lable-number">共2个</view>
			</view>
			<view class="shopping-list">
				<view class="shopping-item">
					<view class="shopping-img">
						<image src="@/static/pdf3.png"></image>
					</view>
					<view class="shopping-info">
						<view class="shopping-hd">
							<view class="shopping-title">1张图片.pdf</view>
							<view class="shopping-price">￥0.40</view>
							<view class="shopping-price">x1</view>
						</view>
						<view class="shopping-text">A4/彩色/单面/订书钉/1份/1个文件/护眼纸</view>
					</view>
				</view>
				<view class="shopping-item">
					<view class="shopping-img">
						<image src="@/static/pdf3.png"></image>
					</view>
					<view class="shopping-info">
						<view class="shopping-hd">
							<view class="shopping-title">1张图片.pdf</view>
							<view class="shopping-price">￥0.40</view>
							<view class="shopping-price">x2</view>
						</view>
						<view class="shopping-text">A4/彩色/单面/订书钉/1份/1个文件/护眼纸</view>
					</view>
				</view>
			</view>
			<view class="shopping-top cell-list">
				<view class="cell-left">邮费</view>
				<view class="cell-right">包邮</view>
			</view>
			<view class="end-price">
				<view class="end-label">实付款</view>
				<view class="end-number">￥41.40</view>
			</view>
		</view>
		<!-- 订单信息 -->
		<view class="shopping-box">
			<view class="shopping-top">
				<view class="lable-title">订单信息</view>
			</view>
			<view class="shopping-top cell-list">
				<view class="cell-left">订单编号</view>
				<view class="cell-right">10222222</view>
			</view>
			<view class="shopping-top cell-list">
				<view class="cell-left">支付方式</view>
				<view class="cell-right">线上支付</view>
			</view>
			<view class="shopping-top cell-list">
				<view class="cell-left">下单时间</view>
				<view class="cell-right">2023-12-06 10:21:59</view>
			</view>
			
			
		</view>
		<view class="footer-box">
			<view class="footer-content">
				<view class="price-box">
					合计:<view class="price-text">
						<u-icon name="rmb" :bold="true" color="rgb(245, 54, 22)" size="32rpx"></u-icon>0.40
					</view>
				</view>
				<view class="print-item-entry" style="flex:2;">

					<view class="select-box" style="padding:24rpx 60rpx;border-radius: 14rpx;">
						<view class="selecet-text">立即支付</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {

		}
	}
</script>

<style lang="scss">
	.pay-page {
		padding: 30rpx 30rpx 160rpx 30rpx;
		background: #f8f8f8;
		display: flex;
		flex-direction: column;

		.address-box {
			padding: 20rpx;
			display: flex;
			align-items: center;
			justify-content: center;
			border-radius: 14rpx;
			background: #fff;
		}

		.address-text {
			font-size: 28rpx;
			color: #000;
			margin-left: 10rpx;
		}

		.shopping-box {
			margin-top: 20rpx;
			border-radius: 14rpx;
			display: flex;
			flex-direction: column;
			background: #fff;
			padding: 20rpx 0;
		}

		.lable-title {
			font-size: 32rpx;
			font-weight: 600;
			color: #000;
			padding: 10rpx 24rpx;
			border-bottom: 2rpx solid rgb(248, 248, 248);
		}

		.shopping-list {
			display: flex;
			flex-direction: column;
			padding: 0 24rpx;

		}

		.lable-number {
			font-size: 24rpx;
			color: #999;
			padding-right: 24rpx;
		}

		.shopping-top {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.shopping-item {
			display: flex;
			padding: 20rpx 0;
			border-bottom: 2rpx solid rgb(248, 248, 248);
		}

		.shopping-img {
			height: 100rpx;
			width: 100rpx;

			image {
				width: 100%;
				height: 100%;
			}
		}

		.shopping-info {
			flex: 1;
			margin-left: 20rpx;
			display: flex;
			flex-direction: column;
		}

		.shopping-hd {
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		.shopping-title {
			flex: 1;

		}

		.shopping-price {
			width: 120rpx;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			color: rgb(245, 54, 22);
			font-size: 28rpx;
			font-weight: 600;
		}

		.shopping-text {
			margin-top: 10rpx;
			font-size: 24rpx;
			color: #999;
		}
	}

	.end-price {
		padding: 24rpx;
		display: flex;
		align-items: center;
		justify-content: flex-end;
	}

	.end-label {
		font-size: 24rpx;
		color: #000;
	}

	.end-number {
		color: rgb(245, 54, 22);
		font-size: 28rpx;
		font-weight: 600;
	}
	.footer-box {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 140rpx;
		background: #fff;
		display: flex;
	border-top: 1rpx solid rgb(214, 215, 217);
		.footer-content {
			padding: 24rpx;
			display: flex;
			align-items: center;
			// margin-bottom: 60rpx;
			flex: 1;
		}
	
		.price-box {
			flex: 1;
			display: flex;
			align-items: center;
		}
	
		.price-text {
			display: flex;
			align-items: center;
			color: rgb(245, 54, 22);
			font-weight: 600;
			font-size: 32rpx;
		}
	}
	.print-item-entry {
		display: flex;
		align-items: center;
		// flex: 1;
		flex-wrap: wrap;
		justify-content: flex-end;
	}
	.select-box {
		// width: 200rpx;
		display: flex;
		align-items: center;
		background: rgb(245, 54, 22);
		padding: 10rpx 30rpx;
		border-radius: 10rpx;
		margin-left: 20rpx;
		justify-content: center;
	
		.selecet-text {
			color: #fff;
			font-size: 24rpx;
		}
	
		.selecet-icon {
			margin-left: 4rpx;
		}
	}
	.cell-left {
		font-size: 24rpx;
		color:#000;
	}
	.cell-list {
		padding: 30rpx 24rpx;
			border-bottom: 1rpx solid rgb(214, 215, 217);
		
	}
</style>