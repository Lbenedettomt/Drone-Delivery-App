import {View, StyleSheet} from 'react-native'
import Constants from 'expo-constants'
import Drone from '../components/Drone'
import { ImageBackground } from 'react-native-web'

export default function TrackOrder() {
    const image = { uri: "https://i.pinimg.com/originals/66/68/a7/6668a7eed2851585e3e03939f33cec36.jpg" };
    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <Drone />
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        height: '100%',
        display: 'flex',
        justifyContent: 'top',
        alignItems: 'center'
    },
    header: {
        color: '#fff',
        marginTop: Constants.statusBarHeight + 20,
        fontSize: 20,
        fontWeight: 'bold'
    },
    image: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
})