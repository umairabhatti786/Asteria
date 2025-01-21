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

const LoveAndRelationsScreen = ({ navigation }: any) => {
  const [selectedCard, setSelectedCard] = useState(0);
  const [tarotCard, setTarotCard] = useState([
    { id: 1, img: null,card:images.card_meanings  },
    { id: 2, img: null,card:images.love_card  },
    { id: 3, img: null,card:images.tarot_card  },
    { id: 4, img: null,card:images.card_meanings  },
    { id: 5, img: null,card:images.money_card  },

  ]);

  useEffect(() => {
    setTimeout(() => {
      if (selectedCard > 4) {
        navigation.navigate("FlipCardsScreen",{cards:tarotCard,isLoveAndRelation:true});
    }
    }, 1000);
  }, [selectedCard]);

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
          {item?.img && (
            <Animatable.Image
              animation="zoomIn" // Choose your desired animation
              style={{ width: "100%", height: "100%" }}
              source={item.img}
            />
          )}
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
      <TopHeader title="dAILY TAROT" />
      <View
        style={{
          alignItems: "center",
          //   flexDirection: "row",
          gap: scale(10),
        }}
      >
        <Card item={tarotCard[0]} />

        <View style={{ ...appStyles.row, gap: scale(7) }}>
          <Card item={tarotCard[1]} />
          <Card item={tarotCard[2]} />
          <Card item={tarotCard[3]} />
        </View>
        <Card item={tarotCard[4]} />

        {/* {tarotCard.map((item, index) => {
          return (
         
          );
        })} */}
      </View>

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

          console.log("cldncldn", list);
        }}
      />
    </LinearGradient>
  );
};

export default LoveAndRelationsScreen;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    paddingHorizontal: scale(15),
    gap: verticalScale(25),
    paddingTop: verticalScale(Platform.OS == "ios" ? 50 : 10),
  },
  selectedCardContainer: {
    width: "23%",
    height: verticalScale(110),
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: scale(5),
  },
});
