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
        marginBottom: 15,
        marginTop: 0,
        textAlign: 'center',
        borderRadius: 25,
    },
    
    botoes:{
        marginBottom: 5,        
    }, 
    
    logo: {
        width: '90%',
        height: 150,
        margin: 'auto',
        marginBottom: 45,
        marginTop: 15,
    },
})

export default Style;