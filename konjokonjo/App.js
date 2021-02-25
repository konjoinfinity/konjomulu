import React from "react";
import { View, StatusBar, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import Routes from "./Routes";


function LogoTitle() {
  return (
    <Image style={{ width: 40, height: 40 }} source={require('./klogo.png')} />
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home</Text>
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
      <Button title="Konjos" onPress={() => navigation.navigate('Konjos')} />
    </View>
  );
}

function ProfileScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Profile</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Konjos" onPress={() => navigation.navigate('Konjos')} />
    </View>
  );
}

function KonjosScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Konjos</Text>
      <Button title="Home" onPress={() => navigation.navigate('Home')} />
      <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
    </View>
  );
}

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'user-cog' : 'user-cog';
          } else if (route.name === 'Konjos') {
            iconName = focused ? 'users' : 'users';
          }
          return route.name == 'Home' ? <FontAwesome5 name={iconName} size={size} color={color} style={{ paddingTop: 10 }} /> : route.name == 'Profile' ? <FontAwesome5 name={iconName} size={size} color={color} style={{ paddingTop: 10 }} /> : <FontAwesome5 name={iconName} size={size} color={color} style={{ paddingTop: 10 }} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ACC086',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        headerTitle: props => <LogoTitle {...props} />
      }} />
      <Tab.Screen name="Konjos" component={KonjosScreen} options={{ tabBarBadge: 3, headerTitle: props => <LogoTitle {...props} /> }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </Tab.Navigator>
  )
}

const App = () => <View style={{ flex: 1 }}>
  <NavigationContainer>
    <Stack.Navigator mode="modal">
      <Stack.Screen name="Home" component={TabStack} options={{ headerTitle: LogoTitle, headerStyle: { backgroundColor: '#4AA748' } }} />
    </Stack.Navigator>
  </NavigationContainer>
</View>;

export default App;
