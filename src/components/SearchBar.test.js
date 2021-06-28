import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import { SearchBar } from './SearchBar';

describe('SearchBar component', () => {
  let searchValue;
  const onSearch = jest.fn(text => (searchValue = text));
  const clearInput = jest.fn(() => onSearch(''));
  const search = 'deftones';

  test('onSearch should be changed value of TextInput', () => {
    onSearch(search);

    const component = renderer.create(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const root = component.root;
    const input = root.findByType('TextInput');

    expect(input.props.value).toBe(search);
  });

  test('clearInput should be removed value of TextInput', () => {
    onSearch(search);
    clearInput();

    const component = renderer.create(
      <SearchBar onSearch={onSearch} clearInput={clearInput} searchValue={searchValue} />,
    );
    const root = component.root;
    const input = root.findByType('TextInput');

    expect(input.props.value).toBe('');
  });
});
