<template>
	<view>
		<view class="img-wrapper">
			<image :src="src" mode="aspectFit" class="" ></image>
		</view>
		<view class="" ref="abc">
			<canvas canvas-id="myCanvas"></canvas>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				src: "../../../static/invite.png"
			}
		},
		onLoad() {

		},
		methods: {
			
		}
	}
</script>

<style>
.img-wrapper{width: 50vw; height: 50vw;}
</style>
