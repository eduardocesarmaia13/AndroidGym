import { Text, TextInput, View } from "react-native";
import { style } from "./style";
import { colors } from "../../../../styles/colors";

export function FormChecked({
  label = "",
  value,
  setValue,
  placeholder = "",
  Icon = () => <></>,
  BeforeIcon = () => <></>,
  styleCustom = {},
  ...rest
}) {

  return (
    <View style={{ ...styleCustom, ...style.group }}>
      <Icon />
      <View
        onPress={(valueCurrent) => !valueCurrent ? setValue(value) : setValue(null) }
        placeholder={placeholder}
        placeholderTextColor={colors.white[900]}
        style={[style.input]}
        {...rest}
      />
      <Text style={style.label}>{label}</Text>
    </View>
  );
}
