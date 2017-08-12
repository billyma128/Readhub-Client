import React, { Component } from 'react';
import { View, Share } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import DeviceInfo from 'react-native-device-info';
import Helper from '../../utils/helper';

export default class SettingsContainer extends Component {
  static propTypes = {}
  state = {
    version: DeviceInfo.getVersion(),
  }
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
            onPress={() => Share.share({
              title: 'Readhub - 科技新闻阅读，每天 3 分钟',
              message: '每天三分钟的科技新闻聚合阅读',
              url: 'https://readhub.me',
            })}
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
            title={'作者网站'}
            leftIcon={{ name: 'link' }}
            onPress={() => Helper.openLink('https://mazhixiong.com')}
          />
          <ListItem
            title={'当前版本'}
            leftIcon={{ name: 'copyright' }}
            rightTitle={this.state.version}
            hideChevron
          />
        </List>
      </View>
    );
  }
}
