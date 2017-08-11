import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { ScrollView, View, StyleSheet } from 'react-native';
import { Card } from 'react-native-elements';
import Spinkit from 'react-native-spinkit';
import { Spacer } from '../../components/ui';
import { request } from '../../utils';
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
    type: PropTypes.string,
  }
  static defaultProps = {
    type: 'topic',
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
    return this.getList(new Date().getTime());
  }

  getList(lastCursor) {
    return request(`https://api.readhub.me/${this.props.type}?lastCursor=${lastCursor}&pageSize=10`)
      .then(({ data }) => {
        this.setState({ list: data.data, loading: false });
      })
      .catch(error => console.error(error));  // eslint-disable-line
  }

  render() {
    return (
      <ScrollView>
        {/* <Text>{JSON.stringify(this.state.list, null, 2)}</Text> */}
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
              url={item.newsArray ? item.newsArray[0].mobileUrl : item.url}
              text={item.summary}
              title={item.title}
              onPress={this.props.onNavigateToWebView}
            />
          </Card>
        )) : null}
        <Spacer size={30} />
      </ScrollView>
    );
  }
}
