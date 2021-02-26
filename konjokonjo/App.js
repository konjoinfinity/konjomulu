import React from "react";
import { View, StatusBar, Text, Button, Image, TouchableOpacity, StyleSheet, Platform, SafeAreaView, KeyboardAvoidingView, TextInput, Dimensions, PixelRatio, Alert, ScrollView } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { BottomTabBarHeightContext, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import EIcon from 'react-native-vector-icons/Entypo'
import OIcon from 'react-native-vector-icons/Octicons'
import IIcon from 'react-native-vector-icons/Ionicons'
import Home from './Home'
import Profile from './Profile'
import Konjos from './Konjos'

function LogoTitle() {
  return (
    <Image style={{ width: 40, height: 40 }} source={require('./klogo.png')} />
  );
}

function HomeScreen({ navigation }) {
  return (
    <Home />
  );
}

function KnowledgeScreen({ navigation }) {
  return (
    <Konjos />
  );
}

function SettingsScreen({ navigation }) {
  return (
    <Profile />
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
          if (route.name === 'Konjo') {
            iconName = focused ? 'text' : 'text';
          } else if (route.name === 'Settings') {
            iconName = focused ? 'settings' : 'settings';
          } else if (route.name === 'Knowledge') {
            iconName = focused ? 'documents-outline' : 'documents-outline';
          }
          return route.name == 'Konjo' ? <EIcon name={iconName} size={size} color={color} style={{ paddingTop: 10 }} /> : route.name == 'Settings' ? <OIcon name={iconName} size={size} color={color} style={{ paddingTop: 10 }} /> : <IIcon name={iconName} size={size} color={color} style={{ paddingTop: 10 }} />
        },
      })}
      tabBarOptions={{
        activeTintColor: '#ACC086',
        inactiveTintColor: 'gray',
      }}
    >
      <Tab.Screen name="Konjo" component={HomeScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
      <Tab.Screen name="Knowledge" component={KnowledgeScreen} options={{ tabBarBadge: 8, headerTitle: props => <LogoTitle {...props} /> }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{ headerTitle: props => <LogoTitle {...props} /> }} />
    </Tab.Navigator>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      knowledge: "test"
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(knowledge) { this.setState({ email }) }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator mode="modal">
            <Stack.Screen name="Home" component={TabStack} options={{ headerTitle: LogoTitle, headerStyle: { backgroundColor: '#81c784' } }} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    );
  }
}

export default App;

const styles = StyleSheet.create({
  textInput: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.6,
    width: Dimensions.get('window').width * 0.8,
    fontSize: 25,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 15,
    textAlign: "center"
  },
  card: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.08,
    width: Dimensions.get('window').width * 0.85,
    fontSize: 25,
    padding: 15,
    borderRadius: 15,
    textAlign: "center"
  },
  settingcard: {
    borderColor: "#CCCCCC",
    borderWidth: 1,
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.85,
    fontSize: 25,
    padding: 15,
    borderRadius: 15,
    textAlign: "center"
  }
})