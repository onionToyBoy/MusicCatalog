import React from 'react';
import { shallow } from 'enzyme';

import { ArtistsScreen } from './ArtistsScreen';
import * as NetinfoModule from '@react-native-community/netinfo';
import * as SelectorsModule from '../selectors';
import { Navigation } from 'react-native-navigation';

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(() => ({ isConnected: true })),
}));
jest.mock('react-native-navigation', () => ({
  Navigation: {
    push: jest.fn((componentId, obj) => {}),
  },
}));
jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: selector => selector(),
}));

describe('ArtistsScreen test', () => {
  const componentId = '123';
  const artists = [
    { artistName: 'Rob Zombie', artistId: 110374 },
    { artistName: 'Cypres hill', artistId: 1449305168 },
    { artistName: 'Navel', artistId: 1530211376 },
  ];
  const navigationObject = {
    component: {
      name: 'ArtistsAlbums',
      options: { topBar: { title: { text: 'undefined albums' } } },
      passProps: { artistId: undefined },
    },
  };
  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => [artists]);
    jest.spyOn(NetinfoModule, 'useNetInfo').mockImplementation(() => ({ isConnected: true }));
  });

  test(' Renders warning notification when isConnected is false', () => {
    jest.spyOn(NetinfoModule, 'useNetInfo').mockImplementation(() => ({ isConnected: false }));
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).not.toHaveLength(1);
  });

  test(' Renders welcome notification when isConnected is true', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).not.toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).toHaveLength(1);
  });

  test('New test', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    const newValue = 'str';

    wrapper.find('SearchBar').prop('onSearch')?.(newValue);

    expect(wrapper.find('SearchBar').prop('searchValue')).toBe(newValue);
  });

  test('On clearInput', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    const newValue = 'str';

    wrapper.find('SearchBar').prop('onSearch')?.(newValue);
    expect(wrapper.find('SearchBar').prop('searchValue')).toBe(newValue);

    wrapper.find('SearchBar').prop('clearInput')?.();
    expect(wrapper.find('SearchBar').prop('searchValue')).toBe('');
  });

  test('FlatList', () => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => artists);

    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    const newValue = 'str';
    wrapper.props().children[0].props.onSearch('sdsdsd');
    wrapper.find('SearchBar').prop('onSearch')?.(newValue);
    const flatList = wrapper.find('FlatList');
    const artist = flatList.props().renderItem(flatList.props().data[0]);
    artist.props.onOpenAlbum();

    expect(Navigation.push).toHaveBeenCalledWith(componentId, navigationObject);
  });
});
