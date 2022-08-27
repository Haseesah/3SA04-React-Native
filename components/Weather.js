import { ImageBackground, StyleSheet} from 'react-native';
import Forecast from './Forecast';

export default function Weather(props) { 
    cont [ForecastInfo, setForecast]= useState({
        main: '-',
        description: '-',
        temp: 0

    })

    return (
        <ImageBackground source={require('../bg.jpg')} styles={styles.backdrop}>
            <Text>zip Code</Text>
            <Forecast {...ForecastInfo}/>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    backdrop: {
        alignItems: 'center',
        width: '100%',
        height: '100%'
        
    }
})

   