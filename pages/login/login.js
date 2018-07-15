// pages/login/login.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    timeleft: '获取验证码',
  },
  login: function(e) {
    wx.navigateTo({
      url: '../info/info'
    })
  },
  verifyClick: function (event) {
    this.setData({
      timeleft: 5
    })
    let that = this
    let interval = setInterval(function () {
      console.log(that.data.timeleft)
      if (that.data.timeleft === 1) {
        clearInterval(interval);
        that.setData({
          timeleft: '获取验证码'
        })
      } else {
        that.setData({
          timeleft: that.data.timeleft - 1
        })
      }
    }, 1000)
  }
})