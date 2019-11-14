import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  Dimensions,
  ScrollView,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import ScrollableTabView, {
  DefaultTabBar,
} from 'react-native-scrollable-tab-view';
import Global from './Global';
import SplashScreen from 'react-native-splash-screen';
import Details from './Details';
import Play from './Play';
import TVPlay from './TVPlay';
import Store from './Store';
import NoNet from './NoNet';
import ApiUtil from './ApiUtil';

const {width, height} = Dimensions.get('window');
const startBarHeight = StatusBar.currentHeight;
class VideoList extends React.Component {
  static navigationOptions = {
    header: null,
  };

  // state = {
  // jxUrl: 'https://jx.okokjx.com/okokjiexi/jiexi.php?url=', // 解析URL
  // jxUrl: 'https://jx.wslmf.com/?url=',
  // lqUrl: '', // 领券URL
  // mallLink: '',
  // };

  componentDidMount(): void {
    // 获取所需要的参数
    ApiUtil.initGlobalData().then(r => SplashScreen.hide());
  }

  render() {
    const {navigation} = this.props;
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          backgroundColor: '#FFF',
        }}>
        {/* 状态栏设置 */}
        <StatusBar
          barStyle={'dark-content'}
          translucent={true}
          backgroundColor={'rgba(255,255,255,0)'} //颜色透明
        />
        {/* 网络监听 */}
        <NoNet />
        <ScrollableTabView
          style={{marginTop: startBarHeight}}
          initialPage={0} // 默认选中的坐标
          prerenderingSiblingsNumber={3} // 预加载几个页面
          tabBarUnderlineStyle={{backgroundColor: '#6200EE', borderRadius: 5}} // 下划线样式
          tabBarInactiveTextColor={'#232F34'} // 未选中的文本颜色
          tabBarActiveTextColor={'#6200EE'} // 文字被选中后的颜色
          renderTabBar={() => <DefaultTabBar />}>
          <ScrollView
            contentContainerStyle={{flex: 1}}
            tabLabel="视频网站"
            showsVerticalScrollIndicator={false}>
            <ScrollView
              contentContainerStyle={{flex: 1, flexDirection: 'column'}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  marginTop: height / 45,
                  height: height / 8,
                }}>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      url: 'https://m.iqiyi.com/',
                      jxUrl: Global.vipAnalysisUrl,
                    })
                  }>
                  <Image
                    resizeMode={'contain'}
                    source={require('./img/classify/network/iqiyi.png')}
                    style={{
                      height: height / 10,
                      width: width / 5,
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      url: 'https://m.v.qq.com/',
                      jxUrl: Global.vipAnalysisUrl,
                    })
                  }>
                  <Image
                    resizeMode={'contain'}
                    source={require('./img/classify/network/qqlogo.png')}
                    style={{height: height / 10, width: width / 5}}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  activeOpacity={0.8}
                  onPress={() =>
                    this.props.navigation.navigate('Details', {
                      url: 'https://www.youku.com/',
                      jxUrl: Global.vipAnalysisUrl,
                    })
                  }>
                  <Image
                    resizeMode={'contain'}
                    source={require('./img/classify/network/youkulogo.png')}
                    style={{height: height / 10, width: width / 5}}
                  />
                </TouchableOpacity>
              </View>
              <Text
                style={{
                  position: 'absolute',
                  bottom: 10,
                  left: 10,
                  right: 10,
                  fontWeight: 'bold',
                  color: 'red',
                }}>
                使用说明：
                <Text style={{fontWeight: 'normal', color: '#BDBDBD'}}>
                  选择视频网站，选择自己喜欢看的视频，点击到视频播放页，会有一个红色按钮《VIP解析播放》点击即可免费播放(包括VIP和付费视频)。
                </Text>
              </Text>
            </ScrollView>
          </ScrollView>
          <ScrollView
            contentContainerStyle={{flex: 1, marginHorizontal: 15}}
            tabLabel={'电视直播'}>
            <Text style={{fontWeight: 'bold', fontSize: 18, color: '#B00020'}}>
              热门频道
            </Text>
            <View>
              {/*第一行*/}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: height / 8,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://45.126.83.51/qwr9ew/s/s21/index2.m3u8',
                      m3u8: Global.tv.fenghuang,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/fhzxt.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>凤凰资讯</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/hunanhd.m3u8',
                      m3u8: Global.tv.hunan,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/hunantv.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>湖南卫视</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/cctv13.m3u8',
                      m3u8: Global.tv.cctv13,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/cctv13.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>新闻频道</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/*第二行*/}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: height / 8,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/zjhd.m3u8',
                      m3u8: Global.tv.zhejiang,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/zhejiangtv.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>浙江卫视</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/dfhd.m3u8',
                      m3u8: Global.tv.dongfang,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/dongfang.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>东方卫视</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8',
                      m3u8: Global.tv.cctv1,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/cctv1.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>综合频道</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/*第三行*/}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: height / 8,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/jshd.m3u8',
                      m3u8: Global.tv.jiangsu,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/jiangsutv.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>江苏卫视</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/btv1hd.m3u8',
                      m3u8: Global.tv.beijingws,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/beijingtv.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>北京卫视</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8',
                      m3u8: Global.tv.cctv6,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/hot/cctv6.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>电影频道</Text>
                  </View>
                </TouchableOpacity>
              </View>
              {/*第四行*/}
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-around',
                  height: height / 8,
                }}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/btv10.m3u8',
                      m3u8: Global.tv.kaku,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/kaku.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>卡酷少儿</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/cctv11.m3u8',
                      m3u8: Global.tv.cctv11,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/cctv/cctv11.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>戏曲频道</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate('TVPlay', {
                      // m3u8: 'http://ivi.bupt.edu.cn/hls/cctv7.m3u8',
                      m3u8: Global.tv.cctv7,
                    })
                  }>
                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <Image
                      resizeMode={'contain'}
                      source={require('./img/classify/tv/cctv/cctv7.jpg')}
                      style={styles.hotTvImageStyle}
                    />
                    <Text style={styles.hotTvTextStyle}>军事频道</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 18,
                color: '#714cfe',
                marginTop: 15,
              }}>
              电影直播
            </Text>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: height / 8,
                marginTop: 10,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://aldirect.hls.huya.com/huyalive/30765679-2504742278-10757786168918540288-3049003128-10057-A-0-1_1200.m3u8',
                    m3u8: Global.movie.hlw,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>好莱坞电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://tx.hls.huya.com/huyalive/94525224-2460685722-10568564701724147712-2789253838-10057-A-0-1.m3u8',
                    m3u8: Global.movie.cl,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>成龙电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://tx.hls.huya.com/huyalive/94525224-2460686034-10568566041753944064-2789274542-10057-A-0-1.m3u8',
                    m3u8: Global.movie.lzy,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>林正英电影</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-around',
                height: height / 8,
              }}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://tx.hls.huya.com/huyalive/94525224-2460685313-10568562945082523648-2789274524-10057-A-0-1.m3u8',
                    m3u8: Global.movie.zxc,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>周星驰电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://tx.hls.huya.com/huyalive/29106097-2689286606-11550398022340837376-2789274544-10057-A-0-1.m3u8',
                    m3u8: Global.movie.ss,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>丧尸电影</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('TVPlay', {
                    // m3u8:
                    //   'http://tx.hls.huya.com/huyalive/29106097-2689447600-11551089486305689600-2789274568-10057-A-1525420695-1.m3u8',
                    m3u8: Global.movie.js,
                  })
                }>
                <View
                  style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: 50,
                    width: 100,
                    backgroundColor: '#714cfe',
                    borderRadius: 5,
                  }}>
                  <Text style={styles.movieTextStyle}>惊悚电影</Text>
                </View>
              </TouchableOpacity>
            </View>
          </ScrollView>
          <ScrollView
            contentContainerStyle={{flex: 1}}
            tabLabel={'淘宝优惠券'}
            key={'store'}
            showsVerticalScrollIndicator={false}>
            <Store />
          </ScrollView>
        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  hotTvImageStyle: {
    height: height / 10,
    width: width / 5,
  },
  hotTvTextStyle: {
    fontSize: 9,
    color: '#B00020',
  },
  movieTextStyle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#FFF',
  },
});

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: VideoList,
    },
    Details: {
      screen: Details,
    },
    Play: {
      // 视频网站播放信息
      screen: Play,
    },
    TVPlay: {
      // 电视台播放信息
      screen: TVPlay,
    },
    Store: {
      // 商城页面
      screen: Store,
    },
    NoNet: {
      // 网络监控页面
      screen: NoNet,
    },
  },
  {
    initialRouteName: 'List',
  },
);

export default createAppContainer(AppNavigator);
