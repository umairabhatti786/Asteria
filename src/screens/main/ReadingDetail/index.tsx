import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageBackground,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import TopHeader from "../../../components/TopHeader";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
import { font } from "../../../utils/font";
const ReadingDetailScreen = ({ navigation }: any) => {
  return (
    <>
      <ScreenLayout style={styles.main}>
        <ImageBackground
          style={{
            width: windowWidth,
            height: windowHeight / 2,
            padding: scale(15),
          }}
          source={images.reading_detail}
        >
          <TopHeader />
          <Image
            style={{
              width: scale(300),
              height: scale(300),
              alignSelf: "center",
              marginLeft: scale(30),
              marginTop: verticalScale(60),
            }}
            resizeMode="contain"
            source={images.palm_reading}
          />
        </ImageBackground>

        <View
          style={{
            alignItems: "center",
            // gap: verticalScale(7),
            marginTop: verticalScale(10),
            flex: 1,
          }}
        >
          <CustomText
            text={"Palm Reading"}
            size={42}
            color={colors.primary}

            fontFam={font.Chillax_Medium}
            fontWeight="600"
          />
          <CustomText
            text={"Read your palm to know your fortune"}
            size={14}
            color={colors.white + "80"}
          />
        </View>

        <View
          style={{
            ...appStyles.row,
            gap: scale(10),
            marginBottom: verticalScale(40),
            alignSelf:"center",
            paddingHorizontal:scale(10)
          }}
        >
          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
          <View style={styles.dot} />
          <CustomButton
            width={"75%"}
            onPress={() => navigation.navigate("ReadNowScreen")}
            text="READ NOW"
          />
          <View style={styles.dot} />

          <View style={{ ...styles.dot, width: scale(7), height: scale(7) }} />
        </View>
      </ScreenLayout>
    </>
  );
};

export default ReadingDetailScreen;
const styles = StyleSheet.create({
  main: {
    gap: verticalScale(10),
    width: "100%",
    height: "100%",
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
