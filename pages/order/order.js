// pages/order/order.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  onPrevious: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onNext: function (e) {
    wx.navigateTo({
      // url: '../order/order'
    })
  }
})