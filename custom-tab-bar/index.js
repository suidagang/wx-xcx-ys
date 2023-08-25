import { storeBindingsBehavior } from "mobx-miniprogram-bindings";
import { store } from "../store/store";
Component({
  behaviors: [storeBindingsBehavior],
  data: {
    barList:[{
      pagePath:'/pages/list/list',
      text:"文章",
      iconPath:'home-o',
      active:true
    },{
      pagePath:'/pages/care/care',
      text:"Care+",
      iconPath:'search',
      active:false
    },{
      pagePath:'/pages/subscribe/subscribe',
      text:"订阅",
      iconPath:'friends-o',
      active:false
    },{
      pagePath:'/pages/user/user',
      text:"我的",
      iconPath:'setting-o',
      active:false
    }]
  },
  storeBindings: {
    store,
    fields: {
      active: () => store.tabBarActiveIndex,
    },
    actions: {
      updateActive: "changeTabBarActiveIndex",
    },
  },
  methods:{
    onChange(event) {
      // event.detail 的值为当前选中项的索引
      this.updateActive(event.detail);
      wx.switchTab({
        url: this.data.barList[event.detail].pagePath,
      })
    },
  }
  
});