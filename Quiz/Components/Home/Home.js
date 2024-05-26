// Importando os Modulos Necessarios do React e React Native
import React from "react";
import { Image, Button, View } from 'react-native';
import styles from  './Home.module.css';
import logo from '../../assets/logo.jpg';

//Definindo o Componente Home
export default function Home({ navigation }) {
    return (
        //Criando uma view com alinhamento centralizado
        <View style={styles.container}>

            {/* Renderizando a Imagem do Logo */}
            <Image source={(logo)} style={styles.logo}/>

            {/* Criando um botão para navegar para a tela de adicionar pergunta */}
            <View style={styles.botoes}>
                <Button title='Adicionar Pergunta' onPress={()=> navigation.navigate('Add')}/>
            </View>

            {/* Criando um Botão para Navegar para a tela inicial do quiz */}
            <View style={styles.botoes}>
                <Button title='Iniciar Quiz' onPress={()=> navigation.navigate('Quiz')} color={'green'}/>
            </View>

            {/* Criando um Botão para navegar para a tela de editar perguntas */}
            <Button title='Editar Perguntas' onPress={()=> navigation.navigate('Edit')} color={'gold'}/>
        </View>
    );
}