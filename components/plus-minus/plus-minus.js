// components/plus-minus/plus-minus.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '',
    }, 
    value: {
      type: Number,
      value: 0,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    inputValue: 0,
    showMinus: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    _onPlus: function(e) {
      this.setData({
        inputValue: this.data.inputValue + 1,
        showMinus: true,
      })
    },
    _onMinus: function (e) {
      this.setData({
        inputValue: this.data.inputValue - 1,
        showMinus: this.data.inputValue > 1,
      })
    }
  }
})
