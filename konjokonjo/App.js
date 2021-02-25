import React from "react";
import { View, StatusBar, Text, Button } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import Routes from "./Routes";
// import DropdownAlert from 'react-native-dropdownalert';
// import { AlertHelper } from './AlertHelper';

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


const App = () => <NavigationContainer>
  <Stack.Navigator initialRouteName="Home" screenOptions={{
    headerStyle: {
      backgroundColor: '#1FC58E',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Profile" component={ProfileScreen} />
    <Stack.Screen name="Konjos" component={KonjosScreen} />
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
