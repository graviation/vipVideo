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
    const {navigation} = this.props;
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
            const youku = 'm.youku.com/.*video/id.*html'; // 优酷视频播放链接正则
            this.setState({videoUrl: url});
            // 还有可能是search.html
            if (
              (url.match(iqiyi) && url.match(iqiyi).length > 0) ||
              (url.match(tengxun) && url.match(tengxun).length > 0) ||
              (url.match(youku) && url.match(youku).length > 0)
            ) {
              if (url.indexOf('search.html') >= 0) {
                this.setState({showBtn: false});
              } else {
                this.setState({videoUrl: url, showBtn: true});
              }
            } else {
              this.setState({showBtn: false});
            }
          }}
        />
        {this.state.showBtn ? (
          <Button
            color={'red'}
            title={'VIP播放'}
            onPress={() =>
              navigation.navigate('Play', {
                videoUrl: this.state.videoUrl,
                jxUrl: navigation.getParam('jxUrl'),
              })
            }
          />
        ) : null}
        {/*<Text>{navigation.getParam('jxUrl')}</Text>*/}
        <Text>{this.state.videoUrl}</Text>
      </View>
    );
  }
}
