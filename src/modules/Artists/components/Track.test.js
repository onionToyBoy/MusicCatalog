import React from 'react';
import { shallow } from 'enzyme';

import { Track } from './Track';
import { timeConventer } from '../../../utils';

describe('Track test', () => {
  const props = {
    trackName: 'Mascara',
    trackTimeMillis: 32323232,
    trackNumber: 4,
  };

  test('Props in Track component should be correct', () => {
    const wrapper = shallow(<Track {...props} />);
    const number = wrapper.find({ testID: 'number' }).prop('children');
    const name = wrapper.find({ testID: 'name' }).prop('children');
    const timeMillis = wrapper.find({ testID: 'timeMillis' }).prop('children');

    expect(number).toEqual(props.trackNumber);
    expect(name).toEqual(props.trackName);
    expect(timeMillis).toEqual(timeConventer(props.trackTimeMillis));
  });
});
