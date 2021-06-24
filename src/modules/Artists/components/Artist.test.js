import 'react-native';
import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import { Artist } from './Artist';

configure({ adapter: new Adapter() });

describe('Artist test', () => {
  const props = {
    artistName: 'Deftones',
    primaryGenreName: 'Rock',
    onOpenAlbum() {},
    artistId: 123,
  };

  test('Props in Artist component should be correct', () => {
    const component = shallow(<Artist {...props} />);

    //expect(component.props().onPress).toEqual(onPressArtist);
    expect(component.find('Text').at(0).props().children).toEqual(props.artistName);
    expect(component.find('Text').at(1).props().children).toEqual(props.primaryGenreName);
    expect(component).toMatchSnapshot();
  });
});
