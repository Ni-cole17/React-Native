
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
} from 'react-native';
import foto from './assets/foto.jpg'
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card/index'

const App = () => {

  function handleRedeSocial(rede_social){
      switch(rede_social){
        case 'linkedin':
          Alert.alert('Meu Linkedin','https://www.linkedin.com/in/nicole-charron/')
        break
        case 'github':
          Alert.alert('Meu GitHub','https://github.com/Ni-cole17')
        break
        case 'mail':
          Alert.alert('Meu Email','nicole.charron17@gmail.com')
        break
      }
  }

  return(
    <SafeAreaView>
      <View style={style.page}>
       <Image source={foto} style={style.foto} />
        <Text style={style.nome}>Nicole Charron</Text>
        <Text style={style.funcao}>Graduanda em Engenharia Biomédica</Text>
        <View style={style.redes_sociais}>
          <TouchableOpacity>
          <Icon name="github" size={30} />   
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="mail" size={30}/> 
          </TouchableOpacity>
          <TouchableOpacity>     
          <Icon name="linkedin" size={30}/>
          </TouchableOpacity>
        </View>
      </View>

      <Card />

      <Card />
  

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  page:{
    backgroundColor: '#E7E7E7',
    flex: 1,
    justifyContent: 'center',
    marginTop: 200,
    alignItems: 'center',
    marginBottom: 50,
  },
  container_cabecalho:{
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  foto: {
    width: 150,
    height: 150,
    borderRadius: 125,
    justifyContent: 'center',
  },
  nome: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 10,
    color: 'white',
  },
  funcao: {
    color: 'gray',
    marginBottom: 10
  },
  redes_sociais: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '60%',
    marginTop: 20,
    backgroundColor: 'red',
  },
});

export default App;
