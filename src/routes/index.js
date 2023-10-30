import React from "react";
import { StatusBar } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AuthenticationStack from "./Authentication";
import UserLoggedStack from "./UserLogged/UserLogged";
import { useNavigation } from "../contexts/useNavigation";
import Noticacao from "../pages/Noticacao";

const StackNavigator = createNativeStackNavigator();

export default function Routes() {
  const { user, step } = useNavigation();

  const actions = {
    notify: <StackNavigator.Screen name="Notify" component={Noticacao} />,
    logged: (
      <StackNavigator.Screen name="UserLogged" component={UserLoggedStack} />
    ),
    auth: (
      <StackNavigator.Screen name="AuthStack" component={AuthenticationStack} />
    ),
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <StackNavigator.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {actions[step]}
      </StackNavigator.Navigator>
    </>
  );
}
