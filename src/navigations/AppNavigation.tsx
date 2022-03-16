import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '@screens/home/HomeScreen'

interface AppNavigationProps {

}

const AppNavigation: React.FunctionComponent<AppNavigationProps> = () => {

    const Stack = createStackNavigator()

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HomeScreen' screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default AppNavigation