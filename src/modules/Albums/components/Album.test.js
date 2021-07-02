import React from 'react';
import { shallow } from 'enzyme';

import { Album } from './Album';
import { checkPrice } from '../../../utils';

jest.mock('../../../utils');

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
    const component = shallow(<Album {...props} />);
    const artwork = component.find('Image').props().source;
    const collectionName = component.find('Text').at(0).props().children;
    const artistName = component.find('Text').at(1).props().children;
    const collectionPrice = component.find('Text').at(2).props().children;
    component.simulate('press');

    expect(checkPrice).toHaveBeenCalledWith(props.collectionPrice);
    expect(props.onOpenTracks).toHaveBeenCalledWith(props.collectionName, props.collectionId);
    expect(artwork).toEqual({ uri: props.artworkUrl60 });
    expect(collectionName).toEqual(props.collectionName);
    expect(artistName).toEqual(props.artistName);
    expect(collectionPrice).toEqual(checkPrice(props.collectionPrice));
  });
});
