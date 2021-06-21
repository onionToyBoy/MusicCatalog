import { getAlbums, getTracks, searchArtist } from '.';
import { getSpecificAlbums } from '../../../requests/getSpecificAlbums';
import { getSpecificTracks } from '../../../requests/getSpecificTracks';
import { searchArtists } from '../../../requests/searchArtists';
import { setAlbums, setArtists, setLoadingStatus, setTracks } from '../actions';

jest.mock('../../../requests/searchArtists');
jest.mock('../../../requests/getSpecificAlbums');
jest.mock('../../../requests/getSpecificTracks');

const searchArtistsMock = searchArtists;
const getSpecificAlbumsMock = getSpecificAlbums;
const getSpecificTracksMock = getSpecificTracks;

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
  resultCount: 10,
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

searchArtistsMock.mockReturnValue(artistsResult);
getSpecificAlbumsMock.mockReturnValue(albumsResult);
getSpecificTracksMock.mockReturnValue(tracksResult);

test('Dispatch in searchArtist should be called 3 times', async () => {
  const thunk = searchArtist('rob');
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toBeCalledTimes(3);
});

test('Dispatches in searchArtist should be correct', async () => {
  const thunk = searchArtist('rob');
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
  expect(dispatch).toHaveBeenNthCalledWith(2, setArtists(artistsResult.results));
  expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
});

test('Dispatch in getAlbums should be called 3 times', async () => {
  const thunk = getAlbums(59080604);
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toBeCalledTimes(3);
});

test('Dispatches in getAlbums should be correct', async () => {
  const thunk = getAlbums(59080604);
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
  expect(dispatch).toHaveBeenNthCalledWith(2, setAlbums(albumsResult.results.slice(1), 59080604));
  expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
});

test('Dispatch in getTracks should be called 3 times', async () => {
  const thunk = getTracks(59080607);
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toBeCalledTimes(3);
});

test('Dispatches in getTracks should be correct', async () => {
  const thunk = getTracks(59080607);
  const dispatch = jest.fn();
  await thunk(dispatch);
  expect(dispatch).toHaveBeenNthCalledWith(1, setLoadingStatus(true));
  expect(dispatch).toHaveBeenNthCalledWith(2, setTracks(tracksResult.results.slice(1), 59080607));
  expect(dispatch).toHaveBeenNthCalledWith(3, setLoadingStatus(false));
});
