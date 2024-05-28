import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container:{
        alignItens: 'center',
        display: 'flex',
        flexDirection: 'collumn',
        flex: 1,
        backgroundColor: '#fcfcfc',
    },

    conteudo:{
        width: '90%',
        height: '65%',
        padding: '4%',
        borderRadius: 25,
        alignItens: 'center',
        display: 'flex',
        flexDirection: 'collumn',
        margin: 'auto',
        marginTop: 0,
        backgroundColor: '#313236',
    },
    
    
    input: {
        height: 50,
        width: '90%',
        borderWidth: 0,
        borderColor: 'orange',
        backgroundColor: '#ededed',
        margin: 'auto',
        marginBottom: 10,
        marginTop: 0,
        textAlign: 'center',
        borderRadius: 25,
    },

    centralizando:{
        margin:'auto',
        marginBottom: 10,
        marginTop: 10
    },
    
    vwBotoes:{
        flexDirection: 'collumn',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
    },

    liBotoes:{
        width: 150,
        margin: 'auto',
        marginLeft: 50,
        flexDirection: 'row',
        gap: 15,
    },
    liBotoes2:{
        flexDirection: 'row',
        gap: 42,
        marginLeft: 75,
    },

    botoes:{
        marginBottom: 5,
    }, 
    
    logo: {
        width: '85%',
        height: 150,
        margin: 'auto',
        marginBottom: 0,
        marginTop: 10,
    },
})

export default Style;