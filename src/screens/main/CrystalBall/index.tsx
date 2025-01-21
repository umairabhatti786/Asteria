import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import CustomText from "../../../components/CustomText";
import { images } from "../../../assets/images";
import ScreenLayout from "../../../components/ScreenLayout";
import TopHeader from "../../../components/TopHeader";
import { appStyles } from "../../../utils/AppStyles";
const CrystalBall = ({ navigation }: any) => {
  // const
  return (
    <>
      <ScreenLayout style={styles.main}>
        <TopHeader color={"#FFD854"} title="Crystal Ball" />
        <View style={{ ...appStyles.row, flexWrap: "wrap", gap: scale(10),marginTop:verticalScale(10) }}>
          {[
            "Illuminate My Path",
            "Reveal My Destiny",
            "Reveal my fortune",
            "Reveal My Destiny",
            "Call Upon the Spirits",
            "Illuminate My Path",
            "Summon the Stars",
            "Summon My Future",
            "Call Upon the Spirits",
          ].map((item, index) => {
            return (
              <View
              key={index.toString()}
                style={{
                  alignItems: "center",
                  paddingHorizontal: scale(11),
                  paddingVertical: verticalScale(5),
                  borderRadius: 999,
                  borderWidth: 0.5,
                  borderColor: "#FFD85430",
                  marginBottom: verticalScale(3),
                }}
              >
                <CustomText
                  text={item}
                  textTransform={"capitalize"}
                  size={14}
                  color={"#FFD85450"}
                  fontWeight="600"
                />
              </View>
            );
          })}
        </View>
        <Image
          style={{
            width: scale(170),
            height: scale(170),
            alignSelf: "center",
          }}
          resizeMode="contain"
          source={images.crystal_ball}
        />

        <View
          style={{
            alignItems: "center",
            // gap: verticalScale(4),
            flex: 1,
          }}
        >
          <CustomText
            text={"Seeking Wisdom?"}
            textTransform={"uppercase"}
            size={20}
            color={"#FFD854"}
            fontWeight="600"
          />
          <CustomText
            text={"Tap to ask or speak directly"}
            size={14}
            color={colors.white + "80"}
          />
        </View>

        <View
          style={{
            ...appStyles.rowjustify,
            marginBottom: verticalScale(40),
          }}
        >
              <View
            style={styles.btnContainer}
          >
            <TouchableOpacity
              style={styles.btn}
            >
              <Image
                style={{
                  width: scale(20),
                  height: scale(20),
                  alignSelf: "center",
                  tintColor:"#FFD85490"

                }}
                resizeMode="contain"
                source={images.chat}
              />
              <CustomText 
              textTransform={"uppercase"}
              text={"Start a chat"} size={16} color={"#FFD85490"} />
            </TouchableOpacity>
          </View>
          <View
            style={styles.btnContainer}
          >
            <TouchableOpacity
              style={styles.btn}
              activeOpacity={0.5}
              onPress={()=>navigation.navigate("CrystalBallSpeaking")}
            >
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
              <CustomText 
              textTransform={"uppercase"}
              text={"Speak"} size={16} color={"#FFD85490"} />
            </TouchableOpacity>
          </View>
        </View>
      </ScreenLayout>
    </>
  );
};

export default CrystalBall;
const styles = StyleSheet.create({
  main: {
    // gap: verticalScale(5),
    width: "100%",
    height: "100%",
    padding: scale(15),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
  btn:{
    width: "100%",
    height: verticalScale(35),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: scale(5),
    backgroundColor: "#FFD85450",
    borderRadius: 999,
    paddingHorizontal: scale(5),
    paddingVertical: verticalScale(4),
  },
  btnContainer:{
    padding: scale(4),

    borderWidth: 1,
    borderColor: "#FFD85440",
    borderRadius: 999,
    width: "48%",

  }
});
