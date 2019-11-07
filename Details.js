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
            const iqiyi = 'm.iqiyi.com/.*html'; // 爱奇艺视频播放链接正则
            const tengxun = 'm.v.qq.com/.*html'; // 腾讯视频播放链接正则
            const youku = 'm.youku.com/alipay_video/id.*html'; // 优酷视频播放链接正则
            this.setState({videoUrl: url});
            if (
              (url.match(iqiyi) && url.match(iqiyi).length > 0) ||
              (url.match(tengxun) && url.match(tengxun).length > 0) ||
              (url.match(youku) && url.match(youku).length > 0)
            ) {
              this.setState({videoUrl: url, showBtn: true});
            } else {
              this.setState({showBtn: false});
            }
          }}
        />
        {this.state.showBtn ? (
          <Button
            color={'orange'}
            title={'VIP播放'}
            onPress={() =>
              this.props.navigation.navigate('Play', {
                videoUrl: this.state.videoUrl,
              })
            }
          />
        ) : null}
        {/*<Text>{this.state.videoUrl}</Text>*/}
      </View>
    );
  }
}
