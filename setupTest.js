import React from 'react';
import Enzyme, { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);

//const React = jest.requireActual('react');

configure({ adapter: new Adapter() });

jest.mock('react-native-navigation', () => ({}));
jest.mock('@react-native-community/netinfo', () => ({}));
//jest.mock('react-redux', () => ({useDispatch}));


// let hooksEnabled = false;

// const mockedUseEffect = mockUseEffect();
// const mockedUseLayoutEffect = mockUseEffect();
// jest.mock('react', () => ({
//   ...React,
//   useEffect: (...args) => {
//     return (hooksEnabled ? mockedUseEffect : React.useEffect)(...args);
//   },
//   useLayoutEffect: (...args) => {
//     return (hooksEnabled ? mockedUseLayoutEffect : React.useLayoutEffect)(...args);
//   },
// }));
// const originalShallow = Enzyme.shallow;
// Enzyme.shallow = (...args) => {
//   hooksEnabled = true;
//   return originalShallow(...args);
// };
