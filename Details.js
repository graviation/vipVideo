import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Button,
  BackHandler,
  ToastAndroid,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {WebView} from 'react-native-webview';

const {width, height} = Dimensions.get('window');
export default class Details extends React.Component {
  static navigationOptions = {
    header: null,
  };
  state = {
    showBtn: false,
    videoUrl: '', // 网站中的视频地址
  };

  handleBackPress = () => {
    // 如果当前页面是视频网站的首页，就要退到应用的首页去啦，不要在webview里跳转啦
    console.log('Details页面监听到返回键按下');
    console.log('videoUrl:', this.state.videoUrl);
    if (
      this.state.videoUrl.endsWith('.com/') ||
      this.state.videoUrl.endsWith('.com') ||
      this.state.videoUrl.endsWith('search')
    ) {
      console.log('Details页面返回false');
      this.props.navigation.goBack();
    }
    this.refs.webView.goBack(); // 在webview中返回一页
    return true;
  };

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
        <WebView
          ref={'webView'}
          androidHardwareAccelerationDisabled={false}
          source={{uri: this.props.navigation.getParam('url'), header: {}}}
          onNavigationStateChange={event => {
            const url = event.url;
            const iqiyi = 'm.iqiyi.com/.*html'; // 爱奇艺视频播放链接正则
            const tengxun = 'm.v.qq.com/.*html'; // 腾讯视频播放链接正则
            const youku = 'm.youku.com/.*video/id.*html'; // 优酷视频播放链接正则
            const mangguo = 'm.mgtv.com/.*/d*html'; // 芒果TV播放链接正则
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
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Play', {
                videoUrl: this.state.videoUrl,
                jxUrl: navigation.getParam('jxUrl'),
              })
            }
            style={{
              position: 'absolute',
              bottom: height / 2.5,
              left: 10,
              right: 10,
            }}
            activeOpacity={0.8}>
            <View
              style={{
                height: 50,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 5,
                padding: 20,
              }}>
              <Text style={{color: '#FFF', fontWeight: 'bold'}}>
                VIP解析播放
              </Text>
            </View>
          </TouchableOpacity>
        ) : null}
        {/*<Text>{navigation.getParam('jxUrl')}</Text>*/}
        {/*<Text>{this.state.videoUrl}</Text>*/}
      </View>
    );
  }
}
