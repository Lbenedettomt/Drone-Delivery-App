import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function Drone() {
    return (
        <View style={styles.service}>
            <Text style={styles.title}>Status da Entrega</Text>
            <Text style={styles.info}>Solicite uma entrega</Text>
            <TouchableOpacity style={styles.price}>
                <Text style={styles.orderTitle}>Solicitar Entrega</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    service: {
        width: '70%',
        height: '30%',
        backgroundColor: 'rgba(33, 37, 41, 0.8)',
        margin: 10,
        borderRadius: 6,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowRadius: 4.65,
        shadowOffset: {
            height: 4,
            width: 0,
        }
    },
    title: {
        fontSize: 20,
        color: '#fff',
        paddingTop: '5%',
    },
    info: {
        fontSize: 15,
        color: '#fff',
        textAlign: 'center',
        paddingTop: '5%',
        maxWidth: '85%'
    },
    price: {
        backgroundColor: '#f5bb00',
        width: '85%',
        height: '20%',
        marginTop: '15%',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'center',
        color: '#fff',
        borderRadius: 6,
        paddingTop: '5%'
    },
    orderTitle: {
        fontSize: 20,
        color: '#fff',
        textAlign: 'center',
        marginBottom: '6%',
        fontWeight: 'bold',
    }
})