import React, { PureComponent } from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';

class DescriptionText extends PureComponent {
  handlePress = () => this.props.onPress(this.props.url, this.props.title)

  render() {
    return (
      <Text
        style={{ marginBottom: 10 }}
        numberOfLines={3}
        onPress={this.handlePress}
      >
        {this.props.text}
      </Text>
    );
  }
}

DescriptionText.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
};

export default DescriptionText;
