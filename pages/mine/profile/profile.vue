<template>
	<view>
		<canvas canvas-id="qrcode"></canvas>
<view class="qrimg">
    <tki-qrcode
    ref="qrcode"
    :val="val"
    :size="size"
    :unit="unit"
    :background="background"
    :foreground="foreground"
    :pdground="pdground"
    :icon="icon"
    :iconSize="iconsize"
    :lv="lv" 
    :onval="onval"
    :loadMake="loadMake"
    :usingComponents="usingComponents"
    :showLoading="showLoading"
    :loadingText="loadingText"
    @result="qrR" />
</view>
	</view>
</template>

<script>	
	import touxiangCanvas from "@/js/touxiang-canvas.js"
	import tkiQrcode from "@/node_modules/tki-qrcode/components/tki-qrcode/tki-qrcode.vue"

	export default {
		components:{
			tkiQrcode
		},
		data() {
			return {
				
			}
		},
		methods: {
			
		},
		onLoad(options) {
			let a = uni.createCanvasContext("touxiang")
			touxiangCanvas.drawCanvas(a)
		}
	}
</script>

<style>

</style>
