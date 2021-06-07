import { Navigation } from 'react-native-navigation';
import { routes } from '../constants/routes';

export const toAlbums = (componentId, name, id) => {
    Navigation.push(componentId, {
      component: {
        name: routes.ArtistsAlbums,
        id: id,
        options: {
          topBar: {
            title: {
              text: name+' albums',
            },
          },
        },
      },
    });
  };