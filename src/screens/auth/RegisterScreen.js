import { StyleSheet, View, Image, Text, ScrollView } from "react-native";
import { SignUpForm } from "../../components/signupForm";
import { SafeAreaView } from "react-native-safe-area-context";

export default function RegisterScreen({ navigation }) {
    return (
        <SafeAreaView>
            <ScrollView>
                <SignUpForm navigation={navigation} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});