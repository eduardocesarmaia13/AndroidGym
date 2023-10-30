import React from "react";
import { ScrollView, View, Text, Image } from "react-native";
import Operation from "../components/Operation";
import { styleLayout } from "./styles/layout";

export default function Funcionamento({ navigation }) {
  return (
    <View style={[styleLayout.container]}>
      <View>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View>
        <Text style={styleLayout.title}>{"Funcionamento da academia 😎"}</Text>
        <Text style={styleLayout.subtitle}>
          {"Preencha os dados para enviar o convite para o usuário."}
        </Text>
      </View>
      <ScrollView>
        <Operation />
      </ScrollView>
    </View>
  );
}
