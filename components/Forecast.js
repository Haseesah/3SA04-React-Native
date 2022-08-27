import React from 'react'
import {View , Text, Image, StyleSheet,Button} from 'react-native'
export default function Forecast(props) {
    const image = 'http://openweathermap.org/img/wn/'+props.icon+'.png'
   return( 
    <View > 
    <Text style={styles.titleText}>{props.main} {props.description}</Text>
    <Image source = {{url: image}} style = {styles.saaa} />
    <Text style={styles.titleText}>Temperater : {props.temp} °C</Text>
    </View>
   );
    }
    const styles = StyleSheet.create({
        titleText: { 
          fontSize: 25, 
          color:'#4a4a4a' ,
          justifyContent:'center',
          alignItems:'center'  
        },
        saaa: {
            width:100,
            height:50,
            flexDirection:'column',
            justifyContent:'center',
            alignItems:'center'
        }
      

      });