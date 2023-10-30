import React, { useEffect } from "react";
import { View, Image, SafeAreaView } from "react-native";
import Login from "../components/Login";
import { layoutStyles } from "../components/Login/styles/layout";
import { useNavigation } from "../contexts/useNavigation";

export default function Index({ navigation }) {
  const { handleClearUser } = useNavigation();

  useEffect(() => {
    handleClearUser();
  }, []);
  
  return (
    <View style={[layoutStyles.container]}>
      <Image
        style={layoutStyles.wallaper}
        source={require("@public/images/wallpapers/wallpaper-login.png")}
      />
      <View style={layoutStyles.layerWallper} />

      <SafeAreaView>
        <Login />
      </SafeAreaView>
    </View>
  );
}
