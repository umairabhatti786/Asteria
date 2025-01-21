import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import Steps from "./Steps";
import CustomInput from "../../../components/CustomInput";

const NameScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader title="ENTER THE NAME" />
        <Steps />
        <View style={{ alignItems: "center", flex: 1 }}>
          <CustomText
            text={
              "To make your journey more insightful, let’s get to know you better."
            }
            size={14}
            lineHeight={25}
            style={{ textAlign: "center" }}
            color={colors.white + "70"}
            fontWeight="600"
          />
          <Image
            style={{
              width: "100%",
              height: scale(130),
            }}
            resizeMode="cover"
            source={images.eye}
          />
          <View
            style={{
              width: "100%",
              marginVertical: verticalScale(30),
              gap: verticalScale(10),
              flex: 1,
              justifyContent: "space-between",
            }}
          >
            <CustomInput placeholder="Enter name" />
            <CustomButton
              onPress={() => navigation.navigate("DateOfBirthScreen")}
              text="Next"
            />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default NameScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  },
});
