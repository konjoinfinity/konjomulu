import React from "react";
import { View, StatusBar, Text, Button, Image, TouchableOpacity, StyleSheet, Platform, SafeAreaView, KeyboardAvoidingView, TextInput, Dimensions, PixelRatio, Alert, ScrollView } from 'react-native';
import 'react-native-gesture-handler';


class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, padding: Dimensions.get('window').height * 0.04, textAlign: 'center' }}>Profile</Text>
                <View style={{ padding: Dimensions.get('window').height * 0.01 }}></View>
                <View style={styles.settingcard}>
                    <Button title="Setting 1" onPress={() => Alert.alert('adjust setting 1')} />
                </View>
                <View style={{ padding: Dimensions.get('window').height * 0.01 }}></View>
                <View style={styles.settingcard}>
                    <Button title="Setting 2" onPress={() => Alert.alert('adjust setting 2')} />
                </View>
                <View style={{ padding: Dimensions.get('window').height * 0.01 }}></View>
                <View style={styles.settingcard}>
                    <Button title="Setting 3" onPress={() => Alert.alert('adjust setting 3')} />
                </View>
            </View>
        );
    }
}
export default Profile;

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