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

    
    // Função para carregar a primeira pergunta do banco de dados
    const carregarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('SELECT * FROM perguntas ORDER BY id LIMIT 1;', [], (_, { rows }) => {
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
    
    // Carregando a Primeira Pergunta Quando o Componente é Montado
    useEffect(() => {
        carregarPergunta();
    }, []);

    // Função para atualizar a pergunta atual no banco de dados
    const atualizarPergunta = () => {
        db.transaction(tx => {
            tx.executeSql('UPDATE perguntas SET pergunta = ?, alternativaA = ?, alternativaB = ?, alternativaC = ?, alternativaD = ?, resposta_correta = ?, WHERE id = ?;', [pergunta, alternativaA, alternativaB, alternativaC, alternativaD, respostaCorreta, id], () => {
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
    
    return(
        <View style={{alignItems: 'center'}}>
            {/* Renderizando o Logo */}
            {/* <Image source={require('../assets/logo.png')} style={{width: '90%', height: 150, marginBottom: 45}}/> */}
            {/* Renderizando os campos de texto com a borda e o espaçamento especifico */}
            <TextInput placeholder="Digite a Pergunta" value={pergunta} multiline={true} onChangeText={setPergunta} numberOfLines={4}
            style={{height: 80, borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            <TextInput placeholder="Digite a Alternativa A" value={alternativaA} onChangeText={setAlternativaA} style={{borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            <TextInput placeholder="Digite a Alternativa B" value={alternativaB} onChangeText={setAlternativaB} style={{borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            <TextInput placeholder="Digite a Alternativa C" value={alternativaC} onChangeText={setAlternativaC} style={{borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            <TextInput placeholder="Digite a Alternativa D" value={alternativaD} onChangeText={setAlternativaD} style={{borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            <TextInput placeholder="Digite a Letra da Resposta Correta" value={respostaCorreta} onChangeText={setRespostaCorreta} style={{borderColor:'blue', borderWidth: 1, marginBottom: 5, width: '90%'}}/>
            {/* Renderizando os Botões para atualizar e deletar a pergunta */}
            <View style={{marginBottom: 15}}>
                <Button title='atualizar pergunta' onPress={atualizarPergunta} style={{marginBottom: 5}}/>
            </View>
            <Button title='Deletar Pergunta' onPress={deletarPergunta} color={'red'} style={{marginBottom: 5}}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '90%'}}>
                <Button title='Voltar' onPress={perguntaAnterior}/>
                <Button title='Avançar' onPress={proximaPergunta}/>
            </View>
        </View>
    );
}