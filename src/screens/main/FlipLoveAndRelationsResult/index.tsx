import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import TopHeader from "../../../components/TopHeader";
import * as Animatable from "react-native-animatable";
import { windowWidth } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import CustomTarotCard from "../../../components/CustomTarotCard";
import LinearGradient from "react-native-linear-gradient";
import { appStyles } from "../../../utils/AppStyles";
import CustomButton from "../../../components/CustomButton";
import CustomText from "../../../components/CustomText";

const FlipLoveAndRelationsResult = ({ navigation, route }: any) => {
  const [selectedCard, setSelectedCard] = useState(0);

  const [tarotCard, setTarotCard] = useState([
    { id: 1, img: images.love_card },
    { id: 2, img: images.money_card },
    { id: 3, img: images.tarot_card },
  ]);

  const Card = ({ item }: any) => {
    return (
      <View
        style={{
          ...styles.selectedCardContainer,
          overflow: "hidden",

          borderColor: colors.primary,
        }}
      >
        <LinearGradient
          colors={["#252376", "transparent"]}
          start={{ x: 0.5, y: 0 }} // Center-top start
          end={{ x: 0.5, y: 1 }} // Center-bottom end
          style={{
            width: "100%",
            height: "100%",
            borderRadius: scale(5),

            //   ...styles.selectedCardContainer,

            borderColor: colors.primary,
          }}
        >
          <Animatable.Image
            animation="zoomIn" // Choose your desired animation
            style={{ width: "100%", height: "100%" }}
            source={images.love_card}
          />
        </LinearGradient>
      </View>
    );
  };

  return (
    <LinearGradient
      colors={["#000", "#252376"]}
      start={{ x: 0.5, y: 0 }} // Center-top start
      end={{ x: 0.5, y: 1 }} // Center-bottom end
      style={styles.main}
    >
      <TopHeader title="LOVE & RELATIONS" />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          gap: verticalScale(10),
        }}
      >
        <CustomText
          color={colors.white}
          // fontFam={font.WorkSans_SemiBold}
          text={"Ace of Coins"}
          size={20}
        />
        <Card />

       
      </View>
      <View
          style={{
            gap: verticalScale(10),
            paddingVertical: verticalScale(10),
            borderWidth: 1.3,
            borderRadius:scale(10),
            borderColor: colors.primary + "80",
            width:"100%",
            alignItems:"center",
            
          }}
        >
             <CustomText
          color={colors.primary+"40"}
          // fontFam={font.WorkSans_SemiBold}
          text={"Your Answer"}
          size={20}
        />
           <CustomText
          color={colors.primary}
          // fontFam={font.WorkSans_SemiBold}
          text={"No, Beware of illusions and Fears."}
          size={18}
        />

        </View>

      <View
        style={{
          ...appStyles.row,
          gap: scale(10),
          marginBottom: verticalScale(40),
          alignSelf: "center",
        }}
      >
        <CustomButton
          width={"49%"}
          bgColor={colors.primary + "40"}
          textColor={colors.white}
          onPress={() => navigation.navigate("CardResultsScreen")}
          text="ANOTHER DRAW"
        />

        <CustomButton
          width={"49%"}
          onPress={() => navigation.navigate("TarotCardsScreen")}
          text="BACK TO TAROT"
        />
      </View>
    </LinearGradient>
  );
};

export default FlipLoveAndRelationsResult;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: scale(15),
    gap: verticalScale(25),
    paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
  },
  selectedCardContainer: {
    width: "55%",
    height: verticalScale(300),
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: scale(5),
  },
  dot: {
    width: scale(10),
    height: scale(10),
    borderRadius: 999,
    backgroundColor: colors.primary,
  },
});
