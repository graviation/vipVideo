import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  ToastAndroid,
  Linking,
  BackHandler,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';
import Orientation from 'react-native-orientation';

// 有些页面有广告，模拟点击关闭
// http://jx.du2.cc/ 解析的有广告
let INJECTED_JAVASCRIPT = `(
  window.onload = function () {
    if(document.getElementsByTagName('img')) {
      document.getElementsByTagName('img')[0].click();
    }
  }
)();`;

const {width, height} = Dimensions.get('window');
const statusBarHeight = StatusBar.currentHeight;
export default class Play extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _playBackPress = () => {
    this.props.navigation.goBack();
  };

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this._playBackPress);
    Orientation.lockToLandscape(); // 锁定为横屏
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this._playBackPress);
    Orientation.lockToPortrait(); // 改为竖屏
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar hidden={true} translucent={true} />
        <WebView
          style={{height: height, width: width}} // , marginTop: statusBarHeight * 2
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          androidHardwareAccelerationDisabled={false} // 硬件加速开启可能黑屏
          injectedJavaScript={INJECTED_JAVASCRIPT} // 关闭广告
          source={{
            uri: navigation.getParam('jxUrl') + navigation.getParam('videoUrl'),
          }}
        />
      </View>
    );
  }
}
