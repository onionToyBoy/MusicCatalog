import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'react-native-navigation';

import { AlbumTracks } from './AlbumTracks';
import * as SelectorsModule from '../selectors';
import * as FavoritesSelectors from '../../Favorites/selectors';

describe('AlbumsTrack test', () => {
  const albumId = '4321';
  const tracks = [
    { trackName: 'Pink', trackId: 1 },
    { trackName: 'Holy stain', trackId: 41 },
  ];

  const album = {
    album: { collectionId: 1 },
    tracks: [{}, {}],
  };

  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectTracks').mockImplementation(() => () => tracks);
    jest.spyOn(FavoritesSelectors, 'selectFavoriteAlbums').mockImplementation(() => () => album);
  });

  test('Renders FlatList with data correct', () => {
    const wrapper = shallow(<AlbumTracks albumId={albumId} />);

    expect(wrapper.find('FlatList').prop('data')).toEqual(tracks);
  });

  test('Should return correct key & Track prop values', () => {
    const { trackName, trackId } = tracks[0];

    const wrapper = shallow(<AlbumTracks albumId={albumId} />);
    const track = wrapper.find({ testID: 'trackList' }).prop('renderItem')?.({ item: tracks[0] });
    const key = wrapper.find({ testID: 'trackList' }).prop('keyExtractor')?.({ trackId });

    expect(key).toEqual(trackId);
    expect(track.props.trackName).toEqual(trackName);
    expect(track.props.trackId).toEqual(trackId);
  });

  test('Should call Navigation.pop on press back', () => {
    const wrapper = shallow(<AlbumTracks albumId={albumId} />);
    wrapper.find('Header').prop('onPressBack')();

    expect(Navigation.pop).toHaveBeenCalled();
  });
});
