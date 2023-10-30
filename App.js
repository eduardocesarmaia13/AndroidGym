import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import NavigationProvider from "./src/contexts/useNavigation";
import { Headers } from "./src/components/shared/globals/headers";

const App = () => {
  return (
    <NavigationContainer>
      <NavigationProvider>
        <Headers />
        <Routes />
      </NavigationProvider>
    </NavigationContainer>
  );
};

export default App;
