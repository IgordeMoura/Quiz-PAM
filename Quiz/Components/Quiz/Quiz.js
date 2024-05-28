// Importando os Módulos Necessários do react e React Native
import React, { useState, useEffect } from "react";
import {Image, Button, Text, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';
import logo from '../../assets/logo.jpg';
import Style from './QuizStyle';

// Abrindo o banco de dados SQLite
const db = SQLite.openDatabase('quiz.db');
let pontos = 0;

// Definindo o Componente Quiz
export default function Quiz(){
    //Definindo o estado inicial para a pergunt, as alternativas e a resposta correta
    const [pergunta, setPergunta] = useState('');
    const [alternativas, setAlternativas] = useState([]);
    const [respostaCorreta, setRespostaCorreta] = useState('');
    const [status, setStatus] = useState('');

    
    // Função para carregar uma pergunta aleatoria do banco de dados
    const carregarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perguntas ORDER BY RANDOM() LIMIT 1;', [], (_, { rows }) => {
                let pergunta = rows._array[0];
                setPergunta(pergunta.pergunta);
                setRespostaCorreta(pergunta.resposta_correta);
                setAlternativas([pergunta.alternativaA, pergunta.alternativaB, pergunta.alternativaC, pergunta.alternativaD]);
            });
        });
    };

    // Carregando uma pergunta aleatoria quando o componente é montado
    useEffect(() => {
        carregarPergunta();
    }, []);
    

    // Função para Verificar se a Resposta Selecionada é a Correta
    const verificarResposta = (resposta) => {
        if (resposta === respostaCorreta){
            pontos = pontos + 1;
            if (pontos <= 2){
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Você é um Noob Neste Assunto');
                carregarPergunta();
            }
            else if (pontos > 2 && pontos <= 4){
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Seu Conhecimento é Básico');
                carregarPergunta();
            }
            else if (pontos > 4 && pontos <= 6){
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Você Tem um Certo Conhecimento do Assunto');
                carregarPergunta();
            }
            else if (pontos > 6 && pontos <= 8){
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Você Tem Um Certo Conhecimento do Assunto');
                carregarPergunta();
            }
            else if (pontos > 6 && pontos <= 8){
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Você Tem Um Bom Conhecimento do Assunto');
                carregarPergunta();
            }
            else{
                Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
                setStatus('Você é Um Experto no Assunto');
                carregarPergunta();
            }
        } else{
            Alert.alert('Ops!', 'Resposta Incorreta.');
            setStatus('Você é um Noob Neste Assunto');
            pontos = 0;
        }
    };

    // Renderizando o Componente
    return(
        // Criando uma View com alinhamento Centralizado e Ocupando 90% da Tela
        <View style={Style.container}>
            {/* Renderizando o Logo */}
            <Image source={(logo)} style={Style.logo}/>
            <View style={Style.centralizando}>
                <Text>Seus Ponto: {pontos}</Text>
                <Text>{status}</Text>
            </View>
            <View style={Style.conteudo}>
                {/* Renderizando a pergunta com estilo de multilinha e justificado */}
                <Text style={Style.texto} multiline={true}>{pergunta}</Text>
                    {/* Renderizando as alternativas */}
                    {alternativas.map((alternativa, index) =>(
                        // Cada botão ocupa 90% da tela e tem uma margem inferior de 15px
                        <View style={Style.vwBotoes}>
                            <Button color={'#fcaf42'} key={index} title={`${String.fromCharCode(65 + index)}. ${alternativa}`} onPress={()=>
                            verificarResposta(String.fromCharCode(65 + index))} />
                        </View>))}
            </View>
            {/* Renderizando o Botão para carregar a próxima pergunta */}
            <View style={Style.vwBotoes2}>
                <Button color={'#4cb573'} title='Próxima Pergunta' onPress={carregarPergunta} />
            </View>
        
        </View>
    );
}