import React from 'react';
import { shallow } from 'enzyme';

import { Track } from './Track';
import { timeConventer } from '../../../utils';

jest.mock('../../../utils');

describe('Track test', () => {
  const props = {
    trackName: 'Mascara',
    trackTimeMillis: 32323232,
    trackNumber: 4,
  };

  test('Props in Track component should be correct', () => {
    const component = shallow(<Track {...props} />);
    const number = component.find('Text').at(0).props().children;
    const name = component.find('Text').at(1).props().children;
    const timeMillis = component.find('Text').at(2).props().children;

    expect(number).toEqual(props.trackNumber);
    expect(name).toEqual(props.trackName);
    expect(timeMillis).toEqual(timeConventer(props.trackTimeMillis));
    expect(timeConventer).toHaveBeenCalledWith(props.trackTimeMillis);
  });
});
