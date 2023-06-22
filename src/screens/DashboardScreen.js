import { StyleSheet } from "react-native"
import StatBox from "../components/statBox"

const DashboardScreen = () => {
    return (
        <View stlye={styles.grid}>
            <View>
                <StatBox number={100} description={"Number of users"} color={"#FFFFFF"} bg={"#FFFFFF"}/>
            </View>
            <View>
                <StatBox number={100} description={"Number of users"} color={"#FFFFFF"} bg={"#FFFFFF"}/>
            </View>
            <View>
                <StatBox number={100} description={"Number of users"} color={"#FFFFFF"} bg={"#FFFFFF"}/>
            </View>
            <View>
                <StatBox number={100} description={"Number of users"} color={"#FFFFFF"} bg={"#FFFFFF"}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    grid: {
        display: "grid",

    }
})

export default DashboardScreen;