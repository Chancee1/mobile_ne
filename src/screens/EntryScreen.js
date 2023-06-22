import { StyleSheet, View, Image, Text, ScrollView, TouchableHighlight } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import logo from '../../assets/lotus.png'
export default function EntryScreen({ navigation }) {
    return (
        <SafeAreaView>
            <View style={styles.parent}>
                <View style={styles.blueDiv}></View>
                <View style={styles.logoCircle}>
                    <Image source={logo} style={styles.logo} />
                </View>
            </View>
            <View>
                <Text style={styles.name}>Doubble</Text>
            </View>
            <TouchableHighlight style={styles.touchable}
                onPress={() => { navigation.navigate("Register")}}>
                <View style={styles.button}>
                    <Text style={styles.text}>Get Started</Text>
                </View>
            </TouchableHighlight>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    blueDiv: {
        backgroundColor: '#007AFE',
        height: 400,
        width: '100vh',
        borderBottomLeftRadius: 30,
        borderBottomRightRadius: 30,
    },
    logo: {
        width: 50,
        height: 50,
    },
    logoCircle: {
        position: 'absolute',
        top: '90%',
        left: '38%',
        height: 80,
        width: 80,
        backgroundColor: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        elevation: 5,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
    },
    parent: {
        position: 'relative',
    },
    name: {
        fontSize: 40,
        textAlign: 'center',
        color: '#007AFE',
        fontWeight: 'bold',
        marginVertical: 50,
    },
    touchable: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 50,
        backgroundColor: '#007AFE',
        width: '55%',
        borderRadius: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        color: '#FFF',
    },
});