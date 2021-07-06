import React from 'react';
import { shallow } from 'enzyme';
import * as NetinfoModule from '@react-native-community/netinfo';
import { Navigation } from 'react-native-navigation';

import { ArtistsScreen } from './ArtistsScreen';
import * as SelectorsModule from '../selectors';

describe('ArtistsScreen test', () => {
  const componentId = '123';
  const artists = [
    { artistName: 'Rob Zombie', artistId: 110374 },
    { artistName: 'Cypres hill', artistId: 1449305168 },
    { artistName: 'Navel', artistId: 1530211376 },
  ];

  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => [artists]);
    jest.spyOn(NetinfoModule, 'useNetInfo').mockImplementation(() => ({ isConnected: true }));
  });

  test('Renders warning notification when isConnected is false', () => {
    jest.spyOn(NetinfoModule, 'useNetInfo').mockImplementation(() => ({ isConnected: false }));
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).not.toHaveLength(1);
  });

  test('Renders welcome notification when isConnected is true', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);

    expect(wrapper.find({ testId: 'Warning-notification' })).not.toHaveLength(1);
    expect(wrapper.find({ testId: 'Welcome-notification' })).toHaveLength(1);
  });

  test('searchValue should be equal newValue after using the onSearch', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    const newValue = 'str';

    wrapper.find('SearchBar').prop('onSearch')?.(newValue);

    expect(wrapper.find('SearchBar').prop('searchValue')).toBe(newValue);
  });

  test('Clears searchValue on clearInput', () => {
    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    const newValue = 'str';

    wrapper.find('SearchBar').prop('onSearch')?.(newValue);
    expect(wrapper.find('SearchBar').prop('searchValue')).toBe(newValue);

    wrapper.find('SearchBar').prop('clearInput')?.();
    expect(wrapper.find('SearchBar').prop('searchValue')).toBe('');
  });

  test('Renders FlatList when searchValue is not empty & FlatList data should be correct', () => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => artists);

    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    wrapper.find('SearchBar').prop('onSearch')?.('searchValue');

    expect(wrapper.find('FlatList').prop('data')).toEqual(artists);
  });

  test('Should return correct key & Artist prop values', () => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => artists);

    const { artistName, artistId } = artists[0];

    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    wrapper.find('SearchBar').prop('onSearch')?.('searchValue');
    const key = wrapper.find('FlatList').props().keyExtractor({ artistId });
    const artist = wrapper.find('FlatList').prop('renderItem')?.({ item: artists[0] });

    expect(key).toEqual(artistId);
    expect(artist.props.artistName).toEqual(artistName);
    expect(artist.props.artistId).toEqual(artistId);
  });

  test('onOpenAlbum should calls Navigation', () => {
    jest.spyOn(SelectorsModule, 'selectArtists').mockImplementation(() => artists);

    const { artistName, artistId } = artists[0];

    const navigationOptions = {
      component: {
        name: 'ArtistsAlbums',
        options: { topBar: { title: { text: `${artistName} albums` } } },
        passProps: { artistId },
      },
    };

    const wrapper = shallow(<ArtistsScreen componentId={componentId} />);
    wrapper.find('SearchBar').prop('onSearch')?.('searchValue');
    const artist = wrapper.find('FlatList').prop('renderItem')?.({ item: artists[0] });
    artist.props.onOpenAlbum(artistName, artistId);

    expect(Navigation.push).toHaveBeenCalledWith(componentId, navigationOptions);
    Navigation.push.mockClear();
  });
});
