<template>
	<view class="picker-wrapper">
			<picker mode="selector" :range="type" @change="typeChange" class="picker picker-aside">
				{{ typeSelect }}
			</picker>
			<picker mode="selector" :range="orderBy" @change="orderChange" class="picker picker-mid">
				{{ orderSelect }}
			</picker>
		
			<picker mode="multiSelector" :range="filterBy" @change="filterChage" @columnchange="filterColumnChange" class="picker picker-aside">
				{{ filterSelect }}
			</picker>
	</view>
</template>

<script scoped>
	export default {
		data() {
			return {
				type: ['取消分类','超市', '水果生鲜', '美食', '外卖', '娱乐', '健康', '家政', '物业'],
				orderBy: ['取消排序','距离优先', '人气优先', '好评优先'],
				filterBy: [['取消筛选','配送方式', '优惠'], ["取消筛选", "123"]],
				filterColunm: [0,0],
				typeSelect: '分类',
				orderSelect: '排序',
				filterSelect: '筛选'
			};
		},
		methods: {
			typeChange: function(e){
				let index = e.detail.value;
				let typeSelect = this.type[index];
				if(typeSelect == "取消分类"){
					typeSelect = "分类"
				}
				this.typeSelect = typeSelect;
			},
			orderChange: function(e){
				let index = e.detail.value;
				let orderSelect = this.orderBy[index];
				if(orderSelect == "取消排序"){
					orderSelect = "排序"
				}
				this.orderSelect = orderSelect;				
			},
			filterChage: function(e){
				let col = e.detail.value[0]
				let subCol = e.detail.value[1]
				let val = this.filterBy[1][subCol]
				this.filterSelect = val
			},
			filterColumnChange: function(e){
				var that = this
				let col = e.detail.column;
				let colIndex = e.detail.value;
				this.filterColunm[col] = colIndex;
				let val = this.filterBy[1]
				if(col == 0){
					if(colIndex == 0){
						val = ["取消过滤"];
					} else if (colIndex == 1){
						val = ["商家配送", "骑手配送", "到店自取"];
					} else {
						val = ["优惠卷", "减满", "红包"];
					}					
				}
				this.$set(this.filterBy, 1, val)
			}
		}
	}
</script>

<style lang="scss">
$dis: flex; $ali-item: center; $jus-con: space-between; $border: 1px solid black; 
.picker-wrapper{display: $dis; justify-content: $jus-con; align-items: $ali-item; width: 100vw; height: 100%; color: #777676;
	.picker{display: $dis; align-items: $ali-item; justify-content: center;height: 100%; width: 100%;}
	.picker-mid{border-right: 2px solid rgb(220, 220 ,220); border-left: 2px solid rgb(220, 220 ,220);}
}


</style>
