import React from "react";
import { View, StyleSheet, Text, Platform, StatusBar,} from "react-native";
import  {  SelectList  }  from  'react-native-dropdown-select-list';

export function Inbox(){
    const dados=[
        {id:'0', value:'jooj'},
        {id:'1', value:'Mine'},
        {id:'2', value:'Mario'},
        {id:'3', value:'Sonic'},
    ];
    const [selected, setSelected] = React.useState("");
    return(
        <View style={styles.container}>
            <View style={{paddingHorizontal:20, paddingVertical:50,flex:1}}>
            <SelectList 
               data={dados}
               setSelected={(val)=>setSelected(val)}
               inputStyles={{fontSize:10,color:'#000',fontSize:14,}}
               dropdownStyles={{backgroundColor:'rgba(255,255,255,0.5)',fontSize:14,color:'#fff',}}
               dropdownTextStyles={{fontSize:14,color:'#fff',}}
               dropdownItemStyles={{marginHorizontal:10}}
               boxStyles={{backgroundColor:'rgba(255,255,255,0.5)',fontSize:14,color:'#fff',marginHorizontal:50}}
               onSelect={()=>{alert(selected)}}
            />
            </View>
            {/* <View style={styles.inboxArea}>
                <Text style={styles.texts}>@user</Text>
                <Text style={styles.texts}>36k</Text>
                
            </View> */}
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"#191919",
        
    },
    topBar:{
        position:'absolute',
        top:36,
        flex:1,
     

    },
    inboxArea:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center',
        gap:8,
        position:'absolute',
        top:6,
        left:0,
        right:0,
        marginTop: Platform.OS === 'android'?StatusBar.currentHeight+25: 55,},
    texts:{
      color:'#fff' 
    }
})