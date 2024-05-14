// Importando os Módulos Necessários
import React, { useState, useEffect } from "react";
import { Image, Button, TextInput, View, Alert } from 'react-native';
import * as SQLite from 'expo-sqlite';

//  Abrindo o banco de dados SQLite
const db = SQLite.openDatabase('quiz.db');

// Definindo o Componente Principal da Aplicação
export default function Edit() {
    // Definindo o estado inicial para cada campo do formulario
    const [id, setId] = useState(null);
    const [pergunta, setPergunta] = useState('');
    const [alternativaA, setAlternativaA] = useState('');
    const [alternativaB, setAlternativaB] = useState('');
    const [alternativaC, setAlternativaC] = useState('');
    const [alternativaD, setAlternativaD] = useState('');
    const [respostaCorreta, setRespostaCorreta] = useState('');

    // Carregando a Primeira Pergunta Quando o Componente é Montado
    useEffect(() => {
        carregarPergunta();
    }, []);

    // Função para carregar a primeira pergunta do banco de dados
    const carregarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT ( FROM perguntas ORDER BY id LIMIT 1;', [], (_, { rows }) => {
                let pergunta = rows._array [0];
                setId(pergunta.id);
                setPergunta(pergunta.pergunta);
                setAlternativaA(pergunta.alternativaA);
                setAlternativaB(pergunta.alternativaB);
                setAlternativaC(pergunta.alternativaC);
                setAlternativaD(pergunta.alternativaD);
                setRespostaCorreta(pergunta.resposta_correta);
            });
        });
    };

    // Função para atualizar a pergunta atual no banco de dados
    const atualizarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('UPDATE perguntas SET perguntas = ?, alternativaA = ?, alternativaB = ?, alternativaC = ?, alternativaD = ?, resposta_correta = ?, WHERE id = ?;', [pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta, id], () => {
                Alert.alert('Sucesso!', 'Pergunta atualizada com sucesso!');
            });
        });
    };

    // Função para deletar a pergunta atual do banco de dados
    const deletarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('DELETE FROM perguntas WHERE id = ?', [id], ()=> {
                Alert.alert('Sucesso!', 'Pergunta Deletada com Sucesso!');
                carregarPergunta();
            });
        });
    };

    // Função para carregar a proxima pergunta do banco de dados
    const proximaPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perguntas WHERE id > ? ORDER BY id LIMIT 1;', [id], (_, { rows }) => {
                if (rows.length > 0) {
                    let pergunta = rows._array[0];
                    setId(pergunta.id);
                    setPergunta(pergunta.pergunta);
                    setAlternativaA(pergunta.alternativaA);
                    setAlternativaB(pergunta.alternativaB);
                    setAlternativaC(pergunta.alternativaC);
                    setAlternativaD(pergunta.alternativaD);
                    setRespostaCorreta(pergunta.resposta_correta);
                } else {
                    Alert.alert('Informação', 'Esta é a Ultima Pergunta');
                };
            });
        });
    };

    // Função para carregar a pergunta anterior do banco de dados
    const perguntaAnterior= () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perguntas WHERE id < ? ORDER BY id LIMIT 1;', [id], (_, { rows }) => {
                if (rows.length > 0) {
                    let pergunta = rows._array[0];
                    setId(pergunta.id);
                    setPergunta(pergunta.pergunta);
                    setAlternativaA(pergunta.alternativaA);
                    setAlternativaB(pergunta.alternativaB);
                    setAlternativaC(pergunta.alternativaC);
                    setAlternativaD(pergunta.alternativaD);
                    setRespostaCorreta(pergunta.resposta_correta);
                } else {
                    Alert.alert('Informação', 'Esta é a Primeira Pergunta');
                };
            });
        });
    };
    
}