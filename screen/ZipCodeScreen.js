import React from 'react';
import { FlatList} from 'react-native';
import { TouchableHighlight } from 'react-native-web';

const availableZipItems = [
    { place: 'Hatyai', code: '90110' },
    { place: 'Trang', code: '92000' },
    { place: 'Chiangmai', code: '50000' },
    { place: 'Khonkaen', code: '40000' },
    { place: 'Chonburi', code: '20000' },
   ]
   
const ZipItem = ({place, code, navigation}) => (
    <TouchableHighlight onPress={() =>
        navigation.navigate('Weather',{zipCode: code})
    }>
        <View>
            <Text>{place}</Text>
            <Text>{code}</Text>
        </View>
    </TouchableHighlight>
)

export default function ZipCodeScreen(){
    const navigation = useNavigation()
    return (
        <View style={style.ZipItem} >
            <FlatList
                data={availableZipItems}
                keyExtractor={_keyExtractor}
                renderItem={({item}) => <ZipItem {...item} navigation={navigation}/>}
            />
            <StatusBar style="auto" />
        </View>
    );
}

const style = StyleSheet.create({
    ZipItem: {
        flax: 1,
        flaxDirection: 'row',
        justifyContent: 'space-between'
    },
    zipPlace: {
        flax: 1
    },
    zipCode: {
        flax: 1
    },

})