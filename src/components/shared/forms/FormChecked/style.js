import { StyleSheet } from "react-native";
import { colors } from "../../../../styles/colors";

export const style = StyleSheet.create({
  group: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginTop: "2%",
    marginBottom: "2%",
  },
  label: {
    color: colors.white.default,
    fontSize: 15,
    marginLeft: "2%"
  },
  input: {
    width: "10%",
    color: "#fff",
    fontSize: 15,
    padding: "4%",
    borderWidth: 2,
    borderColor: colors.white[700],
    borderRadius: 10,
    marginRight: "2%"
  },
});
