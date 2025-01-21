import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import GuidanceScreen from "../../screens/main/Guidance";
import DreamRevealed from "../../screens/main/DreamRevealed";
import BirthChartScreen from "../../screens/main/BirthChart";
import ReadingsScreen from "../../screens/main/Readings";

const ReadingsStack = () => {
  const Stack = createStackNavigator();

  const TransitionScreenOptions = {
    headerShown: false,
    presentation: "card",
   
    ...TransitionPresets.SlideFromRightIOS,
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Stack.Navigator screenOptions={TransitionScreenOptions}>
        <Stack.Screen name={"ReadingsScreen"} component={ReadingsScreen} />

        <Stack.Screen name={"BirthChartScreen"} component={BirthChartScreen} />
      </Stack.Navigator>
    </GestureHandlerRootView>
  );
};
export default ReadingsStack;
