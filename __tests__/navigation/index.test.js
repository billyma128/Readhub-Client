import 'react-native';
import { expect } from 'chai';

import scenes from '../../src/navigation';

describe('router test', () => {
  it('test router should currently', () => {
    expect(scenes.comingSoon.component.name).to.equal('Placeholder');
  });

  it('should return correct tabs key', () => {
    const tabs = scenes.tabs.children;

    expect(tabs[0]).to.eq('home');
    expect(tabs[1]).to.eq('settings');
  });
});
