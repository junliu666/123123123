<template>
	<view class="wrapper">		
		<view class="header">
			<canvas class="head-canvas" canvas-id="head-canvas">
			</canvas>
		</view>
			
		<cover-view class="person-head">

			<cover-view class="person-top-content">
				<cover-view class="person-name">
					请设定昵称
				</cover-view>
				<cover-view class="person-id">
					ID: Tiantangqin
				</cover-view>
			</cover-view>
			<cover-view class="person-bottom-mlb">
				<cover-view class="mlb-sub mlb-cold">
					<cover-view class="mlb">
						56
					</cover-view>
					<cover-view class="mlb-des">
						冻结魔力币
					</cover-view>
				</cover-view>
				<cover-view class="mlb-sub mlb-use">
					<cover-view class="mlb">
						4
					</cover-view>
					<cover-view class="mlb-des">
						可用魔力币
					</cover-view>
				</cover-view>
			</cover-view>			
		</cover-view>


		<cover-view class="person-photo">
			<cover-image class="photo" src="../../static/person-photo.jpg" mode=""></cover-image>
		</cover-view>
		
		<view class="invite">
			<image class="mine-invite" src="../../static/mine-invite.png" mode=""></image>
		</view>
		
		<scroll-view class="main-option">
			<view class="" v-for="(item, index) in option" :key="index">
				<popo v-bind:data="item"></popo>		
			</view>
		</scroll-view>
	</view>
</template>

<script>
	import popo from "@/components/options.vue"
	
	export default {

		data() {
			return {
				screenW: '',
				option: {
					"收货地址": {
						"des": "收货地址",
						"iconPath": "../static/option-location.png"
					},
					"优惠卷": {
						"des": "优惠卷",
						"iconPath": "../static/option-sale.png"
					},
					"合伙人招募": {
						"des": "合伙人招募",
						"iconPath": "../static/option-people.png"
					},
					"服务协议": {
						"des": "服务协议",
						"iconPath": "../static/option-service.png"
					},
					"意见反馈": {
						"des": "意见反馈",
						"iconPath": "../static/option-advise.png"
					},
					"关于我们": {
						"des": "关于我们",
						"iconPath": "../static/option-about.png"
					},
					"帮助中心": {
						"des": "帮助中心",
						"iconPath": "../static/option-help.png"
					}
				},
			}
		},
		components:{
			popo
		},
		onLoad() {
			var that = this
			uni.getSystemInfo({
				success(res){
					that.screenW = res.windowWidth;
				}
			})
			this.headCanvasDraw()
		},
		methods: {
			headCanvasDraw: function(){
				let screenW = this.screenW
				let headH = screenW * 0.224
				let hOne = headH * 0.7
				let hTwo = headH * 0.8
				let c = uni.createCanvasContext("head-canvas")
				c.beginPath()
				c.moveTo(0, 0)
				c.lineTo(screenW, 0)
				c.lineTo(screenW, hOne)
				c.lineTo(screenW*0.95, hTwo)
				c.lineTo(screenW*0.05, hTwo)
				c.lineTo(0, hOne)
				c.closePath()
				c.setFillStyle("#F42B4C")
				c.fill()
				c.draw()
			}
		}
	}
</script>

<style lang="scss">
$bkg-color: rgb(246,246,246); $obj: 100vw;
/*** 颜色 ***/
$fc-pink: rgb(244,43,76); $bs-option: rgb(130,131,132);

/*** 高宽们 ***/
/** header 部分 **/
$h-header: $obj * 0.224;

/** 个人标签头 部分 */
$h-p-h: $obj * 0.288; $w-p-h: $obj * 0.94; $radius-p-h: $obj * 0.016; $bw-p-h: $obj * 0.01;
$h-p-photo: $obj * 0.142; 
$h-top-content: $obj * 0.084; 
$h-bottom-mlb: $obj * 0.108; $w-bottom-mlg: $obj * 0.618;

/** invite 部分 **/
$h-invite: $obj * 0.155;

/** 下方总选项 **/
$h-main: $obj * 0.885;

/*** margin们 ***/
$mg-rest-real: $obj * 0.036;
$mg-p-h: $obj * 0.064; $mg-rest: $mg-p-h + $h-p-h - $h-header + $bw-p-h + $mg-rest-real;
$mg-p-photo-top: $obj * 0.0186; $mg-p-photo-left: $obj * 0.058;
$mg-h-top-content-top: $obj * 0.013; $mg-h-top-content-left: $obj * 0.189;
$mg-h-bottom-mlg-left: $obj * 0.162; $mg-h-bottom-mlg-top: $obj * 0.062 + $h-top-content + $mg-h-top-content-top;
/** option **/
$h-option: 100vh * 0.1;

/** 字体 **/
$fs-person-name: $obj * 0.0373; $fs-person-id: $obj * 0.0267; $fc-person-normal: rgb(109,108,108); 
$fs-person-mlg: $obj * 0.064; $fs-person-mlg-des: $obj * 0.032; $fc-person-mlb: rgb(248,113,53);



page{padding: 0; margin: 0; background-color: $bkg-color;
	.wrapper{display: flex; flex-direction: column; align-items: center;
	.header{height: $h-header; width: 100%; background-color: $bkg-color;
		.head-canvas{width: 100%;}
	}
	.person-photo{position: absolute; height: $h-p-photo; width: $h-p-photo; top: $mg-p-photo-top; left: $mg-p-photo-left; border-radius: $h-p-photo; overflow: hidden; border: 0; ouline: none;
		.photo{width: 100%; height: 100%;}
	}
	.person-head{position: absolute; width: $w-p-h; height: $h-p-h; background-color: white; left: $obj * 0.03; top: $mg-p-h; border-radius: $radius-p-h; box-shadow: 0 $bw-p-h  $fc-pink;
		.person-top-content{display: flex; flex-direction: column; justify-content: space-between; position: absolute; width: $w-bottom-mlg; height: $h-top-content; left: $mg-h-top-content-left; top: $mg-h-top-content-top;
			.person-name{font-size: $fs-person-name; color: $fc-person-normal}
			.person-id{font-size: $fs-person-id; color: $fc-person-normal}
		}
		.person-bottom-mlb{display: flex; justify-content: space-between; position: absolute; width: $w-bottom-mlg; height: $h-bottom-mlb; left: $mg-h-bottom-mlg-left; top: $mg-h-bottom-mlg-top;
			.mlb-sub{display: flex; flex-direction: column; justify-content: space-between;
				.mlb{font-size: $fs-person-mlg; color: $fc-person-mlb; text-align: center;}
				.mlb-des{font-size: $fs-person-mlg-des; color: $fc-person-mlb; font-weight: 400;}
			}
		}

	}
	.invite{height: $h-invite; width: $w-p-h; margin-top: $mg-rest; border-radius: $radius-p-h;
		.mine-invite{width: 100%; height: 100%}
	}
	.main-option{margin-top: $mg-rest-real; margin-bottom: $mg-rest-real;width: $w-p-h; height: 100%; border-radius: $radius-p-h; box-shadow: 0px 0px $radius-p-h 0px  $bs-option;}
		.option{width: 100%; height: $h-option;}
	}
}
</style>
