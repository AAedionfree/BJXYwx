var utils = require('../../utils/util.js')
// auth.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authlist:[]
  },
  to_auth: function(e){
      console.log(e)
      var that=this
      var id=e.currentTarget.id
      var itemcode=e.currentTarget.dataset.code
      wx.setStorageSync('this_id',id)
      console.log(id)
      wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/find.php',
      data: {
        id: id,
        code:itemcode
      },
      //dataType: JSON,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        wx.setStorageSync('this_application',res.data)
        setTimeout(function () {
          //wx.hideLoading()
          wx.navigateTo({
            url: '../authview/authview',
          })
        }, 100)
      },
      fail: function () {
          wx.showModal({
            title: '请求失败 请检查网络连接',
            //content: res.data.msg,//从服务器获取错误信息
            showCancel: false, //不显示取消按钮
            confirmText: '确定'
          })
        }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  refresh:function(){
    this.onShow()
  },
  onShow: function () {
    var that=this
    var userinfo=wx.getStorageSync('userinfo')
    var id = userinfo.StuID.substr(0, 2);
    console.log(userinfo)
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/allfind.php',
      data: {
        id: id,
      },
      //dataType: JSON,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        console.log(res)
        if(res.data){
          var authlist = res.data
          var i;
          var j;
          var application = [];
          var count = 0;
          for (i = 0; i < authlist.length; i++) {
            if (authlist[i].Status == 2) {
              application.push(authlist[i])
              if (application[count].ItemCode.length == 5 || application[count].ItemCode.length == 6) {
                var item = utils.code2Item(application[count].ItemCode);
                if (item != null) {
                  var Item = item[1];
                  for (j = 2; item[j] != '' && j < 5; ++j) {
                    Item += '>' + item[j];
                  }
                  application[count].ItemName = Item
                }
              }
              count = count + 1
            }
          }
          console.log(application)
          that.setData({
            authlist: application
          })
        }
        else{
          that.setData({
            authlist: []
          })
        }
      },
      fail: function(){
        wx.showModal({
          title: '加载失败',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})