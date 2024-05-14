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

    // Criando a Tabela 'perguntas' se ela não existir no banco de dados
    db.transaction(tx => {
        tx.executeSql(
            'CREATE TABLE IF NOT EXISTS perguntas (id INTEGER PRIMARY KEY AUTOINCREMENT, pergunta TEXT, alternativaA Text, alternativaB TEXT, alternativaC TEXT, alternativaD TEXT, resposta_correta TEXT);'
        );
    });

    // função para adicionar uma pergunta ao banco de dados
    const adicionarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('INSERT INTO perguntas (pergunta, alternativaA, alternativaB, alternativaC, alternativaD, resposta_correta) VALUES (?, ?, ?, ?, ?, ?)',
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
            });
        });
    };
    //Renderizando o Componente
    return(
        <View style={{alignItens: 'center'}}>
            {/* Renderizando Logo */}
            <Image source={require('../assets/logo.png')} style={{width: '90%', height: 150, marginBottom: 45}}/>
            {/* Renderizando os campos de Texto com a borda e o espaçamento especificados */}
            <TextInput placeholder='Digite a Pergunta' value={pergunta} multiline={true} onChangeText={setPergunta} numberOfLines={4}
            style={{height:80, borderColor: 'blue', borderWidth:1, marginBottom:15, width:'90%'}}/>
            <TextInput placeholder='Digite a Alternativa A' value={alternativaA} onChangeText={setAlternativaA} style={{borderColor: 'blue', borderWidth:1, marginBottom:5, width:'90%', height: 50}}/>
            <TextInput placeholder='Digite a Alternativa B' value={alternativaB} onChangeText={setAlternativaB} style={{borderColor: 'blue', borderWidth:1, marginBottom:5, width:'90%', height: 50}}/>
            <TextInput placeholder='Digite a Alternativa C' value={alternativaC} onChangeText={setAlternativaC} style={{borderColor: 'blue', borderWidth:1, marginBottom:5, width:'90%', height: 50}}/>
            <TextInput placeholder='Digite a Alternativa D' value={alternativaD} onChangeText={setAlternativaD} style={{borderColor: 'blue', borderWidth:1, marginBottom:5, width:'90%', height: 50}}/>
            <TextInput placeholder='Digite a Resposta Correta' value={respostaCorreta} onChangeText={setRespostaCorreta} style={{borderColor: 'blue', borderWidth:1, marginBottom:5, width:'90%', height: 50}}/>
            {/* Renderizando o Botão para adicionar uma Pergunta */}
            <Button tittle='Adicionar Pergunta' onPress={adicionarPergunta}/>
        </View>
    );
}