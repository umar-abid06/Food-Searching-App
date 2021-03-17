import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from '../screens/SearchScreen';
import ResultsShowScreen from '../screens/ResultsShowScreen';



const Stack = createStackNavigator();

function ScreenNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Search"
        screenOptions={{
            
            headerStyle: {
                height: 50, 
                backgroundColor:'#1E90FF',
                
              },
              headerTitle:"Business Search",
              headerTitleAlign:'center',
              
              
        }} >
        <Stack.Screen name="Search" component={SearchScreen} />
        <Stack.Screen name="Show" component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigator;
