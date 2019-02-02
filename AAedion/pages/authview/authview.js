// authview.js
var utils = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    application: '',
    Credential: '',
    url: '',
    itemContent: ''
  },
  preview_img: function(e) {
    var that = this
    console.log(e)
    var now_src=e.currentTarget.dataset.url
    wx.previewImage({
      current: now_src,
      urls: that.data.Credential // 需要预览的图片http链接列表
    })
  },
  
  onShow: function() {
    //init
    var that = this
      var temp = wx.getStorageSync('this_application');
      console.log(temp)
      if(!temp){
        wx.showModal({
          title: '该申请已被撤回或网络未连接',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        }),
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        },1000)
      }
      this.setData({
        application: temp
      })
      var application = this.data.application;
      console.log(application);
      var str = this.data.application.Credential;
      if (str) {
        str = str.split("|");
        application.Credential = str;
      }
      if (!application.Comment) {
        application.Comment = "无";
      }
      //code to item
        var item = utils.code2Item(application.ItemCode);
        if (item != null) {
          var Item = item[0];
          for (var i = 1; item[i] != '' && i < 5; ++i) {
            Item += '>' + item[i];
          }
          this.setData({
            itemContent: Item
          })
        }
      else{
        this.setData({
          itemContent: application.ItemCode
        })
      }
      this.setData({
        application: application,
      })
    if (this.data.application.Credential){
      console.log(this.data.application.Credential)
      var base = 'http://www.bkntestbench.cn/photo/';
      var id = this.data.application.StuID
      var temp = [];
      var now = 0;
      for (var i = 0; i < this.data.application.Credential.length; ++i) {
        temp[i] = base + id + "/" + this.data.application.Credential[i];
        //console.log(temp[i])
        var Credential1 = this.data.application.Credential;
        Credential1[i] = temp[i];
        this.setData({
          Credential: Credential1
        })
      }
      console.log(this.data.Credential)
    }
  },
  
  reject: function(e) {
    console.log(e)
    var userinfo=wx.getStorageSync('userinfo')
    userinfo=userinfo.StuID
    var id = e.currentTarget.id
    var code = e.currentTarget.dataset.code
    wx.request({
      url: 'https://www.bkntestbench.cn/adjust.php',
      data: {
        id: id,
        adjust_name: userinfo,
        code: code,
        adjust: 0
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res)
        wx.navigateBack({
          delta: 1
        })
      },
      fail: function () {
        wx.showModal({
          title: '发送请求失败',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
      }
    })
  },
  accept: function(e) {
    console.log(e)
    var userinfo = wx.getStorageSync('userinfo')
    userinfo = userinfo.StuID
    var id = e.currentTarget.id
    var code = e.currentTarget.dataset.code
    console.log(code)
    wx.request({
      url: 'https://www.bkntestbench.cn/adjust.php',
      data: {
        id: id,
        adjust_name: userinfo,
        code: code,
        adjust: 1
      },
      method: "POST",
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res)
        if(res.data=="already adjust"){
          wx.showToast({
            title: '此条申请已被审批或已被插销',
            icon:'none'
          })
        }
        setTimeout(function(){
          wx.navigateBack({
            delta: 1
          })
        },1000)
      },
      fail: function () {
        wx.showModal({
          title: '发送请求失败',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
      }
    })
  }
})