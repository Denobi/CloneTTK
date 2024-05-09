import { useRef, useState, useEffect } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions, TouchableOpacity, Platform } from 'react-native'
import {Video} from 'expo-av';
import {Ionicons} from '@expo/vector-icons'

const {height:heightScreen} = Dimensions.get("window");

export function FeedItems({data,currentVisibleItem}) {
    const video = useRef(null);
    const [status, setStatus] = useState({});
    useEffect(()=>{
      if (currentVisibleItem?.id === data?.id) {
        video.current?.playAsync();
      } else {
        video.current?.pauseAsync();
      }
    },[currentVisibleItem])

    function heandlerPlayer(){
        status.isPlaying?video.current?.pauseAsync():video.current?.playAsync();
    }
  return (
      <Pressable onPress={heandlerPlayer}>
        <View style={[styles.info, {bottom:90}]}>
          <Text style={styles.name}>{data?.name}</Text>
          <Text numberOfLines={2} style={styles.description}>{data?.description}</Text>
          
        </View>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.actionsButton}>
            <Ionicons name='heart' size={35} color={'#fff'}/>
            <Text style={styles.actionText}>30.2k</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionsButton}>
            <Ionicons name='chatbubble-ellipses' size={35} color={'#fff'}/>
            <Text style={styles.actionText}>30</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionsButton}>
            <Ionicons name='bookmark' size={35} color={'#fff'}/>
           
          </TouchableOpacity>
        </View>
        <Video
        ref={video}
        style={{width:'auto', height:heightScreen}}
        source={{uri:data?.video}}
        resizeMode="cover"
        shouldPlay={false}
        isMuted={false}
        isLooping
        onPlaybackStatusUpdate={status => setStatus(()=>status)}
        />
      </Pressable>
  )
}
const styles = StyleSheet.create({
  info:{
    position:'absolute',
    zIndex:99,
    left:8,
    padding:8,
  },
  name:{
    color:"#fff",
    fontWeight:'bold',
    marginBottom:4,
    textShadowColor:'rgba(0,0,0,0.70)',
    textShadowOffset:{width:-1,height:1.5},
    textShadowRadius:8,
  },
  description:{
    color:'#fff',
    marginRight:30,
    textShadowColor:'rgba(0,0,0,0.40)',
    textShadowOffset:{width:-1,height:1.5},
    textShadowRadius:8,
  },
  actions:{
    position:'absolute',
    zIndex:99,
    right:10,
    bottom:Platform.OS==='android'?120:170,
    gap:8,
  },
  actionText:{
    textAlign:'center',
    color:"#FFF",
    textShadowColor:'rgba(0,0,0,0.20)',
    textShadowOffset:{width:-1,height:1.5},
    textShadowRadius:8,
  }
})