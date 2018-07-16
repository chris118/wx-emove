// components/dropmenu/dropmenu.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    menu_data: { 
      type: Object,
      value: {},
      observer: function (newVal, oldVal) { } // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串, 如：'_propertyChange'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    openPicker: false,
    needAnimation: false,
    contentHeight: 0,
    selected_index: 0,
  },

  ready: function () { 
   
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onReady: function () {
    },

    onPickHeaderClick: function () {
      this.setData({
        openPicker: !this.data.openPicker,
        needAnimation: true
      })
    },
    menu_item_tap: function (e) {
      console.log(e.currentTarget.dataset.index)
      this.setData({
        openPicker: !this.data.openPicker,
        needAnimation: true,
        selected_index: e.currentTarget.dataset.index,
      })
    }
  },

})
