import awap from "./amap-wx.js"
var app = function(){
	var a = "a"
	var newAwap = new awap.AMapWX({key:'c1b7100505882e2a610dd85fc14798a3'});
	function getAddress(){
		console.log('a')
		newAwap.getRegeo({
			success: function(res){
				console.log(res);
			},
			fail: function(err){
				console.log(res);
			}
		})	
	}
}

module.exports = app