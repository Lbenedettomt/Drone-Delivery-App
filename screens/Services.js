import { Text, StyleSheet, View, ScrollView } from 'react-native';
import Service from '../components/Service';
import { ImageBackground } from 'react-native-web'

export default function Services() {
    const image = { uri: "https://i.pinimg.com/originals/66/68/a7/6668a7eed2851585e3e03939f33cec36.jpg" };

    return (
        <View style={styles.container}>
            <ImageBackground source={image} resizeMode="cover" style={styles.image}>
                <ScrollView>
                    <View style={styles.nav}>
                        <Text style={styles.header}>Nossos planos</Text>
                    </View>

                    <Service name='Grátis' info='Sem mensalidades! Com esse plano você paga por entrega. Entregas limitadas em 8km e apenas 1 usuário.' price='R$0,00/mês.' />
                    <Service name='Pro' info='5 usuários, entregas ilimitadas, raio de entrega em 20km, acesso vitalício, suporte dedicado e relatórios mensais!' price='R$500,00/mês' />
                    <Service name='Enterprise' info='Usuários ilimitados, entregas ilimitadas, entregas em todo o Brasil, relatórios semanais e entregas em toda LATAM' price='R$2.000,00/mês' />
                </ScrollView>
            </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#2d2d2d',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    header: {
        color: '#fff',
        fontSize: 20,
    },
    image: {
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    nav: {
        display: 'flex',
        height: '80px',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: '',
        justifyContent: 'center',
        backgroundColor: 'rgba(33, 37, 41, 0.4)',
        shadowColor: 'rgba(0, 0, 0, 0.7)',
        shadowRadius: 4.65,
        shadowOffset: {
            height: 4,
            width: 0,
        }
    }
})