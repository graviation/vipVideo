import React from 'react';
import {View, Button, StatusBar} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Details from './Details';
import {exp} from 'react-native-reanimated';
import Play from './Play';

class VideoList extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    return (
      <View style={{flex: 1}}>
        <StatusBar hidden={true} translucent={true} />
        <Button
          title={'打开爱奇艺'}
          onPress={() =>
            this.props.navigation.navigate('Details', {
              url: 'https://m.iqiyi.com/',
            })
          }
        />
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
