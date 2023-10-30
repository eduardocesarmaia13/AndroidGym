import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cadastro from "../../pages/Cadastro";
import Funcionamento from "../../pages/Funcionamento";

const Stack = createNativeStackNavigator();

export default function UserLoggedStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen name="Funcionamento" component={Funcionamento} />
      <Stack.Screen name="Cadastro" component={Cadastro} />
    </Stack.Navigator>
  );
}
