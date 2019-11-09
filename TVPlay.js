import React from 'react';
import {View, StatusBar, Dimensions} from 'react-native';
import Video from 'react-native-video';

// 电视频道
const {width, height} = Dimensions.get('window');
export default class TVPlay extends React.Component {
  static navigationOptions = {
    header: null,
  };

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
          repeat={true}
        />
      </View>
    );
  }
}
