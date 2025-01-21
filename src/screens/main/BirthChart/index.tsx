import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
  FlatList,
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import ScreenLayout from "../../../components/ScreenLayout";
import { font } from "../../../utils/font";
import CustomTabBar from "../../../components/CustomTopBar";
import TransitsCard from "./TransitsCard";
import YourChart from "./YourChart";
import { shortTeamTransits } from "../../../utils/Data";

const BirthChartScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState("Daily Transits");
  const [activeDate, setActiveDate] = useState(0);

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
            paddingHorizontal: scale(15),
          },
        ]}
      >
        <View style={{ ...appStyles.row, gap: scale(15) }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ ...styles.box }}
          >
            <Image
              style={{
                width: scale(14),
                height: scale(14),
              }}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>

          <CustomText
            fontWeight="500"
            numberOfLines={1}
            color={colors.primary}
            text={"BIRTH CHART"}
            size={24}
          />
        </View>

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={() => navigation.navigate("TodayHoroscope")}
          style={styles.headerDateContainer}
        >
          <CustomText
            fontWeight="500"
            color={colors.primary}
            text={"Sept 10"}
            size={14}
          />
          <Image
            style={{
              width: scale(17),
              height: scale(17),
            }}
            resizeMode="contain"
            source={images.calendar}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const Card = ({ title, des, gradient, img, cardStyle, parentColor }: any) => {
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        style={{ paddingHorizontal: scale(15) }}
        onPress={() => navigation.navigate("ReadingDetailScreen")}
      >
        <LinearGradient
          colors={gradient} // Properly formatted with transparency
          start={{ x: 0.3, y: 0 }} // Top-left corner
          end={{ x: 1, y: 1 }} // Bottom-right corner
          style={[styles.cardContainer, cardStyle]}
        >
          <View style={{ gap: scale(10), width: "80%" }}>
            <CustomText
              text={title}
              size={18}
              color={parentColor || colors.primary}
              fontWeight="600"
            />
            <CustomText
              text={des}
              size={13}
              color={parentColor || colors.primary + "90"}
            />
          </View>

          <Image
            style={{
              width: scale(12),
              height: scale(12),
            }}
            resizeMode="contain"
            source={images.next}
          />
        </LinearGradient>
      </TouchableOpacity>
    );
  };

  return (
    <ScreenLayout style={styles.main}>
      <Header />

      <CustomTabBar
        setSelectedTab={setSelectedTab}
        tab1={"Daily Transits"}
        tab2="Your Chart"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: scale(20),
          paddingBottom: verticalScale(20),
        }}
      >
        {selectedTab == "Daily Transits" && (
          <>
            <View style={appStyles.row}>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  paddingLeft: scale(15),
                  gap: scale(15),
                }}
              >
                {tab.map((ite: any, ind: any) => {
                  return (
                    <TouchableOpacity
                      activeOpacity={0.5}
                      onPress={() => setActiveDate(ite.id)}
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
                            activeDate == ite?.id
                              ? colors.primary
                              : colors.primary + "90"
                          }
                        />
                        {activeDate == ite.id && (
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
                              width: scale(1.5),
                              height: scale(1.5),
                              backgroundColor: colors.primary + "90",
                            }}
                          />

                          <View
                            style={{
                              ...styles.dot,
                              width: scale(4),
                              height: scale(4),
                              backgroundColor: colors.primary + "90",
                            }}
                          />

                          <View
                            style={{
                              ...styles.dot,
                              width: scale(1.5),
                              height: scale(1.5),
                              backgroundColor: colors.primary + "90",
                            }}
                          />
                        </View>
                      )}
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            </View>

            <Card
              title={"Why should you care about"}
              des={"Transits and aspects?"}
              gradient={["#B2AFFE20", "#B2AFFE10", "#0000"]}
            />

            <View
              style={{
                ...appStyles.row,
                alignSelf: "center",
                gap: scale(6),
              }}
            >
              <View
                style={{
                  width: scale(10),
                  height: 0.5,
                  backgroundColor: colors.primary + "50",
                }}
              />

              <View
                style={{
                  ...styles.dot,
                  backgroundColor: colors.primary + "60",
                }}
              ></View>

              <View
                style={{
                  flex: 1,
                  height: 0.5,
                  backgroundColor: colors.primary + "50",
                }}
              />
            </View>

            <View
              style={{
                gap: verticalScale(15),
                paddingHorizontal: scale(15),
              }}
            >
              <CustomText
                text={"YOUR SHORT TERM TRANSITS"}
                size={22}
                color={colors.white}
              />

              <FlatList
                data={shortTeamTransits}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: scale(15),
                }}
                renderItem={({ item, index }) => {
                  return (
                    <TransitsCard
                      onPress={() =>
                        navigation.navigate("BirthChartTransitsDetails")
                      }
                      item={item}
                    />
                  );
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>

            <View
              style={{
                ...appStyles.row,
                alignSelf: "center",
                gap: scale(6),
                marginTop: verticalScale(10),
              }}
            >
              <View
                style={{
                  width: scale(10),
                  height: 0.5,
                  backgroundColor: colors.primary + "50",
                }}
              />
              <View
                style={{
                  ...styles.dot,
                  backgroundColor: colors.primary + "60",
                }}
              ></View>
              <View
                style={{
                  flex: 1,
                  height: 0.5,
                  backgroundColor: colors.primary + "50",
                }}
              />
            </View>

            <View
              style={{
                gap: verticalScale(15),
                paddingHorizontal: scale(15),
              }}
            >
              <CustomText
                text={"YOUR LONG TERM TRANSITS"}
                size={22}
                color={colors.white}
              />

              <FlatList
                data={shortTeamTransits}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  gap: scale(15),
                }}
                renderItem={({ item, index }) => {
                  return <TransitsCard item={item} />;
                }}
                keyExtractor={(item, index) => index.toString()}
              />
            </View>
          </>
        )}

        {selectedTab == "Your Chart" && <YourChart navigation={navigation} />}
      </ScrollView>
    </ScreenLayout>
  );
};

export default BirthChartScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
  },
  dot: {
    width: scale(6),
    height: scale(6),
    borderRadius: 999,
    backgroundColor: colors.lightRed,
  },
  cardContainer: {
    paddingHorizontal: scale(15),
    paddingVertical: verticalScale(10),
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1.2,
    borderColor: colors.primary + "90",
    borderRadius: scale(10),
    gap: verticalScale(6),
  },

  todayFeatureBox: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(10),
    borderWidth: 1.2,
    borderColor: "#252376",
    borderRadius: scale(10),
    gap: verticalScale(6),
    justifyContent: "space-between",
    height: verticalScale(85),
  },

  box: {
    width: scale(35),
    height: scale(35),
    borderRadius: 999,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.white + "10",
  },
  headerDateContainer: {
    paddingHorizontal: scale(10),
    paddingVertical: verticalScale(3),
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 999,
    gap: scale(6),
    flexDirection: "row",
    alignItems: "center",
  },
});
