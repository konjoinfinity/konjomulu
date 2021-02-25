import React from "react";
import { View, StatusBar, Text, Button, Image } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

// import Routes from "./Routes";
// import DropdownAlert from 'react-native-dropdownalert';
// import { AlertHelper } from './AlertHelper';

function LogoTitle() {
  return (
    <Image
      style={{ width: 40, height: 40 }}
      source={require('./klogo.png')}
    />
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
          // You can return any component that you like here!
          return route.name == 'Home' ? <AntDesign name={iconName} size={size} color={color} /> : route.name == 'Profile' ? <FontAwesome5 name={iconName} size={size} color={color} /> : <FontAwesome5 name={iconName} size={size} color={color} />
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
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

const App = () => <NavigationContainer>
  <Stack.Navigator mode="modal">
    <Stack.Screen name="Home" component={TabStack} options={{ headerTitle: LogoTitle, headerStyle: { backgroundColor: 'green' } }} />
  </Stack.Navigator>
  {/* <View style={{ flex: 1 }}>
  <Routes />
    <DropdownAlert
        defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
        ref={ref => AlertHelper.setDropDown(ref)}
        onClose={() => AlertHelper.invokeOnClose()}
        closeInterval={5000} />
</View> */}
</NavigationContainer>;

export default App;
