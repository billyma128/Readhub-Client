import React from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import { HomeContainer, SettingsContainer } from '../containers';
import AppConfig from '../constants/config';
import { AppSizes, AppStyles } from '../theme';

/* eslint-disable react/prefer-stateless-function */

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

class TabIcon extends React.Component {
  render() {
    return (
      <Text style={{ color: this.props.selected ? 'red' : 'black' }}>{this.props.title}</Text>
    );
  }
}

TabIcon.propTypes = { title: PropTypes.string.isRequired, selected: PropTypes.bool };
TabIcon.defaultProps = { title: 'Home', selected: false };

export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'HOME'}
        icon={TabIcon}
        component={HomeContainer}
      />
      <Scene
        {...navbarPropsTabs}
        key={'settings'}
        title={'Settings'}
        icon={TabIcon}
        component={SettingsContainer}
      />
    </Scene>
  </Scene>,
);
