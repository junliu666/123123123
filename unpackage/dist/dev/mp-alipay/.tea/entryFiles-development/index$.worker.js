if(!self.__appxInited) {
self.__appxInited = 1;


require('./config$');


var AFAppX = self.AFAppX;
self.getCurrentPages = AFAppX.getCurrentPages;
self.getApp = AFAppX.getApp;
self.Page = AFAppX.Page;
self.App = AFAppX.App;
self.my = AFAppX.bridge || AFAppX.abridge;
self.abridge = self.my;
self.Component = AFAppX.WorkerComponent || function(){};
self.$global = AFAppX.$global;


function success() {
require('../..//app');
require('../../components/search-input');
require('../../components/shop-pickers');
require('../../components/shopdesc');
require('../../components/touxiang');
require('../../pages/index/index');
require('../../pages/order/order');
require('../../pages/mine/mine');
require('../../pages/index/invite/invite');
require('../../pages/index/env/env');
require('../../pages/order/shop/shop-info/shop-info');
require('../../pages/order/shop/prod-info/prod-info');
require('../../pages/order/shop/shop-comment/shop-comment');
require('../../pages/order/confirm/confirm/confirm');
require('../../pages/order/confirm/payment-result/payment-result');
require('../../pages/mine/profile/profile');
require('../../pages/mine/address-manage/address-manage');
require('../../pages/mine/partner/partner');
require('../../pages/mine/service/service');
require('../../pages/mine/aboutus/aboutus');
require('../../pages/index/location/location');
require('../../pages/reg/reg');
}
self.bootstrapApp ? self.bootstrapApp({ success }) : success();
}