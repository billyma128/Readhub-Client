import { Linking } from 'react-native';
import helper from '../../src/utils/helper';

describe('helper open link test', () => {
  it('should call linking function', () => {
    const spy = jest.spyOn(Linking, 'canOpenURL');
    helper.openLink('https://mazhixiong.com');
    expect(spy).toBeCalledWith('https://mazhixiong.com');
  });
});
