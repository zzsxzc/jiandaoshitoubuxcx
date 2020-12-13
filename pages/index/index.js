var app = getApp();
Page({
  //跳转至双人界面
  doublePK() { 
    wx.navigateTo({
      url: '../two/two',
    })
  },
  //跳转至多人界面
  multipleChoseWinner() {
    wx.navigateTo({
      url: '../play/play',
    })
  },
  //分享
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      console.log(res.target)
    }
    return {
      title: '石头剪刀布',
      path: '/pages/index/index'
    }
  }

})