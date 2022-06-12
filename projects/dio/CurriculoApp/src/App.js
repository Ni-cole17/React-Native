
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Alert,
  TouchableOpacity,
  Image,
  ScrollView,
  Linking,
} from 'react-native';
import foto from './assets/foto.jpg'
import Icon from 'react-native-vector-icons/Feather'
import Card from './components/Card/index'

const App = () => {

  function handleRedeSocial(rede_social){
      switch(rede_social){
        case 'linkedin':
          Linking.openURL('https://www.linkedin.com/in/nicole-charron/')
        break
        case 'github':
          Linking.openURL('https://github.com/Ni-cole17')
        break
        case 'mail':
          Linking.openURL('mailto:nicole.charron17@gmail.com')
        break
      }
  }

  return(
    <ScrollView>
      <View style={style.page}>
      <Image source={foto} style={style.foto} />
      <Text style={style.nome}>Nicole Charron</Text>
      <Text style={style.funcao}>Graduanda em Engenharia Biomédica</Text>
      <View style={style.redes_sociais}>
          <TouchableOpacity>
          <Icon name="github" size={30} color={'white'} onPress={() => handleRedeSocial('github')} />   
          </TouchableOpacity>
          <TouchableOpacity>
          <Icon name="mail" size={30} color={'white'} onPress={() => handleRedeSocial('mail')}/> 
          </TouchableOpacity>
          <TouchableOpacity>     
          <Icon name="linkedin" size={30} color={'white'} onPress={() => handleRedeSocial('linkedin')}/>
          </TouchableOpacity>
        </View>
      
      </View>

      <Card titulo="Formação Acadêmica">
          <Text style={style.card_content_text}>Engenharia Biomédica | UFPE</Text>  
      </Card>

      <Card titulo="Experiências Profissionais">
          <Text style={style.card_content_text}>Gerente de Execução | BioTech Consultoria</Text>
          <Text style={style.card_content_text_description}>Responsável por garantir uma boa execução dos projetos, gerir a equipe, promover inovações nos serviços e manter o contato com os clientes.</Text> 
          <Text style={style.card_content_text}>Assessora de Projetos | BioTech Consultoria</Text>
          <Text style={style.card_content_text_description}>Responsável pela execução dos projetos e pela prospecção ativa de leads. </Text> 
      </Card>

      <Card titulo="Experiências Voluntárias">
          <Text style={style.card_content_text}>Desenvolvedora WEB Jr. | Além da Cura</Text>
          <Text style={style.card_content_text_description}>Responsável pela manutenção e inovação do Website.</Text>      
      </Card>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  page:{
    width: '100%',
    marginTop: 50,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
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
  },
  card_content_text: {
    color: '#939393',
    marginBottom: 10,
    fontSize:14,
  },
  card_content_text_description: {
    color: '#939393',
    marginBottom: 10,
    fontSize:10,
  }
});

export default App;
