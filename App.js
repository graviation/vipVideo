import React from 'react';
import {
  View,
  Button,
  Text,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './Details';
import Play from './Play';

const {width, heigth} = Dimensions.get('window');
class VideoList extends React.Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    jxUrl: 'http://jx.du2.cc/?url=',
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 40,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}>
        <StatusBar hidden={true} translucent={true} />
        {/*爱奇艺视频*/}
        <TouchableOpacity
          style={{height: width / 5}}
          activeOpacity={0.8}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              url: 'https://m.iqiyi.com/',
              jxUrl: this.state.jxUrl,
            })
          }>
          <Image
            source={require('./img/classify/aqiyi.jpg')}
            style={{width: width / 5, height: width / 5, borderRadius: 10}}
          />
        </TouchableOpacity>
        {/*腾讯视频*/}
        <TouchableOpacity
          style={{height: width / 5}}
          activeOpacity={0.8}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              url: 'https://m.v.qq.com/',
              jxUrl: this.state.jxUrl,
            })
          }>
          <Image
            source={require('./img/classify/tengxun.jpg')}
            style={{width: width / 5, height: width / 5, borderRadius: 10}}
          />
        </TouchableOpacity>
        {/*优酷视频*/}
        <TouchableOpacity
          style={{height: width / 5}}
          activeOpacity={0.8}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              url: 'https://www.youku.com/',
              jxUrl: this.state.jxUrl,
            })
          }>
          <Image
            source={require('./img/classify/youku.jpg')}
            style={{width: width / 5, height: width / 5, borderRadius: 10}}
          />
        </TouchableOpacity>

        <View
          style={{
            marginBottom: 0,
            position: 'absolute',
            bottom: 0,
            left: 5,
            right: 5,
            width: width - 10,
            borderWidth: 1,
            borderColor: 'blue',
            borderRadius: 5,
            overflow: 'hidden',
          }}>
          <Text style={{marginLeft: 10, color: 'red', fontWeight: 'bold'}}>
            使用方法：
          </Text>
          <Text style={{marginLeft: 10, color: '#000', fontWeight: 'normal'}}>
            1、首先从该页面选择视频网站
          </Text>
          <Text style={{marginLeft: 10, color: '#000', fontWeight: 'normal'}}>
            2、挑选想看的影片，包含
            <Text style={{color: 'orange', fontWeight: 'bold'}}>VIP</Text>和
            <Text style={{color: 'red', fontWeight: 'bold'}}>付费</Text>资源
          </Text>
          <Text style={{marginLeft: 10, color: '#000', fontWeight: 'normal'}}>
            3、在视频页面底部会有
            <Text
              style={{
                color: 'red',
                backgroundColor: '#CCC',
                fontWeight: 'bold',
              }}>
              VIP播放
            </Text>
            按钮，点击即播放
          </Text>
          <Text style={{marginLeft: 10}}>(全屏播放请把手机横过来)</Text>
          <Text style={{marginLeft: 10, color: 'red', fontWeight: 'bold'}}>
            选择解析接口↓，如播放正常不用切换。
          </Text>
          <View style={{width: width, height: 1, backgroundColor: '#CCC'}} />
          <Picker
            selectedValue={this.state.jxUrl}
            style={{height: 50, color: 'green'}}
            onValueChange={(itemValue, itemIndex) =>
              this.setState({jxUrl: itemValue})
            }>
            <Picker.Item
              color={'green'}
              label="稳定通用① 默认选择"
              value="http://jx.du2.cc/?url="
            />
            <Picker.Item
              color={'green'}
              label="稳定通用②"
              value="http://jx.drgxj.com/?url="
            />
            <Picker.Item
              color={'green'}
              label="稳定通用③"
              value="http://vip.jlsprh.com/?url="
            />
          </Picker>
        </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: VideoList,
    },
    Details: {
      screen: Details,
    },
    Play: {
      screen: Play,
    },
  },
  {
    initialRouteName: 'List',
  },
);

export default createAppContainer(AppNavigator);
