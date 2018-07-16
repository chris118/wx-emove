// pages/vehicle/vehicle.js
Page({
  data: {
    vehicles: [1,2,3,4,5],
  },

  onLoad: function () {

  },
  onPrevious: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onNext: function (e) {
    wx.navigateTo({
      // url: '../vehicle/vehicle'
    })
  }
})