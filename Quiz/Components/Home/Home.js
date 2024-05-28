// Importando os Modulos Necessarios do React e React Native
import React from "react";
import { Image, Button, View } from 'react-native';
import styles from  './HomeStyle';
import logo from '../../assets/logo.jpg';
import Style from "./HomeStyle";

//Definindo o Componente Home
export default function Home({ navigation }) {
    return (
        //Criando uma view com alinhamento centralizado
        <View style={styles.container}>

            {/* Renderizando a Imagem do Logo */}
            <Image source={(logo)} style={styles.logo}/>

            <View style={Style.conteudo}>
                {/* Criando um botão para navegar para a tela de adicionar pergunta */}
                <View style={styles.vwBotoes}>
                    <Button color={'red'} title='Adicionar Pergunta' onPress={()=> navigation.navigate('Add')}/>
                </View>

                {/* Criando um Botão para Navegar para a tela inicial do quiz */}
                <View style={styles.vwBotoes}>
                    <Button color={'#4cb573'} title='Iniciar Quiz' onPress={()=> navigation.navigate('Quiz')}/>
                </View>

                {/* Criando um Botão para navegar para a tela de editar perguntas */}
                <View style={styles.vwBotoes}>
                    <Button color={'#fcaf42'} title='Editar Perguntas' onPress={()=> navigation.navigate('Edit')}/>
                </View>
            </View>
        </View>
    );
}