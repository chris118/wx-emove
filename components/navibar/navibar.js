// components/navibar/navibar.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    nextTitle: {
      type: String,
      value: '下一步'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onPrevious: function () {
      this.triggerEvent('onPrevious', {}, {})
    },
    onNext: function () {
      this.triggerEvent('onNext', {}, {})
    }
  }
})
