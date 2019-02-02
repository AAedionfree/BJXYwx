//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    PreviousPassword: "",
    new_code: "",
    new_code_again: "",
    showModal: false,
    clicklist: [{
        image: "../../src/changecode.jpg",
        content: "更改密码",
        tap: "button_changePW"
      },
      {
        image: "../../src/logout.jpg",
        content: "注销",
        tap: "button_logout"
      },
      {
        image: "../../src/about.jpg",
        content: "鸣谢",
        tap: "button_info"
      },
    ],
  },
  //----------------------------按键功能---------------------------------

  button_changePW: function() {
    //显示弹窗
    this.setData({
      showModal: true
    })
  },
  button_logout: function() {
    wx.showToast({
      title: '注销成功',
      icon: 'succes',
      duration: 1000,
      mask: true
    })
    wx.setStorageSync('delet', true)
    wx.reLaunch({
      url: '../start2/start2',
    })
  },
  button_info: function() {
    wx.redirectTo({
      url: '../about/about',
    })
  },
  // button_more: function() {
  //   wx.showToast({
  //     title: '更多功能',
  //     icon: 'succes',
  //     duration: 1000,
  //     mask: true
  //   })
  // },
  //---------------------------------------------------------------------
  inputPreviousPassword: function(e) {
    this.setData({
      PreviousPassword: e.detail.value
    })
  },
  inputNewPassword: function(e) {
    this.setData({
      new_code: e.detail.value
    })
  },
  inputNewPasswordAgain: function(e) {
    this.setData({
      new_code_again: e.detail.value
    })
  },

  change: function() {
    if (this.data.PreviousPassword === "") {
      wx.showModal({
        content: '原密码不能为空！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('原密码不能为空！')
      return;
    }
    if (this.data.new_code === "") {
      wx.showModal({
        content: '新密码不能为空！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('新密码不能为空！')
      return;
    }
    if (this.data.new_code_again === "") {
      wx.showModal({
        content: '再次输入新密码不能为空！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('再次输入新密码不能为空！')
      return;
    }
    if (this.data.new_code !== this.data.new_code_again) {
      wx.showModal({
        content: '两次密码输入不一致！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('两次密码输入不一致！')
      return;
    }
    /*
    if(this.data.PreviousPassword.length < 6){
      wx.showModal({
        content: '原密码长度至少为6位！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('原密码长度为' + this.data.PreviousPassword.length)
      return;
    }
    */
    if (this.data.new_code.length < 6) {
      wx.showModal({
        content: '新密码长度至少为6位！',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('新密码长度为' + this.data.new_code.length)
      return;
    }
    if (this.data.PreviousPassword === this.data.new_code) {
      wx.showModal({
        content: '新老密码不能完全一致',
        confirmText: '确定',
        showCancel: false,
      })
      console.log('原密码长度为' + this.data.PreviousPassword.length)
      return;
    }

    Loading: {
      wx.showLoading({
        title: '请等候',
      })
      setTimeout(function() {
        wx.hideLoading()
      }, 200)
    }
    console.log('send')
    var userinfo = wx.getStorageSync('userinfo')
    var id = userinfo.StuID
    var str = id[0]+id[1]+""
    var PreviousPassword = this.data.PreviousPassword;
    var new_code = this.data.new_code;
    var new_code_again = this.data.new_code_again;
    if(Number(str)<14){
      str=Number(str)+5;
    }
    console.log(str)
    console.log(id)
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/changeCode.php',
      data: {
        before_code: PreviousPassword,
        new_code: new_code,
        new_code_again: new_code_again,
        id: id,
        grade: str,
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function(res) {
        var t = res.data;
        console.log(res);
        if (t === "111") {
          wx.showToast({
            title: '修改成功',
            icon: 'succes',
            duration: 1000,
            mask: true
          })
          setTimeout(function () {
            wx.reLaunch({
              url: '../start2/start2',
            })
          }, 1500)
          return;
        }
        if (t === "10") {
          wx.showToast({
            title: '原密码错误',
            icon: 'none',
            duration: 1000,
            mask: true
          })
          return;
        }
        if (t === "0" || t === "110") {
          wx.showToast({
            title: '连接数据库错误',
            icon: 'none',
            duration: 1000,
            mask: true
          })
          return;
        }
      },
      fail: function(res) {
        wx.showModal({
          title: '网络异常',
          showCancel: false,
          confirmText: '确定'
        })
      }

    })
  },


  /**
   * 弹出框蒙层截断touchmove事件
   */
  preventTouchMove: function() {},
  /**
   * 隐藏模态对话框
   */
  hideModal: function() {
    this.setData({
      showModal: false
    });
  },
  /**
   * 对话框取消按钮点击事件
   */
  onCancel: function() {
    this.hideModal();
  },
  /**
   * 对话框确认按钮点击事件
   */
  onConfirm: function() {
    this.hideModal();
  }
})