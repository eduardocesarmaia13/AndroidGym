import React, { useState } from 'react';
import {
    View,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Text,
    Image,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Cadastro = ({ navigation }) => {
    const [form, setForm] = useState({
        matricula: '',
        nome: '',
        dataNas: '',
        cpf: '',
        peso: '',
        altura: '',
    });

    const handleGravar = () => {
        // Implemente a lógica para gravar os registros em uma base de dados
        alert('Registro gravado com sucesso!');
    };

    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                resizeMode="center"
                source={require('./imagens/GoldsGym.png')}
            />
            <Text style={styles.title}>
                SISTEMA DE CONTROLE DOS USUÁRIOS DA ACADEMIA
            </Text>

            <View style={styles.form}>
                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Matrícula:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.matricula}
                        onChangeText={(text) => setForm({ ...form, matricula: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Nome:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.nome}
                        onChangeText={(text) => setForm({ ...form, nome: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Data de Nascimento:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.dataNas}
                        onChangeText={(text) => setForm({ ...form, dataNas: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>CPF:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.cpf}
                        onChangeText={(text) => setForm({ ...form, cpf: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Peso:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.peso}
                        onChangeText={(text) => setForm({ ...form, peso: text })}
                    />
                </View>

                <View style={styles.inputContainer}>
                    <Text style={styles.label}>Altura:</Text>
                    <TextInput
                        style={styles.input}
                        value={form.altura}
                        onChangeText={(text) => setForm({ ...form, altura: text })}
                    />
                </View>
            </View>

            <TouchableOpacity style={styles.button} onPress={handleGravar}>
                <Text style={styles.buttonText}>Gravar</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        color: 'blue',
    },
    form: {
        width: '80%', // Definindo a largura do formulário
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    label: {
        flex: 1, // Distribui o espaço para o rótulo
        fontSize: 18,
        fontWeight: 'bold',
        marginRight: 10,
    },
    input: {
        flex: 2, // Distribui o espaço para o campo de entrada
        padding: 10,
        fontSize: 18,
        borderWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'white',
        borderRadius: 10,
    },
    button: {
        backgroundColor: 'blue',
        padding: 10,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default Cadastro;
