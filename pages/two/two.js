Page({
  data: {
    index: "点击选择",
    resultText: "结果展示",
    disabledq:false,
    playerNumber:2,
    start:1,
    array: ['剪刀', '石头', '布'],
    array2: ['石头', '布', '剪刀'],
    array3: ['布', '剪刀', '石头'],
    realArray:[],
    ifshow1:true,
    ifshow2:true,
    ifshow3:true,
    ifshow4:true,
    ifshow5:true,
    ifshow6:true,
    ifshow7:true,
    ifshow8:true,
    ifshow9:true,
    ifshow10:true,
    playerArray:[
      {
        picked:false,
        value:"",
        text:"点击选择"
      },
      {
        picked:false,
        value:"",
        text:"请选择"
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      },
      {
        picked:false,
        value:"",
        text:""
      }
    ],
    objectArray: [
      {
        id: 0,
        name: '剪刀'
      },
      {
        id: 1,
        name: '石头'
      },
      {
        id: 2,
        name: '布'
      }
    ]
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  randomThree(){
    var start = Math.floor(Math.random()*3);
    if(start==0){
      this.setData({realArray:['剪刀', '石头', '布']});
    }else if(start==1){
      this.setData({realArray:['石头', '布', '剪刀']});
    }else{
      this.setData({realArray:['布', '剪刀', '石头']});
    }
  },
  //跳转至多人选负界面
  getResult() {
    
  },
  //跳转至人机对战界面
  fromHome() {
    wx.navigateTo({
      url: '../index/index',
    })
  },
  onLoad:function(){
    this.randomThree();
  }

})