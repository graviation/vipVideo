import React from 'react';
import {
  View,
  Image,
  Text,
  StatusBar,
  Modal,
  Dimensions,
  TouchableOpacity,
  Linking,
  NativeModules,
} from 'react-native';
import NetInfo, {NetInfoSubscription} from '@react-native-community/netinfo';
import ApiUtil from './ApiUtil';

// 监听APP的联网情况，如果未链接，则显示该页面
const {width, height} = Dimensions.get('window');
export default class NoNet extends React.Component {
  _subscription: NetInfoSubscription | null = null;

  componentDidMount(): void {
    this._subscription = NetInfo.addEventListener(state => {
      // 如果断网了
      if (!state.isConnected) {
        this.setState({showModal: true});
      } else {
        this.setState({showModal: false});
        ApiUtil.initGlobalData();
      }
    });
  }
  componentWillUnmount(): void {
    this._subscription && this._subscription();
  }

  state = {
    showModal: false,
  };

  render() {
    return (
      <Modal
        hardwareAccelerated={true}
        animationType={'fade'}
        visible={this.state.showModal}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Image
            resizeMode={'contain'}
            source={require('./img/noNet.gif')}
            style={{
              height: width / 1.2,
              width: width / 1.2,
              backgroundColor: '#FFF',
            }}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => NativeModules.BaseModule.openSettings()}>
            <View
              style={{
                backgroundColor: '#6200EE',
                marginTop: height / 7,
                padding: 10,
                borderRadius: 20,
              }}>
              <Text style={{color: '#FFF'}}>网络已断开，点击设置</Text>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    );
  }
}
