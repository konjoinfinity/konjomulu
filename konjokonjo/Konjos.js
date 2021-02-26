import React from "react";
import { View, StatusBar, Text, Button, Image, TouchableOpacity, StyleSheet, Platform, SafeAreaView, KeyboardAvoidingView, TextInput, Dimensions, PixelRatio, Alert, ScrollView } from 'react-native';
import 'react-native-gesture-handler';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <ScrollView>
                    <Text style={{ fontSize: 20, padding: Dimensions.get('window').height * 0.04, textAlign: 'center' }}>Knowledge</Text>
                    <View style={styles.card}>
                        <Button title="Doc 1" onPress={() => Alert.alert('open doc 1')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 2" onPress={() => Alert.alert('open doc 2')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 3" onPress={() => Alert.alert('open doc 3')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 4" onPress={() => Alert.alert('open doc 4')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 5" onPress={() => Alert.alert('open doc 5')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 6" onPress={() => Alert.alert('open doc 6')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 7" onPress={() => Alert.alert('open doc 7')} />
                    </View>
                    <View style={{ padding: Dimensions.get('window').height * 0.009 }}></View>
                    <View style={styles.card}>
                        <Button title="Doc 8" onPress={() => Alert.alert('open doc 8')} />
                    </View>
                </ScrollView>
            </View>
        );
    }
}
export default Home;

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