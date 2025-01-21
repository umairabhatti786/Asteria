import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import LinearGradient from "react-native-linear-gradient";
import { font } from "../../../utils/font";
const LunarCalendar = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tab = [
    { day: "Tue", date: "08", id: 1 },
    { day: "Wed", date: "09", id: 2 },
    { day: "Thu", date: "10", id: 3 },
    { day: "Fri", date: "11", id: 4 },
    { day: "Sat", date: "12", id: 5 },
  ];
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
            marginTop: verticalScale(10),
          },
        ]}
      ></View>
    );
  };
  return (
    <ScreenLayout style={styles.main}>
      <Header />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: scale(15),
          paddingBottom:verticalScale(20),
          // backgroundColor:"red"
        }}
      >
      <View style={appStyles.rowjustify}>
        <CustomText
          textTransform={"uppercase"}
          text={"Lunar Calendar"}
          size={24}
          color={colors.primary}
        />

        <TouchableOpacity
    
          activeOpacity={0.5}
          onPress={()=>navigation.navigate("MatchesScreen")}
          style={{ ...styles.circleConatiner }}
        >
          <Image
            style={styles.infoIcon}
            resizeMode="contain"
            source={images.calendar}
          />
        </TouchableOpacity>
      </View>

      <View style={appStyles.row}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: scale(15),
            height: verticalScale(40),
            gap: scale(10),
          }}
        >
          {tab.map((ite: any, ind: any) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelectedTab(ite.id)}
                style={{ ...appStyles.row, gap: scale(10) }}
              >
                <View style={{ alignItems: "center" }}>
                  <CustomText
                    text={ite.day}
                    size={11}
                    textTransform={"uppercase"}
                    color={colors.white + "90"}
                  />
                  <CustomText
                    text={ite.date}
                    size={17}
                    fontWeight="600"
                    fontFam={font.Chillax_Medium}
                    color={
                      selectedTab == ite?.id
                        ? colors.primary
                        : colors.primary + "90"
                    }
                  />

                  {selectedTab == ite.id && (
                    <View style={{ ...appStyles.row, gap: scale(3) }}>
                      <View
                        style={{
                          flex: 1,
                          borderRadius: 999,

                          height: 1,
                          backgroundColor: colors.primary,
                        }}
                      />
                      <View
                        style={{
                          ...styles.dot,
                          width: scale(2),
                          height: scale(2),
                          backgroundColor: colors.primary,
                        }}
                      />

                      <View
                        style={{
                          flex: 1,
                          borderRadius: 999,
                          height: 1,
                          backgroundColor: colors.primary,
                        }}
                      />
                    </View>
                  )}
                </View>
                {tab.length !== ind + 1 && (
                  <View
                    style={{
                      ...appStyles.row,
                      gap: scale(3),
                      paddingHorizontal: scale(10),
                    }}
                  >
                    <View
                      style={{
                        ...styles.dot,
                        width: scale(2),
                        height: scale(2),
                        backgroundColor: colors.primary,
                      }}
                    />

                    <View
                      style={{
                        ...styles.dot,
                        width: scale(5),
                        height: scale(5),
                        backgroundColor: colors.primary,
                      }}
                    />

                    <View
                      style={{
                        ...styles.dot,
                        width: scale(2),
                        height: scale(2),
                        backgroundColor: colors.primary,
                      }}
                    />
                  </View>
                )}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <View
        style={{ ...styles.infoContainer, borderColor: colors.primary + "30" }}
      >
        <View
          style={{
            paddingHorizontal: scale(15),
            paddingVertical: verticalScale(5),
            gap: verticalScale(10),
          }}
        >
          <View style={{ ...appStyles.row, gap: scale(8) }}>
            <Image
              style={{ width: scale(55), height: scale(55) }}
              resizeMode="contain"
              source={images.moon_step3}
            />

            <CustomText text={"First Quarter"} size={18} color={colors.white} />
          </View>

          <CustomText
            text={"Moon Impact"}
            size={17}
            fontFam={font.Chillax_Medium}
            fontWeight="600"
            color={colors.primary}
          />
          <CustomText
            lineHeight={22}
            text={
              "A good time for people who have business that slows down it’s development. The first quarter of the moon will helps it’s movement but subjects to responsible investment in time and affort"
            }
            size={16}
            color={colors.white + "80"}
          />
        </View>
        <LinearGradient
          colors={["#B2AFFE20", "#B2AFFE10"]} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={{
            ...styles.infoContainer,
            width: "100%",
            padding: scale(15),
            gap: verticalScale(10),
          }}
        >
          <CustomText
            text={"Quick Overview"}
            size={18}
            color={colors.primary}
          />

          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Symbol of the day:"}
              size={14}
              color={colors.primary + "50"}
            />
            <CustomText
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              text={"Magic rod"}
              size={14}
              color={colors.primary}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Health:"}
              size={14}
              color={colors.primary + "50"}
            />
            <CustomText
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              text={"Lungs are vulnerable"}
              size={14}
              color={colors.primary}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Body:"}
              size={14}
              color={colors.primary + "50"}
            />
            <CustomText
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              text={"Fruits and honey are preferable"}
              size={14}
              color={colors.primary}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Beauty:"}
              size={14}
              color={colors.primary + "50"}
            />
            <CustomText
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              text={"Energising beauty treatments"}
              size={14}
              color={colors.primary}
            />
          </View>

          <View style={appStyles.rowjustify}>
            <CustomText
              text={"Happy house:"}
              size={14}
              color={colors.primary + "50"}
            />
            <CustomText
              fontFam={font.Chillax_Medium}
              fontWeight="600"
              text={"Cooking and baking"}
              size={14}
              color={colors.primary}
            />
          </View>
        </LinearGradient>
      </View>

      <View
        style={{
          ...styles.infoContainer,
          borderColor: colors.primary + "30",
          overflow: "hidden",
        }}
      >
        <Image
          style={{
            width: scale(95),
            height: scale(95),
            position: "absolute",
            right: verticalScale(-20),
            top: verticalScale(-20),
          }}
          //   resizeMode="contain"
          source={images.full_moon}
        />

        <CustomText
          style={{ margin: scale(15) }}
          text={"Moon in Virgo"}
          size={18}
          color={colors.white}
        />

        <LinearGradient
          colors={["#B2AFFE20", "#B2AFFE10"]} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={{
            ...styles.infoContainer,
            width: "100%",
            padding: scale(15),
            gap: verticalScale(10),
            marginTop: verticalScale(-5),
          }}
        >
          <View style={{ ...appStyles.row, gap: scale(8) }}>
            <Image
              style={styles.infoIcon}
              //   resizeMode="contain"
              source={images.check_circle}
            />

            <CustomText text={"Do"} size={18} color={colors.primary} />
          </View>

          <CustomText
            text={
              "The best time to buy a car or an apartment, another major spending. Prudence in choosing the best option will be very helpful."
            }
            size={15}
            color={colors.primary}
          />
        </LinearGradient>
      </View>
      </ScrollView>

    </ScreenLayout>
  );
};

export default LunarCalendar;
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
    backgroundColor: "treansparent",
    borderWidth: 1,
    borderColor: colors.primary + "60",
    borderRadius: scale(12),
    gap: scale(10),
  },
  infoIcon: {
    width: scale(19),
    height: scale(19),
  },
  circleConatiner: {
    width: scale(32),
    height: scale(32),
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 999,
  },
});
