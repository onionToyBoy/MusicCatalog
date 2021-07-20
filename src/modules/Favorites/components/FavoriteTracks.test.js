import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'react-native-navigation';

import { FavoriteTracks } from './FavoriteTracks';
import * as SelectorsModule from '../selectors';

describe('FavoriteTracks test', () => {
  const albumId = '4321';
  const album = {
    album: { collectionId: 1 },
    tracks: [
      { trackName: 'Doom', trackId: 3 },
      { trackName: 'SFC', trackId: 6 },
    ],
  };

  afterEach(() => {
    Navigation.pop.mockClear();
  });

  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectFavoriteAlbums').mockImplementation(() => () => album);
  });

  test('Renders FlatList with data correct', () => {
    const wrapper = shallow(<FavoriteTracks albumId={albumId} />);

    expect(wrapper.find('FlatList').prop('data')).toEqual(album.tracks);
  });

  test('Should return correct key & Track prop values', () => {
    const { trackName, trackId } = album.tracks[0];

    const wrapper = shallow(<FavoriteTracks albumId={albumId} />);
    const track = wrapper.find({ testID: 'favoreteTracksList' }).prop('renderItem')?.({
      item: album.tracks[0],
    });
    const key = wrapper.find({ testID: 'favoreteTracksList' }).prop('keyExtractor')?.({ trackId });

    expect(key).toEqual(trackId);
    expect(track.props.trackName).toEqual(trackName);
    expect(track.props.trackId).toEqual(trackId);
  });

  test('Should call Navigation.pop on press back', () => {
    const wrapper = shallow(<FavoriteTracks albumId={albumId} />);
    wrapper.find('Header').prop('onPressBack')();

    expect(Navigation.pop).toHaveBeenCalled();
  });
});
