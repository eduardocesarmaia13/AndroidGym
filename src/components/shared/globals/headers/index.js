import { View, Image, SafeAreaView } from "react-native";
import { styleHeader } from "./style/styleHeader";
import { useNavigation } from "../../../../contexts/useNavigation";
import { When } from "../../utils/When";

export function Headers({ children }) {
  const { user } = useNavigation();

  return (
    <When isValid={!!user}>
      <SafeAreaView style={styleHeader.content}>
        <View style={styleHeader.box}>
          <Image
            style={styleHeader.logo}
            source={require("@public/images/logotype.png")}
          />
        </View>
        <View style={{ ...styleHeader.box, justifyContent: "flex-end" }}>
          <View>
            <Image
              style={styleHeader.notifyIcon}
              source={require("@public/icons/bell.png")}
            />
          </View>
          <View>
            <Image
              style={styleHeader.menuIcon}
              source={require("@public/icons/align-right.png")}
            />
          </View>
        </View>
      </SafeAreaView>
    </When>
  );
}
