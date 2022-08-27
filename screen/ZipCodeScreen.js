import React from 'react'
import { FlatList,View, Text, StyleSheet , StatusBar , ImageBackground} from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'
const availableZipItems = [
    { place: 'Hatyai', code: '90110'},
    { place: 'Surat Thani',code: '81110'},
    { place: 'Chiangmai', code: '50000'}, 
    { place: 'Chonburi', code: '20000'},
    { place: 'Samut Prakan',code: '10240'},
    { place: 'Khonkaen', code: '40000'},   
] 

    
const ZipItem = ({place, code,navigation,img}) => (
    <TouchableHighlight onPress={() => 
        navigation.navigate('Weather', { zipCode: code})}>
        <View style={styles.zipItem}>
            <ImageBackground source={require('../image/bgmain.jpg')} style={styles.contan} >
                <Text style={styles.textEditor}>{place}</Text>
            </ImageBackground>          
        </View>

    </TouchableHighlight>
)   
    
   export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return ( 
    <FlatList
        data={availableZipItems}
        keyExtractor={ item => item.code}
        renderItem={({item}) => <ZipItem {...item} 
        navigation={navigation}/>}/>    
    )
   } const styles = StyleSheet.create({
    textEditor:{
        fontWeight: "bold",
        alignItems: 'center',
        color:'white',
        fontSize:30,
    },
    zipItem: {
    flex:1,
    flexDirection:'row',
    justifyContent:'center'
},
       contan:{
        height:100,
        width:1000,
        padding:55,
        justifyContent:'center',
        alignItems:'center',
    },

            zipPlace: {
            flex:1,
            },
            zipCode: {
            flex:1,
            }
           });