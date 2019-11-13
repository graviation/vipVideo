import React from 'react';
import {View, StatusBar, Dimensions, BackHandler} from 'react-native';
import Video from 'react-native-video';

// 电视频道
const {width, height} = Dimensions.get('window');
export default class TVPlay extends React.Component {
  static navigationOptions = {
    header: null,
  };

  _tvPlayBackPress = () => {
    console.log('TVPlay页面点击返回按钮');
    this.props.navigation.goBack();
  };

  componentDidMount(): void {
    BackHandler.addEventListener('hardwareBackPress', this._tvPlayBackPress);
  }

  componentWillUnmount(): void {
    BackHandler.removeEventListener('hardwareBackPress', this._tvPlayBackPress);
  }

  render() {
    const {navigation} = this.props;
    return (
      <View style={{flex: 1, backgroundColor: '#000'}}>
        <StatusBar hidden={true} translucent={true} />
        <Video
          style={{position: 'absolute', top: 0, left: 0, bottom: 0, right: 0}}
          source={{
            uri: this.props.navigation.getParam('m3u8'),
            type: 'm3u8',
          }}
          resizeMode={'contain'}
          repeat={false}
        />
      </View>
    );
  }
}
