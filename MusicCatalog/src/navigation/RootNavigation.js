import { Navigation } from 'react-native-navigation';

import { colors } from '../constants/colors';
import { routes } from '../constants/routes';
import { ArtistsScreen } from '../modules/Artists/components/ArtistsScreen';
import { AlbumsScreen } from '../modules/Albums/AlbumsScreen';
import { ReduxProvider } from '../store/ReduxProvider';
import { ArtistsAlbums } from '../modules/Artists/components/ArtistsAlbums';
import { AlbumTracks } from '../modules/Artists/components/AlbumTracks';

Navigation.registerComponent(routes.Artists, () => ReduxProvider(ArtistsScreen));
Navigation.registerComponent(routes.Albums, () => ReduxProvider(AlbumsScreen));
Navigation.registerComponent(routes.ArtistsAlbums, () => ReduxProvider(ArtistsAlbums));
Navigation.registerComponent(routes.AlbumTracks, () => ReduxProvider(AlbumTracks));

Navigation.setDefaultOptions({
  statusBar: {
    backgroundColor: colors.PURPLE,
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
                      name: routes.Artists,
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
                      name: routes.Albums,
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
