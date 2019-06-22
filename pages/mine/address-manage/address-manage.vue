<template>
	<view>
		<view class="">
			<block class="" v-for="(item, index) in userAddress" :key="index">
				<view class="">
					{{ item.address }}
				</view>
			</block>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			var that = this
			uni.request({
				url: "http://127.0.0.1:5252/address",
				success(res) {
					that.userAddress = res.data
					console.log(that.userAddress)
				}
			})
		},
		data() {
			return {
				userAddress: ''
			}
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
