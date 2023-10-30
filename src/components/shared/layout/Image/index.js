import React from "react";
import { useAssets } from "expo-asset";
import { Image } from "react-native";

export function Image(src, rest = React.JSX.Element) {
  const [assets, error] = useAssets([require(src)]);

  return assets ? <Image source={assets[0]} {...rest} /> : null;
}
