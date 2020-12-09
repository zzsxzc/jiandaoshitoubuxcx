Page({
  data: {
    index: "点击选择",
    array: ['剪刀', '石头', '布'],
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
  }
})