import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";

import SignupScreen from "../../screens/auth/Signup";
import { useDispatch } from "react-redux";
import { setAuthData, setAuthToken } from "../../redux/reducers/authReducer";
import { windowWidth } from "../../utils/Dimensions";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import WelcomeScreen from "../../screens/auth/Welcome";
import NameScreen from "../../screens/auth/Signup/Name";
import DateOfBirthScreen from "../../screens/auth/Signup/DateOfBirth";
import TimeOfBirthScreen from "../../screens/auth/Signup/TimeOfBirth";
import AddGenderScreen from "../../screens/auth/Signup/DddGender";
import RelationshipStatusScreen from "../../screens/auth/Signup/RelationshipStatus";
import AnalysingYourInfoScreen from "../../screens/auth/Signup/AnalysingYourInfo";
import ReadingDetailScreen from "../../screens/main/ReadingDetail";
import ReadNowScreen from "../../screens/main/ReadNow";
import ReadingResultScreen from "../../screens/main/ReadingResult";
import CompatibilityDetailScreen from "../../screens/main/CompatibilityDetail";
import CompatibilityScreen from "../../screens/main/Compatibility";
import CompatibilityReportScreen from "../../screens/main/CompatibilityReport";

const CompatibilityStack = () => {
  const Stack = createStackNavigator();
  const dispatch = useDispatch();

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
           
            <Stack.Screen name={"CompatibilityScreen"} component={CompatibilityScreen} />
            <Stack.Screen name={"CompatibilityDetailScreen"} component={CompatibilityDetailScreen} />
            <Stack.Screen name={"CompatibilityReportScreen"} component={CompatibilityReportScreen} />

  
    

    
    

    </Stack.Navigator>

    </GestureHandlerRootView>

  );
};
export default CompatibilityStack;
