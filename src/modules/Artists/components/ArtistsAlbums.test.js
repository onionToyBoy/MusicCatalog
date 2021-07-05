import React from 'react';
import { shallow } from 'enzyme';

import { ArtistsAlbums } from './ArtistsAlbums';
import * as SelectorsModule from '../selectors';
import { Navigation } from 'react-native-navigation';
import { routes } from '../../../constants/routes';

describe('ArtistsAlbums test', () => {
  const props = { componentId: '1234', artistId: '4321' };
  const albums = [
    { albumName: 'The fat of the land', collectionId: 15 },
    { albumName: 'The day is my enemy', collectionId: 19 },
  ];

  test('Renders FlatList with data correct', () => {
    jest.spyOn(SelectorsModule, 'selectAlbums').mockImplementation(() => () => albums);

    const wrapper = shallow(<ArtistsAlbums {...props} />);

    expect(wrapper.find('FlatList').prop('data')).toEqual(albums);
  });

  test('Should return correct key & Album prop values', () => {
    jest.spyOn(SelectorsModule, 'selectAlbums').mockImplementation(() => () => albums);

    const { albumName, collectionId } = albums[0];

    const wrapper = shallow(<ArtistsAlbums {...props} />);
    const album = wrapper.find('FlatList').prop('renderItem')?.({ item: albums[0] });
    const key = wrapper.find('FlatList').props().keyExtractor({ collectionId });

    expect(key).toEqual(collectionId);
    expect(album.props.albumName).toEqual(albumName);
    expect(album.props.collectionId).toEqual(collectionId);
  });

  test('onOpenAlbum should calls Navigation', () => {
    jest.spyOn(SelectorsModule, 'selectAlbums').mockImplementation(() => () => albums);

    const { albumName, collectionId } = albums[0];

    const navigationOptions = {
      component: {
        name: routes.AlbumTracks,
        passProps: {
          albumId: collectionId,
        },
        options: {
          topBar: {
            title: {
              text: albumName,
            },
          },
        },
      },
    };

    const wrapper = shallow(<ArtistsAlbums {...props} />);
    const album = wrapper.find('FlatList').prop('renderItem')?.({ item: albums[0] });
    album.props.onOpenTracks(albumName, collectionId);

    expect(Navigation.push).toHaveBeenCalledWith(props.componentId, navigationOptions);
    Navigation.push.mockClear();
  });
});
