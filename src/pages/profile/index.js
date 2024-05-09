import { View, StyleSheet, Text} from "react-native";

export function Profile(){
    return(
        <View style={style.container}>
            <Text>Profile Page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
    }
})