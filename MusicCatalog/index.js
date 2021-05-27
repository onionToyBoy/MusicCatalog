import {Navigation} from 'react-native-navigation';
import App from './App';

import {ArtistsScreen} from './src/modules/1/ArtistsScreen';
import {AlbumsScreen} from './src/modules/2/AlbumsScreen';
import {colors} from './src/constants/colors'

Navigation.registerComponent('Artists', () => ArtistsScreen);
Navigation.registerComponent('Albums', () => AlbumsScreen);

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.BRIGHT_GRAY,
  },
  topBar: {
    title: {
      color: colors.WHITE,
    },
    backButton: {
      color: colors.WHITE,
    },
    background: {
      color: colors.BRIGHT_GRAY,
    },
    bottomTab: {
      fontSize: 16,
      selectedFontSize: 14,
    },
  },
});

HomeScreen.options = {
  topBar: {
    title: {
      text: 'Artists',
    },
  },
  bottomTab: {
    text: 'Artists',
  },
};

SettingsScreen.options = {
  topBar: {
    title: {
      text: 'Albums',
    },
  },
  bottomTab: {
    text: 'Albums',
  },
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
                    name: 'Artists',
                  },
                },
              ],
            },
          },
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'Albums',
                  },
                },
              ],
            },
          },
        ],
      },
    },
  });
});
