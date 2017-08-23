import React, { Component } from 'react';
import { StyleSheet, Text, Platform } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import { Helper } from '../../utils';
import ContentList from './ContentList';
import { AppColors } from '../../theme';

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
  },
  tabbar: {
    backgroundColor: AppColors.brand.primary,
  },
  tabbarIndicator: {
    backgroundColor: '#FFF',
  },
  tabbarText: {
    color: '#FFF',
  },
});

export default class HomeContainer extends Component {
  static componentName = 'HomeContainer';
  static propTypes = {}
  state = {
    index: 0,
    routes: [
      { key: '1', title: '热门话题' },
      { key: '2', title: '科技动态' },
      { key: '3', title: '开发者资讯' },
    ],
  }

  handleIndexChange = index => this.setState({ index })

  navigateToWebView = (url, title) => {
    console.log(title); // eslint-disable-line no-console
    Helper.openLink(url);
  }

  renderHeader = props => (
    <TabBar
      {...props}
      style={styles.tabbar}
      indicatorStyle={styles.tabbarIndicator}
      renderLabel={scene => (
        <Text style={[styles.tabbarText]}>{scene.route.title}</Text>
      )}
    />
  )

  renderScene = SceneMap({
    1: () => <ContentList onNavigateToWebView={this.navigateToWebView} type={'topic'} />,
    2: () => <ContentList onNavigateToWebView={this.navigateToWebView} type={'technews'} />,
    3: () => <ContentList onNavigateToWebView={this.navigateToWebView} type={'news'} />,
  })

  render() {
    return (
      <TabViewAnimated
        lazy={Platform.OS === 'ios'}
        style={[styles.tabContainer]}
        navigationState={this.state}
        renderScene={this.renderScene}
        renderHeader={this.renderHeader}
        onIndexChange={this.handleIndexChange}
      />
    );
  }
}
