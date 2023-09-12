import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const Cadastro = ({ navigation }) => {
    const [form, setForm] = useState({
        matricula: null,
        nome: null,
        dataNas: null,
        cpf: null,
        peso: null,
        altura: null
    });

    const handleGravar = () => {
        alert('NA PRÓXIMA AULA IREMOS GRAVAR OS REGISTROS EM UMA BASE DE DADOS!!!');
    };

    return (
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
                    <Text style={styles.label2}>Matrícula : </Text>
                    <TextInput
                        // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        style={[styles.input, { width: 100 }]}
                        value={form.matricula}
                        onChangeText={(ev) => setForm({
                            ...form,
                            matricula: ev.value
                        })}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}>  Nome : </Text>
                    <TextInput
                        style={[styles.input, { width: 400 }]}  // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={form.nome}
                        onChangeText={(ev) => setForm({
                            ...form,
                            nome: ev.value
                        })}
                    />
                </View>
            </View>
            <View style={styles.inputContainer1}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}>Data Nasc: </Text>
                    <TextInput
                        // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        style={[styles.input, { width: 100 }]}
                        value={form.dataNas}
                        onChangeText={(ev) => setForm({
                            ...form,
                            dataNas: ev.value
                        })}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}> CPF: </Text>
                    <TextInput
                        style={[styles.input, { width: 400 }]}  // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={form.cpf}
                        onChangeText={(ev) => setForm({
                            ...form,
                            cpf: ev.value
                        })}
                    />
                </View>
            </View>
            <View style={styles.inputContainer1}>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}>Peso : </Text>
                    <TextInput
                        // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        style={[styles.input, { width: 100 }]}
                        value={form.peso}
                        onChangeText={(ev) => setForm({
                            ...form,
                            peso: ev.value
                        })}
                    />
                </View>
                <View style={styles.inputGroup}>
                    <Text style={styles.label2}> Altura: </Text>
                    <TextInput
                        style={[styles.input, { width: 400 }]}  // AJUSTE DO TAMANHO DA LARGURA DO TEXTINPUT
                        value={form.altura}
                        onChangeText={(ev) => setForm({
                            ...form,
                            altura: ev.value
                        })}
                    />
                </View>
            </View>
            {/*FLEXIBILIDADE DA POSIÇÃO DO BOTÃO */}
            <View style={styles.ButtonContainer} >
                <Button title="Gravar" onPress={handleGravar} />
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
    label2: {
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Arial',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    inputContainer1: {
        flexDirection: 'row',    // Arrange input groups horizontally
        alignItems: 'center',    // Align input groups vertically within the container
        marginBottom: 10,
    },
    inputGroup: {
        //flex: 1,                 // Equal flex to distribute the space evenly
        flexDirection: 'row',    // Arrange label and input horizontally
        alignItems: 'center',    // Align label and input vertically
        marginBottom: 10,
    },
    input: {
        flex: 1,                 // Take up remaining space
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
    },
    ButtonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 600,
        // marginBottom: 1, //ADD MARGEM PARA O BOTÃI
    },
});

export default Cadastro;
