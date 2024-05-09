import { View, StyleSheet, Text} from "react-native";

export function New(){
    return(
        <View style={style.container}>
            <Text>New Video Page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
    }
})