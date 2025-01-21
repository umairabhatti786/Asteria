import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import { Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import ToggleSwitch from "toggle-switch-react-native";
import LinearGradient from "react-native-linear-gradient";
const TodayHoroscope = ({ navigation }: any) => {
  const [isNotificaion, setIsNotificaion] = useState(false);
  const onChangeToggle = () => {
    setIsNotificaion(!isNotificaion);
  };
  const Header = () => {
    return (
      <View
        style={[
          {
            ...appStyles.rowjustify,
            width: scale(40),
            height: verticalScale(3.5),
            backgroundColor: colors.primary,
            alignSelf: "center",
            borderRadius: 999,
            marginVertical: verticalScale(10),
          },
        ]}
      ></View>
    );
  };
  const DetailCard = ({ title, label, isToggle }: any) => {
    return (
      <LinearGradient
        colors={["#B2AFFE40", "#B2AFFE10"]} // Properly formatted with transparency
        start={{ x: 0.3, y: 0 }} // Top-left corner
        end={{ x: 1, y: 1 }} // Bottom-right corner
        style={{ ...styles.infoContainer, width: "100%" }}
      >
        <CustomText
          text={label}
          size={16}
          color={colors.primary}
          fontWeight="600"
        />
        <View
        style={{...appStyles.row,
            gap:scale(10)
        }}
        >

<TouchableOpacity
        activeOpacity={0.5}
          style={styles.circleConatiner}
        >
            <Image
              style={styles.infoIcon}
              resizeMode="contain"
              source={images.heart}
            />

        </TouchableOpacity>

        <TouchableOpacity
        activeOpacity={0.5}
          style={{...styles.circleConatiner,
            backgroundColor:colors.white+"30"
        }}
        >
            <Image
              style={styles.infoIcon}
              resizeMode="contain"
              source={images.crose}
            />

        </TouchableOpacity>

        </View>
       
      </LinearGradient>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      <View style={{ gap: verticalScale(5), alignItems: "center" }}>
        <CustomText
          textTransform={"uppercase"}
          text={"today’s horoscope"}
          size={24}
          color={colors.primary}
        />
        <CustomText
          text={"Sept 22, 2024"}
          size={14}
          color={colors.white + "90"}
        />
      </View>
      <View style={{ flex: 1 }}>
        <CustomText
          lineHeight={20}
          text={
            "Today, the universe encourages you to embrace the balance between self-care and growth. The seeds you have planted through your daily habits are beginning to bloom, revealing the progress you've made. Whether through exercise, mindfulness, or new routines, your efforts have started to align with your personal transformation.\n\n Now is the time to reflect on your journey. Are there areas where you can nurture yourself even more? Give yourself credit for the small victories, and remember, taking care of your well-being is a continuous process. This day reminds you that your physical and mental wellness are intertwined, so prioritize both equally. Keep nourishing your mind with positivity and your body with good health. The road ahead is filled with even more potential.\n\n Allow yourself moments of peace today, even amidst the hustle. A brief meditation or walk outside could be the perfect way to re-center yourself. Trust in the process, knowing that the universe is guiding you toward a stronger, healthier version of yourself. Your inner work is paying off, and it’s just the beginning."
          }
          size={14}
          color={colors.white + "90"}
        />
      </View>

      <View style={{ gap: verticalScale(30), marginBottom: verticalScale(30) }}>
        <DetailCard title="ACCOUNT" label={"Delete account"} />
      </View>
    </ScreenLayout>
  );
};

export default TodayHoroscope;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
    paddingHorizontal: scale(15),
    backgroundColor: "#2A2A3C",
    borderRadius: 20,
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
  infoContainer: {
    width: "47%",
    paddingVertical: verticalScale(7),
    backgroundColor: "#1C1C29",
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: colors.primary + "60",
    borderRadius: scale(12),
    paddingHorizontal: scale(15),
    flexDirection: "row",
    gap: scale(10),
  },
  infoIcon: {
    width: scale(17),
    height: scale(17),
  },
  circleConatiner:{
    width: scale(35),
    height: scale(35),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 999,
    backgroundColor:colors.primary+"60"
  }
});
