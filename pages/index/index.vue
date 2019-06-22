<template>
	<view class="body">
		<view class="head-wrapper">
			<view class="location-search">
				<view class="location-icon">
					<image class="l-i" src="../../static/l-i.png" mode=""></image>
				</view>
				<view class="location" @click="locationChange">
					{{ address }}
				</view>
				<view class="search">
					<searchinput></searchinput>
				</view>
			</view>
			
			<view class="img-slide">
				<image class="slide-img" src="../../static/slide-img.png" mode=""></image>
			</view>
		</view>
			
		<view class="env">
			<view class="env-sector">
				<view class="env-left">
					<view class="env-left-one">
						<view class="env-img-wrapper env-left-one-one">
							<image class="env-img" src="../../static/env-cs.png" mode=""></image>
						</view>
						<text class="text-area">超市</text>
						<view class="env-img-wrapper env-left-one-two">
							<image class="env-img" src="../../static/env-yl.png" mode=""></image>
						</view>
						<text class="text-area">娱乐</text>
						<view class="env-img-wrapper env-left-one-two">
							<image class="env-img" src="../../static/env-yl.png" mode=""></image>
						</view>
						<text class="text-area">娱乐</text>
					</view>
					<view class="env-left-two">			
						<view class="env-img-wrapper env-left-two-one">
							<image class="env-img" src="../../static/env-sg.png" mode=""></image>
						</view>
						<text class="text-area">水果生鲜</text>
						<view class="env-img-wrapper env-left-two-two">
							<image class="env-img" src="../../static/env-jk.png" mode=""></image>
						</view>	
						<text class="text-area">健康</text>
						<view class="env-img-wrapper env-left-two-two">
							<image class="env-img" src="../../static/env-yl.png" mode=""></image>
						</view>
						<text class="text-area">娱乐</text>
					</view>
				</view>
				<view class="env-mid-wrapper">
					<view class="env-mid">
						<image class="env-mid-img" src="../../static/env-mid.png" mode=""></image>
					</view>					
				</view>
				<view class="env-right">
					<view class="env-right-one">
						<view class="env-img-wrapper env-right-one-one">
							<image class="env-img" src="../../static/env-ms.png" mode=""></image>
						</view>
						<text class="text-area">美食</text>
						<view class="env-img-wrapper env-right-one-two">
							<image class="env-img" src="../../static/env-jz.png" mode=""></image>
						</view>		
						<text class="text-area">家政</text>
						<view class="env-img-wrapper env-right-one-two">
							<image class="env-img" src="../../static/env-yl.png" mode=""></image>
						</view>
						<text class="text-area">娱乐</text>
					</view>
					<view class="env-right-two">
						<view class="env-img-wrapper env-right-two-one">
							<image class="env-img" src="../../static/env-wm.png" mode=""></image>
						</view>
						<text class="text-area">外卖</text>
						<view class="env-img-wrapper env-right-two-two">
							<image class="env-img" src="../../static/env-wy.png" mode=""></image>
						</view>		
						<text class="text-area">物业</text>
						<view class="env-img-wrapper env-right-two-two">
							<image class="env-img" src="../../static/env-yl.png" mode=""></image>
						</view>
						<text class="text-area">娱乐</text>
					</view>
				</view>
			</view>
		</view>
		
		<view class="split-1"></view>
		<view class="invite">
			<image class="invite-img" src="../../static/invite.png" mode=""></image>
		</view>
		<view class="split-2"></view>

		<view class="title-text-area">
			最近看过的店
		</view>
		
		<scoll-view scroll-x="true" class="viewed-shop" scroll-y="false"  @scroll="abc">
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
			<viewshop></viewshop>
		</scoll-view>

		<view class="title-text-area">
			店铺列表
		</view>
		
		<view class="pickers">
			<shoppicker></shoppicker>
		</view>
		
		<scroll-view  v-for="(item, index) in shopInfo" :key="index">
			<view class="shops-first" v-if="index==0">
				<shopdesc v-bind:value="shopInfo[index]"></shopdesc>		
			</view>
			
			<view class="shops-rest" v-if="index!=0">
				<shopdesc  v-bind:value="shopInfo[index]"></shopdesc>				
			</view>				
		</scroll-view>
	</view>
	
</template>

<script scoped>
    import {  
        mapState
    } from 'vuex';
	
	import shopdesc from "@/components/shopdesc.vue";
	import searchinput from "@/components/search-input.vue";
	import shoppicker from "@/components/shop-pickers.vue";
	import awap from "../../js/amap-wx.js";
	import gd from "@/js/global-data.js"
	import viewshop from "@/components/viewed-shop.vue"
	
	export default {
		components: {
			searchinput,
			shoppicker,
			shopdesc,
			viewshop
		},
		data() {
			return {
				content: '123',
				address: '',
				userInfo: {},
				permission: ["phoneNumber", "location", "userInfo"],
				shopInfo: [],
				viewed: [],
				si: 4
			}
		},
		onLoad() {
			var that = this
			that.getAddress()
			uni.request({
				url: "http://127.0.0.1:3000/shops",
				success(res) {
					for(let i=0; i<res.data.length; i++){
						that.shopInfo.push(res.data[i])
					}
				}
			})
			uni.request({
				url: "http://127.0.0.1:3000/viewed",
				success(res) {
					for(let i=0; i<res.data.length; i++){
						that.viewed.push(res.data[i])
					}
				}
			})
			// this.$store.commit("stateReport")
			// if(!this.hasLogin){
			// 			uni.showModal({
			// 				confirmText: "注册登录",
			// 				cancelText: "游客使用",
			// 				content: "你尚未登陆",
			// 				success(res){
			// 					if(res.cancel){
			// 						//that.$store.dispatch.actionLogin;
			// 						// uni.navigateTo({
			// 						// 	url: "../mine/profile/profile?name='a'"
			// 						// })
			// 					}
			// 					else{
			// 						uni.navigateTo({
			// 							url: "../reg/reg"
			// 						})
			// 					}
			// 				}
			// 			})
			// }
		},
        computed: mapState(['hasLogin']),
		methods: {
			abc:function(){
			},
			locationChange: function(){
				uni.navigateTo({
					url: "../index/invite/invite"
				})
			},
			/* 用户信息许可 电话许可 地址许可 */
			getAddress: function(){
				var that = this
				uni.getLocation({
					success(res) {
						var newAwap = new awap.AMapWX({key:'c1b7100505882e2a610dd85fc14798a3'});
						newAwap.getRegeo({
							success(res){
								console.log(res);
								that.address = res[0].regeocodeData.addressComponent.city;
							},
							fail(err){
								console.log(err);
							}
						})	
					}
				})
	
			},
		}
	}
</script>

<style lang="scss">
$font-family: "微软雅黑";
$height: 100vh; $width: 100vw; $object: 100vw; $bkc-page: rgb(245,245,248);
/* 总体宽 */
$w-overall: $width * 0.94;

/**** 大小距离设定 ****/
/*** 文字类 ***/
$fs-normal: $object * 0.032; $fs-firstLevel: $object * 0.04;

/*** margin ***/
/** header margin **/
$mg-header-top: $object * 0.024; $mg-location-icon: $object * 0.016; $mg-search-img: $object * 0.03;
/* 社区部分 */
$mg-env-left-right: $object * 0.121; $mg-env-sector-border: $object * 0.02; $mg-env-header: $object * 0.014; $mg-sector-env: $object * 0.017; 
$mg-img: $object * 0.032; $mg-text: $object * 0.04;
/* split线条 */
$mg-split: $object * 0.029;
/* 浏览过的店铺 部分 */
$mg-viewed-other: $object * 0.033;
/* 标题部分 */
$mg-textarea-top: $object * 0.037; $mg-textarea-bottom: $object * 0.042;

/*** 边框大小 ***/
/** 高 **/
/* header部分 */
$h-search: $object * 0.064; $h-header: $object * 0.311; $h-location-icon: $object * 0.046; $h-slide: $object * 0.204;
/* 社区部分 */
$h-env: $object * 0.49; $h-env-sector: $object * 0.612; $h-img: $object * 0.14;
$img-w-h: $object * 0.105;
/* slip线条 */
$h-split: $object * 0.02;
/* 邀请部分 */
$h-invite: $object * 0.3;
/* 浏览过的店铺 部分 */
$h-viewed-shop: $object * 0.23;
/* picker选择器 */
$h-picker-wrapper: $object * 0.08;

/** 宽 **/
/* header部分 */
$w-head-location: $object * 0.22 ; $w-head-search: $object * 0.63; $w-location-icon: $object * 0.036;
/* 社区部分 */
$w-env-sector: $object * 0.392;


$dis: flex; $flex-dir: column; $ali-ite: center; $jus-con-sa: space-between;
$head-margin-top: 1vh; $margin-top: 2vh;  $padding-top-bottom: 1vh 0 1vh 0;
page{ background-color: $bkc-page;
	.login{position: fixed; width: 100vw; height: 100%; background-color: white;}
	.body{display: $dis; flex-direction: $flex-dir; align-items: $ali-ite; width: 100vw; font-family: $font-family;
		.head-wrapper{display: $dis; flex-direction: $flex-dir; align-items: $ali-ite; height: $h-header; width: 100vw;
			.location-search{ display: $dis; align-items: $ali-ite; justify-content: $jus-con-sa; width: $w-overall; height: $h-search; margin-top: $mg-header-top;
				.location-icon{display: $dis; align-items: $ali-ite; height: $h-location-icon; width: $w-location-icon;
					.l-i{width: 100%; height: 100%;}
				}
				.location{display: $dis; align-items: $ali-ite; width: $w-head-location; height: 100%; margin-left: $mg-location-icon; font-size: $fs-firstLevel; white-space: nowrap}
				.search{margin-left: 5%; width: $w-head-search; height: 100%; font-size: $fs-normal;}
			}
			.img-slide{height: $h-slide; width: $w-overall; margin-top: $mg-search-img;
				.slide-img{width: 100%; height: 100%;}
			}
		}
		.env{width: $w-overall;  height: $h-env; margin-top: $object * 0.015;
			.env-sector{display: $dis; margin-top: $object * 0.015;
			.text-area{text-align: center; font-size: $fs-normal; }
			.env-img{width: 100%; height: 100%; border-radius: 100%;}
			.env-left{display: $dis; justify-content: $jus-con-sa; width: $w-env-sector; height: $h-env-sector;margin-left: $mg-env-sector-border;
				.env-left-one{display: $dis; flex-direction: $flex-dir;  align-content: $ali-ite;
					.env-img-wrapper{width: $img-w-h; height: $img-w-h; }
					.env-left-one-one{width: $img-w-h; height:  $img-w-h; 
					}
					.env-left-one-two{width: $img-w-h; height:  $img-w-h; margin-top: $mg-img;}
				}
				.env-left-two{display: $dis; flex-direction: $flex-dir; align-content: $ali-ite;
					.env-img-wrapper{width: $img-w-h; height: $img-w-h; }
					.env-left-two-one{width: $img-w-h; height:  $img-w-h; }
					.env-left-two-two{width: $img-w-h; height:  $img-w-h; margin-top: $mg-img;}
				}
			}
			.env-mid-wrapper{width: $object * 0.28; height: $h-env; display: flex; align-items: center; justify-content: center;
				.env-mid{width: $object * 0.28; height: $object * 0.442;
					.env-mid-img{width: 100%; height: 100%;}				
			}
			}
			.env-right{display: $dis; justify-content: $jus-con-sa; width: $w-env-sector; height: $h-env-sector; margin-right: $mg-env-sector-border;
				.env-right-one{display: $dis; flex-direction: $flex-dir; align-content: $ali-ite;
					.env-img-wrapper{width: $img-w-h; height: $img-w-h; }
					.env-right-one-one{width: $img-w-h; height:  $img-w-h; }
					.env-right-one-two{width: $img-w-h; height:  $img-w-h;  margin-top: $mg-img;}
				}
				.env-right-two{display: $dis; flex-direction: $flex-dir; align-content: $ali-ite;
					.env-img-wrapper{width: $img-w-h; height: $img-w-h; }
					.env-right-two-one{width: $img-w-h; height:  $img-w-h; }
					.env-right-two-two{width: $img-w-h; height:  $img-w-h; margin-top: $mg-img;}
				}				
			}
			}
		}
		
		.split-1{width: 100vw; height: $h-split; background-color: rgb(240, 240, 240); margin-top: $mg-split;}
		.split-2{width: 100vw; height: $h-split; background-color: rgb(240, 240, 240);}
		.invite{display: $dis; width: 100vw; height: $h-invite;
			.invite-img{width: 100%; height: 100%;}
		}
		
		.title-text-area{width: $w-overall; font-size: $fs-firstLevel; font-weight: bold; margin-top: $mg-textarea-top; margin-bottom: $mg-textarea-bottom; border-left: 2px solid #F47527; padding-left: $object * 0.01}

		.viewed-shop{display: $dis ; align-items: $ali-ite; width: 100%; height: $h-viewed-shop; white-space: nowrap; overflow: scroll;}
		
		.pickers{display: $dis; align-items: $ali-ite; justify-content: center; height: $h-picker-wrapper; width: 100%; background-color: rgb(235, 235, 235); font-size: $fs-normal;}
		.shops-first{display: $dis; flex-direction: $flex-dir; width: $w-overall; margin: auto; margin-top: $mg-textarea-top; margin-bottom: $mg-textarea-top}	
		.shops-rest{display: $dis; flex-direction: $flex-dir; width: $w-overall; margin: auto; margin-bottom: $mg-textarea-top; margin-top: $mg-textarea-top}
	}
}

::-webkit-scrollbar
{
  width: 0px;
  height: 0px;
  color: transparent;
}

</style>
