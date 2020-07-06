// The following Routes will be used when the user 
// has NOT logged-in t o the app
import 'react-native-gesture-handler';

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';


import SignIn from  '../pages/SignIn';

const AuthStack = createStackNavigator();


//only parentesis because will only pass JSX , no need to curvybrace
const AuthRoutes: React.FC = ( ) => (
    <AuthStack.Navigator>
        <AuthStack.Screen  name="SignIn"  component={SignIn}/>
    </AuthStack.Navigator>
);

export default AuthRoutes;
