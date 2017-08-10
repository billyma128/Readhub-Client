import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements';

export default class SettingsContainer extends Component {
  static propTypes = {}
  state = {}
  render() {
    return (
      <View>
        <List>
          <ListItem
            title={'关于'}
            leftIcon={{ name: 'info' }}
          />
          <ListItem
            title={'分享给好友'}
            leftIcon={{ name: 'group-work' }}
          />
          <ListItem
            title={'觉得不错，给个好评'}
            leftIcon={{ name: 'thumb-up' }}
          />
          <ListItem
            title={'发现Bug'}
            leftIcon={{ name: 'bug-report' }}
          />
          <ListItem
            title={'功能反馈'}
            leftIcon={{ name: 'feedback' }}
          />
        </List>
        <List>
          <ListItem
            title={'支持开发'}
            leftIcon={{ name: 'work' }}
          />
        </List>
      </View>
    );
  }
}
