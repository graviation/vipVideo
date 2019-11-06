import React from 'react';
import {View, Text, StatusBar, Button} from 'react-native';
import {WebView} from 'react-native-webview';

let VIDEO_URL = '';
export default class Details extends React.Component {
  static navigationOptions = {
    header: null,
  };
  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
        <WebView
          ref={'webView'}
          source={{uri: this.props.navigation.getParam('url')}}
          onNavigationStateChange={event => (VIDEO_URL = event.url)}
        />
        <Button
          title={'VIP播放'}
          onPress={() => {
            this.props.navigation.navigate('Play', {
              videoUrl: VIDEO_URL,
            });
          }}
        />
      </View>
    );
  }
}
