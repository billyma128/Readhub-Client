import React from 'react';
import renderer from 'react-test-renderer';

import AboutUs from '../../../src/containers/Settings/AboutUs';

describe('test about us on Settings', () => {
  it('renders correctly', () => {
    const tree = renderer.create( // eslint-disable-line no-unused-vars
      <AboutUs />,
    );
  });
});
