import React, { useState, useEffect } from "react";
import { colors } from "../../../utils/colors";
import { Platform, StyleSheet, TouchableOpacity, View } from "react-native";
import { scale, verticalScale } from "react-native-size-matters";
import TopHeader from "../../../components/TopHeader";
import * as Animatable from "react-native-animatable";
import { images } from "../../../assets/images";
import CustomTarotCard from "../../../components/CustomTarotCard";
import LinearGradient from "react-native-linear-gradient";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";

const YesOrNoScreen = ({ navigation }: any) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [tarotCard, setTarotCard] = useState([{ id: 1, img: null }]);

  return (
    <LinearGradient
      colors={["#000", "#252376"]}
      start={{ x: 0.5, y: 0 }} // Center-top start
      end={{ x: 0.5, y: 1 }} // Center-bottom end
      style={styles.main}
    >
      <TopHeader title="YES OR NO" />
      <View
        style={{
          alignItems: "center",
          flexDirection: "row",
          gap: scale(10),
          alignSelf: "center",
          paddingTop: "10%",
        }}
      >
        {tarotCard.map((item, index) => {
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
                {item.img && (
                  <Animatable.Image
                    animation="zoomIn" // Choose your desired animation
                    style={{ width: "100%", height: "100%" }}
                    source={item.img}
                  />
                )}
              </LinearGradient>
            </View>
          );
        })}
      </View>

      <CustomText
          fontWeight="600"
          color={colors.white}
          style={{textAlign:"center",marginTop:verticalScale(30)}}
          
          fontFam={font.Chillax_Medium}
          text={"Ask a question that can be answered by Yes or No, then draw a card"}
          size={16}
        />

      <CustomTarotCard
        cardLength={tarotCard.length - selectedCard}
        onPressCard={() => {
          let list = [...tarotCard];
          list[selectedCard] = {
            ...list[selectedCard + 1],
            img: images.card_selection,
          };
          setSelectedCard(selectedCard + 1);

          setTarotCard(list);
          setTimeout(() => {
            navigation.navigate("FlipLoveAndRelationsCard");

            
          }, 2000);


        }}
      />
    </LinearGradient>
  );
};

export default YesOrNoScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: scale(15),
    gap: verticalScale(25),
    paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
  },
  selectedCardContainer: {
    width: "45%",
    height: verticalScale(220),
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: scale(5),
  },
});
