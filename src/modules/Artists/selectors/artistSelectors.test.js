import { selectArtists, selectAlbums, selectTracks } from '.';

const state = {
  artistsReducer: {
    artists: [
      { artistName: 'Prodigy', artistId: 0 },
      { artistName: 'The garden', artistId: 1 },
      { artistName: 'GG Alin', artistId: 2 },
    ],
    albums: {
      0: [
        { albumName: 'The fat of the land', albumId: 15 },
        { albumName: 'The day is my enemy', albumId: 19 },
      ],
      2: [{ albumName: 'DFaF', albumId: 3 }],
    },
    tracks: {
      10: [
        { trackName: 'Pink', trackId: 1 },
        { trackName: 'Holy stain', trackId: 41 },
      ],
      22: [
        { trackName: 'ACAB', trackId: 34 },
        { trackName: 'Cars', trackId: 9 },
        { trackName: 'Orion', trackId: 8 },
      ],
    },
  },
};

test('selectArtists selector should be returned array ', () => {
  const result = selectArtists(state);
  expect(result.__proto__).toBe(Array.prototype);
});

test('selectArtists selector should be returned array of 3 elements', () => {
  const result = selectArtists(state);
  expect(result.length).toBe(3);
});

test('selectArtists selector should be returned safety data', () => {
  const result = selectArtists(state);
  expect(result[1].artistId).toBe(1);
});

test('selectAlbums selector should be returned array ', () => {
  const result = selectAlbums(0)(state);
  expect(result.__proto__).toBe(Array.prototype);
});

test('selectAlbums selector should be returned array of one element', () => {
  const result = selectAlbums(2)(state);
  expect(result.length).toBe(1);
});

test('selectAlbums selector should be returned safety data', () => {
  const result = selectAlbums(2)(state);
  expect(result[0].albumName).toBe('DFaF');
});

test('selectTracks selector should be returned array ', () => {
  const result = selectTracks(22)(state);
  expect(result.__proto__).toBe(Array.prototype);
});

test('selectTracks selector should be returned array of 2 elements', () => {
  const result = selectTracks(10)(state);
  expect(result.length).toBe(2);
});

test('selectTracks selector should be returned safety data', () => {
  const result = selectTracks(22)(state);
  expect(result[2].trackName).toBe('Orion');
});
