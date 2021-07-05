import React from 'react';
import { shallow } from 'enzyme';

import { AlbumTracks } from './AlbumTracks';
import * as SelectorsModule from '../selectors';

describe('ArtistsAlbums test', () => {
  const albumId = '4321';
  const tracks = [
    { trackName: 'Pink', trackId: 1 },
    { trackName: 'Holy stain', trackId: 41 },
  ];

  test('Renders FlatList with data correct', () => {
    jest.spyOn(SelectorsModule, 'selectTracks').mockImplementation(() => () => tracks);

    const wrapper = shallow(<AlbumTracks albumId={albumId} />);

    expect(wrapper.find('FlatList').prop('data')).toEqual(tracks);
  });

  test('Should return correct key & Track prop values', () => {
    jest.spyOn(SelectorsModule, 'selectTracks').mockImplementation(() => () => tracks);

    const { trackName, trackId } = tracks[0];

    const wrapper = shallow(<AlbumTracks albumId={albumId} />);
    const track = wrapper.find('FlatList').prop('renderItem')?.({ item: tracks[0] });
    const key = wrapper.find('FlatList').props().keyExtractor({ trackId });

    expect(key).toEqual(trackId);
    expect(track.props.trackName).toEqual(trackName);
    expect(track.props.trackId).toEqual(trackId);
  });
});
