// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    categories: [],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let c = []
    for(let i = 0; i < 50; i++){
      c[i] = i
    }
    this.setData({
      categories:c,
    })
    console.log(this.data.categories)
  },
  onPrevious: function (e) {
    wx.navigateBack({
      delta: 1
    })
  },
  onNext: function(e) {
    wx.navigateTo({
      url: '../infoex/infoex'
    })
  }
})