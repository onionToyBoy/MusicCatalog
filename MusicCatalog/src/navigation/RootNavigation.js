import { Navigation } from 'react-native-navigation';
import { colors } from '../constants/colors';

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
      color: colors.PURPLE,
    },
    bottomTab: {
      fontSize: 16,
      selectedFontSize: 14,
    },
  },
});

export const RootNavigation = () => {
  return async () => {
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
                      options: {
                        topBar: {
                          title: {
                            text: 'Artists',
                          },
                        },
                        bottomTab: {
                          text: 'Artists',
                        },
                      },
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
                      options: {
                        topBar: {
                          title: {
                            text: 'Albums',
                          },
                        },
                        bottomTab: {
                          text: 'Albums',
                        },
                      },
                    },
                  },
                ],
              },
            },
          ],
        },
      },
    });
  };
};
