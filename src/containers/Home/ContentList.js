import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet, Text } from 'react-native';
import { Card } from 'react-native-elements';
import Spinkit from 'react-native-spinkit';
import { Spacer } from '../../components/ui';
import { Api } from '../../utils';
import DescriptionText from './DescriptionText';
import { AppColors } from '../../theme';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default class ContentList extends PureComponent {
  static propTypes = {
    onNavigateToWebView: PropTypes.func.isRequired,
    keyClass: PropTypes.string,
  }
  static defaultProps = {
    keyClass: 'topic',
  }
  state = {
    list: [],
    loading: false,
    error: '',
  }

  componentWillMount() {
    this.setState({ loading: true });
  }

  componentDidMount() {
    Api.get(this.props.keyClass, { lastCursor: new Date().getTime(), pageSize: 10 })
      .then(({ data }) => this.setState({ list: data.data, loading: false }))
      .catch(e => this.setState({ error: e }));
  }

  render() {
    return (
      <ScrollView>
        <Text>{this.state.error}</Text>
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
              onPress={this.props.onNavigateToWebView}
            />
          </Card>
        )) : null}
        <Spacer size={30} />
      </ScrollView>
    );
  }
}
