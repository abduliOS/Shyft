
import React from 'react';
import { useNavigation } from "@react-navigation/native";
  import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity
  } from 'react-native';
  import FastImage from 'react-native-fast-image'

  const cardView = (props) => {
      const item = props.data.item;
      const navigation = useNavigation();
    return (
    <TouchableOpacity onPress={() =>
        navigation.navigate('DetailScreen', { data: props.data.item })
      } style={styles.card}>
      <FastImage
        style={styles.image}
        source={{
            uri: item.artworkUrl100,
            priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.contain}
    />
    <View style={styles.cardText}>
      <Text style={styles.textBold}>{item.artistName}</Text> 
      <Text style={styles.textMedium}>{item.collectionName}</Text> 
      <Text style={styles.textLight}>{item.trackCensoredName}</Text> 
      </View>
      <Text style={styles.textPrice}>${item.collectionPrice}</Text> 
    </TouchableOpacity>
    );
  };

  export default cardView

  const styles = StyleSheet.create({
    card: {
      width: '100%',
      padding: 5,
      borderWidth: 1,
      borderColor: 'lightgrey',
      marginTop: 10,
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
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
    textPrice: {
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
    