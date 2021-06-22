import { artistsReducer, INITIAL_STATE } from './index';
import { setAlbums, setArtists, setTracks } from '../actions';

describe('Artists reducer', () => {
  const artists = [
    { artistName: 'Prodigy', artistId: 0 },
    { artistName: 'The garden', artistId: 1 },
    { artistName: 'GG Alin', artistId: 2 },
  ];

  const albums = [
    { albumName: 'The fat of the land', albumId: 15 },
    { albumName: 'The day is my enemy', albumId: 19 },
  ];

  const tracks = [
    { trackName: 'Pink', trackId: 1 },
    { trackName: 'Holy stain', trackId: 41 },
  ];

  test('artistsReducer should be put safety data in newState (artists)', () => {
    const newState = artistsReducer(INITIAL_STATE, setArtists(artists));

    expect(newState.artists).toBe(artists);
  });

  test('artistsReducer should not changed previous data in state (albums)', () => {
    const artistId = 0;
    const defaultState = {
      ...INITIAL_STATE,
      albums: {
        2: [{ albumName: 'DFaF', albumId: 3 }],
      },
    };
    const expectedState = {
      ...defaultState,
      albums: { ...defaultState.albums, [artistId]: albums },
    };
    const newState = artistsReducer(defaultState, setAlbums(albums, artistId));

    expect(newState).toEqual(expectedState);
  });

  test('artistsReducer should not changed previous data in state (tracks)', () => {
    const albumId = 11;
    const defaultState = {
      ...INITIAL_STATE,
      tracks: {
        22: [{ trackName: 'Orion', trackId: 8 }],
      },
    };
    const expectedState = {
      ...defaultState,
      tracks: { ...defaultState.tracks, [albumId]: tracks },
    };
    const newState = artistsReducer(defaultState, setTracks(tracks, albumId));

    expect(newState).toEqual(expectedState);
  });

  test('Default section should be returned initial state', () => {
    const newState = artistsReducer(INITIAL_STATE, {});

    expect(newState).toBe(INITIAL_STATE);
  });
});
