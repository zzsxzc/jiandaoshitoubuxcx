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

})