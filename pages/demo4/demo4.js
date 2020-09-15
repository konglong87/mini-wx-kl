// pages/demo4/demo4.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    topicList:[
      {
        "title":"这是标题1==",
        "time":"2020-08-02",
        "url":"/images/find_pic_banner1_n.png"
      },
      {
        "title":"这是标题2==",
        "time":"2020-09-02",
        "url":"/images/find_pic_banner2_n.png"
      },
      {
        "title":"这是标题1==",
        "time":"2020-10-02",
        "url":"/images/find_pic_banner3_n.png"
      },
    ],

    resData:[],
    curPage:1,
  },


  back0001: function(){
    wx.navigateBack({
      delta: 1
    })
  },

  getList:function () {
    this.data.curPage++
    var pp = this.data.curPage
    console.log("现在page===>",pp)
   this.getNextPage(pp)
  },

  getNextPage: function(page=1){
    wx.request({
      url: 'https://edu.newsight.cn/wxList.php',
      data:{
        num:3,
        page:page,
      },
      // dataType:"json",
      success:res=>{
        console.log("[接口返回值]====>",page,"====>>>>>>>",res.data)
      // success: (res)=>{
      // success:function(res){
        //////////////////////////////////
         this.setData({
        // //  不能大写 this.SetData({
        //   resData:(res.data) //这是替换
        resData: this.data.resData.concat(res.data) //这是追加
        })
        
      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("生命周期函数--监听页面加载----onLoad");
    this.getNextPage()
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
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("监听用户下拉动作");
      this.getList()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("拉触底事件的处理函数");
    this.getList()
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})