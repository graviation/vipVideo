import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  ToastAndroid,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Play extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
        <WebView
          javaScriptEnabled={true}
          allowsFullscreenVideo={true}
          source={{
            uri:
              'http://jx.du2.cc/?url=' +
              this.props.navigation.getParam('videoUrl'),
          }}
        />
      </View>
    );
  }
}
