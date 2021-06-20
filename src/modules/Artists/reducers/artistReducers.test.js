import { artistsReducer } from '.';
import { setAlbums, setArtists, setTracks } from '../actions';

const state = {
  artists: [],
  albums: {},
  tracks: {},
};

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

test('artistsReducer should be added array of 3 elements in newState (artists)', () => {
  const newState = artistsReducer(state, setArtists(artists));
  expect(newState.artists.length).toBe(3);
});

test('artistsReducer should be put safety data in newState (artists)', () => {
  const newState = artistsReducer(state, setArtists(artists));
  expect(newState.artists[2].artistName).toBe('GG Alin');
});

test('artistsReducer should be put safety data in newState (albums)', () => {
  const newState = artistsReducer(state, setAlbums(albums, 0));
  expect(newState.albums[0][1].albumId).toBe(19);
});

test('artistsReducer should not changed previous data in state (albums)', () => {
  const state = {
    albums: {
      2: [{ albumName: 'DFaF', albumId: 3 }],
    },
  };
  const newState = artistsReducer(state, setAlbums(albums, 0));
  expect(newState.albums).toEqual({ ...state.albums, [0]: albums });
});

test('artistsReducer should be added value of new data in artistId key (albums)', () => {
  const artistId = 32;
  const newState = artistsReducer(state, setAlbums(albums, artistId));
  expect(newState.albums[artistId]).toEqual(albums);
});

test('artistsReducer should be put safety data in newState (tracks)', () => {
  const newState = artistsReducer(state, setTracks(tracks, 42));
  expect(newState.tracks[42][0].trackId).toBe(1);
});

test('artistsReducer should not changed previous data in state (tracks)', () => {
  const state = {
    tracks: {
      22: [
        { trackName: 'ACAB', trackId: 34 },
        { trackName: 'Cars', trackId: 9 },
        { trackName: 'Orion', trackId: 8 },
      ],
    },
  };
  const newState = artistsReducer(state, setTracks(tracks, 11));
  expect(newState.tracks).toEqual({ ...state.tracks, [11]: tracks });
});

test('artistsReducer should be added value of new data in trackId key (tracks)', () => {
  const trackId = 4;
  const newState = artistsReducer(state, setTracks(tracks, trackId));
  expect(newState.tracks[trackId]).toEqual(tracks);
});
