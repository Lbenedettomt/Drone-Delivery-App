import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Card from '../components/Card'
import { useNavigation } from '@react-navigation/native'
import { ImageBackground } from 'react-native-web'

export default function Home() {
  const navigation = useNavigation()
  const image = { uri: "https://i.pinimg.com/originals/66/68/a7/6668a7eed2851585e3e03939f33cec36.jpg" };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.nav}>
          <Text style={styles.header}>Drone Delivery App</Text>
        </View>
        <View style={styles.icons}>
          <TouchableOpacity onPress={() => navigation.navigate('Acompanhar')}>
            <Card name='Acompanhar pedido' icon='quadcopter' navigateTo='Acompanhar' />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Planos')}>
            <Card name='Veja nossos planos' icon='currency-usd' />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#2d2d2d',
    height: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center'
  },
  header: {
    color: '#fff',
    fontSize: 20,
  },
  icons: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    width: '100%'
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