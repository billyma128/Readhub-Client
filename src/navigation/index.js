import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
import { Actions, Scene } from 'react-native-router-flux';
import { Icon } from 'react-native-elements';
import { HomeContainer, SettingsContainer } from '../containers';
import AppConfig from '../constants/config';
import { AppSizes, AppStyles, AppColors } from '../theme';
import Placeholder from '../components/general/Placeholder';

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
      <View>
        <Icon name={this.props.iconName} type={this.props.iconType} color={this.props.selected ? AppColors.brand.primary : '#767676'} />
        <Text style={{ color: this.props.selected ? AppColors.brand.primary : '#767676' }}>{this.props.title}</Text>
      </View>
    );
  }
}

TabIcon.propTypes = {
  title: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  iconType: PropTypes.string.isRequired };

TabIcon.defaultProps = { title: 'Home', selected: false, iconName: 'home', iconType: 'ionicon' };

export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'Home'}
        iconName={'md-home'}
        iconType={'ionicon'}
        icon={TabIcon}
        rightTitle={'comingsoon'}
        onRight={() => Actions.comingSoon()}
        rightButtonTextStyle={AppStyles.navbarTitle}
        component={HomeContainer}
      />
      <Scene
        {...navbarPropsTabs}
        key={'settings'}
        title={'Settings'}
        iconName={'md-compass'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={SettingsContainer}
      />
    </Scene>
    <Scene
      {...navbarPropsTabs}
      key={'comingSoon'}
      title={'Coming Soon'}
      component={Placeholder}
    />
  </Scene>,
);
