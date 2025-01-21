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
import TopHeader from "../../../components/TopHeader";
import { images } from "../../../assets/images";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import { appStyles } from "../../../utils/AppStyles";
import { windowWidth } from "../../../utils/Dimensions";

const CardMeaningsScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tab = [
    { name: "Major Arcana", id: 1 },
    { name: "Wands", id: 2 },
    { name: "Cups", id: 3 },
    { name: "Swords", id: 4 },
    { name: "Pentacles", id: 5 },
  ];

  const cardsData = [
    { img: images.love_card, id: 1 },
    { img: images.money_card, id: 2 },
    { img: images.love_card, id: 3 },
    { img: images.money_card, id: 4 },
    { img: images.love_card, id: 5 },
    { img: images.money_card, id: 6 },
  ];

  return (
    <LinearGradient
      colors={["#252376", "#000"]}
      start={{ x: 0.5, y: 0 }} // Center-top start
      end={{ x: 0.5, y: 1 }} // Center-bottom end
      style={styles.main}
    >
      <View style={{ paddingHorizontal: scale(15) }}>
        <TopHeader title="CARD MEANINGS" />
      </View>

      <View style={appStyles.row}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{
            paddingRight: scale(150),
            height: verticalScale(40),
          }}
        >
          {tab.map((ite: any, ind: any) => {
            return (
              <TouchableOpacity
                activeOpacity={0.5}
                onPress={() => setSelectedTab(ite.id)}
                key={ind.toString()}
                style={{
                  alignItems: "center",
                  width: scale(90),
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: 1,
                    backgroundColor: colors.white + "50",
                  }}
                >
                  {selectedTab == ite.id && (
                    <View
                      style={{
                        width: "100%",
                        height: 1,
                        backgroundColor: colors.primary,
                        position: "absolute",
                      }}
                    />
                  )}
                </View>
                <View
                  style={{
                    alignItems: "center",
                    height: verticalScale(50),

                    //   backgroundColor:"red"
                  }}
                >
                  {selectedTab == ite.id && (
                    <View
                      style={{ alignItems: "center", gap: verticalScale(0.1) }}
                    >
                      <View
                        style={{
                          width: 2,
                          height: verticalScale(9),
                          backgroundColor: colors.primary,
                        }}
                      />
                      <View
                        style={{
                          width: scale(6),
                          height: scale(6),
                          borderRadius: 999,
                          backgroundColor: colors.primary,
                        }}
                      ></View>
                    </View>
                  )}

                  <CustomText
                    text={ite.name}
                    size={14}
                    style={{
                      marginTop: verticalScale(selectedTab == ite.id ? 3 : 17),
                    }}
                    color={
                      selectedTab == ite?.id
                        ? colors.primary
                        : colors.white + "90"
                    }
                  />
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <View style={{ ...appStyles.rowjustify, paddingHorizontal: scale(15) }}>
        <CustomText text={"MAJOR ARCANA"} size={24} color={colors.primary} />
        <CustomText
          text={`${cardsData.length} Cards`}
          size={17}
          color={colors.white + "50"}
        />
      </View>

      <FlatList
        data={cardsData}
        nestedScrollEnabled={true}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          borderColor: colors.white + "60",
          borderBottomWidth: 0.5,
        }}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                borderTopWidth: 0.5,
                width: "50%",
                borderColor: colors.white + "60",
                borderRightWidth: 0.5,
                padding: scale(10),
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: windowWidth / 2.4,
                  height: verticalScale(220),
                  borderRadius: scale(10),
                  overflow: "hidden",
                  //   backgroundColor:"red"
                }}
              >
                <Image
                  style={{ width: "100%", height: "100%" }}
                  source={item.img}
                  resizeMode="cover"
                />
              </View>
            </View>
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    </LinearGradient>
  );
};

export default CardMeaningsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
    paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
  },
});
