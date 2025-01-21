import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, Platform, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';
import {scale, verticalScale} from 'react-native-size-matters';
import {images} from '../../assets/images';
import CustomText from '../../components/CustomText';
import {font} from '../../utils/font';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import HoroscopeScreen from '../../screens/main/Horoscope';
import ReadingsScreen from '../../screens/main/Readings';
import CompatibilityScreen from '../../screens/main/Compatibility';
import GuidanceScreen from '../../screens/main/Guidance';
import ProfileScreen from '../../screens/main/Profile';
import CompatibilityStack from '../CompatibilityStack';
import GuidanceStack from '../GuidanceStack';
import ReadingsStack from '../ReadingsStack';

const BottomTab = ({}: any) => {
  const Bottom = createBottomTabNavigator();

  const TabItem = ({focused, title, img}: any) => {
    return (
      <View
        style={{
          ...style?.itemStyle,
        }}>
        <Image
          resizeMode="contain"
          source={img}
          style={{
            ...style.img,
            tintColor: focused ? colors.primary : colors.white,
          }}
        />
        <CustomText
          text={title}
          fontWeight="400"
          fontFam={font.Chillax_Medium}
          size={11}
          color={focused ? colors.primary : colors.white}
        />
      </View>
    );
  };

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>

    <Bottom.Navigator
      initialRouteName="Horoscope"
      screenOptions={({route}) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        animationEnabled: false,
        gestureEnabled: true,
        keyboardHidesTabBar: true,
        cardStyleInterpolator: ({ current, next, layouts }:any) => {
          return {
            cardStyle: {
              transform: [
                {
                  translateX: current.progress.interpolate({
                    inputRange: [0, 1],
                    outputRange: [layouts.screen.width, 0],
                  }),
                },
              ],
            },
          };
        },
        tabBarStyle: {
          backgroundColor: colors.black, // Semi-transparent background
          justifyContent: 'center',
          alignItems: 'center',
          borderTopWidth: 1,
          borderTopColor: colors.primary+"20",
          height: verticalScale(Platform.OS == 'ios' ? 75 : 70),
          // paddingHorizontal:scale(20)
        },
        headerShown: false,
      })}>
      <Bottom.Screen
        name="Horoscope"
        component={HoroscopeScreen}

        options={{
        
        

           tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Horoscope'}
                img={focused ? images.horoscope : images.horoscope}
                focused={focused}
              />
            );
          },
        }}
        // options={{
        //   headerShown: false,
        //   tabBarIcon: ({focused}) => {
        //     return (
        //       <TabItem
        //         title={'Home'}
        //         img={focused ? images.fill_home : images.unfill_home}
        //         focused={focused}
        //       />
        //     );
        //   },
        // }}
      />

      <Bottom.Screen
        name="Readings"
        component={ReadingsStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Readings'}
                img={focused ? images.readings : images.readings}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Compatibility"
        component={CompatibilityStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Compatibility'}
                img={focused ? images.compatibility : images.compatibility}
                focused={focused}
              />
            );
          },
        }}
      />

      <Bottom.Screen
        name="Guidance"
        component={GuidanceStack}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Guidance'}
                img={focused ? images.guidance : images.guidance}
                focused={focused}
              />
            );
          },
        }}
      />
      <Bottom.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({focused}) => {
            return (
              <TabItem
                title={'Profile'}
                img={focused ? images.profile : images.profile}
                focused={focused}
              />
            );
          },
        }}
      />
    </Bottom.Navigator>

    </GestureHandlerRootView>

  );
};
export default BottomTab;

const style = StyleSheet.create({
  itemStyle: {
    // width: scale(100),
    backgroundColor: "transparent", // Semi-transparent background
    paddingTop:verticalScale(Platform.OS=="ios"? 7:0),
    paddingBottom:verticalScale(Platform.OS=="ios"? 0:5),
    justifyContent: 'center',
    alignItems: 'center',
    gap: verticalScale(4),
  },

  img: {
    height: scale(20),
    width: scale(20),
  },
});
