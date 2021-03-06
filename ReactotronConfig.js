import Reactotron from 'reactotron-react-native';
import { AsyncStorage } from '@react-native-async-storage/async-storage';
import { reactotronRedux } from 'reactotron-redux';

export const reactotron = Reactotron.setAsyncStorageHandler(AsyncStorage)
  .configure({
    name: 'React Native Demo',
  })
  .use(reactotronRedux())
  .useReactNative({
    asyncStorage: false,
    networking: {
      ignoreUrls: /symbolicate/,
    },
    editor: false,
    errors: { veto: stackFrame => false },
    overlay: false,
  })
  .connect();
