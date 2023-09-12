import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Login = ({ navigation }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (username === 'usuario' && password === '123') {
            navigation.navigate('Cadastro'); // Navigate to Cadastro screen
            //LIMPANDO OS CAMPOS DE ENTRADAS DE DADOS
            setUsername = ('')
            setPassword = ('')
        } else {
            alert('Usuário e/ou Senha inválidos');
        }
    };

    return (
        //backgroundColor  -  COR DO FUNDO DA TELA
        <View style={[styles.container, { backgroundColor: 'lightblue' }]}>
            <Image
                style={styles.imagem}
                resizeMode="center"
                source={require('./imagens/GoldsGym.png')}
            />
            <Text style={[styles.label1, { marginBottom: 20, textAlign: 'center' }]}>
                SISTEMA DE CONTROLE DOS USUARIOS DA ACADEMIA
            </Text>

            {/* Input Container */}
            <View style={styles.inputContainer1}>
                <View style={styles.inputGroup}>
                    <Text style={styles.labelusuario}>Usuário </Text>
                    <TextInput
                        // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        style={[styles.input, { width: 200, textAlign: 'center' }]}
                        value={username}
                        onChangeText={setUsername}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}>  Senha</Text>
                    <TextInput
                        // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        style={[styles.input, { width: 150, textAlign: 'center' }]}
                        secureTextEntry
                        value={password}
                        onChangeText={setPassword}
                    />
                </View>
            </View>
            {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
            <View style={styles.ButtonContainer} >
                <Button title="Login" onPress={handleLogin} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    label1: {
        color: 'blue',
        fontSize: 20,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    labelusuario: {
        marginTop: 100,
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    label2: {
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer1: {
        //flexDirection: 'row',    // ALINHA INPUTS EM FORMA HORIZONTAL NO CONTAINER
        alignItems: 'center',    //  ALINHA INPUTS EM FORMA VERTICAL NO CONTAINER
        marginBottom: 10,
    },
    inputGroup: {
        // flexDirection: 'row',    //  ALINHA INPUTS EM FORMA HORIZONTAL NO CONTAINER
        alignItems: 'center',    //  ALINHA INPUTS EM FORMA VERTICAL NO CONTAINER
        marginBottom: 10,
    },
    input: {
        flex: 1,                 // REMANEJA DE ESPAÇO PARA CIMA
        padding: 10,
        fontSize: 18,
        fontWeight: 'bold',
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        textAlign: 'left',
        marginBottom: 10,
    },
    imagem: {
        alignSelf: 'stretch',
        height: 70,
        marginTop: 5,
        marginBottom: 10,
    },
    ButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 400,
    },
});

export default Login;
