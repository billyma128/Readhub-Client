import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { Card } from 'react-native-elements';
import { Spacer } from '../../components/ui';
import { Api, Helper } from '../../utils';
import DescriptionText from './DescriptionText';

export default class HomeContainer extends Component {
  static propTypes = {}
  state = {
    list: [],
  }

  componentDidMount() {
    Api.getTopicList({ lastCursor: '@null', pageSize: 10 })
      .then(({ data }) => this.setState({ list: data.data }));
  }

  navigateToWebView = (url, title) => {
    console.log(title); // eslint-disable-line no-console
    Helper.openLink(url);
  }

  render() {
    return (
      <ScrollView>
        {this.state.list.map(item => (
          <Card
            key={item.id}
            title={item.title}
            titleStyle={{ textAlign: 'left' }}
            containerStyle={{ borderWidth: 0, borderColor: 'transparent' }}
          >
            <DescriptionText
              url={item.newsArray[0].mobileUrl}
              text={item.summary}
              title={item.newsArray[0].title}
              onPress={this.navigateToWebView}
            />
          </Card>
        ))}
        <Spacer size={30} />
      </ScrollView>
    );
  }
}
