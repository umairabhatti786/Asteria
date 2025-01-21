import React, { useEffect, useState } from "react";
import { View, StyleSheet } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { appStyles } from "../../../utils/AppStyles";

const Steps = ({ CurrentStep = 1 }: any) => {
  return (
    <>
      <View style={appStyles.rowjustify}>
        {[1, 2, 3, 4, 5].map((ite, index) => {
          return (
            <View
              style={{
                width: "18%",
                height: verticalScale(2),
                backgroundColor:
                  CurrentStep >= index + 1
                    ? colors.primary
                    : colors.primary + "20",
                borderRadius: 999,
              }}
            />
          );
        })}
      </View>
    </>
  );
};

export default Steps;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(5),
    width: windowWidth,
    height: windowHeight,
    alignItems: "center",
    justifyContent: "flex-end",
    gap: verticalScale(10),
    paddingBottom: verticalScale(40),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
