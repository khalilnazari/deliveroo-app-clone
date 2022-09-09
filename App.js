import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TailwindProvider } from 'tailwindcss-react-native';

// screens
import HomeScreen from './screens/HomeScreen';
import ResturantScreen from './screens/ResturantScreen';

// redux 
import { Provider } from 'react-redux';
import store from './redux/store'

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
            <Stack.Navigator>
              <Stack.Screen 
                name="Home" 
                component={HomeScreen} 
              />
              <Stack.Screen 
                name="Resturant" 
                component={ResturantScreen}
              />
            </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
