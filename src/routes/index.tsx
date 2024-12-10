import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

import AppStack from "./AppStack/AppStack";
import { StatusBar } from "react-native";
import { StorageServices, TOKEN } from "../utils/StorageService";

const RootNavigator = () => {
  const Stack = createStackNavigator();




  return (
    <NavigationContainer>
       <StatusBar
        backgroundColor="#F3F5F7"
        barStyle="dark-content"
      />
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="AppStack" component={AppStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;