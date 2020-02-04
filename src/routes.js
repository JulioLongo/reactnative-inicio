import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import Main from './pages/Main';
import User from './pages/User';

const Routes = createAppContainer(
    createBottomTabNavigator(
        {
            Main,
            User,
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
