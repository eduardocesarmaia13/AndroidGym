import React from "react";
import Profile from "../components/Profile";
import { ScrollView, View, Text, Image } from "react-native";
import { styleLayout } from "./styles/layout";
import { users } from "../constants/users";

export default function Perfil({ navigation }) {
  return (
    <View style={[styleLayout.container]}>
      <View onTouchStart={() => navigation.goBack()}>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View>
        <Text style={styleLayout.title}>{"Edição de Perfil"}</Text>
        <Text style={styleLayout.subtitle}>
          {"Atualize as informações do usuário abaixo"}
        </Text>
      </View>
      <ScrollView>
        <Profile data={users[0]} />
      </ScrollView>
    </View>
  );
}
