import React from 'react';
import {
  View,
  Button,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
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

  render() {
    return (
      <View
        style={{
          flex: 1,
          marginTop: 10,
          flexDirection: 'row',
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
            })
          }>
          <Image
            source={require('./img/classify/youku.jpg')}
            style={{width: width / 5, height: width / 5, borderRadius: 10}}
          />
        </TouchableOpacity>
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
