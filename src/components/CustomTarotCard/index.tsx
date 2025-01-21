import React from "react";
import { View, StyleSheet, Dimensions, Image, Platform } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  useAnimatedGestureHandler,
} from "react-native-reanimated";
import { PanGestureHandler, Pressable } from "react-native-gesture-handler";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { images } from "../../assets/images";
import { colors } from "../../utils/colors";
import { font } from "../../utils/font";


const { width } = Dimensions.get("window");
const CARD_COUNT = 40; // Adjust for more cards
const RADIUS = width * 0.5; // Smaller radius for tighter arc

const cardsData = Array.from({ length: CARD_COUNT }, (_, i) => ({
  id: i + 1,
  img: images.card_selection, // Make sure this image exists in your assets
}));

const CustomTarotCard = ({onPressCard,cardLength}:any) => {
  const rotation = useSharedValue(0); // Shared value for rotation

  // Gesture handler using useAnimatedGestureHandler for Reanimated
  const gestureHandler = useAnimatedGestureHandler({
    onStart: (_, ctx) => {
      ctx.startX = rotation.value; // Save the starting position of rotation
    },
    onActive: (event, ctx:any) => {
      rotation.value = ctx.startX + event.translationX / 40; // Slower speed for rotation
    },
    onEnd: () => {
      rotation.value = withSpring(rotation.value); // Smooth spring animation
    },
  });

  // Rendering cards using map
  const renderCards = () => {
    return cardsData.map((item, index) => {
      // Calculate the angle for each card in the circular arrangement
      const angle = (index - CARD_COUNT / 2) * 0.3; // Adjust overlap and rotation

      // Animated styles for each card
      const animatedStyle = useAnimatedStyle(() => {
        const rotateAngle = rotation.value + angle; // Adjust rotation angle based on gesture and index
        const x = Math.cos(rotateAngle) * RADIUS; // X position based on cos(angle)
        const y = Math.sin(rotateAngle) * RADIUS; // Y position based on sin(angle)

        return {
          position: "absolute", // Ensure the cards are absolutely positioned
          transform: [
            { translateX: x }, // Translate along X-axis based on angle
            { translateY: y }, // Translate along Y-axis based on angle
            { rotate: `${(rotateAngle * 180) / Math.PI}deg` }, // Rotate to face outwards
          ],
          
        };
      });

      return (
        <Animated.View key={item.id} style={[styles.card, animatedStyle]}>
            <Pressable
            onPress={onPressCard}
            style={{width:'100%',height:"100%",}}
            >
            <Image
            source={images.card_selection}
            style={styles.cardImage} // Use a separate style for images
          />

            </Pressable>
       
        </Animated.View>
      );
    });
  };

  return (
    <View style={styles.container}>
      <PanGestureHandler onGestureEvent={gestureHandler}>
        <Animated.View style={styles.circleContainer}>
          {renderCards()}
        </Animated.View>
      </PanGestureHandler>
      <View
        style={{
          alignItems: "center",
          gap: scale(20),
          position: "absolute",
          bottom: verticalScale(30),
        }}
      >
       
        <CustomText
          text={`Select ${cardLength} Cards`}
          size={16}
          fontWeight="600"
          fontFam={font.Chillax_Medium}
          color={colors.white}
        />

       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  circleContainer: {
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: "center",
    alignItems: "center",
    position: "relative", // Enable absolute positioning inside
    bottom: verticalScale( Platform.OS=="ios"?-170: -180),
  },
  card: {
    width: verticalScale(90), // Width of the card
    height: scale(170), // Height of the card
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "transparent", // Set transparent to see the image background
    borderRadius: scale(5),
    // borderColor: "#3F34A6",
    // borderWidth: 10,
  },
  cardImage: {
    width: "100%", // Use 100% width of the card
    height: "100%", // Use 100% height of the card
    // borderRadius: scale(5), // Ensure the image has rounded corners
  },
});

export default CustomTarotCard;
