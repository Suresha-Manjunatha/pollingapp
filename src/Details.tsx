/** @format */

import React, { FC, useEffect } from "react";
import { View, Text } from "react-native";
import { ScreenStyles } from "./styles";

type route = {
  route: {
    params: {
      item: any;
    };
  };
};

const Details: FC<route> = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <View testID="details" style={ScreenStyles.screen}>
      {/* <Text style={{ fontSize: 24, color: "blue" }}>RAW JSON</Text> */}
      <Text> {props.route.params.item}</Text>
    </View>
  );
};

export default Details;
