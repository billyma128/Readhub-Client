import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { HomeContainer } from '../../../src/containers';

describe('test home', () => {
  it('renders correctly', () => {
    // eslint-disable-next-line no-unused-vars
    const tree = renderer.create(
      <HomeContainer />,
    );
  });
});
