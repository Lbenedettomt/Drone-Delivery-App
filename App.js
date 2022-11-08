import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import TrackOrder from './screens/TrackOrder';
import Services from './screens/Services';
import Home from './screens/Home';

export default function App() {
  const Tab = createBottomTabNavigator();

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={Home} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="home" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Acompanhar" component={TrackOrder} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="quadcopter" size={24} color="black" />
            )}}/>
        <Tab.Screen name="Planos" component={Services} 
        options={{
          tabBarIcon: () => (
              <MaterialCommunityIcons name="currency-usd" size={24} color="black" />
            )}}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
