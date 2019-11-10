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

/**
 * 商城页面
 */
export default class Store extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    storeUrl: 'http://vip123321.wtnhyw.cn/', // 网站中的视频地址
    currentUrl: '',
  };

  render() {
    const {navigation} = this.props;
    return (
      <WebView
        ref={'webView'}
        javaScriptEnabled={true}
        androidHardwareAccelerationDisabled={false} // 硬件加速开启可能黑屏
        source={{
          uri: this.state.storeUrl,
        }}
        onNavigationStateChange={event => {
          this.setState({currentUrl: event.url});
        }}
      />
    );
  }
}
