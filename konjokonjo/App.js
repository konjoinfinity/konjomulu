import React from "react";
import { View, StatusBar } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
// import Routes from "./Routes";
// import DropdownAlert from 'react-native-dropdownalert';
// import { AlertHelper } from './AlertHelper';


const App = () => <NavigationContainer><View style={{ flex: 1 }}>
  {/* <Routes />
    <DropdownAlert
        defaultContainer={{ padding: 8, paddingTop: StatusBar.currentHeight, flexDirection: 'row' }}
        ref={ref => AlertHelper.setDropDown(ref)}
        onClose={() => AlertHelper.invokeOnClose()}
        closeInterval={5000} /> */}
</View></NavigationContainer>;

export default App;