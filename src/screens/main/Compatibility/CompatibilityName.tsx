import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import CustomButton from "../../../components/CustomButton";
import { font } from "../../../utils/font";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import CustomInput from "../../../components/CustomInput";
import Steps from "../../auth/Signup/Steps";

const CompatibilityNameScreen = ({ navigation }: any) => {
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
            size={13}
            lineHeight={21}
            style={{ textAlign: "center" }}
            color={colors.white + "70"}
            fontWeight="600"
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
              onPress={() => navigation.navigate("CompatibilityDateOfBirthScreen")}
              text="Next"
            />
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default CompatibilityNameScreen;
const styles = StyleSheet.create({
  main: {
    paddingHorizontal: scale(20),
    flex: 1,
    gap: verticalScale(15),
  }
});
