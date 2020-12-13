Page({
  data: {
    pickercolor1:"#00BFFF",
    pickercolor2:"#00BFFF",
    pickercolor3:"#00BFFF",
    pickercolor4:"#00BFFF",
    pickercolor5:"#00BFFF",
    pickercolor6:"#00BFFF",
    pickercolor7:"#00BFFF",
    pickercolor8:"#00BFFF",
    pickercolor9:"#00BFFF",
    pickercolor10:"#00BFFF",
    value1:"未选择",
    value2:"未选择",
    value3:"未选择",
    value4:"未选择",
    value5:"未选择",
    value6:"未选择",
    value7:"未选择",
    value8:"未选择",
    value9:"未选择",
    value10:"未选择",
    text1:"点击选择",
    text2:"点击选择",
    text3:"点击选择",
    text4:"点击选择",
    text5:"点击选择",
    text6:"点击选择",
    text7:"点击选择",
    text8:"点击选择",
    text9:"点击选择",
    text10:"点击选择",
    disabled1:false,
    disabled2:false,
    disabled3:false,
    disabled4:false,
    disabled5:false,
    disabled6:false,
    disabled7:false,
    disabled8:false,
    disabled9:false,
    disabled10:false,
    resultText: "结果展示",
    playerNumber:3,
    start:1,
    renshu: ['3', '4', '5','6', '7', '8','9', '10',],
    realArray:[],
    ifshowstart:true,
    ifshowstartspace:true,
    ifshow1:false,
    ifshow2:false,
    ifshow3:false,
    ifshow4:false,
    ifshow5:false,
    ifshow6:false,
    ifshow7:false,
    ifshow8:false,
    ifshow9:false,
    ifshow10:false,
    ifshowjg:false,
    ifshowkai:false,
    ifshowcz:false,
    ifopen:false,
  },
  bindPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  randomThree(){
    start = floor(random()*3);
    if(start==0){
      realArray=array;
    }else if(start==1){
      realArray=array1;
    }else{
      realArray=array2;
    }
  },
  
  getResult() {
    if(!this.data.isopen){
      wx.showModal({
        title:"提示",
        content:"是否确定开？",
        success:(res)=>{
          if(res.confirm){
            this.setData({
              isopen:true,
              text1: this.data.value1,
              text2: this.data.value2,
              text3: this.data.value3,
              text4: this.data.value4,
              text5: this.data.value5,
              text6: this.data.value6,
              text7: this.data.value7,
              text8: this.data.value8,
              text9: this.data.value9,
              text10: this.data.value10,
              resultText:"多人不提供结果计算，请根据结果自行选择下一步操作"
            })
          }
        }
      })
    }else{
      wx.showToast({
        title: '已开',
        icon: 'none',
        duration: 1000
      })
    }
  },
  reStart() {
    wx.showModal({
      title:"提示",
      content:"是否确定重置？",
      success:(res)=>{
        if(res.confirm){
          this.setData({
            pickercolor1:"#00BFFF",
            pickercolor2:"#00BFFF",
            pickercolor3:"#00BFFF",
            pickercolor4:"#00BFFF",
            pickercolor5:"#00BFFF",
            pickercolor6:"#00BFFF",
            pickercolor7:"#00BFFF",
            pickercolor8:"#00BFFF",
            pickercolor9:"#00BFFF",
            pickercolor10:"#00BFFF",
            value1:"未选择",
            value2:"未选择",
            value3:"未选择",
            value4:"未选择",
            value5:"未选择",
            value6:"未选择",
            value7:"未选择",
            value8:"未选择",
            value9:"未选择",
            value10:"未选择",
            text1:"点击选择",
            text2:"点击选择",
            text3:"点击选择",
            text4:"点击选择",
            text5:"点击选择",
            text6:"点击选择",
            text7:"点击选择",
            text8:"点击选择",
            text9:"点击选择",
            text10:"点击选择",
            disabled1:false,
            disabled2:false,
            disabled3:false,
            disabled4:false,
            disabled5:false,
            disabled6:false,
            disabled7:false,
            disabled8:false,
            disabled9:false,
            disabled10:false,
            resultText: "结果展示",
            ifshowstart:true,
            ifshowstartspace:true,
            ifshow1:false,
            ifshow2:false,
            ifshow3:false,
            ifshow4:false,
            ifshow5:false,
            ifshow6:false,
            ifshow7:false,
            ifshow8:false,
            ifshow9:false,
            ifshow10:false,
            ifshowjg:false,
            ifshowkai:false,
            ifshowcz:false,
            isopen:false
          })
        }
      }
    })
  },
  bindPickerChangeRS: function (e) {
    this.setData({
      playerNumber:e.detail.value,
      ifshowjg:true,
      ifshowkai:true,
      ifshowcz:true,
      ifshowstart:false,
      ifshowstartspace:false,
    })
    if(this.data.playerNumber=='0'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true
      })
    }else if(this.data.playerNumber=='1'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true
      })
    }else if(this.data.playerNumber=='2'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true,
        ifshow5:true,
      })
    }else if(this.data.playerNumber=='3'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true,
        ifshow5:true,
        ifshow6:true,
      })
    }else if(this.data.playerNumber=='4'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true,
        ifshow5:true,
        ifshow6:true,
        ifshow7:true,
      })
    }else if(this.data.playerNumber=='5'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true,
        ifshow5:true,
        ifshow6:true,
        ifshow7:true,
        ifshow8:true,
      })
    }else if(this.data.playerNumber=='6'){
      this.setData({
        ifshow1:true,
        ifshow2:true,
        ifshow3:true,
        ifshow4:true,
        ifshow5:true,
        ifshow6:true,
        ifshow7:true,
        ifshow8:true,
        ifshow9:true,
      })
    }else{
      this.setData({
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
      })
    }
    this.randomThree();
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
  bindPickerChange1: function (e) {
    this.setData({
      text1: "选择完成",
      value1:this.data.realArray[e.detail.value],
      pickercolor1:"#FF69B4",
      disabled1:true
    })
    this.randomThree();
  },
  bindPickerChange2: function (e) {
    this.setData({
      text2: "选择完成",
      value2:this.data.realArray[e.detail.value],
      pickercolor2:"#FF69B4",
      disabled2:true
    })
    this.randomThree();
  },
  bindPickerChange3: function (e) {
    this.setData({
      text3: "选择完成",
      value3:this.data.realArray[e.detail.value],
      pickercolor3:"	#FF69B4",
      disabled3:true
    })
    this.randomThree();
  },
  bindPickerChange4: function (e) {
    this.setData({
      text4: "选择完成",
      value4:this.data.realArray[e.detail.value],
      pickercolor4:"	#FF69B4",
      disabled4:true
    })
    this.randomThree();
  },
  bindPickerChange5: function (e) {
    this.setData({
      text5: "选择完成",
      value5:this.data.realArray[e.detail.value],
      pickercolor5:"#FF69B4",
      disabled5:true
    })
    this.randomThree();
  },
  bindPickerChange6: function (e) {
    this.setData({
      text6: "选择完成",
      value6:this.data.realArray[e.detail.value],
      pickercolor6:"	#FF69B4",
      disabled6:true
    })
    this.randomThree();
  },
  bindPickerChange7: function (e) {
    this.setData({
      text7: "选择完成",
      value7:this.data.realArray[e.detail.value],
      pickercolor7:"	#FF69B4",
      disabled7:true
    })
    this.randomThree();
  },
  bindPickerChange8: function (e) {
    this.setData({
      text8: "选择完成",
      value8:this.data.realArray[e.detail.value],
      pickercolor8:"	#FF69B4",
      disabled8:true
    })
    this.randomThree();
  },
  bindPickerChange9: function (e) {
    this.setData({
      text9: "选择完成",
      value9:this.data.realArray[e.detail.value],
      pickercolor9:"	#FF69B4",
      disabled9:true
    })
    this.randomThree();
  },
  bindPickerChange10: function (e) {
    this.setData({
      text10: "选择完成",
      value10:this.data.realArray[e.detail.value],
      pickercolor10:"	#FF69B4",
      disabled10:true
    })
    this.randomThree();
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