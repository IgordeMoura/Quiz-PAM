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
        height: '40%',
        padding: '4%',
        borderRadius: 25,
        alignItens: 'center',
        display: 'flex',
        flexDirection: 'collumn',
        margin: 'auto',
        marginTop: 160,
        backgroundColor: '#313236',
    },

    vwBotoes:{
        flexDirection: 'collumn',
        justifyContent: 'space-between',
        width: '90%',
        margin: 'auto',
        marginBottom: 0,
        marginTop: 30,
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
