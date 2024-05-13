// importando os modulos necessarios
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

// importando os componentes das diferentes telas
import Home from './Components/Home';
import Add from './Components/Add';
// import Quiz from './Components/Quiz';
// import Edit from './Components/Edit';

// Criando o objeto stack para a navegação entre telas
const stack = createStackNavigator();

//Definindo o Componente principal do app
export default function app() {
  return (
    //iniciando o container de navegação
    <NavigationContainer>
      {/* Iniciando o Stack Navigator com a tela inicial sendo Home */}
      <Stack.Navigator initialRouteName="Home">
        {/* Defininido as Diferentes Telas que Podem Ser Navegadas */}
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Add" component={Add}/>
        {/* <Stack.Screen name="Quiz" component={Quiz}/>
        <Stack.Screen name="Edit" component={Edit}/> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}