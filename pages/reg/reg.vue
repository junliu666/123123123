<template>
	<view>

		
		<view class="reg-wrapper">
			<button type="primary" class="reg-button app-reg-button">微信一键注册</button>
			<button class="reg-button phone-reg-button" @click="phoneReg">手机注册</button>				
		</view>

		<view class="phone-reg-wrapper" v-if="phoneRegStat">
			<view class="phone-reg">
				<view class="phone-input-wrapper">
					手机号码<input type="phone" value="" class="phone-input" />
				</view>
				<view class="phone-verify-wrapper">
					验证码<input type="text" class="verify-input" /><button class="verify-button">获取验证码</button>
				</view>
				<view class="phone-reg-confirm">
					<button type="primary">注册</button>
				</view>
			</view>
		</view>

	</view>
	

</template>

<script>
	export default {
		data() {
			return {
				phoneRegStat: false
			};
		},
		onLoad() {
			
		},
		methods:{
			phoneReg:function(){
				this.phoneRegStat = true
			}
		}
	}
</script>

<style lang="scss">
$dis: flex; $flex-dir: column; $ali-ite: center; $jus-con: space-around;
$w-100: calc(100% - 2px) ; $w-90: calc(90% - 2px);
$border: 1px solid black; $head-margin-top: 1vh; $margin-top: 2vh;  $padding-top-bottom: 1vh 0 1vh 0;

.reg-wrapper{position: fixed; height: 100vh; width: 100vw;
	.reg-button{position: relative; background-color: goldenrod; margin-top: 10vh;}
}

.phone-reg-wrapper{position: absolute; width: 100%; height: 100%; background-color: rgba(124,124,124, 0.5);
	.phone-reg{position: fixed; display: $dis; flex-direction: $flex-dir; align-items: $ali-ite; justify-content: $jus-con; top: 20%; left: 10%;width: 80%; height: 40%; background-color: white; border: $border;
		.phone-input{border: $border}
		.verify-input{border: $border}
	}
}

</style>
