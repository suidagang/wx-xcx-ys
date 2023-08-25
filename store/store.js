// store.js
import { observable, action } from "mobx-miniprogram";

export const store = observable({
  // 数据字段
  tabBarActiveIndex: 0,
  // actions
  changeTabBarActiveIndex: action(function (val) {
    this.tabBarActiveIndex = val;
  }),
});