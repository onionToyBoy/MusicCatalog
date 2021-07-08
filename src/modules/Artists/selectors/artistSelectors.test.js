import { selectArtists, selectAlbums, selectTracks } from '.';

describe('Artists selector', () => {
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

  test('selectArtists selector should  return artists', () => {
    const result = selectArtists(state);

    expect(result).toBe(state.artistsReducer.artists);
  });

  test('selectAlbums selector should return albums', () => {
    const artistId = 2;
    const result = selectAlbums(artistId)(state);

    expect(result).toBe(state.artistsReducer.albums[artistId]);
  });

  test('selectTracks selector should return tracks', () => {
    const albumId = 10;
    const result = selectTracks(albumId)(state);

    expect(result).toBe(state.artistsReducer.tracks[albumId]);
  });
});
