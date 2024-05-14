// Importando os Módulos Necessários do react e React Native
import React, { useState, useEffect } from "react";
import {Image, Button, Text, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// Abrindo o banco de dados SQLite
const db = SQLite.openDataBase('quiz.db');

// Definindo o Componente Quiz
export default function Quiz(){
    //Definindo o estado inicial para a pergunt, as alternativas e a resposta correta
    const [pergunta, setPergunta] = useState('');
    const [alternativas, setAlternativas] = useState([]);
    const [respostaCorreta, setRespostaCorreta] = useState('');

    // Carregando uma pergunta aleatoria quando o componente é montado
    useEffect(() => {
        carregarPergunta();
    }, []);

    // Função para carregar uma pergunta aleatoria do banco de dados
    const carregarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perguntas ORDER BY RANDOM() LIMIT 1;', [], (_, { rows }) => {
                let pergunta = rows.array[0];
                setPergunta(pergunta.pergunta);
                setRespostaCorreta(pergunta.resposta_correta);
                setAlternativas([pergunta.alternativaA, pergunta.alternativaB, pergunta.alternativaC, pergunta.alternativaD]);
            });
        });
    };

    // Função para Verificar se a Resposta Selecionada é a Correta
    const verificarResposta = (resposta) => {
        if (resposta === respostaCorreta){
            Alert.alert('Parabéns!', 'Você Acertou a Resposta!');
            carregarPergunta();
        } else{
            Alert.alert('Ops!', 'Resposta Incorreta.');
        }
    };

    // Renderizando o Componente
    return(
        // Criando uma View com alinhamento Centralizado e Ocupando 90% da Tela
        <View style={{alignItems: 'center', width: '90%', marginStart: 'auto', marginEnd: 'auto'}}>
            {/* Renderizando o Logo */}
            <Image source={requestAnimationFrame('../assets/logo.png')} style={{width: '90%', height: 150, marginBottom: 45, height: 150}}/>
            {/* Renderizando a pergunta com estilo de multilinha e justificado */}
            <Text style={{fontSize: 16, marginBottom: 5, textAlign: 'justify', width: '90%'}} multiline={true}>{pergunta}</Text>
            {/* Renderizando as alternativas */}
            {alternativas.map((alternativa, index) =>(
                // Cada botão ocupa 90% da tela e tem uma margem inferior de 15px
                <View style={{width:'90%', marginBottom: 15}}>
                    <Button key={index} title={`${String.fromCharCode(65 + index)}. ${alternativa}`} onPress={()=>
                    verificarResposta(String.fromCharCode(65 + index))} />
                </View>
            ))}
            {/* Renderizando o Botão para carregar a próxima pergunta */}
            <View style={{width: '90%', marginBottom: 15}}>
                <Button title='Próxima Pergunta' onPress={carregarPergunta} />
            </View>
        </View>
    );
}