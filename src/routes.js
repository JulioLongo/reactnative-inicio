import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import Pokedex from './pages/Pokedex';

const Routes = createAppContainer(
    createBottomTabNavigator(
        {
            Main,
            Pokedex,
        },
        {
            tabBarOptions: {
                activeTintColor: '#fff',
                labelStyle: {
                    fontSize: 12,
                },
                style: {
                    backgroundColor: '#7159c1',
                },
            },
        }
    )
);

export default Routes;
