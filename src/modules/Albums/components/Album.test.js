import React from 'react';
import { shallow } from 'enzyme';

import { Album } from './Album';
import { checkPrice } from '../../../utils';

describe('Album test', () => {
  const collectionName = 'Kill em all';
  const artworkUrl60 = 'iTunse.com/image';
  const collectionPrice = 9.99;

  test('Props in Album component should be correct', () => {
    const artistName = 'Metallica';

    const wrapper = shallow(
      <Album
        artistName={artistName}
        collectionName={collectionName}
        artworkUrl60={artworkUrl60}
        collectionPrice={collectionPrice}
      />,
    );
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
    const collectionId = '2323';

    const onOpenTracks = jest.fn();
    const wrapper = shallow(
      <Album
        collectionName={collectionName}
        collectionId={collectionId}
        onOpenTracks={onOpenTracks}
        artworkUrl60={artworkUrl60}
        collectionPrice={collectionPrice}
      />,
    );
    wrapper.simulate('press');

    expect(onOpenTracks).toHaveBeenCalledWith(
      collectionName,
      collectionId,
      collectionPrice,
      artworkUrl60,
    );
  });
});
