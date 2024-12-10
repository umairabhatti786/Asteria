import React, {useEffect} from 'react';
import {View} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import {scale,} from 'react-native-size-matters';
import {colors} from '../../../utils/colors';
import LottieView from 'lottie-react-native';
const SplashScreen = ({navigation}: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0, // Start the stack at the Details screen
        routes: [{ name: 'BottomTab' }], // Define the new stack with the Details screen
      });
      // navigation.navigate('BottomTab');
    }, 1800);
  }, []);
  return (
    <>
   
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center',
                  backgroundColor: colors.white,

      }}>
          <LottieView
            style={{width: '80%', height: '80%'}}
            source={require('../../../assets/json/splash.json')}
            renderMode="HARDWARE"
            speed={2}
            autoPlay
            loop={false}
          />
        </View>
      
    </>
  );
};

export default SplashScreen;
