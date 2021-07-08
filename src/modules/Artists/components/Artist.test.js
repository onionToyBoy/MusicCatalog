import React from 'react';
import { shallow } from 'enzyme';

import { Artist } from './Artist';

describe('Artist test', () => {
  const artistName = 'Deftones';

  test('Props in Artist component should be correct', () => {
    const primaryGenreName = 'Rock';
    const wrapper = shallow(<Artist artistName={artistName} primaryGenreName={primaryGenreName} />);
    const name = wrapper.find({ testID: 'name' }).prop('children');
    const genre = wrapper.find({ testID: 'genre' }).prop('children');

    expect(name).toEqual(artistName);
    expect(genre).toEqual(primaryGenreName);
  });

  test('Should call onOpenAlbum with correct params', () => {
    const artistId = 123;
    const onOpenAlbum = jest.fn();
    const wrapper = shallow(
      <Artist artistName={artistName} artistId={artistId} onOpenAlbum={onOpenAlbum} />,
    );
    wrapper.simulate('press');

    expect(onOpenAlbum).toHaveBeenCalledWith(artistName, artistId);
  });
});
