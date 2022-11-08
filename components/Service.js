import { View, Text, StyleSheet, TouchableOpacity, Linking } from 'react-native';
import { useState } from 'react'

export default function Service({ name, info, price }) {
    const [planos] = useState(price);

    return (
        <View style={styles.service}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.info}>{info}</Text>
            <TouchableOpacity style={styles.price} onPress={()=>Linking.openURL("https://lbenedettomt.github.io/Drone-Delivery/index.html") }>
                <Text style={styles.priceText}>{planos}</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    service: {
        width: '70%',
        height: '30%',
        marginLeft: '15%',
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
    priceText: {
        color:'#fff',
        alignContent: 'center',
        marginBottom: 'auto'
    }
})