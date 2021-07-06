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
    const wrapper = shallow(<Artist {...props} />);
    const name = wrapper.find({ testID: 'name' }).prop('children');
    const genre = wrapper.find({ testID: 'genre' }).prop('children');

    expect(name).toEqual(props.artistName);
    expect(genre).toEqual(props.primaryGenreName);
  });

  test('Should call onOpenAlbum with correct params', () => {
    const wrapper = shallow(<Artist {...props} />);
    wrapper.simulate('press');

    expect(props.onOpenAlbum).toHaveBeenCalledWith(props.artistName, props.artistId);
  });
});
