import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import {
    FlatList,
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
const MatchesScreen = ({ navigation }: any) => {
  const [selectedTab, setSelectedTab] = useState(1);

  const tab = [
    { day: "Tue", date: "08", id: 1 },
    { day: "Wed", date: "09", id: 2 },
    { day: "Thu", date: "10", id: 3 },
    { day: "Fri", date: "11", id: 4 },
    { day: "Sat", date: "12", id: 5 },
  ];

  const matchData = [
    { name: "New Moon", img: images.new_moon, id: 1 },
    { name: "Waxing Crescent Moon", img: images.waxing_crescent_moon, id: 2 },
    { name: "First Quarter Moon", img: images.first_quarter_moon, id: 3 },
    { name: "Waxing Gibbous Moon", img: images.waxing_gibbous_moon, id: 4 },
    { name: "Full Moon", img: images.full_moon, id: 5 },
    { name: "Waning Gibbous Moon", img: images.waxing_gibbous_moon1, id: 6 },
    { name: "Last Quarter Moon", img: images.last_quarter_moon, id: 7 },
   

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
        <View style={{ ...appStyles.row, gap: scale(10) }}>
          <TouchableOpacity activeOpacity={0.5} style={styles.circleConatiner}>
            <Image
              style={styles.infoIcon}
              resizeMode="contain"
              source={images.heart}
            />
          </TouchableOpacity>

          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              ...styles.circleConatiner,
              backgroundColor: colors.white + "30",
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
      <View style={{...appStyles.rowjustify,
          paddingHorizontal: scale(15),

    }}>
        <CustomText
          textTransform={"uppercase"}
          text={"October, 2021"}
          size={24}
          color={colors.primary}
        />

        <TouchableOpacity
          activeOpacity={0.5}
          onPress={()=>navigation.goBack()}
          style={{ ...styles.circleConatiner }}
        >
          <Image
            style={styles.infoIcon}
            resizeMode="contain"
            source={images.crose}
          />
        </TouchableOpacity>
      </View>


      <FlatList
        data={matchData}
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
        //  gap:verticalScale(20)
        }}
        renderItem={({ item, index }) => {
          return (


      <View style={{ alignItems: "center", gap: verticalScale(10),flexDirection:"row",
      borderBottomWidth: 0.5,
      borderColor: colors.white + "50",
      padding:scale(15)
       }}>
      <View
        style={{
          padding: scale(1),
          borderRadius: 999,
          borderWidth: 0.5,
          borderColor: colors.white + "90",
        }}
      >
        <Image
          style={{ width: scale(48), height: scale(48) }}
          // resizeMode="contain"
          source={item.img}
        />
      </View>

      <CustomText
        text={item.name}
        size={17}
        color={colors.white }
      />
    </View>
           
          );
        }}
        keyExtractor={(item, index) => index.toString()}
      />


     
    </ScreenLayout>
  );
};

export default MatchesScreen;
const styles = StyleSheet.create({
  main: {
    flex: 1,
    gap: verticalScale(15),
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
    backgroundColor: colors.white+"50",
    borderRadius: 999,
  },
});
