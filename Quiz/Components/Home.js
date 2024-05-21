// Importando os Modulos Necessarios do React e React Native
import React from "react";
import { Image, Button, View } from 'react-native';

//Definindo o Componente Home
export default function Home({ navigation }) {
    return (
        //Criando uma view com alinhamento centralizado
        <View style={{alignItems: 'center'}}>

            {/* Renderizando a Imagem do Logo */}
            {/* <Image source={require('../assets/Logo.png')} style={{width: '90%', height: 150, marginBottom: 45}}/> */}

            {/* Criando um botão para navegar para a tela de adicionar pergunta */}
            <View style={{marginBottom: 15}}>
                <Button title='Adicionar Pergunta' onPress={()=> navigation.navigate('Add')}/>
            </View>

            {/* Criando um Botão para Navegar para a tela inicial do quiz */}
            <View style={{marginBottom: 15}}>
                <Button title='Iniciar Quiz' onPress={()=> navigation.navigate('Quiz')} color={'green'}/>
            </View>

            {/* Criando um Botão para navegar para a tela de editar perguntas */}
            <Button title='Editar Perguntas' onPress={()=> navigation.navigate('Edit')} color={'gold'}/>
        </View>
    );
}