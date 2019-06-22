<template>
	<view class="tag-wrapper">
		<view class="tag" v-for="(item, index) in text" :key="index">
			{{ item }}
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			text: {}
		},
		data() {
			return {
				
			};
		}
	}
</script>

<style lang="scss">
$obj: 100vw;
$h-tag: $obj * 0.041; $radius: $obj * 0.01; $font: $obj * 0.0373;
.tag-wrapper{height: $h-tag; border: 1px solid #FF0072; border-radius: $radius;color: #FF0072; font-size: $font;
	.tag{}
}
</style>
