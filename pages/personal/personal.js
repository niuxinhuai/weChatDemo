// pages/personal/personal.js
var selectSexColor = 'orange'
var defaultSetColor = 'while'
var birthdayNormalColor = 'rgb(128,128,128)'
const schoolEducationArray = ["高中", "大专", "本科", "硕士", "博士"]
const yearSelectArray = ["1年", "2年", "3年", "4年", "5年", "6年", "7年", "8年", "9年", "10年", "10年以上"]
const jobStateArray = ["我目前已离职，可快速到岗", "我目前在职，正考虑换个新环境", "我暂时不想找工作","我是应届毕业生"]
// 性别选择，默认为男
var selectSex = true

var app = getApp();
/**
 * userName 用户姓名
   * sexManColor 性别男背景颜色
   * sexWomenColor 性别女背景颜色
   * birthdayColor 出生年月选择字体颜色
   * birthdayTitle 出生年月日期选择器回调文字
   * education  最高学历
   * educationTitle 学历选择文字
   * cityColor 选择城市结果字体颜色
   * jobStateColor 当前状态默认文案字体颜色
   * emailNumber 输入的邮箱
   * date 出生年月默认日期
   */
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actualName:    '姓名',
    userName:      '',
    phoneNumber:    '',
    emailNumber:   '',
    sex:           '性别',
    birthdayTime:  '出生年月',
    date:          '1990-01-01',
    education:     '最高学历',
    workYear:      '工作年限',
    phoneText:     '手机号码',
    emailText:     '联系邮箱',
    cityText:      '所在城市',
    userText:      '当前状态',
    array:         yearSelectArray,
    index:         1,
    sexManColor:   selectSexColor,
    sexWomenColor: defaultSetColor,
    birthdayColor: birthdayNormalColor,
    educationColor:birthdayNormalColor,
    workYearColor: birthdayNormalColor,
    cityColor:     birthdayNormalColor,
    jobStateColor: birthdayNormalColor,
    birthdayTitle: '请选择',
    educationTitle:'请选择',
    workYearTitle: '请选择',
    chouseCity:    '请选择',
    oberseverAreaLength: '0/58',
    chouseJobState: '我目前已离职，可快速到岗',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {},
  // 用户姓名
  nameClick: function(e){
    this.setData({
      userName: e.detail.value,  
    })
  },
// 性别男点击方法
  setManClick: function(){
    selectSex = true
    this.setData({
      sexManColor: selectSexColor,
      sexWomenColor: defaultSetColor,
    })
  },
  // 性别女点击方法
  setWomenClick: function(){
    selectSex = false
    this.setData({
      sexManColor: defaultSetColor,
      sexWomenColor: selectSexColor,
    })
  },
  // 出生年月选择点击方法
  bindDateChange: function(e){
    this.setData({
       birthdayTitle: e.detail.value,
       birthdayColor: 'black',
    })
  },
  // 学历选择
  selectEducation: function(){
    var that = this
    app.preSentAlert(schoolEducationArray,(text) =>{
      console.log('我拿到的值是' + text);
      that.setData({
          educationTitle: text,
          educationColor: 'black',
      })
    })
  },
  // 工作年限选择
  bindPickerChange: function(e){
    this.setData({
      workYearTitle: yearSelectArray[e.detail.value],
      workYearColor: 'black',
    })
  },
  // 手机号码
  phoneClick: function(e){
    this.setData({
      phoneNumber: e.detail.value,
    })
  },
  // 邮箱
  emailClick: function(e){
    this.setData({
      emailNumber: e.detail.value,
    })
  },
  // 城市选择
  cityClick: function(){
    

  },
  // 当前工作状态选择
  jobStateClick: function(){
    var that = this
    app.preSentAlert(jobStateArray, (text) => {
      console.log('我拿到的值是' + text);
      that.setData({
        chouseJobState: text,
        jobStateColor: 'black',
      })
    })
  },
  bindTextAreaBlur: function(e){
    this.setData({
      oberseverAreaLength: e.detail.value.length + '/58'
    })
  },
  comfirmData: function(){
    // 判断姓名是否输入
    if (!this.data.userName){
      app.loadTost('请输入姓名');
      return;
    }
    // 性别选择
    if (selectSex){
      console.log('选择了男');
    }else{
      console.log('选择了女');
    }
    // 出生年月判断是否选择
    if (this.data.birthdayTitle == '请选择'){
      app.loadTost('请选择出生年月');
      return;
    }
    // 最高学历判断是否选择
    if (this.data.educationTitle == '请选择'){
      app.loadTost('请选择最高学历');
      return;
    }
    // 工作年限判断是否选择
    if (this.data.workYearTitle == '请选择'){
      app.loadTost('请选择工作年限');
      return;
    }
    console.log('点击保存' + this.data.phoneNumber)

    // 手机号码判断
    if (this.data.phoneNumber == ''){
      app.loadTost('请输入手机号码');
      return;
    }
    if (this.data.phoneNumber.length < 11 && this.data.phoneNumber.length > 0){
      app.loadTost('手机号码长度有误');
      return;
    }
    if (!(/^1[34578]\d{9}$/.test(this.data.phoneNumber))) {
      app.loadTost('手机号码格式有误');
      return;
    }
    // 联系邮箱验证 
    var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!myreg.test(this.data.emailNumber)){
      app.loadTost('邮箱格式有误');
      return;
    }

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

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }




})