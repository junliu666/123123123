<template>
	<view class="content">
		<view class="tabbar-wrapper">
			<tabbar :tabbarText="tabbarText" v-on:listenTabbar="ltb"></tabbar>
		</view>

		<view class="order-all" v-if="currentTabbar == '全部'">
			<orderall v-bind:orderall="orderAll"></orderall>
		</view>

		<view class="order-pay" v-if="currentTabbar == '待付款'">
			<orderpay v-bind:orderall="orderAll"></orderpay>
		</view>
	
		<view class="order-send" v-if="currentTabbar == '待发货'">
			<ordersend></ordersend>
		</view>
	
		<view class="order-get" v-if="currentTabbar == '待收货'">
			<orderget></orderget>
		</view>

		<view class="order-comment" v-if="currentTabbar == '待评价'">
			<ordercomment></ordercomment>
		</view>
	</view>	
</template>

<script>
	import tabbar from "@/components/tabbar.vue"
	import orderall from "@/components/orderall.vue"
	import ordersend from "@/components/ordersend.vue"
	import orderpay from "@/components/orderpay.vue"
	import orderget from "@/components/orderget.vue"
	import ordercomment from "@/components/ordercomment.vue"
	
	export default {
		data() {
			return {
				currentTabbar: "全部",
				orderAll: [],
				orderPay: [],
				orderSend: [],
				orderGet: [],
				orderComment: [],
				tabbarText: {
					"全部": {
						"status": "active",
						"number": 0
					},
					"待付款": {
						"status": "unactive",
						"number": 0
					},
					"待发货": {
						"status": "unactive",
						"number": 0
					},
					"待收货": {
						"status": "unactive",
						"number": 0
					},
					"待评价": {
						"status": "unactive",
						"number": 0
					}
				}
			}
		},
		components: {
			tabbar,
			orderall,
			ordercomment,
			orderget,
			orderpay,
			ordersend
		},
		onLoad() {
			this.getOrderAll()
		},
		methods: {
			arrayDiff: function(arrA, arrB){
				for(var i=0; i<arrA.length; i++){
					for(var j=0; j<arrB.length; j++){
						let value = arrA[i]
						if(arrB.indexOf(value) == -1){
							return "changed"
							break
						} else {
							if(i == arrA.length-1 && j == arrB.length-1){
								return "unchanged"
							}
						}
					}
				}
			},
			
			getOrderAll: function(){
				var that = this
				var contentAll = []
				uni.request({
					url: "http://127.0.0.1:3000/order",
					success(res) {
						for(var i=0; i<res.data.length; i++){
							contentAll.push(res.data[i])
						}
						console.log(contentAll);
						that.orderAll = contentAll
					}
				})
			},
			getOrderPay: function(){
				var that = this
				uni.request({
					url: "http://127.0.0.1:3000/order",
					success(res) {
					}
				})
			},
			getOrderSend: function(){
				var that = this
				uni.request({
					url: "http://127.0.0.1:3000/order",
					success(res) {
					}
				})
			},
			getOrderGet: function(){
				var that = this
				uni.request({
					url: "http://127.0.0.1:3000/order",
					success(res) {
					}
				})
			},
			getOrderComment: function(){
				var that = this
				uni.request({
					url: "http://127.0.0.1:3000/order",
					success(res) {
					}
				})
			},
			ltb: function(data){
				var that = this
				this.currentTabbar = data;
				switch(data){
					case "全部":
						that.getOrderAll();
						break;
					case "待付款":
						that.getOrderPay();
						break;
					case "待发货":
						that.getOrderSend();
						break;
					case "待收货":
						that.getOrderGet();
						break;
					case "待评价":
						that.getOrderComment();
						break;
				}
			}
		}
	}
</script>

<style lang="scss">
$font-family: "微软雅黑"; $object: 100vw; $fc-grey-1: #9C9A9A; $fc-pink: #FA133E; $fc-orange: #F4782B; $fc-grey-2: #626060; $fc-grey-3: #FF393838;
$bkc-page: rgb(245,245,248); $fs-normal: $object * 0.032;

page{background-color: $bkc-page; padding: 0; margin: 0;
	.tabbar-wrapper{width: 100vw;}
}


</style>
