import { CreateScreen } from ".";
import { CreateForm } from "../components/createForm";

const Create = ({navigation}) => {
    return(
        <View>
            <Text>Register New Item</Text>
            <CreateForm navigation={navigation}/>
        </View>
    )
}

export default Create;