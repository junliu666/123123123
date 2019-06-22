<template>
	<view class="tabbar-wrapper">
		<view v-for="(item, index) in tbt" :key="index" @click="changeActive">
			<view class="nav nav-active" :id="index" v-if="item.status == 'active'">
				<text class="text text-active" :id="index">{{ index }}</text>		
			</view>
			<view class="nav nav-unactive" :id="index" v-if="item.status == 'unactive'">
				<text class="text" :id="index">{{ index }}</text>					
			</view>
		
		</view>
	</view>
</template>

<script>
	export default {
		props: ["tabbarText"],
		data() {
			return {
				tbt: this.tabbarText
			};
		},
		onLoad() {
		},
		methods: {
			changeActive: function(e){
				var that = this
				let id = e.target.id
				var tbt = this.tbt;
				for(var key in tbt){
					if(key == id){
						tbt[key].status = "active"
					} else {
						tbt[key].status = "unactive"
					}
				}
				that.$emit("listenTabbar", id)
			}
		}
	}
</script>

<style lang="scss">
$obj: 100vw; $fs-normal: $obj * 0.032; $font-family: "微软雅黑"; $fc-active: rgb(244,120,43); $fc-unactive: rgb(6,6,6);
$pad: $fs-normal / 2;

button::after{
	border: 0;
}

page{ font-family: $font-family; background-color: white; padding: 0; margin:  0; border:0; outline: none;
	.tabbar-wrapper{display: flex; align-items: center; justify-content: space-around; border: 0; outline: none; width: 100%;
		.nav{font-size: $fs-normal;font-weight: bold;  outline: none; width: 100%; padding-top: $pad; padding-bottom: $pad;  background-color: white; text-align: center; height: 100; 
			.text{height: 100%; width: 100%;}
			.text-active{}
		} 
		.nav-active{color: $fc-active; border-bottom: 1px solid $fc-active; border-bottom: 2px solid $fc-active;}
		.nav-unactive{color: $fc-unactive;}
	}
}

</style>
