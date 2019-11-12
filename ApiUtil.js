import React from 'react';
import Global from './Global';

/**
 * 网络请求工具
 */
export default class ApiUtil {
  /**
   * 获取需要的数据总和
   * @returns {Promise<any>}
   */
  static getData() {
    return fetch(
      'http://hb9.api.yesapi.cn/?service=App.Main_Meta.Get&app_key=463DA345D222E8E0CFD72E747F10ACB7&key=vip_video_data',
    )
      .then(response => response.json())
      .then(responseJson => {
        return responseJson.data.data;
      });
  }

  /**
   * 初始化Global数据
   */
  static initGlobalData() {
    ApiUtil.getData().then(data => {
      Global.vipAnalysisUrl = data.vipAnalysisUrl;
      Global.mallLink = data.mallLink;
      Global.tv = data.tv;
      Global.movie = data.movie;
      Global.website = data.website;
      console.log('Global数据初始化完毕：', Global);
    });
  }
}
