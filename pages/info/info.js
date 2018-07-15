// pages/info/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showTopTips: false,
    elevator_out: ["有", "无"],
    elevator_out_index: 0,
    assemble_out: ["需要", "不需要"],
    assemble_out_index: 0,
    elevator_in: ["有", "无"],
    elevator_in_index: 0,
    assemble_in: ["需要", "不需要"],
    assemble_in_index: 0,
  },
  bindElevatorOutChange: function (e) {
    this.setData({
      elevator_out_index: e.detail.value
    })
  },
  bindAssembleOutChange: function (e) {
    this.setData({
      assemble_out_index: e.detail.value
    })
  },
  bindElevatorInChange: function (e) {
    this.setData({
      elevator_in_index: e.detail.value
    })
  },
  bindAssembleInChange: function (e) {
    this.setData({
      assemble_in_index: e.detail.value
    })
  },
  next: function(e) {
    wx.navigateTo({
      url: '../goods/goods'
    })
  },
  showTopTips: function () {
    var that = this;
    this.setData({
      showTopTips: true
    });
    setTimeout(function () {
      that.setData({
        showTopTips: false
      });
    }, 3000);
  },
})