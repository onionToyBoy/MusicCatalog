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

  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectTracks').mockImplementation(() => () => tracks);
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
});
