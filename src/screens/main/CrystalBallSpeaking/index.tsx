import React, { useEffect, useState } from "react";
import { View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
const CrystalBallSpeaking = ({ navigation }: any) => {
  // const
  return (
    <>
      <ScreenLayout style={styles.main}>
        <Image
          style={{
            width: scale(170),
            height: scale(170),
            alignSelf: "center",
            marginTop: verticalScale(-80),
          }}
          resizeMode="contain"
          source={images.ball}
        />

        <View
          style={{
            gap: verticalScale(20),
            flex: 1,
          }}
        >
          <CustomText
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n\n Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
            }
            size={16}
            lineHeight={22}
            color={"#FFD85470"}
          />

          <CustomText
            text={"0:31 sec"}
            size={18}
            // fontFam={font.Chillax_Medium}
            // fontWeight="600"
            style={{ textAlign: "center" }}
            lineHeight={22}
            color={colors.white}
          />
        </View>

        <View
          style={{
            ...appStyles.rowjustify,
            marginBottom: verticalScale(40),
          }}
        >
          <View style={styles.btnContainer}>
            <TouchableOpacity
            activeOpacity={0.5}
            onPress={()=>navigation.goBack()}
              style={{ ...styles.btn, backgroundColor: colors.white + "50" }}
            >
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: "center",
                }}
                resizeMode="contain"
                source={images.crose}
              />
            </TouchableOpacity>
          </View>

          <CustomText
            text={"Start a new chat"}
            size={18}
            // fontFam={font.Chillax_Medium}
            // fontWeight="600"
            style={{ textAlign: "center" }}
            lineHeight={22}
            color={colors.white + "60"}
          />
          <View style={styles.btnContainer}>
            <TouchableOpacity style={styles.btn}>
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: "center",
                  tintColor:"#FFD85490"
                }}
                resizeMode="contain"
                source={images.microphone}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default CrystalBallSpeaking;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(15),
    width: "100%",
    height: "100%",
    paddingHorizontal: scale(15),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  btn: {
    // height: verticalScale(35),
    padding: scale(12),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: scale(5),
    backgroundColor: "#FFD85470",
    borderRadius: 999,
  },
  btnContainer: {
    padding: scale(4),
    borderWidth: 1,
    borderColor: "#FFD85450",
    borderRadius: 999,
  },
});
