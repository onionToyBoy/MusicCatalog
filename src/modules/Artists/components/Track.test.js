import React from 'react';
import { shallow } from 'enzyme';

import { Track } from './Track';
import { timeConventer } from '../../../utils';

describe('Track test', () => {
  test('Props in Track component should be correct', () => {
    const trackName = 'Mascara';
    const trackTimeMillis = 32323232;
    const trackNumber = 4;
    const wrapper = shallow(
      <Track trackName={trackName} trackTimeMillis={trackTimeMillis} trackNumber={trackNumber} />,
    );
    const number = wrapper.find({ testID: 'number' }).prop('children');
    const name = wrapper.find({ testID: 'name' }).prop('children');
    const timeMillis = wrapper.find({ testID: 'timeMillis' }).prop('children');

    expect(number).toEqual(trackNumber);
    expect(name).toEqual(trackName);
    expect(timeMillis).toEqual(timeConventer(trackTimeMillis));
  });
});
