import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'react-native-navigation';

import { ArtistsAlbums } from './ArtistsAlbums';
import * as SelectorsModule from '../selectors';
import { routes } from '../../../constants/routes';

describe('ArtistsAlbums test', () => {
  const props = { componentId: '1234', artistId: '4321', artistName: 'Freez' };
  const albums = [
    {
      albumName: 'The fat of the land',
      collectionId: 15,
      collectionPrice: 3.32,
      artworkUrl60: '/dsds/refdff/com',
    },
    {
      albumName: 'The day is my enemy',
      collectionId: 19,
      collectionPrice: 4.12,
      artworkUrl60: 'haha/bebe.ua',
    },
  ];

  afterEach(() => {
    Navigation.push.mockClear();
  });

  beforeEach(() => {
    jest.spyOn(SelectorsModule, 'selectAlbums').mockImplementation(() => () => albums);
  });

  test('Renders FlatList with data correct', () => {
    const wrapper = shallow(<ArtistsAlbums {...props} />);

    expect(wrapper.find({ testID: 'albumList' }).prop('data')).toEqual(albums);
  });

  test('Should return correct key & Album prop values', () => {
    const { albumName, collectionId } = albums[0];

    const wrapper = shallow(<ArtistsAlbums {...props} />);
    const album = wrapper.find({ testID: 'albumList' }).prop('renderItem')?.({ item: albums[0] });
    const key = wrapper.find({ testID: 'albumList' }).prop('keyExtractor')?.({ collectionId });

    expect(key).toEqual(collectionId);
    expect(album.props.albumName).toEqual(albumName);
    expect(album.props.collectionId).toEqual(collectionId);
  });

  test('onOpenAlbum should calls Navigation', () => {
    const { albumName, collectionId, collectionPrice, artworkUrl60 } = albums[0];
    const { artistName } = props;

    const navigationOptions = {
      component: {
        name: routes.AlbumTracks,
        passProps: {
          albumId: collectionId,
          collectionName: albumName,
          collectionPrice,
          artworkUrl60,
          artistName,
        },
      },
    };

    const wrapper = shallow(<ArtistsAlbums {...props} />);
    const album = wrapper.find({ testID: 'albumList' }).prop('renderItem')?.({ item: albums[0] });
    album.props.onOpenTracks(albumName, collectionId, collectionPrice, artworkUrl60);

    expect(Navigation.push).toHaveBeenCalledWith(props.componentId, navigationOptions);
  });
});
