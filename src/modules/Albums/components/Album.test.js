import React from 'react';
import { shallow } from 'enzyme';

import { Album } from './Album';
import { checkPrice } from '../../../utils';

describe('Album test', () => {
  const props = {
    artistName: 'Metallica',
    collectionName: 'Kill em all',
    artworkUrl60: 'iTunse.com/image',
    collectionPrice: 9.99,
    onOpenTracks: jest.fn(),
    collectionId: '2323',
  };
  const { artistName, collectionName, artworkUrl60, collectionPrice, onOpenTracks, collectionId } =
    props;

  test('Props in Album component should be correct', () => {
    const wrapper = shallow(<Album {...props} />);
    const artwork = wrapper.find({ testID: 'artwork' }).prop('source');
    const album = wrapper.find({ testID: 'collectionName' }).prop('children');
    const artist = wrapper.find({ testID: 'artistName' }).prop('children');
    const price = wrapper.find({ testID: 'collectionPrice' }).prop('children');

    expect(artwork).toEqual({ uri: artworkUrl60 });
    expect(album).toEqual(collectionName);
    expect(artist).toEqual(artistName);
    expect(price).toEqual(checkPrice(collectionPrice));
  });

  test('Should call onOpenTracks with correct params', () => {
    const wrapper = shallow(<Album {...props} />);
    wrapper.simulate('press');

    expect(onOpenTracks).toHaveBeenCalledWith(collectionName, collectionId);
  });
});
