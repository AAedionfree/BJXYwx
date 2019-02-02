//获取应用实例
var app = getApp()
var utils = require('../../utils/util.js')
Page({
  data: {
    username: "",
    password: "",
    att: '',
    print: true,
  },
  onLoad(options) {
    // console.log('onLoad')
    // console.log(this.data.checkbox)
  },
  //监听用户名输入
  UsernameInput: function(e) {
    this.setData({
      username: e.detail.value
    })
  },
  //监听密码输入
  PasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    })
  },

  //授权 并  登录微信
  onShow: function() {
    wx.setStorageSync('problem', true)
    var delet = wx.getStorageSync('delet')
    if (delet) {
      this.setData({
        username: "",
        password: "",
      })
      wx.setStorageSync('delet', false)
      wx.setStorageSync('login', false)
      wx.setStorageSync('problem', true)
    }
    var t = wx.getStorageSync('login')
    var that = this;
    this.setData({
      att: false
    })
    if (t) {
      wx.setStorageSync('problem', false)
    }
  },

  bindGetUserInfo: function(e) {
    console.log(e)
    wx.setStorageSync('userInfo', e.detail.userInfo)
    var that = this;
    if (!e.detail.userInfo) {
      console.log('拒绝')
      wx.showToast({
        title: '授权失败',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
      return;
    }

    var t = wx.getStorageSync('login')
    console.log(t)
    if (t) {

      wx.showToast({
        title: '你已经授权了',
        icon: 'succes',
        duration: 1000,
        mask: true
      })

      return;
    } else {
      console.log(t)
      //发送授权信息
      /*      wx.request({
              method:'POST',
              url: 'https://www.bkntestbench.cn/saveAvatar.php',
              data:{
                avatar:e.detail.userInfo.avatarUrl,
              },
              header: {
                'content-type': 'application/x-www-form-urlencoded'
              },
              success: function (res){
                  console.log(res.data)
              }
            })
      */
      wx.showToast({
        title: '授权成功',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
      that.setData({
        hasUserInfo: true,
        att: true,
      })
      wx.setStorageSync('avatar', e.detail.userInfo.avatarUrl)
      wx.setStorageSync('login', true)
      wx.setStorageSync('problem', false)
    }
  },

  //登录点击事件
  button_login: function() {
    var username = this.data.username;
    var passwords = this.data.password;
    //var checkbox = this.data.checkbox;
    var that = this;
    if (username === "") {
      wx.showModal({
        content: '学号不能为空！',
        showCancel: false,
        confirmText: '确定'
      })
      console.log('学号不能为空！')
      wx.setStorageSync('problem', true)
      return;
    }
    if (passwords === "") {
      wx.showModal({
        title: '请输入密码！',
        content: '密码不能为空！',
        showCancel: false, //不显示取消按钮
        confirmText: '确定'
      })
      console.log('密码不能为空！')
      wx.setStorageSync('problem', true)
      return;
    }
    var temp = wx.getStorageSync('problem')
    if (temp) {
      wx.showToast({
        title: '请先授权',
        icon: 'succes',
        duration: 1000,
        mask: true
      })
      return;
    }
    var avatar = wx.getStorageSync('avatar')
    //加载提示框
    var grade = username.substr(0, 2);
    console.log(grade)
    //console.log(username),
    //console.log(passwords),
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/login.php',
      data: {
        username: username,
        avatar: avatar,
        password: passwords,
        grade: grade
      },
      //dataType: JSON,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        console.log(res);
        if (res.data === false) {
          wx.showModal({
            title: '登录失败 账号或密码错误',
            showCancel: false, //不显示取消按钮
            confirmText: '确定'
          })
          return;
        }
        if (res.data === 0 || res.data == "error") {
          console.log("error")
          wx.showModal({
            title: '连接数据库失败 请联系管理员',
            showCancel: false, //不显示取消按钮
            confirmText: '确定',
            duration: 1000,
          })
          return;
        }
        if (res.data) {
          if (res.data.WXlogo) {
            wx.setStorageSync('userinfo', res.data)
          }
          Loading: {
            wx.showLoading({
              title: '登录中...',
            })
            if (grade < 15) {
              setTimeout(function() {
                wx.hideLoading()
                wx.redirectTo({
                  url: '../authindex/authindex',
                })
              }, 500)
            } 
            else {
                wx.redirectTo({
                  url: '../index/index',
                })
            }
          }
        }
      },
      fail: function(res) {
        wx.showModal({
          title: '登录失败',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
      }
    })
  },

  // Help
  tapHelp: function (e) {
    if (e.target.id == 'help') {
      this.hideHelp();
    }
  },
  showHelp: function (e) {
    this.setData({
      'help_status': true
    });
  },
  hideHelp: function (e) {
    this.setData({
      'help_status': false
    });
  }
})