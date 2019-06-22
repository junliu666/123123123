<template>
	<view class="shop-wrapper">
		<view class="shop-left">
			<image class="shop-img" :src="value.icon" mode=""></image>
		</view>
		
		<view class="shop-right">
			<view class="name-location">
				<view class="name">
					{{ value.name }}
				</view>
				<view class="location">
					{{ value.location }}
				</view>
			</view>
			
			<view class="star">
				<view v-for="(newItem, newIndex) in starIndex" :key="newIndex">
					<image class="star-img" src="../static/starActive.png" mode="" v-if="value.star > newItem"></image>
					<image class="star-img" src="../static/starSleep.png" mode="" v-if="value.star < newItem || value.star == newItem"></image>
				</view>
			</view>
			
			<view class="type">
				{{ value.type }}
			</view>
			
			<view class="tag-wrapper">
				<view class="tag" v-for="(item, index) in value.tag" :key="index">
					{{ item }}
				</view>
				<!-- <shoptag></shoptag> -->
			</view>
			
			<view class="sale">
				<view class="small-icon">
					惠
				</view>
					<view class="small-text" v-for="(item, index) in value.sale" :key="index">
						<text class="text" v-if="index < value.sale.length-1">{{ item }},</text>
						<text class="text" v-if="index == value.sale.length-1">{{ item }}</text>
					</view>					

			</view>
			
			<view class="send">
				<view class="small-icon">
					送
				</view>				
					<view class="small-text" v-for="(item, index) in value.send" :key="index">
						<text class="text" v-if="index < value.send.length-1">{{ item }},</text>
						<text class="text" v-if="index == value.send.length-1">{{ item }}</text>
					</view>		
			</view>
		</view>
	</view>
</template>

<script scoped>
	// import shoptag from "./shop-tag.vue"
	 export default {
		comments:{
			// shoptag
		},
		props: {
			value: {}
		}, 
		data() {
			return {
				starIndex: [0,1,2,3,4]
			};
		},
		onLoad() {
		}
	}
</script>

<style lang="scss">
$obj: 100vw;
$h-wrapper: $obj * 0.31; $mg-left-right: $obj * 0.032; $w-shop-right: $obj * 0.658;
$fs-name: $obj * 0.0373; $fs-location: $obj * 0.032; $color: #696868; $h-tag: $obj * 0.041; $color-pink: #FF0072; $radius: $obj * 0.01;
$pad-top: $obj * 0.005; $pad-side: $obj * 0.01; $w-small: $obj * 0.045;

.shop-wrapper{display: flex; align-items: center; height: $h-wrapper; width: 100; font-family: "微软雅黑";
	.shop-left{height: $h-wrapper; width: $h-wrapper; background-color: red;
		.shop-img{width: 100%; height: 100%}
	}
	.shop-right{display: flex; flex-direction: column; justify-content: space-between; height: $h-wrapper; width: $w-shop-right; margin-left: $mg-left-right;
		.name-location{display: flex; justify-content: space-between; align-items: center;width: 100%;
			.name{font-size: $fs-name;}
			.location{font-size: $fs-location; color: $color;}
		}
		.star{display: flex; align-items: center;height: $obj * 0.033;
			.star-img{width: $fs-name; height: $fs-name}
		}
		.type{width: 100%; font-size: $fs-location; color: $color}
		.tag-wrapper{display: flex; align-items: center;
			.tag{margin-right: $pad-side; padding: $pad-top $pad-side $pad-top $pad-side;height:  $h-tag; font-size: $fs-name; color: $color-pink; border: 1px solid $color-pink; border-radius: $radius; line-height: $h-tag; text-align: center;}
		}
		.sale{display: flex; align-items: center; width: 80%; font-size: $fs-name; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}
		.send{display: flex; align-items: center; width: 80%; font-size: $fs-name; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;}
		.small-icon{padding: $pad-top;font-size: $fs-name; color: white; width: $w-small; height: $w-small; background-color: $color-pink; border-radius: $radius; text-align: center; line-height: $w-small;}
		.small-text{margin-left: $pad-side;}
	}
}



</style>
