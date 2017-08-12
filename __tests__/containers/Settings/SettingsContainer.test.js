import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { SettingsContainer } from '../../../src/containers';

describe('test settings', () => {
  it('renders correctly', () => {
    // eslint-disable-next-line no-unused-vars
    const tree = renderer.create(
      <SettingsContainer />,
    );
  });
});
