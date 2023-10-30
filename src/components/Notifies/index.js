import { View, Image, Text, ScrollView } from "react-native";
import { styleLayout } from "./style/layout";
import { Notify } from "./Notify";
import { notifiesMoocks } from "./__mocks__/notifies";

export function Notifies({ navigation }) {
  return (
    <View style={styleLayout.container}>
      <View>
        <Image source={require("@public/icons/arrow-narrow-right.png")} />
      </View>
      <View style={styleLayout.box}>
        <Text style={styleLayout.title}>{"Notificações"}</Text>
        <Text style={styleLayout.counter}>{`(${notifiesMoocks.length})`}</Text>
      </View>
      <ScrollView>
        {notifiesMoocks.map((props, key) => (
          <Notify key={key} {...props} />
        ))}
      </ScrollView>
    </View>
  );
}
