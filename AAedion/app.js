//app.js
App({
  onLaunch: function() {
    wx.setStorageSync('delet', false)
  },
  globalData: {
    userInfo: null
  }
})