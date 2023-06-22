import { StyleSheet } from "react-native";

const StatBox = ({number, description, bg, color}) =>{
    return(
        <View style={`${styles.box} bg:${bg} color:${color}`}>
            <Text style={styles.number}>{number}</Text>
            <Text style={styles.description}>{description}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    box:{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 20,
        height: 15,
        borderRadius: 7,
        
    },
    number:{
        fontWeight: "bold",
        fontSize: 14,
    },
    description:{
       fontSize: 11, 
    }
})

export default StatBox;