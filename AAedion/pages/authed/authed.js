// pages/authed/authed.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authtype:"全部",
    view_mode:"2",
    authlist:[]
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
    this.onShow();
  },
  onShow: function () {
    var that=this
    var userinfo=wx.getStorageSync('userinfo')
    console.log(userinfo)
    var id=userinfo.StuID
    var grade=id[0]+id[1]+""
    //real grade
    if(Number(grade)<14){
      id = Number(grade) + 5
    }
    else{
      id=grade;
    }
    console.log(id)
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/already_deal.php',
      data: {
        id: id,
      },
      //dataType: JSON,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        if (res.data) {
          var authlist = res.data
          var i;
          var j;
          var application = [];
          var count = 0;
          for (i = 0; i < authlist.length; i++) {
              application.push(authlist[i])
              var item = utils.code2Item(application[i].ItemCode);
              if (item != null) {
                var Item = item[1];
                for (j = 2; item[j] != '' && j < 5; ++j) {
                  Item += '>' + item[j];
                }
                application[i].ItemName = Item
              }
          }
          console.log(application)
          that.setData({
            authlist: application
          })
        }
        else {
          that.setData({
            authlist: []
          })
        }
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

  },

  switch_mode: function(){
    console.log(this)
    if(this.data.authtype=="全部"){
      this.setData({
        authtype: "已通过",
        view_mode: "0"
      })
    }
    else if (this.data.authtype == "已通过") {
      this.setData({
        authtype: "已驳回",
        view_mode: "1"
      })
    }
    else{
      this.setData({
        authtype: "全部",
        view_mode: "2"
      })
    }
  },
})