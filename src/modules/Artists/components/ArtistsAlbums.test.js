import React from 'react';
import { shallow } from 'enzyme';
import { Navigation } from 'react-native-navigation';

import { ArtistsAlbums } from './ArtistsAlbums';
import * as SelectorsModule from '../selectors';
import { routes } from '../../../constants/routes';

describe('ArtistsAlbums test', () => {
  const props = { componentId: '1234', artistId: '4321' };
  const albums = [
    { albumName: 'The fat of the land', collectionId: 15 },
    { albumName: 'The day is my enemy', collectionId: 19 },
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
            rightButtons: [{ component: { name: routes.FavoriteButton } }],
          },
        },
      },
    };

    const wrapper = shallow(<ArtistsAlbums {...props} />);
    const album = wrapper.find({ testID: 'albumList' }).prop('renderItem')?.({ item: albums[0] });
    album.props.onOpenTracks(albumName, collectionId);

    expect(Navigation.push).toHaveBeenCalledWith(props.componentId, navigationOptions);
  });
});
