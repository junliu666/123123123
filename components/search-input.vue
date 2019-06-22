<template>
	<view class="search-input">
		<view class="search-icon">
			<icon type="search" :size="size"></icon>
		</view>
		<input type="text" v-model="content" :class="[ content == '' ? 'input-box':'input-box-active' ]" />
		<view class="clear-icon"  @click="clearValue">
			<icon type="clear" :size="size" v-if="content != ''"></icon>
		</view>
	</view>
</template>  

<script scoped>
	export default {
 		data() {
			return {
				content: '',
				size: getApp().globalData.width * 0.034
			};
		},
		onLoad() {
		},
		methods: {
			clearValue: function(){
				this.content = ''
			}
		},
		computed:{
		}
	}
</script>

<style lang="scss">
/* search icon */
$p-l-si: 100vw * 0.033; $p-r-si: 100vw * 0.017;
$radius: 100vw*0.016;
$padding: 5%;
$bkg: rgb(240, 240, 240);
$dis: flex; $al-it: center;  $border: 0.1px solid white;
.search-input{display: $dis; align-items: $al-it; width: 100%; height: 100%; margin: 0; padding: 0; outline: none; 
	.input-box{padding: 0.5vh 0 0.5vh 0; min-height: 0; width: 100%; height: 100%; background-color: $bkg;  border-top-right-radius: $radius;border-bottom-right-radius: $radius;}
	.input-box-active{padding: 0.5vh 0 0.5vh 0; min-height: 0; border-top: $border; border-bottom: $border; width: 100%; height: 100%; background-color: $bkg;}
	.search-icon{padding: 0.5vh 0 0.5vh 0; height: 100%; padding-left: $p-l-si; padding-right: $p-r-si; display: $dis; align-items: $al-it; justify-content: center; border: $border; border-top-left-radius: $radius;border-bottom-left-radius: $radius; border-right:none; background-color: $bkg;}
	.clear-icon{padding: 0.5vh 0 0.5vh 0; height: 100%; display: $dis; align-items: $al-it; justify-content: center;  border-top-right-radius: $radius;border-bottom-right-radius: $radius; border: $border; border-left:none; background-color: $bkg;}
	}
</style>
