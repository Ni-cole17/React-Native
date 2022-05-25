import React from 'react';
import {View,Text, StyleSheet,Linking, SafeAreaView,Pressable,Image,StatusBar} from 'react-native';

const colorGithub = '#010409';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/65842535?v=4';
const urlmyGitHub = 'https://github.com/Ni-cole17'
const App = () =>{
    const handlePressGoToGitHub = async ()=>{
     const response = await Linking.canOpenURL(urlmyGitHub);
     if(response){
        await Linking.openURL(urlmyGitHub);
     }
    }
    return (
    <SafeAreaView style={style.container}>
        <StatusBar backgroundColor={'pink'} barStyle='light-content'/>
        <View style={style.content}>
            <Image accessibilityLabel="Imagem de foto de perfil vestindo camisa preta, cabelo solto castanho , pele parda" style={style.avatar} source={{uri: imageProfileGithub }}/>
            <Text accessibilityLabel="Nome Nicole Charron" style={style.name}>Nicole Charron</Text>
            <Text accessibilityLabel="Nickname Ni-cole17" style={style.nickname}>Ni-cole17</Text>
            <Text accessibilityLabel="Email nicole.charron17@gmail.com" style={style.email}>nicole.charron17@gmail.com</Text>
            <Text accessibilityLabel="Descrição Engenharia Biomédica UFPE" style={style.description}>Engenharia Biomédica | UFPE</Text>
        </View>
        <Pressable onPress={handlePressGoToGitHub}>
            <View style={style.button}>
                <Text style={style.text}>Open in GitHub</Text>
            </View>
        </Pressable>
    </SafeAreaView> // Vai dar a segurança que meu view não vai para um área que ele não tem acesso
    );
}

export default App;

const style = StyleSheet.create({
    container: {
        // se a view for replicada, irá aparecer a mesma imagem na linha abaixo, a não ser que seja adicionado um flex-box.
        backgroundColor: colorGithub,
        flex:1, //Expandir para a tela inteira
        justifyContent: "center",
        alignItems: "center",
        //flexDirection: 'row', // Faz com que os elementos fiquem lado a lado
    },
    name:{
        fontSize:20,
        fontWeight: 'bold',
        color: 'white'
    },
    email:{
        fontSize:10,
        color: 'white'
    },
    description:{
        fontSize:10,
        fontWeight: 'bold',
        color: 'white'
    },
    nickname:{
        fontSize:10,
        fontWeight: 'bold',
        color: '#C9D1D9'
    },
    avatar:{
        height: 150,
        width: 150, //Para que a imagem apareça é obrigatório que seja colocado as configurações de altura e largura
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,
    },
    content: {
        alignItems: "center",
        padding: 20,
    },
    button: {
        marginTop: 20,
        backgroundColor: '#C9D1D9',
        borderRadius: 10,
        padding: 20,
    },
    text: {
        fontSize:16,
        fontWeight: 'bold',
        color: 'black'
    }
});
