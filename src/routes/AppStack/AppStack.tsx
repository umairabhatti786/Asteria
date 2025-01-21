import React, { useEffect, useState } from "react";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import BottomTab from "../BottomTab";
import { useDispatch } from "react-redux";
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
import CompatibilityNameScreen from "../../screens/main/Compatibility/CompatibilityName";
import CompatibilityDateOfBirthScreen from "../../screens/main/CompatibilityDetail/CompatibilityDateOfBirth";
import CompatibilityDateOfTime from "../../screens/main/CompatibilityDetail/CompatibilityDateOfTime";
import CompatibilityAddGender from "../../screens/main/CompatibilityDetail/CompatibilityAddGender";
import CompatibilityRelationshipStatus from "../../screens/main/CompatibilityDetail/CompatibilityRelationshipStatus";
import CompatibilityLoadingScreen from "../../screens/main/CompatibilityLoading";
import CompatibilitySignScreen from "../../screens/main/CompatibilitySign";
import TarotCardsScreen from "../../screens/main/TarotCards";
import DailyTarotScreen from "../../screens/main/DailyTarot";
import FlipCardsScreen from "../../screens/main/FlipCards";
import CardResultsScreen from "../../screens/main/CardResults";
import LoveAndRelationsScreen from "../../screens/main/LoveAndRelations";
import YesOrNoScreen from "../../screens/main/YesOrNo";
import NearFutureScreen from "../../screens/main/NearFuture";
import FlipLoveAndRelationsCard from "../../screens/main/FlipLoveAndRelationsCard";
import FlipLoveAndRelationsResult from "../../screens/main/FlipLoveAndRelationsResult";
import CardMeaningsScreen from "../../screens/main/CardMeanings";
import SettingScreen from "../../screens/main/Settings";
import TodayHoroscope from "../../screens/main/TodayHoroscope";
import LuckyNumber from "../../screens/main/LuckyNumber";
import TodayMatches from "../../screens/main/TodayMatches";
import LunarCalendar from "../../screens/main/LunarCalendar";
import MatchesScreen from "../../screens/main/Matches";
import CrystalBall from "../../screens/main/CrystalBall";
import CrystalBallSpeaking from "../../screens/main/CrystalBallSpeaking";
import NumerologyScreen from "../../screens/main/Numerology";
import NumerologyLoading from "../../screens/main/NumerologyLoading";
import NumerologyResult from "../../screens/main/NumerologyResult";
import DreamExplain from "../../screens/main/DreamExplain";
import AnalysingYourDream from "../../screens/main/AnalysingYourDream";
import BirthChartScreen from "../../screens/main/BirthChart";
import BirthChartDetailPluto from "../../screens/main/BirthChartDetailPluto";
import BirthChartTransitsDetails from "../../screens/main/BirthChartTransitsDetails";
import PlamReadingCapture from "../../screens/main/PlamReadingCapture";
import LocationOfBirthScreen from "../../screens/auth/Signup/LocationOfBirth";

const AppStack = () => {
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
    // initialRouteName="TarrotCardsScreen"
      screenOptions={TransitionScreenOptions}
      // screenOptions={{
      //     headerShown: false,

      //     cardStyleInterpolator: ({ current: { progress } }) => {
      //       return {
      //         cardStyle: {
      //           opacity: progress,
      //         },
      //       };
      //     },
      //   }}
    >
            <Stack.Screen name={"WelcomeScreen"} component={WelcomeScreen} />
            <Stack.Screen name={"NameScreen"} component={NameScreen} />
            <Stack.Screen name={"DateOfBirthScreen"} component={DateOfBirthScreen} />
            <Stack.Screen name={"TimeOfBirthScreen"} component={TimeOfBirthScreen} />
            <Stack.Screen name={"AddGenderScreen"} component={AddGenderScreen} />
            <Stack.Screen name={"RelationshipStatus"} component={RelationshipStatusScreen} />
            <Stack.Screen name={"AnalysingYourInfoScreen"} component={AnalysingYourInfoScreen} />
            <Stack.Screen name={"ReadingDetailScreen"} component={ReadingDetailScreen} />
            <Stack.Screen name={"ReadNowScreen"} component={ReadNowScreen} />
            <Stack.Screen name={"ReadingResultScreen"} component={ReadingResultScreen} />
            <Stack.Screen name={"CompatibilityDetailScreen"} component={CompatibilityDetailScreen} />
            <Stack.Screen name={"CompatibilityNameScreen"} component={CompatibilityNameScreen} />
            <Stack.Screen name={"CompatibilityDateOfBirthScreen"} component={CompatibilityDateOfBirthScreen} />
            <Stack.Screen name={"CompatibilityDateOfTime"} component={CompatibilityDateOfTime} />
            <Stack.Screen name={"CompatibilityAddGender"} component={CompatibilityAddGender} />
            <Stack.Screen name={"CompatibilityRelationshipStatus"} component={CompatibilityRelationshipStatus} />
            <Stack.Screen name={"CompatibilitySignScreen"} component={CompatibilitySignScreen} />
            <Stack.Screen name={"CompatibilityLoadingScreen"} component={CompatibilityLoadingScreen} />
            <Stack.Screen name={"TarotCardsScreen"} component={TarotCardsScreen} />
            <Stack.Screen name={"DailyTarotScreen"} component={DailyTarotScreen} />
            <Stack.Screen name={"FlipCardsScreen"} component={FlipCardsScreen} />
            <Stack.Screen name={"CardResultsScreen"} component={CardResultsScreen} />
            <Stack.Screen name={"LoveAndRelationsScreen"} component={LoveAndRelationsScreen} />
            <Stack.Screen name={"YesOrNoScreen"} component={YesOrNoScreen} />
            <Stack.Screen name={"NearFutureScreen"} component={NearFutureScreen} />
            <Stack.Screen name={"FlipLoveAndRelationsCard"} component={FlipLoveAndRelationsCard} />
            <Stack.Screen name={"FlipLoveAndRelationsResult"} component={FlipLoveAndRelationsResult} />
            <Stack.Screen name={"CardMeaningsScreen"} component={CardMeaningsScreen} />
            <Stack.Screen name={"TodayHoroscope"} component={TodayHoroscope} />
            <Stack.Screen name={"LuckyNumber"} component={LuckyNumber} />
            <Stack.Screen name={"TodayMatches"} component={TodayMatches} />
            <Stack.Screen name={"LunarCalendar"} component={LunarCalendar} />
            <Stack.Screen name={"MatchesScreen"} component={MatchesScreen} />
            <Stack.Screen name={"CrystalBall"} component={CrystalBall} />
            <Stack.Screen name={"NumerologyScreen"} component={NumerologyScreen} />
            <Stack.Screen name={"NumerologyLoading"} component={NumerologyLoading} />
            <Stack.Screen name={"NumerologyResult"} component={NumerologyResult} />
            <Stack.Screen name={"DreamExplain"} component={DreamExplain} />
            <Stack.Screen name={"AnalysingYourDream"} component={AnalysingYourDream} />            
            <Stack.Screen name={"BirthChartScreen"} component={BirthChartScreen} /> 
            <Stack.Screen name={"BirthChartDetailPluto"} component={BirthChartDetailPluto} />    
            <Stack.Screen name={"PlamReadingCapture"} component={PlamReadingCapture} />            
            
            <Stack.Screen name={"LocationOfBirthScreen"} component={LocationOfBirthScreen} />            

            
            <Stack.Screen name={"BirthChartTransitsDetails"} component={BirthChartTransitsDetails} />            

            <Stack.Screen name={"CrystalBallSpeaking"} component={CrystalBallSpeaking} />

            <Stack.Screen 
           
            name={"SettingScreen"} component={SettingScreen} />

           <Stack.Screen name={"BottomTab"} component={BottomTab} />
  
    

    
    

    </Stack.Navigator>

    </GestureHandlerRootView>

  );
};
export default AppStack;
