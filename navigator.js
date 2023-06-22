import {createStackNavigator,CardStyleInterpolators} from "@react-navigation/stack";
import {StatusBar,  View, TouchableOpacity} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionic from 'react-native-vector-icons/Ionicons'
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import EntryScreen from "./src/screens/EntryScreen";
import LoginScreen from "./src/screens/auth/LoginScreen";
import RegisterScreen from "./src/screens/auth/RegisterScreen";
import { AuthContext } from "./src/hooks/authContext";
import { useContext } from "react";
import { HomeScreen } from "./src/screens";

function AuthNavigator() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
        initialRouteName="Entry"
        screenOptions={{
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
        }}
    >
        <Stack.Screen name="Register" component={RegisterScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Entry" component={EntryScreen} options={{ headerShown: false }}/>
    </Stack.Navigator>
);
}

const AppNavigator = () =>{
  const Tab = createBottomTabNavigator();
  return(
    <>
        <Tab.Navigator
          initialRouteName="Home"
          screenOptions = {({route}) =>({
            tabBarButton: (props) => {
              return (
                  <View {...props}>
                      <View
                          style={{
                              minWidth: 50,
                              minHeight: 50,
                              borderRadius: 10,
                              backgroundColor: props.accessibilityState
                                  .selected
                                  ? "#F6E3DB"
                                  : "white",
                          }}
                      >
                          <TouchableOpacity {...props} />
                      </View>
                  </View>
              );
          },
            tabBarIcon: ({focused, size, color}) =>{
              let iconName;
              color = focused ? '#F7941C' : 'black'
              if(route.name === 'Home'){
               return <AntDesign name="home" size={24} color={color} />
      
              }else if(route.name == 'Cart'){
                iconName = focused ? 'cart' : 'cart-outline'
              }else if(route.name == "Notification"){
                return <MaterialCommunityIcons name="bell-badge-outline" size={24} color={color}/>
              }else if(route.name == "Scan"){
                return <MaterialCommunityIcons name="line-scan" size={24} color={color}
            />
              }
              else if(route.name == "Clock"){
                return <MaterialCommunityIcons name="progress-clock" size={24} color={color}/>
              }
              return <Ionic name={iconName} size={30} colour={color}/>
            },
            tabBarShowLabel: false,
            activeTintColor:'black',
            backgroundColor: "white",
            height: 100,
            paddingBottom: 10,
            padding: 30,
            borderTopLeftRadius: 30,
            borderTopRightRadius: 30,
            marginHorizontal: 5,
            position: "absolute",
            borderColor: "white",
            elevation: 10,
          })}
          
        >
          <Tab.Screen name="Home" component={HomeScreen}/>
        </Tab.Navigator>
    </>
  )
}

const Navigator = () =>{
    if (useContext(AuthContext).isLoggedIn) 
    return <AppNavigator />;
    else return <AuthNavigator />;
}
export default Navigator;
