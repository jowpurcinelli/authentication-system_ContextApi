
// The following routes will be used when the user
// is already logged-in to the app and passed the auth process
import 'react-native-gesture-handler';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';



import Dashboard from  '../pages/Dashboard';
const AppStack = createStackNavigator();


//only parentesis because will only pass JSX , no need to curvybrace
const AppRoutes: React.FC = ( ) => (
    <AuthStack.Navigator>
        <AuthStack.Screen  name="Dashboard"  component={SignIn}/>
    </AuthStack.Navigator>
);

export default AppRoutes;
