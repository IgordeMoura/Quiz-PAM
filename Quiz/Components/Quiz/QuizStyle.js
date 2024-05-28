import { StyleSheet } from "react-native";

const Style = StyleSheet.create({
    container:{
        alignItens: 'center',
        display: 'flex',
        flexDirection: 'collumn',
        textAlign: 'center',
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
    
    centralizando:{
        margin:'auto',
        marginBottom: 15,
        marginTop: 10
    },

    texto:{
        fontSize: 16,
        marginLeft: 15,
        marginTop: 10,
        marginBottom: 25,
        textAlign: 'center',
        width: '90%',
        color: 'white',
        
    },
    
    vwBotoes:{
        flexDirection: 'collumn',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
        marginTop: 0,
        marginBottom: 40,
    },
    vwBotoes2:{
        flexDirection: 'collumn',
        justifyContent: 'space-between',
        width: '75%',
        margin: 'auto',
        marginTop: 0,
        marginBottom: 40,
    },

    botoes:{
        width: '90%',
        marginBottom: 15,
    }, 

    logo: {
        width: '90%',
        height: 150,
        margin: 'auto',
        marginBottom: 5,
        marginTop: 15,
    },
})

export default Style;


