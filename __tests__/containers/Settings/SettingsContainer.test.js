import { Share } from 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import * as chai from 'chai';
import { ListItem } from 'react-native-elements';
import { SettingsContainer } from '../../../src/containers';

describe('test settings', () => {
  it('renders correctly', () => {
    // eslint-disable-next-line no-unused-vars
    const tree = renderer.create(
      <SettingsContainer />,
    );
  });

  it('test onpress trigger for share', () => {
    const spy = jest.spyOn(Share, 'share');
    const wrapper = shallow(<SettingsContainer />);
    chai.expect(wrapper.find(ListItem)).to.have.length(7);
    chai.expect(wrapper.find({ title: '分享给好友' })).to.have.length(1);
    wrapper.find({ title: '分享给好友' }).props().onPress();
    expect(spy).toHaveBeenCalledWith({
      title: 'Readhub - 科技新闻阅读，每天 3 分钟',
      message: '每天三分钟的科技新闻聚合阅读',
      url: 'https://readhub.me',
    });
  });
});
