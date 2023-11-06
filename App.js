import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Routes from "./src/routes";
import NavigationProvider from "./src/contexts/useNavigation";
import { Headers } from "./src/components/shared/globals/headers";
import { queryClient } from "./src/services/queryClient";
import { QueryClientProvider } from "react-query";

const App = () => {
  return (
    <NavigationContainer>
      <QueryClientProvider client={queryClient}>
        <NavigationProvider>
          <Headers />
          <Routes />
        </NavigationProvider>
      </QueryClientProvider>
    </NavigationContainer>
  );
};

export default App;
