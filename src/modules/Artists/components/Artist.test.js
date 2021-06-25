//import 'react-native';
import React from 'react';
import { shallow } from 'enzyme';

import { Artist } from './Artist';

//configure({ adapter: new Adapter() });

describe('Artist test', () => {
  const props = {
    artistName: 'Deftones',
    primaryGenreName: 'Rock',
    onOpenAlbum() {},
    artistId: 123,
  };

  test('Props in Artist component should be correct', () => {
    const component = shallow(<Artist {...props} />);
    //const onPressArtist = jest.fn();
    //expect(component.props().onPress).toEqual(onPressArtist);
    const name = component.find('Text').at(0).props().children;
    const genre = component.find('Text').at(1).props().children;

    expect(name).toEqual(props.artistName);
    expect(genre).toEqual(props.primaryGenreName);
    expect(component).toMatchSnapshot();
  });
});
