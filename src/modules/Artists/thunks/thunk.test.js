import { getAlbums, getTracks, searchArtist } from './index';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { searchArtists } from '../../../requests/searchArtists';
import { setAlbums, setArtists, setErrorStatus, setLoadingStatus, setTracks } from '../actions';

jest.mock('../../../requests/searchArtists');
jest.mock('../../../requests/getSpecificAlbums');
jest.mock('../../../requests/getSpecificTracks');

describe('Artists thunk', () => {
  const artistsResult = {
    results: [
      { artistName: 'Rob Zombie', artistId: 110374 },
      { artistName: 'Rob', artistId: 1449305168 },
      { artistName: 'R.O.B.', artistId: 1530211376 },
    ],
  };

  const albumsResult = {
    results: [
      { artistName: 'Team Sleep', artistId: 59080604 },
      {
        artistId: 59080604,
        collectionId: 61077263,
        artistName: 'Team Sleep',
        collectionName: 'Team Sleep',
      },
      {
        artistId: 59080604,
        collectionId: 1002218986,
        artistName: 'Team Sleep',
        collectionName: 'Woodstock Sessions, Vol. 4',
      },
    ],
  };

  const tracksResult = {
    results: [
      { collectionId: 1002218986, artistName: 'Team Sleep' },
      {
        artistId: 59080604,
        collectionId: 1002218986,
        trackId: 1002218991,
        artistName: 'Team Sleep',
        collectionName: 'Woodstock Sessions, Vol. 4',
        trackName: 'Your Skull Is Red',
      },
      {
        artistId: 59080604,
        collectionId: 1002218986,
        trackId: 1002219004,
        artistName: 'Team Sleep',
        collectionName: 'Woodstock Sessions, Vol. 4',
        trackName: 'Live from the Stage',
      },
    ],
  };

  test('Dispatches in searchArtist should be correct', async () => {
    searchArtists.mockReturnValue(artistsResult);

    const searchValue = 'rob';
    const dispatch = jest.fn();
    await searchArtist(searchValue)(dispatch);

    expect(searchArtists).toHaveBeenCalledWith(searchValue);
    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setArtists(artistsResult.results));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });

  test('Dispatches in searchArtist should be rejected', async () => {
    searchArtists.mockRejectedValue(new Error());

    const searchValue = 'rob';
    const thunk = searchArtist(searchValue);
    const dispatch = jest.fn();
    await thunk(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setErrorStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });

  test('Dispatches in searchAlbums should be correct', async () => {
    getSpecificAlbums.mockReturnValue(albumsResult);

    const artistId = 59080604;
    const updatedAlbums = albumsResult.results.slice(1);
    const dispatch = jest.fn();
    await getAlbums(artistId)(dispatch);

    expect(getSpecificAlbums).toHaveBeenCalledWith(artistId);
    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setAlbums(updatedAlbums, artistId));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });

  test('Dispatches in searchAlbums should be rejected', async () => {
    getSpecificAlbums.mockRejectedValue(new Error());

    const artistId = 59080604;
    const dispatch = jest.fn();
    await getAlbums(artistId)(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setErrorStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });

  test('Dispatches in searchTracks should be correct', async () => {
    getSpecificTracks.mockReturnValue(tracksResult);

    const albumId = 59080607;
    const updatedTracks = tracksResult.results.slice(1);
    const dispatch = jest.fn();
    await getTracks(albumId)(dispatch);

    expect(getSpecificTracks).toHaveBeenCalledWith(albumId);
    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setTracks(updatedTracks, albumId));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });

  test('Dispatches in searchTracks should be rejected', async () => {
    getSpecificTracks.mockRejectedValue(new Error());

    const albumId = 59080607;
    const dispatch = jest.fn();
    await getTracks(albumId)(dispatch);

    expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(2, setErrorStatus(true));
    expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
  });
});
