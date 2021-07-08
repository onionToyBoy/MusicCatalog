import React from 'react';
import { shallow } from 'enzyme';

import { GeneralNotification } from './GeneralNotification';
import { colors } from '../constants/colors';

describe('GeneralNotification test', () => {
  test('Should render component with correct params', () => {
    const props = { symbol: '%', text: 'Test text', notificationColor: colors.GOLD };
    const wrapper = shallow(<GeneralNotification {...props} />);
    const symbol = wrapper.find({ testID: 'symbol' }).prop('children');
    const text = wrapper.find({ testID: 'text' }).prop('children');
    const color = wrapper.find({ testID: 'symbol' }).prop('style')[1].color;

    expect(symbol).toBe(props.symbol);
    expect(text).toBe(props.text);
    expect(color).toBe(props.notificationColor);
  });

  test('Should render component with default notificationColor', () => {
    const props = { symbol: '%', text: 'Test text' };
    const wrapper = shallow(<GeneralNotification {...props} />);
    const color = wrapper.find({ testID: 'symbol' }).prop('style')[1].color;

    expect(color).toBe(colors.BRIGHT_GRAY);
  });
});
