// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    test:"哈哈",
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
    value: 3,
  },
  onClickLeft() {
    wx.showToast({ title: '点击返回', icon: 'none' });
  },
})