<template>
	<view>
		<view class="option">
			<view :class="data.des != '帮助中心' ? 'inside' : 'inside-2'">
				<view class="inside-inside">
					<view class="left">
						<view class="img-wrapper">
							<image class="img-first" :src="data.iconPath" mode=""></image>
						</view>
						<view class="description" >
							{{ data.des }}
						</view>						
					</view>
					<view class="right">
						<view class="right-icon">
							<image class="mine-go" src="../static/mine-go.png" mode=""></image>
						</view>					
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: ["data"],
		data() {
			return {
				dataFromMine: this.data
			};
		}
	}
</script>

<style lang="scss">
	$obj: 100vw;
	$h-option: $obj * 0.117;
	$w-inside: $obj * 0.868;
	$h-inside-inside: $obj * 0.042; 
	$h-inside-inside-2: $obj * 0.1;
	$w-go: $obj * 0.032; $h-go: $obj * 0.019;
	$mg-des: $obj * 0.0267;
	$fs-normal: $obj * 0.032; $fc-normal: rgb(106,105,105);
	$border-color: rgb(230,230,230);
	
.option{display: flex; align-items: center; justify-content: center; width: 100%; height: 14%;
	.inside{display: flex; flex-direction: column; align-items: center; justify-content: center; w-inside: $w-inside; height: 100%; border-bottom: 1px solid $border-color;
		.inside-inside{display: flex; justify-content: space-between; height: $h-inside-inside-2; width: $w-inside;
			.left{ display: flex; align-items: center; width: 100%; height: 100%;
				.img-wrapper{width: $h-inside-inside; height: $h-inside-inside; text-align: center; line-height: $h-inside-inside;
					.img-first{width: 100%; height: 100%;}
				}
				.description{margin-left: $mg-des; font-size: $fs-normal; color: $fc-normal;  text-align: center; line-height: $h-inside-inside; font-weight: bold;}
			}
			
		.right{ width:  $w-go;  height:  $w-go; margin-right: 0;
			.right-icon{width: $w-go; height: $h-go;
				.mine-go{width: 100%; height: 100%;}
			}
		}
		}
		}
		
		/* for bottom option */
	.inside-2{display: flex; flex-direction: column; align-items: center; justify-content: center; w-inside: $w-inside; height: 100%;
		.inside-inside{display: flex; justify-content: space-between; height: $h-inside-inside-2; width: $w-inside;
			.left{ display: flex; align-items: center; width: 100%; height: 100%;
				.img-wrapper{width: $h-inside-inside; height: $h-inside-inside; text-align: center; line-height: $h-inside-inside;
					.img-first{width: 100%; height: 100%;}
				}
				.description{margin-left: $mg-des; font-size: $fs-normal; color: $fc-normal;  text-align: center; line-height: $h-inside-inside; font-weight: bold;}
			}
			
		.right{ width:  $w-go;  height:  $w-go; margin-right: 0;
			.right-icon{width: $w-go; height: $h-go;
				.mine-go{width: 100%; height: 100%;}
			}
		}
		}
	}
	
}
</style>
