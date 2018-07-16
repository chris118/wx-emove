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
    showSearchLocation: false,
    locations: [],
    searchPlaceholder:'',
    inputValue: '',
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
  bindOutAddressTap: function (e) {
    this.setData({
      showSearchLocation: true,
      searchPlaceholder: "请在此填写您的搬出地址",
    })
  },
  bindInAddressTap: function (e) {
    this.setData({
      showSearchLocation: true,
      searchPlaceholder: "请在此填写您的搬入地址",
    })
  },
  next: function(e) {
    wx.navigateTo({
      url: '../goods/goods'
    })
  },
  cancel: function(e) {
    this.setData({
      inputValue: '',
      locations: [],
      showSearchLocation: false,
    })
  },
  bindKeyInput: function (e) {
    var that = this;
    this.setData({
      inputValue: e.detail.value
    })
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
      console.log(data.result)
      that.setData({
        locations: data.result
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