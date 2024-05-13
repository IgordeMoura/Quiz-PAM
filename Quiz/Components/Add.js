// Importando os Módulos Necessarios
import react, { useState} from "react"
import { Image, Button, TextInput, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

// abrindo o banco de dados SQLite
const db = SQLite.openDatabase('quiz.db');

// Definindo o Componente principal da aplicação
export default function Add() {
    // Definindo o estado inicial para cada campo do formulario
    const [pergunta, setPergunta] = useState('');
    const [alternativaA, setAlternativaA] = useState('');
    const [alternativaB, setAlternativaB] = useState('');
    const [alternativaC, setAlternativaC] = useState('');
    const [alternativaD, setAlternativaD] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');

    // função para adicionar uma pergunta ao banco de dados
    const adicionarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO perguntas (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, resposta_correta) VALUES (?, ?, ?, ?, ?, ?)')
            [pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta], (_, {insertId}) => {
                //resetando o estado para cada campo do formulario
                setPergunta('');
                setAlternativaA('');
                setAlternativaB('');
                setAlternativaC('');
                setAlternativaD('');
                setRespostaCorreta('');
                // Exibindo um alerta de sucesso
                Alert.alert('Sucesso', 'Pergunta adicionada com Sucesso!');
            };
        });
    };
}