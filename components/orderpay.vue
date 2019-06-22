<template>
	<view class="orderall-wrapper">
		<scroll-view class="orderall-loop" v-for="(item, index) in orderall" :key="index">
			<view class="orderall-inner">
				<view class="inner-head">
					<view class="head-left">
						<view class="head-icon">
							<image class="head-img" src="../static/orderAllIcon.png" mode=""></image>
						</view>
						<view class="head-title">
							{{ item.shopName }}
						</view>						
					</view>
					<view :class="item.ostatus=='订单取消' ? 'head-right-1' : 'head-right-2'">
						{{ item.ostatus }}
					</view>

				</view>
				<view class="inner-body">
					<view class="inner-body-left">
						<image class="inner-body-img" :src="item.pimg" mode="" alt="商品名字"></image>
					</view>
					<view class="inner-body-right">						
						<view class="body-top">
							<view class="text body-pro-name">
								{{ item.proName }}
							</view>
							<view class="text body-order-time">
								{{ item.otime }}
							</view>
						</view>
						<view class="body-bottom">
							<view class="text body-pro-price">
								{{ item.pprice }}
							</view>
						</view>
					</view>
				</view>
				
				<view class="inner-foot">
					<view class="inner-foot-1">
						共一件商品 dfadfasdfds
					</view>
					<view class="inner-foot-2">
						<view class=".inner-option">
							删除订单
						</view>
						<view class=".inner-option">
							追加评价
						</view>
						<view class=".inner-option">
							再来一单
						</view>
					</view>
				</view>
			</view>
		</scroll-view>
	</view>
</template>

<script>
	export default {
		props: ["orderall"],
		data() {
 			return {
				orderData: this.orderall
			};
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
/*** 字体们 ***/
$font-family: "微软雅黑"; $object: 100vw;
/* 大小 */
$fs-main: $object * 0.032; $fs-des: $object * 0.027; $fs-time: $object * 0.024; 
/* 颜色 */
$fc-grey-des: rgb(122,122,122); $fc-grey-price: rgb(98,96,96); $fc-grey-title: rgb(57,56,56); $fc-grey-cancell: rgb(165,165,165); $fc-pink: rgb(250,19,62);

/*** page ***/
$bkc-page: rgb(245,245,248); 
/*** margin 们 */
$mg-head: $object * 0.036; $mg-shop: $object * 0.037; $mg-inner: $object * 0.03; $mg-inner: $object * 0.032; $mg-inner-2: $object * 0.048; $mg-option: $object * 0.02;
$mg-body: $object * 0.049; $mg-head-1: $object * 0.01;
/*** 宽高 ***/
$w-loop: $object * 0.94; $h-loop: $object * 0.499;
/** head **/
$w-head-icon: $object * 0.05;
/** body **/
$h-inner-body: $object * 0.187; 
$body-right: $w-loop - $h-inner-body - $mg-body;

/** inner **/
$w-inner: $w-loop - 2 * $mg-inner ; $h-inner: $h-loop - 2 * $mg-inner;
$h-inner-head: $object * 0.067;
$h-inner-foot: $object * 0.136;
$h-inner-option: $object * 0.06; $w-inner-option: $object * 0.167;

$radius-option: $object * 0.027;

page{ background-color: $bkc-page; font-family: $font-family;
	.orderall-wrapper{display: flex; flex-direction: column; align-items: center;
		.orderall-loop{width: $w-loop; height: $h-loop; margin-block-start: $mg-shop;
			.orderall-inner{display: flex; flex-direction: column; margin: $mg-inner; width: $w-inner; height: $h-inner; 
				.inner-head{display: flex; align-items: center; justify-content: space-between; height: $h-inner-head; width: 100%;
					.head-left{display: flex; align-items: center;}
					.head-icon{width: $w-head-icon; height: $w-head-icon; background-color: transparent;
						.head-img{height: 100%; width: 100%;}
					}
					.head-title{font-size: $fs-main; color: $fc-grey-title; margin-left: $mg-head-1}
					.head-right-1{color: $fc-grey-cancell; font-size: $fs-main;}
					.head-right-2{color: $fc-pink; font-size: $fs-main}
				}
				.inner-body{display: flex; height: $h-inner-body; margin-top: $mg-inner; width: 100%;
					.inner-body-left{width: $h-inner-body; height: $h-inner-body; 
						.inner-body-img{width: 100%; height: 100%;}
					}
					.inner-body-right{display: flex; flex-direction: column; justify-content: space-between; margin-left: $mg-body; width: $body-right;
						.text{white-space: nowrap; overflow: hidden;}
						.body-pro-name{font-size: $fs-main; font-weight: bold}
						.body-order-time{font-size: $fs-time; color: $fc-grey-cancell}
						.body-pro-price{font-size: $fs-main; color: $fc-grey-price}
					}
				}
				.inner-foot{display: flex; flex-direction: column; align-items: flex-end; margin-top: $mg-inner; height: $h-inner-foot; width: 100%;
					.inner-foot-1{font-size: $fs-des; color: $fc-grey-des}
					.inner-foot-2{display: flex; align-items: center; margin-top: $mg-inner-2;
						.inner-option{width: $w-inner-option; height: $h-inner-option; margin-left: $mg-option; text-align: center; font-size: $fs-des; line-height: $h-inner-option; color: $fc-grey-des; border-radius: $radius-option; border: 1px solid $fc-grey-des;}
					}
				}
			}
		}
	}
}
</style>
