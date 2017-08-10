import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { AppStyles } from '../../theme/';
import { Text } from '../ui/';

const Placeholder = ({ text }) => (
  <View style={[AppStyles.container, AppStyles.containerCentered]}>
    <Text>{text}</Text>
  </View>
);

Placeholder.propTypes = { text: PropTypes.string };
Placeholder.defaultProps = { text: 'Coming soon...' };
Placeholder.componentName = 'Placeholder';

export default Placeholder;
