/** @format */

import React, { FC } from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "./styles";

const Details: FC<any> = (props) => {
  return (
    <View testID="details" style={ScreenStyles.screen}>
      <Text> {props.route.params.item}</Text>
    </View>
  );
};

export default Details;
