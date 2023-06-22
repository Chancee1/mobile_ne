import * as SecureStore from "expo-secure-store"
import { axiosInstance } from "../utils/axiosInstance";
import { useEffect, useState } from "react";
import ListComponent from "../components/list";

const List = () =>{
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState();
    const fetchData = async() =>{
        const token = await SecureStore.getItemAsync("token");
        if(token){
            setLoading(true)
            const response = await axiosInstance.get("/employee", {headers: {"Content-Type": "Application/json", "Authorization": token}})
            if(!response.ok){
                Alert.alert(
                    "Error",
                    "Failed to register item,\nCheck your inputs"
                );
                return;
            }
            setLoading(false)
            setData(response.data.data);
            
        }else{
            Alert.alert(
                "Error",
                "Log in first"
            );
        }
    }

    useEffect(() => {
      fetchData();
    }, [third])
    

    return(
      !loading ?  
        <View>
            {data.map(item =>
                <ListComponent name={item.name}/>
                )}
        </View> :

        <View>
            <Text>Loading...</Text>
        </View>
    )
}

export default List;