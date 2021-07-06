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

  test('Props in Album component should be correct', () => {
    const wrapper = shallow(<Album {...props} />);
    const artwork = wrapper.find({ testID: 'artwork' }).prop('source');
    const collectionName = wrapper.find({ testID: 'collectionName' }).prop('children');
    const artistName = wrapper.find({ testID: 'artistName' }).prop('children');
    const collectionPrice = wrapper.find({ testID: 'collectionPrice' }).prop('children');

    expect(artwork).toEqual({ uri: props.artworkUrl60 });
    expect(collectionName).toEqual(props.collectionName);
    expect(artistName).toEqual(props.artistName);
    expect(collectionPrice).toEqual(checkPrice(props.collectionPrice));
  });

  test('Should call onOpenTracks with correct params', () => {
    const wrapper = shallow(<Album {...props} />);
    wrapper.simulate('press');

    expect(props.onOpenTracks).toHaveBeenCalledWith(props.collectionName, props.collectionId);
  });
});
