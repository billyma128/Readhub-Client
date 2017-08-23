import React from 'react';
import { Actions, Scene } from 'react-native-router-flux';
import { HomeContainer, SettingsContainer } from '../containers';
import AppConfig from '../constants/config';
import { AppSizes, AppStyles } from '../theme';
import Placeholder from '../components/general/Placeholder';
import { TabIcon } from '../components/ui';
import AboutUs from '../containers/Settings/AboutUs';

/* eslint-disable react/prefer-stateless-function */

const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

export default Actions.create(
  <Scene key="root" {...AppConfig.navbarProps}>
    <Scene key="tabs" initial={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      <Scene
        {...navbarPropsTabs}
        key={'home'}
        title={'Readhub'}
        iconName={'md-home'}
        iconType={'ionicon'}
        icon={TabIcon}
        component={HomeContainer}
      />
      <Scene
        {...navbarPropsTabs}
        key={'settings'}
        title={'设置'}
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
    <Scene
      {...navbarPropsTabs}
      key={'aboutUs'}
      duration={0}
      title={'关于'}
      component={AboutUs}
    />
  </Scene>,
);
