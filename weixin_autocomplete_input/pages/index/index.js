//index.js

Page({
  data: {
    inputValue: '',//点击结果项之后替换到文本框的值
    adapterSource: ["123", "321", "666", "weixin", "WeiXin", "wechat", "android", "Android", "ios", "iOS", "java", "javascript", "微信小程序", "微信公众号", "微信开发者",
      "微信开发者工具"],//本地匹配源
    bindSource: []//绑定到页面的数据，根据用户输入动态变化
  },
  onLoad: function () {
    //这里可以写请求网络数据的代码，请求服务器的匹配源
  },
  //当键盘输入时，触发input事件
  bindinput: function (e) {
    var prefix = e.detail.value//用户实时输入值
    var newSource = []//匹配的结果
    if (prefix != "") {
      this.data.adapterSource.forEach(function (e) {
        if (e.indexOf(prefix) != -1) {
          newSource.push(e)
        }
      })
    }
    if (newSource.length != 0) {
      this.setData({
        bindSource: newSource
      })
    } else {
      this.setData({
        bindSource: []
      })
    }
  },
  itemtap: function (e) {
    this.setData({
      inputValue: e.target.id,
      bindSource: []
    })
  },
})
