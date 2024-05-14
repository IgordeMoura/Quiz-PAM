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
        
    }
}