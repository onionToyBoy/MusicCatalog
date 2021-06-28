import React from 'react';
import { shallow } from 'enzyme';

import { ArtistsScreen } from './ArtistsScreen';
import * as NetinfoModule from '@react-native-community/netinfo';

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(() => ({ isConnected: false })),
}));
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: () => ({
    your: 'state',
  }),
}));

describe('ArtistsScreen test', () => {
  const componentId = '123';

  test(' Renders warning notification when isConnected is false', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).not.toHaveLength(1);
  });

  test(' Renders welcome notification when isConnected is true', () => {
    jest.spyOn(NetinfoModule, 'useNetInfo').mockImplementation(() => ({ isConnected: true }));
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).not.toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).toHaveLength(1);
  });
});
