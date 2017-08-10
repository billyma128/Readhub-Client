import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Spinkit from 'react-native-spinkit';
import { Spacer } from '../../components/ui';
import { Api, Helper } from '../../utils';
import DescriptionText from './DescriptionText';
import { AppColors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class HomeContainer extends Component {
  static propTypes = {}
  state = {
    list: [],
    loading: false,
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
    Api.getTopicList({ lastCursor: '@null', pageSize: 10 })
      .then(({ data }) => this.setState({ list: data.data, loading: false }));
  }

  navigateToWebView = (url, title) => {
    console.log(title); // eslint-disable-line no-console
    Helper.openLink(url);
  }

  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Spinkit
            style={{ marginBottom: 50 }}
            isVisible={this.state.loading}
            type={'ChasingDots'}
            color={AppColors.brand.primary}
          />
        </View>
        {!this.state.loading ? this.state.list.map(item => (
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
        )) : null}
        <Spacer size={30} />
      </ScrollView>
    );
  }
}
