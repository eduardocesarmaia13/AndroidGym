import { View, Text, StyleSheet} from "react-native";
import { useButton } from "./hooks/useButton";

export function Button({
  style = StyleSheet.create({}),
  text,
  hoverStyle = {},
  onPress = () => 0,
}) {
  const { handleHover, styleCurrent } = useButton({
    style,
    hoverStyle,
  });
  const { color, textAlign, fontSize, fontWeight, ...viewStyle } = styleCurrent;

  return (
    <View style={viewStyle} onTouchStart={handleHover}>
      <Text
        onPress={onPress}
        style={{
          color,
          textAlign,
          fontSize,
          fontWeight,
        }}
      >
        {text}
      </Text>
    </View>
  );
}
