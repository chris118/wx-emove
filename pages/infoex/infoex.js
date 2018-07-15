// pages/infoex/infoex.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: "2018-07-01",
    duration: ["上午7:00-7:30", "中午10:00-12:30", "下午1:00-2:30"],
    duration_index: 0,
    invoice: ["是", "否"],
    invoice_index: 0,
  },
  bindDateChange: function (e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindDurationChange: function (e) {
    this.setData({
      duration_index: e.detail.value
    })
  },
  bindInvoiceChange: function (e) {
    this.setData({
      duration_index: e.detail.value
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
  onPrevious: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onNext: function (e) {
    // wx.navigateTo({
    //   url: '../infoex/infoex'
    // })
  }
})