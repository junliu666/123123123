<script>
	import getLocation from "@/js/get-location.js"
	
	export default {
		globalData: {
			width: '',
			height: ''
		},
		onLaunch: function() {
			var getL = new getLocation()
			console.log(getL);
			
			var that = this
			uni.getSystemInfo({
				success(res) {
					let height = res.screenHeight
					let width = res.screenWidth
					that.$options.globalData.width = width
					that.$options.globalData.height = height
				}
			})
		},
		methods:{
			getAreaInfo: function(){
				
			}
		},
		onShow: function() {
			
		},
		onHide: function() {
			
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
