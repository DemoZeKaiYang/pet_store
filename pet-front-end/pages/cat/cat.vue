<template>
	<view>
		<view class="layer-box">
			<!-- 商品列表 -->
			<view class="goods-list">
				<view class="tis" v-if="insideCarGoods.length==0">暂无商品~</view>
				<view class="row" v-for="(item,index) in insideCarGoods" :key="index">
					<!-- 滑动删除按钮 -->
					<view class="menu" @tap.stop="deleteGoods(item.id)">
						<image class="icon_dele" src="/static/images/delete.png"></image>
					</view>
					<!-- 商品 -->
					<view class="carrier" :class="[theIndex==index?'open':oldIndex==index?'close':'']"
						@touchstart="touchStart(index,$event)" @touchmove="touchMove(index,$event)"
						@touchend="touchEnd(index,$event)">
						<!-- checkbox -->
						<view class="checkbox-box" @tap="selectedTap(item)">
							<view class="checkbox">
								<view :class="[item.selected?'on':'']"></view>
							</view>
						</view>
						<!-- 商品信息 -->
						<view class="goods-info">
							<u-image class="tp_img" :src="item.picUrl" :fade="true" radius="5" width="80"
								height="80" duration="450"></u-image>
							<view class="info">
								<view class="title">{{item.name}}</view>
								<view class="price-number">
									<view class="price">￥{{item.price}}</view>
									<view class="number">
										<u-number-box v-model="item.itemAddNum" :name="index" integer
											@change="onChange"></u-number-box>
									</view>
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 底部购物车 -->
		<view class="m-footer-car">
			<view class="allSelect_box" @tap="allSelectTap">
				<view class="checkbox">
					<view :class="[isAllselected?'on':'']"></view>
				</view>
				<view class="text">全选</view>
			</view>

			<view class="delBtn" @tap="deleteList" v-if="selectedList.length>0">删除</view>
			<view class="settlement">
				<view class="footer_sum">合计:<view class="footer_price">￥{{sumPrice}}</view>
				</view>
				<view class="footer_but" @tap="toConfirmation">结算({{selectedList.length}})</view>
			</view>
		</view>


	</view>
</template>

<script >
  
  
	export default {
		data() {
			return {
				carNum: 0, //加入到购物车的总个数
				carPrice: "0.00", //加入到购物车的总价钱
				// 加入到购物车的商品列表
				insideCarGoods: [],
				sumPrice: 0.00,
				showHeader: true,
				selectedList: [],
				isAllselected: false,
				//控制滑动效果
				theIndex: null,
				oldIndex: null,
				isStop: false
			}
		},
		onLoad(event) {
			this.insideCarGoods = JSON.parse(decodeURIComponent(event.detailDate));
			this.carNum = this.insideCarGoods.length;
			this.insideCarGoods.forEach((item) => {
				item.selected = false;
			})
		},
		onShow() {
			this.checked = false;
		},
		methods: {
			//控制左滑删除效果-begin
			touchStart(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				this.oldIndex = this.theIndex;
				this.theIndex = null;
				//初始坐标
				this.initXY = [event.touches[0].pageX, event.touches[0].pageY];
			},
			touchMove(index, event) {
				//多点触控不触发
				if (event.touches.length > 1) {
					this.isStop = true;
					return;
				}
				let moveX = event.touches[0].pageX - this.initXY[0];
				let moveY = event.touches[0].pageY - this.initXY[1];

				if (this.isStop || Math.abs(moveX) < 5) {
					return;
				}
				if (Math.abs(moveY) > Math.abs(moveX)) {
					// 竖向滑动-不触发左滑效果
					this.isStop = true;
					return;
				}

				if (moveX < 0) {
					this.theIndex = index;
					this.isStop = true;
				} else if (moveX > 0) {
					if (this.theIndex != null && this.oldIndex == this.theIndex) {
						this.oldIndex = index;
						this.theIndex = null;
						this.isStop = true;
						setTimeout(() => {
							this.oldIndex = null;
						}, 150)
					}
				}
			},
			touchEnd(index, $event) {
				//结束禁止触发效果
				this.isStop = false;
			},
			//删除商品
			deleteGoods(id) {
				let len = this.insideCarGoods.length;
				for(let i=0;i<len;i++){
					if(id == this.insideCarGoods[i].id){
						this.insideCarGoods.splice(i, 1);
						break;
					}
				}
				this.selectedList.splice(this.selectedList.indexOf(id), 1);
				this.sumFun();
				this.oldIndex = null;
				this.theIndex = null;
			},
			// 删除商品 底部
			deleteList() {
				this.insideCarGoods = [];
				this.selectedList = [];
				this.isAllselected = this.selectedList.length == this.insideCarGoods.length && this.insideCarGoods.length >0;
				this.sumFun();
				this.carNum = 0;
				
			},
			// 选中商品
			selectedTap(item) {
				// 切换商品的选中状态
				item.selected = !item.selected;
				if (item.selected) {
					this.selectedList.push(item);
				} else {
					const index = this.selectedList.findIndex(selectedItem => selectedItem.id === item.id);
					if (index !== -1) {
						this.selectedList.splice(index, 1);
					}
				}
				this.sumFun();
			},
			//全选
			allSelectTap() {
				let arr = [];
				this.insideCarGoods.forEach(item =>{
					item.selected = this.isAllselected ? false : true;
					arr.push(item);
				})
				this.selectedList = this.isAllselected ? [] : arr;
				this.isAllselected = this.isAllselected || this.insideCarGoods.length == 0 ? false : true;
				this.sumFun();
			},
			onChange(e) {
				this.insideCarGoods[e.name].itemAddNum = e.value;
				this.sumFun();
			},
			// 合计
			sumFun() {
				this.sumPrice = 0;
				this.selectedList.forEach(item => {
					this.sumPrice += item.itemAddNum * item.price;
				})
				// 删除数量
				getApp().globalData.deleteCarNum = this.insideCarGoods.length;
				// 删除购物车商品列表
				getApp().globalData.globalInsideCarGoods = this.insideCarGoods
			},

			//清空购物车
			clearCar() {
				this.insideCarGoods = [],
					this.carPrice = "0.00";
			},

			// 全选
			checkedAll() {
				this.checked = !this.checked;
				let flag = this.checked,
					items = this.cartList;
				items.forEach(val => {
					if (flag) {
						val.check = true;
					} else {
						val.check = false;
					}
				});
			},


			//跳转确认订单页面
			toConfirmation() {
				if (this.selectedList.length < 1) {
					uni.showToast({
						title: '请选择商品结算',
						icon: 'none'
					});
					return;
				}
				uni.showModal({
					title: '温馨提示',
					content: '支付后续更新调用微信支付',
					showCancel: false,
					confirmText: '确定',
					confirmColor: '#458bd0',
					success: (res) => {
						if (res.confirm) {}
					}
				})
			},
		}
	}
</script>

<style lang="scss">

	.layer-box {
		width: 100%;
		padding: 0;
		height: 70%;
		border-radius: 20upx 20upx 0 0;
		background-color: #fff;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
	}

	.checkbox-box {
		display: flex;
		align-items: center;
	}
	.checkbox {
		width: 35upx;
		height: 35upx;
		border-radius: 100%;
		border: solid 2upx #f06c7a;
		display: flex;
		justify-content: center;
		align-items: center;

		.on {
			width: 25upx;
			height: 25upx;
			border-radius: 100%;
			background-color: #f06c7a;
		}
	}

	.text {
		font-size: 28upx;
		margin-left: 10upx;
	}

	.status {
		width: 100%;
		height: 0;
		position: fixed;
		z-index: 10;
		background-color: #fff;
		top: 0;
		/*  #ifdef  APP-PLUS  */
		height: var(--status-bar-height); //覆盖样式
		/*  #endif  */
	}

	.header {
		width: 92%;
		padding: 0 4%;
		height: 100upx;
		display: flex;
		align-items: center;
		position: fixed;
		top: 0;
		z-index: 10;
		background-color: #fff;
		/*  #ifdef  APP-PLUS  */
		top: var(--status-bar-height);
		/*  #endif  */
	}

	.header .title {
		font-size: 38upx;
	}

	.place {
		background-color: #ffffff;
		height: 100upx;
		/*  #ifdef  APP-PLUS  */
		margin-top: var(--status-bar-height);
		/*  #endif  */
	}

	.goods-list {
		width: 100%;
		margin-top: 10rpx;
	}

	.tis {
		width: 100%;
		height: 60upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 32upx;
	}

	.row {
		width: 92%;
		height: calc(22vw + 40upx);
		margin: 20upx auto;
		border-radius: 15upx;
		box-shadow: 0upx 5upx 20upx rgba(0, 0, 0, 0.1);
		display: flex;
		align-items: center;
		position: relative;
		overflow: hidden;
		z-index: 4;
		border: 0;
	}

	.menu {
		.icon {
			color: #fff;
		}
		position: absolute;
		width: 30%;
		height: 100%;
		right: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: red;
		color: #fff;
		z-index: 2;
	}

	.icon_dele {
		width: 60rpx;
		height: 60rpx;
	}

	.carrier {
		@keyframes showMenu {
			0% {
				transform: translateX(0);
			}

			100% {
				transform: translateX(-30%);
			}
		}

		@keyframes closeMenu {
			0% {
				transform: translateX(-30%);
			}

			100% {
				transform: translateX(0);
			}
		}

		&.open {
			animation: showMenu 0.25s linear both;
		}

		&.close {
			animation: closeMenu 0.15s linear both;
		}

		background-color: #fff;

		.checkbox-box {
			padding-left: 20upx;
			flex-shrink: 0;
			height: 22vw;
			margin-right: 20upx;
		}

		position: absolute;
		width: 100%;
		padding: 0 0;
		height: 100%;
		z-index: 3;
		display: flex;
		align-items: center;

		.goods-info {
			width: 100%;
			display: flex;
			padding-right: 20upx;
			
			.tp_img{
				border: 1px dashed #b2b2b2;
			}

		}
	}

	.info {
		width: 100%;
		overflow: hidden;
		display: flex;
		flex-wrap: wrap;
		position: relative;
		margin-left: 20rpx;

		.title {
			width: 100%;
			font-size: 28upx;
			display: -webkit-box;
			-webkit-box-orient: vertical;
			-webkit-line-clamp: 2;
			overflow: hidden;
		}
		.price-number {
			position: absolute;
			width: 100%;
			bottom: 0upx;
			display: flex;
			justify-content: space-between;
			align-items: flex-end;
			font-size: 28upx;
			height: 60upx;

			.price {}

			.number {
				display: flex;
				justify-content: center;
				align-items: flex-end;

				.input {
					width: 60upx;
					height: 60upx;
					margin: 0 10upx;
					background-color: #f3f3f3;

					input {
						width: 60upx;
						height: 60upx;
						display: flex;
						justify-content: center;
						align-items: center;
						text-align: center;
						font-size: 26upx;
					}
				}

				.sub,
				.add {
					width: 45upx;
					height: 45upx;
					background-color: #f3f3f3;
					border-radius: 5upx;

					.icon {
						font-size: 22upx;
						width: 45upx;
						height: 45upx;
						display: flex;
						justify-content: center;
						align-items: center;

					}

				}

				.icon_jian {
					width: 30upx;
					height: 30upx;
					display: flex;
					justify-content: center;
					align-items: center;
					margin: 8rpx 8rpx;
				}

			}
		}
	}

	.delBtn {
		border: solid 1upx #f06c7a;
		color: #f06c7a;
		padding: 0 20upx;
		height: 50upx;
		border-radius: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		margin-left: 20rpx;
		margin-top: 5rpx;
	}

	// 底部
	.allSelect_box {
		display: flex;
		align-items: center;
		margin-left: 20rpx;
	}

	.m-footer-car {
		position: fixed;
		bottom: 0upx;
		width: 100%;
		height: 99upx;
		border-top: solid 1upx #eee;
		background-color: #fff;
		z-index: 2;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.settlement {
		width: 60%;
		display: flex;
		justify-content: flex-end;
		align-items: center;

		.footer_sum {
			width: 50%;
			font-size: 28upx;
			margin-right: 10upx;
			display: flex;
			justify-content: flex-end;

			.footer_price {
				font-weight: bold;
				font-size: 38rpx;
				color: #ff0000;
			}
		}
	}

	.footer_but {
		background: #4eb87d;
		color: #fff;
		height: 100%;
		line-height: 99upx;
		padding: 0 40upx;
	}
</style>
