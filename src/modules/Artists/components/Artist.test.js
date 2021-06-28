import React from 'react';
import { shallow } from 'enzyme';

import { Artist } from './Artist';

describe('Artist test', () => {
  const props = {
    artistName: 'Deftones',
    primaryGenreName: 'Rock',
    onOpenAlbum: jest.fn(),
    artistId: 123,
  };

  test('Props in Artist component should be correct', () => {
    const component = shallow(<Artist {...props} />);
    const name = component.find('Text').at(0).props().children;
    const genre = component.find('Text').at(1).props().children;
    component.simulate('press');

    expect(props.onOpenAlbum).toHaveBeenCalledWith(props.artistName, props.artistId);
    expect(name).toEqual(props.artistName);
    expect(genre).toEqual(props.primaryGenreName);
  });
});
