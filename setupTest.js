/* eslint-disable max-lines */

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import enableHooks from 'jest-react-hooks-shallow';

enableHooks(jest);

configure({ adapter: new Adapter() });

jest.mock('react-native-navigation', () => ({
  Navigation: {
    push: jest.fn(() => {}),
  },
}));

jest.mock('@react-native-community/netinfo', () => ({
  useNetInfo: jest.fn(() => ({ isConnected: true })),
}));

jest.mock('react-redux', () => ({
  useDispatch: () => jest.fn(),
  useSelector: selector => selector(),
}));
