// pages/demo3/demo3.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:"恐龙",
    backColor:"blue",
    width001:"150px",
    height:"270px",
    userList:[
      {
        user_name:"张老师",
        age:32,
      },
      {
        user_name:"刘老师",
        age:35,
      },
      {
        user_name:"黄老师",
        age:36,
      }
    ]

  },

  // 点击时候的回调函数
  tap001:function(res){
      console.log("【tap001】res==>",res)
      console.log("【tap001】res.currentTarget.dataset==>",res.currentTarget.dataset)

      this.setData({
        userName : "孔龙",
      })

      setTimeout(()=>{
        this.setData({
          userName : "孔龙22",
          class:"异类",
          backColor:"red",
    width001:"220px",
    height:"87px",
        })
      },2000) //2秒钟定时器
      },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log("----监听页面加载------")

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log("----监听页面初次渲染完成------")
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    // wx.showLoading({
    //   title: '加载中',
    // })
    
    // setTimeout(function () {
    //   wx.hideLoading()
    // }, 2000)
    
    console.log("----监听页面显示------")
    console.log("wx.canIUse====>",wx.canIUse)
    console.log("wx.getSystemInfoSync====>",wx.getSystemInfoSync)
    console.log("wx.getSystemInfoSync（）====>",wx.getSystemInfoSync())
    
    


    wx.showLoading({
      title: '快马教鞭赶来中',
    })

    setTimeout(()=>{
      wx.hideLoading()
    },2700)
    
    
    // wx.showToast({
    //   title: '成功aa',
    //   icon: 'success',
    //   duration: 2000
    // })
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    console.log("--=======--监听页面隐藏===-----")
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    console.log("--=======--监听页面---卸载===-----")
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    console.log("--=======--监听=0----=-=用户下拉动作-->>==-----")
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log("--=======--监听=--````页面上拉触底事件的处理函数-->>==-----")
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log("--=======-[onShareAppMessage]-用户点击右上角分享->>==-----")
  }
})
