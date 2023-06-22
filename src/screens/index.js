import {
    CardStyleInterpolators,
    createStackNavigator,
} from "@react-navigation/stack";
import { View, Text, Button } from "react-native";
import Screen from "../layouts/Screen";

import { DeviceEventEmitter } from "react-native";
import react from "react";
import { AuthContext } from "../hooks/authContext";
import DashboardScreen from "./DashboardScreen";
import { TouchableHighlight } from "react-native-gesture-handler";
import Create from "./Create";
import List from "./List";

export function HomeScreen({navigation}) {
    return (
        <Screen>
           <DashboardScreen navigation={navigation}/>
        </Screen>
    );
}

export function CreateScreen({navigation}) {
    return (
        <Screen>
            <Create navigation={navigation}/>
        </Screen>
    );
}

export function ListScreen({ navigation, route }) {
    const Stack = createStackNavigator();

    return (
        // <Stack.Navigator
        //     screenOptions={{
        //         headerShown: false,
        //         gestureEnabled: true,
        //         gestureDirection: "horizontal",
        //         cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        //     }}
        // >
            
        // </Stack.Navigator>
    <Screen>
        <List navigation={navigation}/>
    </Screen>
    );
}

export function SettingsScreen({navigation}){
    const setIsLoggedIn = react.useContext(AuthContext).setIsLoggedIn
    const handleLogout = () =>{
        setIsLoggedIn(false);
    }
    return(
        <View>
            <TouchableHighlight onPress={handleLogout}>
                <Text>Logout</Text>
            </TouchableHighlight>
        </View>
        
    )
}


