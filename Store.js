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
export default class Store extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    currentUrl: '',
  };
  componentDidMount(): void {
    console.log('componentDidMount()...');
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <Text>{Global.mallLink}</Text>
        <WebView
          ref={'webView'}
          javaScriptEnabled={true}
          androidHardwareAccelerationDisabled={false} // 硬件加速开启可能黑屏
          source={{
            uri: Global.mallLink,
          }}
          onNavigationStateChange={event => {
            this.setState({currentUrl: event.url});
          }}
          onLoadStart={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn(nativeEvent.loading);
          }}
          onError={syntheticEvent => {
            const {nativeEvent} = syntheticEvent;
            console.warn('WebView error: ', nativeEvent);
          }}
        />
      </View>
    );
  }
}
