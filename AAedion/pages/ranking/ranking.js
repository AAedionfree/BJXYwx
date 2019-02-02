// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ranklist:[]
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
  onShow: function () {
    var that=this
    var userinfo=wx.getStorageSync('userinfo')
    var id=userinfo.StuID
    console.log(id)
    var grade=id[0]+id[1]+""
    if(Number(grade)<15){
      grade=Number(grade)+5
      grade=grade+""
      //tostring
    }
    console.log(grade)
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/rank.php',
      data:{
        grade:grade
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success:function(res){
        console.log(res)
        var i,arr;
        if(res.data){
          arr = res.data
          for (i = 0; i < arr.length; i++) {
            arr[i].rank = i + 1;
          }
          that.setData({
            ranklist: arr
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

  }
})