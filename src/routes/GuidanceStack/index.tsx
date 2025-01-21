import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import GuidanceScreen from "../../screens/main/Guidance";
import DreamRevealed from "../../screens/main/DreamRevealed";

const GuidanceStack = () => {
  const Stack = createStackNavigator();

  const TransitionScreenOptions = {
    headerShown: false,
    presentation: "card",
   
    ...TransitionPresets.SlideFromRightIOS,
  };



  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
    <Stack.Navigator
      screenOptions={TransitionScreenOptions}
   
    >
           
            <Stack.Screen name={"GuidanceScreen"} component={GuidanceScreen} />
            <Stack.Screen name={"DreamRevealed"} component={DreamRevealed} />

  
    

    
    

    </Stack.Navigator>

    </GestureHandlerRootView>

  );
};
export default GuidanceStack;
