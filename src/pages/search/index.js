import { View, StyleSheet, Text} from "react-native";

export function Search(){
    return(
        <View style={style.container}>
            <Text>Search Page</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
    }
})