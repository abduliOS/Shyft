/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState, useEffect, useCallback} from 'react';
 import {
  Text,
  View,
  StyleSheet,
  SafeAreaView
} from 'react-native';
import FastImage from 'react-native-fast-image'
 import { useRoute } from "@react-navigation/native";


 const DetailScreen = () => {
   const [isLoading, setLoading] = useState(true);
   const [data, setData] = useState([]);
   const route = useRoute();
   const item = route.params.data

 
   useEffect(() => {
     fetch('https://itunes.apple.com/search?term=Michael+jackson')
       .then((response) => response.json())
       .then((json) => setData(json.results))
       .catch((error) => console.error(error))
       .finally(() => setLoading(false));
   }, []);
 
   return (
     <SafeAreaView style={styles.container}>
       <View style={styles.card}>
      <FastImage
        style={styles.image}
        source={{
            uri: item.artworkUrl100,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
    <View style={styles.cardText}>
      <Text style={styles.textBold}>Artist Name: {item.artistName}</Text> 
      <Text style={styles.textMedium}>Collection Name: {item.collectionName}</Text> 
      <Text style={styles.textLight}>Track Name: {item.trackCensoredName}</Text> 
      <Text style={styles.textLight}>Track Price: ${item.trackPrice}</Text>
      <Text style={styles.textBold}>Colleciton Price: ${item.collectionPrice}</Text> 
      </View>
     </View>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
   },
   card: {
    width: '100%',
    padding: 5,
    borderColor: 'lightgrey',
    marginTop: 10,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  image: {
      width: 75, 
      height: 75, 
      borderRadius: 7.5,
  },
  cardText: {
    flex: 1,
    flexDirection: 'column',
  },
  textBold: {
    margin: 5,
    color: 'black',
    fontWeight: 'bold',
  },
  textMedium: {
    margin: 5,
    color: 'black',
    fontWeight: '500',
  },
  textLight: {
    margin: 5,
    color: 'black',
    fontWeight: '300'
  },
 });
 
 export default DetailScreen;
 