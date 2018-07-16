// pages/info/info.js
var bmap = require('../../libs/bmap-wx.min.js');
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
  bindKeyInput: function (e) {
    var that = this;
    if (e.detail.value === '') {
      that.setData({
        sugData: ''
      });
      return;
    }
    var BMap = new bmap.BMapWX({
      ak: 'NEzez3lhB3KO6YvPWADjXpc6y4jYkb4Z'
    });
    var fail = function (data) {
      console.log(data)
    };
    var success = function (data) {
      var sugData = '';
      for (var i = 0; i < data.result.length; i++) {
        sugData = sugData + data.result[i].name + '\n';
      }
      that.setData({
        sugData: sugData
      });
    }
    BMap.suggestion({
      query: e.detail.value,
      region: '上海',
      city_limit: true,
      fail: fail,
      success: success
    });
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