//index.js
//获取应用实例
const app = getApp()
Page({
  data: {
    clicklist:[
      { image: "../../src/zhszpj.png", content: "综合素质评价审核",tap:"button_evaluation"},
      { image: "../../src/hdbm.png", content: "已审核", tap: "button_more" },
      { image: "../../src/hdbm.png", content: "综合素质评价排名", tap: "button_rank"},
      { image: "../../src/sz.png", content: "设置",tap: "button_setting"}
    ],
    tempFilePath:[],
    motd_2:'欢迎来到北京学院学生服务平台管理端',
    userInfo: {},
    userinfo: wx.getStorageInfoSync('userinfo'),
    Name:'',
    now: 0, //当前上传数量
    lenth: 0,//上传数量
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //----------------------------按键功能---------------------------------
  
  upload: function (now){
    var that=this;
    console.log("lenth"+this.data.lenth)
    wx.uploadFile({
      header: {
        "Content-Type": "multipart/form-data"
      },
      url: 'https://www.bkntestbench.cn/shiyan.php',
      filePath: this.data.tempFilePath[now],
      formData: {
        ID: that.data.userinfo.StuID
      },
      name: 'file',
      success: function (res) {
        console.log(res);
      },
      fail: function(res){
        console.log("上传失败");
      }
    })
  },
  button_evaluation: function () {
    wx.navigateTo({
      url: '../auth/auth',
    })
  },
  button_setting: function () {
    wx.navigateTo({
      url: '../setting/setting',
    })
  },
  button_more: function () {
    wx.navigateTo({
      url: '../authed/authed',
    })
  },
  button_rank:function(){
    wx.navigateTo({
      url: '../ranking/ranking',
    })
  },
  //---------------------------------------------------------------------
  onShow: function () {
    var that = this;  
    this.setData({
      now: 0,
      lenth: 0,
      userInfo: wx.getStorageSync('userInfo'), //wx
      userinfo: wx.getStorageSync('userinfo'),
    })
    //console.log(typeof this.data.userinfo)
  },
  
  //滚动控制
  s2l: function (e) {
    console.log(e)
    this.setData({
      scrollTop:0
    })
  },
  sscroll:function(e) {
    console.log(e)
  }
})
