import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import {WebView} from 'react-native-webview';

export default class Details extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    showBtn: false,
    videoUrl: '', // 网站中的视频地址
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
        <WebView
          ref={'webView'}
          source={{uri: this.props.navigation.getParam('url')}}
          onNavigationStateChange={event => {
            const url = event.url;
            const iqiyi = 'm.iqiyi.com/.*html';
            if (url.match(iqiyi) && url.match(iqiyi).length > 0) {
              this.setState({videoUrl: url, showBtn: true});
            }
          }}
        />
        {this.state.showBtn ? (
          <Button
            title={'VIP播放'}
            onPress={() =>
              this.props.navigation.navigate('Play', {
                videoUrl: this.state.videoUrl,
              })
            }
          />
        ) : null}
      </View>
    );
  }
}
