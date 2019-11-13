import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  BackHandler,
  ToastAndroid,
  ScrollView,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Global from './Global';

/**
 * 商城页面
 */
let backEnterTime = 0;
export default class Store extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    currentUrl: '',
  };
  _storeBackPress = () => {
    // 如果当前页面是视频网站的首页，就要退到应用的首页去啦，不要在webview里跳转啦
    if (this.state.currentUrl.indexOf('?') > 0) {
      return false;
    }
    this.refs.webView.goBack(); // 在webview中返回一页
    // 如果当前链接是以.cn 或 .cn/ 或者 .com 或 .com/结尾就提示再点击一次就退出
    if (
      this.state.currentUrl.endsWith('.cn') ||
      this.state.currentUrl.endsWith('.cn/') ||
      this.state.currentUrl.endsWith('.com') ||
      this.state.currentUrl.endsWith('.com/')
    ) {
      if (new Date() - backEnterTime < 2000) {
        return false;
      }
      backEnterTime = new Date();
      return true;
    }
  };

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this._storeBackPress);
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this._storeBackPress);
  }

  render() {
    const {navigation} = this.props;
    return (
      <WebView
        ref={'webView'}
        javaScriptEnabled={true}
        cacheMode={'LOAD_NO_CACHE'}
        androidHardwareAccelerationDisabled={false} // 硬件加速开启后，页面滑动会卡顿
        source={{
          uri: Global.mallLink,
        }}
        onNavigationStateChange={event => {
          const url = event.url;
          this.setState({currentUrl: url});
        }}
      />
    );
  }
}
