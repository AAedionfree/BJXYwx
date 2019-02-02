const app = getApp()
var utils = require('../../utils/util.js')
Page({
  // clickMe: function () {
  //   wx.navigateTo({
  //     url: '../post/post',
  //   })
  // },
  data: {
    showModal: false,
    //这里要做的项目数可能不止三个，希望中间层大哥们可以做成点击“添加新项目”选择以后就会多一个项目的效果
    clicklist: [],
    userinfo: '',
    score: 0,
    itemContent: [],
  },
  //用来添加新的项目，因此其实应该跳转到添加页，这里先设置成index使之不报错
  //add-items: function () {
  // wx.navigateTo({
  //url: '../index/index'

  //})
  //},
  //---------------------------------------------------------------------
  update:function(){
    this.onShow()
  },
  onShow: function() {
    var i, j;

    this.setData({
      userinfo: wx.getStorageSync('userinfo')
    })
    var that = this
    wx.request({
      method: "POST",
      url: 'https://www.bkntestbench.cn/find_student.php',
      data: {
        id: that.data.userinfo.StuID,
      },
      //dataType: JSON,
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      
      success: function(res) {
        var score = 0;
        if (res.data) {
          
          console.log(res);
          that.setData({
            clicklist: res.data
          })
          for (i = 0; i < that.data.clicklist.length; i++) {

            var item = utils.code2Item(that.data.clicklist[i].ItemCode);
            if (item != null) {
              var Item = item[1];
              for (j = 2; item[j] != '' && j < 5; ++j) {
                Item += ' ' + item[j];
              }
              var click=that.data.clicklist
              click[i].ItemName = Item
              click[i].recall_ready = false
              that.setData({
                clicklist: click
              })
            }

            if (that.data.clicklist[i].Status == 1 || that.data.clicklist[i].Status == "通过 Accepted") {
              score = utils.accAdd(score, Number(that.data.clicklist[i].ItemScore))
            }
            if (that.data.clicklist[i].Status == 2) {
              var temp = that.data.clicklist
              temp[i].Status = "审核中 In review",
                that.setData({
                  clicklist: temp,
                })
            }
            if (that.data.clicklist[i].Status == 0) {
              var temp = that.data.clicklist
              temp[i].Status = "驳回 Rejected",
                that.setData({
                  clicklist: temp,
                })
            }
            if (that.data.clicklist[i].Status == 1) {
              var temp = that.data.clicklist
              temp[i].Status = "通过 Accepted",
                that.setData({
                  clicklist: temp,
                })
            }
          }
        }
        else{
          that.setData({
            clicklist: [],
          })
        }
        that.setData({
          score: score
        })
      },
      fail: function(){
        wx.showModal({
          title: '请求失败',
          //content: res.data.msg,//从服务器获取错误信息
          showCancel: false, //不显示取消按钮
          confirmText: '确定'
        })
      }
    })
    //console.log(this.data.clicklist)
  },
  addnew: function() {
    wx.navigateTo({
      url: '../post/post',
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
  },
  /*撤回控制*/
  recall_r: function(e) {
    var id = e.currentTarget.id
    var temp=this.data.clicklist
    temp[id].recall_ready=true
    this.setData({
      clicklist:temp
    })
  },
  recall_n: function (e) {
    var id = e.currentTarget.id
    var temp = this.data.clicklist
    temp[id].recall_ready = false
    this.setData({
      clicklist: temp
    })
  },
  recall_y: function (e) {
    //页面设置
    var id = e.currentTarget.id
    var temp = this.data.clicklist
    temp[id].recall_ready = false
    this.setData({
      clicklist: temp
    })
    //js->php
    var that=this;
    var userinfo=wx.getStorageSync('userinfo')
    var stuid=userinfo.StuID
    console.log("学号 "+stuid)
    var itemcode=e.currentTarget.dataset.recall_item.ItemCode
    console.log(itemcode)
    wx.request({
      method:"POST",
      url: 'https://www.bkntestbench.cn/recall.php',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data:{
        id:stuid,
        itemcode:itemcode
      },
      success:function(res){
       console.log(res)
       if(res.data=="ok"){
         wx.showModal({
           title: '撤回成功',
           showCancel: false, //不显示取消按钮
           duration: 1500,
         })
         setTimeout(function () {
           wx.hideLoading()
           that.onShow()
         }, 1000)
       }
       else if(res.data=="already adjust"){
         wx.showModal({
           title: '该申请已被处理',
           showCancel: false, //不显示取消按钮
           duration: 1000,
         })
       }
      }
    })
  },
})