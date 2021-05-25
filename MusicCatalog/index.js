import {Navigation} from 'react-native-navigation';
import App from './App';

import {HomeScreen} from './src/modules/HomeScreen';
import {SettingsScreen} from './src/modules/SettingsScreen';

Navigation.registerComponent('Home', () => HomeScreen);
Navigation.registerComponent('Settings', () => SettingsScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: 'purple'
  },
  topBar: {
    title: {
      color: 'yellow'
    },
    backButton: {
      color: 'yellow'
    },
    background: {
      color: 'purple'
    },
  }
});

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Artists'
    }
  },
  bottomTab: {
    text: 'Artists'
  }
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Albums'
    }
  },
  bottomTab: {
    text: 'Albums'
  }
};


Navigation.events().registerAppLaunchedListener(async () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Home'
                  },
                },
              ]
            }
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Settings'
                  }
                }
              ]
            }
          }
        ]
      }
    }
  });
});