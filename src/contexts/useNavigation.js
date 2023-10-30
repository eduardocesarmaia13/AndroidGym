import React, { createContext, useContext, useState } from "react";
import usePersist from "react-native-persist-context";

const NavigationContext = createContext({});

export default function NavigationProvider({ children }) {
  const [user, setUser, clearUser] = usePersist("appContext", null);
  const [step, setStep] = useState("auth");
  
  const handleUser = (userData) => {
    setUser(userData);
  };

  const handleClearUser = () => {
    clearUser();
  };

  return (
    <NavigationContext.Provider
      value={{
        user,
        handleUser,
        handleClearUser,
        step,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export const useNavigation = () => useContext(NavigationContext);
