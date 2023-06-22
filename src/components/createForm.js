import react from "react";
// import { BASE_URL } from "../constants";

import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Alert,
    TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AuthContext } from "../hooks/authContext";
import { useFormik } from "formik";
import * as SecureStore from "expo-secure-store";
import { axiosInstance } from "../utils/axiosInstance";

export function CreateForm({navigation}) {

    const { handleSubmit, handleChange, handleReset, values } = useFormik({
        initialValues: {
            name: "",
            category: "",
        },
        onSubmit: async (values, { resetForm }) => {
            const token = await SecureStore.getItemAsync("token");
            if (!values.name || !values.category) {
                Alert.alert("Error", "You must fill in all fields");
                return;
            }
            try{
                
            const response = await axiosInstance.post('/employee',{
                email: values.email,
                password: values.password
            }, {
                headers: {"Content-Type": "application/json", "Authorization": token}
            
            })

            if (!response.ok) {
                Alert.alert("Error", "Failed to register Item");
                return;
            }

            const data = response.data;
            Alert.alert("Success", "Successfully registered item");
            console.log("data",data)
            navigation.navigate("Home")
        }catch (error) {
            // Handle the error appropriately
            if (error.isAxiosError) {
              // Axios-specific error
              console.error('Axios error:', error.message);
            } else {
              // Non-Axios error
              console.error('Non-Axios error:', error);
            }
          }
      },
    });

    return (
        <View style={styles.container}>
            <View style={styles.inputStyle}>
                <EvilIcons name="envelope" size={24} color="gray" />
                <TextInput
                    placeholder="Name"
                    value={values.name}
                    onChangeText={handleChange("name")}
                />
            </View>
            <View style={styles.inputStyle}>
                <AntDesign name="lock" size={24} color="gray" />
                <TextInput
                    secureTextEntry
                    placeholder="Category"
                    value={values.category}
                    onChangeText={handleChange("category")}
                />
            </View>
            <View style={styles.submitButton}>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        handleSubmit();
                    }}
                >
                    <Text style={styles.cap}>Create</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff"
    }
});
