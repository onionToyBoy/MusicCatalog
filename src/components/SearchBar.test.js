import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  let searchValue;
  const onSearch = jest.fn(text => (searchValue = text));
  const clearInput = jest.fn(() => onSearch(''));
  const search = 'deftones';

  test('onSearch should change value of TextInput', () => {
    const wrapper = shallow(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const input = wrapper.find({ testID: 'input' });
    input.simulate('changeText', search);

    expect(searchValue).toBe(search);
  });

  test('clearInput should remove value of TextInput', () => {
    const wrapper = shallow(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const input = wrapper.find({ testID: 'input' });
    const crossButton = wrapper.find({ testID: 'crossButton' });
    input.simulate('changeText', search);
    crossButton.simulate('press');

    expect(searchValue).toBe('');
  });
});
