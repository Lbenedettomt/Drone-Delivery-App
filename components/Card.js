import { Text, View, StyleSheet} from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function Card({ name, icon }) {

    return (
        <View>
            <View style={styles.icon}>
                <MaterialCommunityIcons name={icon} size={50} color="#f5bb00" />
                <Text style={styles.text}>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    icon: {
        borderRadius: 50,
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        width: 200,
        height: 90,
        alignSelf: 'center',
        marginBottom: 10,
        marginTop: 30,
        justifyContent: 'center',
        alignContent: 'center',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowRadius: 4.65,
        shadowOffset: {
            height: 4,
            width: 0,
        }
    },
    text: {
        color: '#fff',
        fontSize: 15
    }
})