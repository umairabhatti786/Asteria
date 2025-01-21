import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import { Image, StyleSheet, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import ToggleSwitch from "toggle-switch-react-native";
const SettingScreen = ({ navigation }: any) => {
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
      <View style={{ gap: verticalScale(10) }}>
        {title && (
          <CustomText
            text={title}
            fontFam="400"
            size={16}
            color={colors.primary + "60"}
          />
        )}
        <View style={{ ...styles.infoContainer, width: "100%" }}>
          <CustomText
            text={label}
            size={16}
            color={colors.primary}
            fontWeight="600"
          />
          {isToggle ? (
            <>
              <ToggleSwitch
                isOn={isNotificaion}
                onColor={colors.primary}
                offColor={colors.grey+"50"}

                circleColor={colors.primary}
                thumbOnStyle={{ width: 24, height: 24, borderRadius: 9999 }}
                thumbOffStyle={{ width: 24, height: 24, borderRadius: 9999 }}
                trackOffStyle={{ width: 53, height: 30 }}
                trackOnStyle={{ width: 53, height: 30 }}
                // labelStyle={{ color: "black", fontWeight: "900" }}
                size="medium"
                onToggle={onChangeToggle}
              />
            </>
          ) : (
            <Image
              style={styles.infoIcon}
              resizeMode="contain"
              source={images.next}
            />
          )}
        </View>
      </View>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      <CustomText text={"SETTINGS"} size={24} color={colors.primary} />
      <View style={{ gap: verticalScale(10) }}>
        <DetailCard label={"Rate luna flame"} />
        <DetailCard label={"Follow on facebook"} />
        <DetailCard label={"Get support"} />
      </View>
      <View style={{ gap: verticalScale(30), paddingTop: verticalScale(20) }}>
        <DetailCard
          title="NOTIFICATIONS"
          isToggle={true}
          label={"Allow notifications"}
        />
        <DetailCard title="ACCOUNT" label={"Delete account"} />
      </View>
    </ScreenLayout>
  );
};

export default SettingScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(25),
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
    paddingVertical: verticalScale(13),
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
    width: scale(12),
    height: scale(12),
  },
});
