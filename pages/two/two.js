Page({
  data: {
    value1:"未选择",
    value2:"未选择",
    text1:"点击选择",
    text2:"点击选择",
    isopend:false,
    pickercolor1:"#00BFFF",
    pickercolor2:"#00BFFF",
    index: 0,
    resultText: "结果展示",
    disabled1:false,
    disabled2:false,
    playerNumber:2,
    start:1,
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
    ],
    
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
  //开
  getResult() {
    if(!this.data.isopend){
      if(this.data.value1=="未选择"||this.data.value2=="未选择"){
        if(this.data.value1=="未选择"&&this.data.value2=="未选择"){
          wx.showToast({
            title: '未选择不需要开',
            icon: 'none',
            duration: 1000
          })
        }else{
          wx.showModal({
            title:"提示",
            content:"存在用户未选择！是否继续开？",
            success:(res)=>{
              if(res.confirm){
                this.setData({
                  text1: this.data.value1,
                  text2: this.data.value2,
                  resultText:"存在未输入者，不进行结果计算！",
                  isopend:true
                })
              }
            }
          })
        }      
      }else{
          var result;
          if(this.data.value1=="剪刀"&&this.data.value2=="剪刀"||this.data.value1=="石头"&&this.data.value2=="石头"||this.data.value1=="布"&&this.data.value2=="布"){
            result="平局。"
            this.setData({
              text1: this.data.value1,
              text2: this.data.value2,
              resultText:result,
              isopend:true
            })
          }else if(this.data.value1=="剪刀"&&this.data.value2=="布"||this.data.value1=="石头"&&this.data.value2=="剪刀"||this.data.value1=="布"&&this.data.value2=="石头"){
            result="1号胜！"
            this.setData({
              text1: this.data.value1,
              text2: this.data.value2,
              resultText:result,
              isopend:true
            })
          }else{
            result="2号胜！"
            this.setData({
              text1: this.data.value1,
              text2: this.data.value2,
              resultText:result,
              isopend:true
            })
          }
    }
    
    }
  },
  //重置
  reStart:function() {
    if(this.data.value1!="未选择"||this.data.value2!="未选择"){
      if(this.data.isopend){
        this.setData({
          value1:"未选择",
          value2:"未选择",
          text1:"点击选择",
          text2:"点击选择",
          isopend:false,
          pickercolor1:"#00BFFF",
          pickercolor2:"#00BFFF",
          index: 0,
          resultText: "结果展示",
          disabled1:false,
          disabled2:false,
          isopend:false
        })
        wx.showToast({
          title: '已重置',
          icon: 'none',
          duration: 1000
        })
      }else{
        wx.showModal({
          title:"提示",
          content:"是否确定重置？",
          success:(res)=>{
            if(res.confirm){
              this.setData({
                value1:"未选择",
                value2:"未选择",
                text1:"点击选择",
                text2:"点击选择",
                isopend:false,
                pickercolor1:"#00BFFF",
                pickercolor2:"#00BFFF",
                index: 0,
                resultText: "结果展示",
                disabled1:false,
                disabled2:false,
                isopend:false
              })
            }
          }
        })
      }   
    }else{
      wx.showToast({
        title: '数据无须重置',
        icon: 'none',
        duration: 1000
      })
    }
    
  },
  onLoad:function(){
    this.randomThree();
  }

})