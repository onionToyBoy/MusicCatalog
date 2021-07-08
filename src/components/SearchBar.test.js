import React from 'react';
import { shallow } from 'enzyme';

import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  let searchValue;
  const onSearch = jest.fn(text => (searchValue = text));
  const clearInput = jest.fn(() => onSearch(''));
  const search = 'deftones';

  test('changetext should call onSearch function', () => {
    const wrapper = shallow(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const input = wrapper.find({ testID: 'input' });
    input.simulate('changeText', search);

    expect(onSearch).toHaveBeenCalledWith(search);
  });

  test('on Button press should call clearInput function', () => {
    const wrapper = shallow(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const crossButton = wrapper.find({ testID: 'crossButton' });
    crossButton.simulate('press');

    expect(clearInput).toHaveBeenCalled();
  });
});
