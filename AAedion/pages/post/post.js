var utils = require('../../utils/util.js')
Page({
  data: {
    imagelist:[],
    multiArray: [['德育类', '体育类', '智育类'], ['参加院校活动', '获得先进称号', '担任社会工作'], ['校级各种先进集体答辩', '院级各种先进集体答辩', '学院“我的班级我的家”-上学期', '学院“我的班级我的家”-下学期', '校艺术团成员', '对学校、学院国际化工作有突出贡献', '各类竞赛', '志愿者'], ['辩手', '主要答辩材料准备者', '辩手+主要答辩材料准备者'], []],
    multiIndex: [0, 0, 0, 0, 0],
    str_code:"",
    now: 0, //当前上传数量
    lenth: 0,//上传数量
    tempFilePath: [],
    userinfo:[],
    send_image:0,
    comment:"",
    score:"",
    select:0
  },
  CommentInput: function (e) {
    this.setData({
      comment: e.detail.value
    })
  },
  onShow: function(){
    //init
      var all_item=wx.getStorageSync('all_item')
      if(!all_item){
        wx.setStorageSync('all_item')
      }
      var score1=utils.itemscore("00000")
      console.log(score1)
      if(!this.data.select){
        this.setData({
          str_code: "00000",
          score:score1,
          userinfo: wx.getStorageSync('userinfo')
        })
      }
  },

  send: function(e){
      var i;
      var that = this
      var code=this.data.str_code
      var userinfo=wx.getStorageSync('userinfo')
      var name = userinfo.Name
      var Class=userinfo.Class
      var comment=this.data.comment
      var t=0
      var str_code = '';
      var temp;
      for (i = 0; i < 5; i++) {
        temp = "" + this.data.multiIndex[i];
        str_code = str_code + temp
      }
      this.setData({
        str_code: str_code,
        select: 1,
      })
      userinfo=userinfo.StuID
      console.log(name)
      console.log(userinfo)
      console.log(code)
      wx.request({
        method: "POST",
        url: 'https://www.bkntestbench.cn/application.php',
        data: {
          id: userinfo,
          code: str_code,
          name: name,
          Class: Class,
          comment: comment
        },
        //dataType: JSON,
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          console.log(res)

          if(that.data.send_image && res.data == "all right"){
            for (i = that.data.now; i < that.data.lenth; i++) {
              that.upload(i);
            }
            wx.showModal({
              title: '上传成功，请耐心等待审核结果',
              showCancel: false, //不显示取消按钮
              duration: 1500,
            })
            t=1
          }
          if (t == 0 && res.data == "all right"){
            wx.showModal({
              title: '申请成功，请耐心等待审核结果',
              showCancel: false, //不显示取消按钮
              duration: 1500,
            })
          }
          if (res.data == " already exit this itemcode") {
            console.log("1")
            wx.showModal({
              title: '不要重复申请鸭',
              showCancel: false, //不显示取消按钮
              duration: 1500,
            })
          }
          that.setData({
            select:0
          })
          setTimeout(function () {
            wx.hideLoading()
            wx.navigateBack({
              delta:1
            })
          }, 1500)
        }
      })
  },
  //生成选项编码
  bindMultiPickerChange: function (e) {
    var str_code = '';
    var i = 0;
    var temp;
    for (i = 0; i < 5; i++) {
      temp = ""+this.data.multiIndex[i];
      str_code = str_code + temp
    }
    var score=utils.itemscore(str_code)
    this.setData({
      str_code:str_code,
      score:score,
      select:1,
    })
    console.log(this.data.str_code)
  },

  //上传图片
  up_image: function () {
    var that = this;
    var i;
    that.setData({
      now: 0,
      lenth: 0,
    })
    wx.chooseImage({
      count: 9,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function (res) {
        console.log(res)
        that.setData({
          tempFilePath: res.tempFilePaths,//多张 数组
          imagelist: res.tempFilePaths,
          lenth: res.tempFilePaths.length,
          now: 0,
          send_image:1,
        })
        console.log(that.data.tempFilePath)
        console.log(that.data.lenth)
        console.log(that.data.now)
      },
    })
  },

  preview: function(e){
    var that=this
    console.log(e)
    wx.previewImage({
      current: that.data.tempFilePath[0],
      urls: that.data.tempFilePath// 需要预览的图片http链接列表
    })
  },
  upload: function (now) {
    var that = this;
    console.log("lenth" + this.data.lenth)
    wx.uploadFile({
      header: {
        "Content-Type": "multipart/form-data"
      },
      url: 'https://www.bkntestbench.cn/saveimage.php',
      filePath: this.data.tempFilePath[now],
      formData: {
        ID: that.data.userinfo.StuID,
        code: that.data.str_code
      },
      name: 'file',
      success: function (res) {
        console.log(res);
      },
      fail: function (res) {
        console.log("上传失败");
      }
    })
  },
  //合并存储
  /*
  save_avatar: function(){
      var that=this
      console.log(this.data.tempFilePath.length)
      var len = this.data.tempFilePath.length
      var i,str_all=this.data.tempFilePath[0];
      for(i=1;i<len;i++){
        str_all=str_all+"|"+this.data.tempFilePath[i];
      }
      console.log(str_all)
      //拆分
      
      var str=str_all.split("|");
      for(i=0;i<str.length;i++){
        console.log(str[i])
      }
      
      wx.request({
        url: 'https://www.bkntestbench.cn/save_all_image.php',
        method:'POST',
        data:{
          str_all:str_all,
          code: that.data.str_code
        },
        header: {
          'content-type': 'application/x-www-form-urlencoded'
        },
        success: function(res){
          console.log(res)
        }
      })
  },
*/

  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      //改变第一列时
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['参加院校活动', '获得先进称号', '担任社会工作'];
            data.multiArray[2] = ['校级各种先进集体答辩', '院级各种先进集体答辩', '学院“我的班级我的家”-上学期', '学院“我的班级我的家”-下学期', '校艺术团成员', '对学校、学院国际化工作有突出贡献', '各类竞赛', '志愿者'];
            data.multiArray[3] = ['辩手', '主要答辩材料准备者', '辩手+主要答辩材料准备者'];
            data.multiArray[4] = [];
            break;
          case 1:
            data.multiArray[1] = ['参加体育比赛', '担任体育职务'];
            data.multiArray[2] = ['个人', '集体'];
            data.multiArray[3] = ['全国高校比赛', '部，市高校比赛', '校级比赛', '院级比赛'];
            data.multiArray[4] = ['第1名', '第2名', '第3名', '第4名', '第5名', '第6名', '第7名', '第8名', '无名次'];
            break;
          case 2:
            data.multiArray[1] = ['参加各级各类科技竞赛、学科竞赛、创新创业计划', '发表高水平学术成果', '参加校外英语能力测试'];
            data.multiArray[2] = ['“挑战杯”全国大学生课外学术科技作品竞赛', '全国大学生电子设计竞赛', '全国大学生电子设计竞赛（嵌入式专题邀请赛）', '全国大学生信息安全竞赛', '全国电子专业人才设计与技能大赛(蓝桥杯)', '“挑战杯”全国大学生创业计划大赛', '全国大学生电子设计竞赛（北京赛区）', '全国电子专业人才设计与技能大赛（蓝桥杯北京赛区）', '北京市大学生电子设计竞赛(EDA)', '首都挑战杯课外学术科技作品竞赛', '首都挑战杯大学生创业大赛', '“冯如杯”学生学术科技作品竞赛（制作类）', '“冯如杯”学生学术科技作品竞赛（自然科学类论文）', '“冯如杯”学生学术科技作品竞赛（社会科学类论文）', '“冯如杯”学生创业计划竞赛', '“冯如杯”学生创意大赛', '北航电子创新大赛（创新作品类）', '北航电子创新大赛（创意论文类）', '北航电子创新大赛（创业作品类）', '美国大学生数学建模竞赛', '全国大学生数学竞赛(决赛)', '全国大学生数学竞赛(预赛)', '全国部分地区大学生物理竞赛(非物理类A组)', '全国大学生英语竞赛', '全国大学生数学建模竞赛', '北航数学竞赛', '北航物理竞赛', '国家创新计划(大创)', '北航SRTP', '“冯如”学生创新计划'];
            data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖','成功参赛奖'];
            data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        data.multiIndex[3] = 0;
        data.multiIndex[4] = 0;
        break;
      //改变第二列时
      case 1:
        switch (data.multiIndex[0]) {
          //德育类
          case 0:
            switch (data.multiIndex[1]) {
              //第二列第1项 参加院校活动
              case 0:
                data.multiArray[2] = ['校级各种先进集体答辩', '院级各种先进集体答辩', '学院“我的班级我的家”-上学期', '学院“我的班级我的家”-下学期', '校艺术团成员', '对学校、学院国际化工作有突出贡献', '各类竞赛', '志愿者'];
                data.multiArray[3] = ['辩手', '主要答辩材料准备者', '辩手+主要答辩材料准备者'];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
              //第二列第2项 获得先进称号
              case 1:
                data.multiArray[2] = ['集体获得先进称号', '集体获得优秀社会实践队称号', '个人获得先进称号'];
                data.multiArray[3] = ['北京市十佳班级体', '其他市级以上（含市级）先进班级体', '校先进班级体', '校级优良学风班', '校级体育先进班', '宿舍文明班', '标兵（优秀）团支部', '文明宿舍'];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
              //第二列第3项 担任社会工作
              case 2:
                data.multiArray[2] = ['校学生会、社团联合会部长级（不含部长）以上学生干部，半脱产学生干部（学生处认证为准）', '校学生会、社团联合会部长级（含执行部长）学生干部，校党校总干事，学院学生会主席、执行主席、梦拓主管代表', '校学生会、社团联合会副部长级学生干部，学院学生会副主席、执行副主席及各部部长，学生社团社长，沙河校区学生发展服务中心助理、校团委见习半脱产学生干部（以学生处、团委认定为准），校党校总干事助理、各部部长，大班长，大班团支书，党支部书记', '学院学生会各部副部长、执行副部长，梦拓组长，校党校副部长级学生干部，校团校各类学生干部，大班班委、小班长、小班团支书，党支部支部委员', '院党校大班长及其他同级别学生干部，小班班委，院党校各部部长副部长、小班长，学院学生会各部优秀干事', '《北航》校报、《北航青年》、学生电视台、学生广播等校级学生宣传阵地的主要学生编辑，记者及其他工作人员，院级刊物主要编辑'];
                data.multiArray[3] = [];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
            }
            break;
          //体育类
          case 1:
            switch (data.multiIndex[1]) {
              //第二列第1项
              case 0:
                data.multiArray[2] = ['个人', '集体'];
                data.multiArray[3] = ['全国高校比赛', '部，市高校比赛', '校级比赛','院级比赛'];
                data.multiArray[4] = ['第1名', '第2名', '第3名', '第4名', '第5名', '第6名', '第7名', '第8名', '无名次'];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
              //第二列第2项
              case 1:
                data.multiArray[2] = ['校级各训练队队长（以校体育部认定为准）', '院级各体育部负责人'];
                data.multiArray[3] = [];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
            }
            break;
          //智育类
          case 2:
            switch (data.multiIndex[1]) {
              //第二列第1项
              case 0:
                data.multiArray[2] = ['“挑战杯”全国大学生课外学术科技作品竞赛', '全国大学生电子设计竞赛', '全国大学生电子设计竞赛（嵌入式专题邀请赛）', '全国大学生信息安全竞赛', '全国电子专业人才设计与技能大赛(蓝桥杯)', '“挑战杯”全国大学生创业计划大赛', '全国大学生电子设计竞赛（北京赛区）', '全国电子专业人才设计与技能大赛（蓝桥杯北京赛区）', '北京市大学生电子设计竞赛(EDA)', '首都挑战杯课外学术科技作品竞赛', '首都挑战杯大学生创业大赛', '“冯如杯”学生学术科技作品竞赛（制作类）', '“冯如杯”学生学术科技作品竞赛（自然科学类论文）', '“冯如杯”学生学术科技作品竞赛（社会科学类论文）', '“冯如杯”学生创业计划竞赛', '“冯如杯”学生创意大赛', '北航电子创新大赛（创新作品类）', '北航电子创新大赛（创意论文类）', '北航电子创新大赛（创业作品类）', '美国大学生数学建模竞赛', '全国大学生数学竞赛(决赛)', '全国大学生数学竞赛(预赛)', '全国部分地区大学生物理竞赛(非物理类A组)', '全国大学生英语竞赛', '全国大学生数学建模竞赛', '北航数学竞赛', '北航物理竞赛', '国家创新计划(大创)', '北航SRTP', '“冯如”学生创新计划'];
                data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
              //第二列第2项
              case 1:
                data.multiArray[2] = ['本专业SCI学术论文', '本专业EI学术论文', '本专业核心刊物学术论文', '非本专业SCI学术论文', '非本专业EI学术论文', '非本专业核心刊物学术论文', '发明专利', '实用新型专利','外观设计专利'];
                data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
              //第二列第3项
              case 2:
                data.multiArray[2] = ['TOEFL', 'IELTS', 'GRE'];
                data.multiArray[3] = ['105以上','90~104(含90)'];
                data.multiArray[4] = [];
                data.multiIndex[2] = 0;
                data.multiIndex[3] = 0;
                data.multiIndex[4] = 0;
                break;
            }
            break;
        }

      //改变第三列时
      case 2:
        switch (data.multiIndex[0]) {
          //德育类
          case 0:
            switch (data.multiIndex[1]) {
              //参加院校组织
              case 0:
                switch (data.multiIndex[2]) {
                  //校级各种先进集体答辩
                  case 0:
                    data.multiArray[3] = ['辩手', '主要答辩材料准备者', '辩手+主要答辩材料准备者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //院级各种先进集体答辩
                  case 1:
                    data.multiArray[3] = ['辩手', '主要答辩材料准备者', '辩手+主要答辩材料准备者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 2:
                    data.multiArray[3] = ['A级', 'B级', 'C级'];
                    data.multiArray[4] = ['参与者', '班长'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 3:
                    data.multiArray[3] = ['A级', 'B级', 'C级'];
                    data.multiArray[4] = ['参与者', '班长'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 4:
                    data.multiArray[3] = [];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 5:
                    data.multiArray[3] = [];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 6:
                    data.multiArray[3] = ['市级', '校级', '院级'];
                    data.multiArray[4] = ['一等奖', '二等奖', '三等奖', '集体奖', '未取得名次'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  case 7:
                    data.multiArray[3] = ['大型活动和赛事志愿者', '其他志愿者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
                break;
              //获得先进称号
              case 1:
                switch (data.multiIndex[2]) {
                  //集体获得先进称号
                  case 0:
                    data.multiArray[3] = ['北京市十佳班级体', '其他市级以上（含市级）先进班级体', '校先进班级体', '校级优良学风班', '校级体育先进班', '宿舍文明班', '标兵（优秀）团支部', '文明宿舍'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //集体获得优秀社会实践队称号
                  case 1:
                    data.multiArray[3] = ['暑假社会实践', '寒假社会实践'];
                    data.multiArray[4] = ['市级以上（含）', '校级一等奖', '校级二等奖', '校级三等奖', '校级优秀团队','优秀成果'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //个人获得先进称号
                  case 2:
                    data.multiArray[3] = ['三好学生、优秀学生干部、优秀团员、优秀团干部、优秀党员', '军训优秀学员、校党校优秀学员、校党校实践先进个人', '院党校优秀学员、院党校实践先进个人', '优秀志愿者', '社会实践先进个人', '特殊荣誉称号、优秀事迹表彰'];
                    data.multiArray[4] = ['市级以上（含）', '校级', '院级'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
                break;
              //担任社会工作
              case 2:
                break;
            }
            break;
          //体育类
          case 1:
            switch (data.multiIndex[1]) {
              //参加体育比赛
              case 0:
                switch (data.multiIndex[2]) {
                  //个人
                  case 0:
                    data.multiArray[3] = ['全国高校比赛', '部，市高校比赛', '校级比赛','院级比赛'];
                    data.multiArray[4] = ['第1名', '第2名', '第3名', '第4名', '第5名', '第6名', '第7名', '第8名', '无名次'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //集体
                  case 1:
                    data.multiArray[3] = ['校级及以上三大球甲级比赛', '校级及以上其他集体项目', '院级比赛'];
                    data.multiArray[4] = ['第1名-主力', '第1名-非主力', '第2名-主力', '第2名-非主力', '第3名-主力', '第3名-非主力', '无名次-主力','无名次-非主力'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
            }
            break;

          //智育类
          case 2:
            switch (data.multiIndex[1]) {
              //各类竞赛、创新创业计划
              case 0:
                switch (data.multiIndex[2]) {
                  //挑战杯全国大学生课外学术科技作品竞赛
                  case 0:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生电设
                  case 1:
                    data.multiArray[3] = ['一等奖', '二等奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生电设（嵌入式）
                  case 2:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生信息安全竞赛
                  case 3:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国电子专业人才设计与技能大赛（蓝桥杯）
                  case 4:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //“挑战杯”全国大学生创业计划大赛
                  case 5:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生电子设计竞赛（北京赛区）
                  case 6:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国电子专业人才设计与技能大赛（蓝桥杯北京赛区）
                  case 7:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北京市大学生电子设计竞赛（EDA）
                  case 8:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //首都挑战杯课外学术科技作品竞赛
                  case 9:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //首都挑战杯大学生创业大赛
                  case 10:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //“冯如杯”学生学术科技作品竞赛（制作类）
                  case 11:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                    //“冯如杯”学生学术科技作品竞赛（自然科学类论文）
                  case 12:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                    //“冯如杯”学生学术科技作品竞赛（社会科学类论文）
                  case 13:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //“冯如杯”学生创业计划竞赛
                  case 14:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //“冯如杯”学生创意大赛
                  case 15:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航电子创新大赛（创新作品类）
                  case 16:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航电子创新大赛(创意论文类)
                  case 17:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航电子创新大赛（创业作品类）
                  case 18:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //美国大学生数学建模竞赛
                  case 19:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生数学竞赛(决赛)
                  case 20:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生数学竞赛(预赛)
                  case 21:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国部分地区大学生物理竞赛（非物理类A组）
                  case 22:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生英语竞赛
                  case 23:
                    data.multiArray[3] = ['特等奖', '一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //全国大学生数学建模竞赛
                  case 24:
                    data.multiArray[3] = ['一等奖', '二等奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航数学竞赛
                  case 25:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航物理竞赛
                  case 26:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖', '成功参赛奖'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //国家创新计划（大创）
                  case 27:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = ['立项人', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //北航SRTP
                  case 28:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = ['立项人', '其他作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //“冯如”学生创新计划
                  case 29:
                    data.multiArray[3] = ['一等奖', '二等奖', '三等奖'];
                    data.multiArray[4] = ['第一作者', '第二作者', '第三作者'];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
                break;
              //第二列第2项 发表paper
              case 1:
                switch (data.multiIndex[2]) {
                  //本专业SCI学术论文
                  case 0:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //本专业EI学术论文
                  case 1:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //本专业核心刊物学术论文
                  case 2:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //非本专业SCI学术论文
                  case 3:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //非本专业EI学术论文
                  case 4:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //非本专业核心刊物学术论文
                  case 5:
                    data.multiArray[3] = ['第一作者', '第二作者', '第三作者'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //发明专利
                  case 6:
                    data.multiArray[3] = [];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //实用新型专利
                  case 7:
                    data.multiArray[3] = [];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //外观设计专利
                  case 8:
                    data.multiArray[3] = [];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
                break;
              //第二列第3项 参加校外英语能力测试
              case 2:
                switch (data.multiIndex[2]) {
                  //TOEFL
                  case 0:
                    data.multiArray[3] = ['105以上', '90~104(含90)'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //IELTS
                  case 1:
                    data.multiArray[3] = ['8以上', '6.5~7.5'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                  //GRE
                  case 2:
                    data.multiArray[3] = ['325以上', '310~324'];
                    data.multiArray[4] = [];
                    data.multiIndex[3] = 0;
                    data.multiIndex[4] = 0;
                    break;
                }
                break;
            }
            break;

        }
      //改变第四列时
      case 3:
        switch (data.multiIndex[0]) {
          //德育类
          case 0:
            switch (data.multiIndex[1]) {
              //参加院校组织
              case 0:
                break;
              //获得先进称号
              case 1:
                switch (data.multiIndex[2]) {
                  case 0:
                    switch (data.multiIndex[3]) {
                      case 0:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 1:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 2:
                        data.multiArray[4] = ['一等奖', '二、三等奖'];
                        break;
                      case 3:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 4:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 5:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 6:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 7:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                    }
                    break;
                  //第三列第二项
                  case 1:
                    switch (data.multiIndex[3]) {
                      case 0:
                        data.multiArray[4] = ['市级以上（含）', '校级一等奖', '校级二等奖', '校级三等奖'];
                        data.multiIndex[4] = 0;
                        break;
                      case 1:
                        data.multiArray[4] = ['校级优秀团队、优秀成果'];
                        data.multiIndex[4] = 0;
                        break;
                    }
                    break;
                  // 个人获得先进称号
                  case 2:
                    switch (data.multiIndex[3]) {
                      case 0:
                        data.multiArray[4] = ['市级以上（含）', '校级', '院级'];
                        data.multiIndex[4] = 0;
                        break;
                      case 1:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 2:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                      case 3:
                        data.multiArray[4] = ['市级以上（含）', '校级（含社会服务机构）', '院级（含校级学生组织）'];
                        data.multiIndex[4] = 0;
                        break;
                      case 4:
                        data.multiArray[4] = ['校级暑假', '校级寒假'];
                        data.multiIndex[4] = 0;
                        break;
                      case 5:
                        data.multiArray[4] = [];
                        data.multiIndex[4] = 0;
                        break;
                    }
                }
                break;
              //担任社会工作
              case 2:
                break;
            }
            break;
        }
        console.log(data.multiIndex);
        break;
    }
    var i,temp,str_code="";
    for (i = 0; i < 5; i++) {
      temp = "" + this.data.multiIndex[i];
      str_code = str_code + temp
    }
    var score=utils.itemscore(str_code)
    this.setData({
      str_code: str_code,
      score:score
    })
    this.setData(data);
  }
})