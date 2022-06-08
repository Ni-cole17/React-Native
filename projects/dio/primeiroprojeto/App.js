import React, {useState} from 'react';
import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  TouchableOpacityBase,
  StyleSheet,
} from 'react-native';

const App = () => {

  const [numero, setNumero] = useState(0);

  function handleNumero(){

    const novo_numero = Math.floor(Math.random() * 10)

    setNumero(novo_numero);
  }


  return(
    <SafeAreaView style={style.container}>
      <Text style={style.numero}>{numero}</Text>
      <TouchableOpacity onPress={handleNumero} style={style.button}>
        <Text>Gerar Número</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container:{
    backgroundColor: 'red',
    fontSize: 24,
    flex: 1,
    justifyContent: 'center',
  },
  numero: {
    fontSize: 35,
    color: 'white',
    fontWeight: 'bold',
  },
  button:{
    backgroundColor: 'white',
    width: '100%',
    paddingHorizontal: 10,
    paddingVertical: 25,
    borderRadius: 5,
    justifyContent:'center',
    alignItems: 'center',
    marginTop: 10,
  },

});
export default App;
