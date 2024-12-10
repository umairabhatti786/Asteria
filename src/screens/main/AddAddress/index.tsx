import React, { useEffect, useRef, useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Keyboard,
  ActivityIndicator,
} from "react-native";
import ScreenLayout from "../../../components/ScreenLayout";
import { scale, verticalScale } from "react-native-size-matters";
import { colors } from "../../../utils/colors";
import TopHeader from "../../../components/TopHeader";
import CustomText from "../../../components/CustomText";
import CustomInput from "../../../components/CustomInput";
import { images } from "../../../assets/images";
import CustomButton from "../../../components/CustomButton";
import { appStyles } from "../../../utils/AppStyles";
import DropDown from "../../../components/DropDown";
import { CountryData } from "../../../utils/Data";
import CustomCountryPicker from "../../../components/CustomCountryPicker";
import MapView, { PROVIDER_GOOGLE, Marker } from "react-native-maps";
import { numericRegex, phoneRegex } from "../../../utils/Regex";
import { ApiServices } from "../../../apis/ApiServices";
import AbsoluateView from "../../../components/AbsoluateView";
import CustomToast from "../../../components/CustomToast";
import { usePermissions } from "../../../utils/Permissions";
import { useSelector } from "react-redux";
import {
  getAuthAddress,
  getAuthCity,
  getAuthCountry,
  getAuthState,
  getToken,
  getUserLocation,
} from "../../../redux/reducers/authReducer";
import { useIsFocused } from "@react-navigation/native";
import { parsePhoneNumber } from "libphonenumber-js";
import { getFormattedPhoneNumber } from "../../../utils/CommonHooks";

const AddAddressScreen = ({ navigation, route }: any) => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [country, setCountry] = useState<any>("92");
  let isEdit = route?.params?.isEdit;
  let data = route?.params?.data;
  console.log("isEdit",   data?.Phone);

  const parsedNumber = isEdit && getFormattedPhoneNumber(data?.Phone);
  const countryCallingCode = isEdit && parsedNumber?  parsedNumber.countryCallingCode:"92";
  const [mapLoading, setMapLoading] = useState(true);
  console.log("isEditparsedNumber",  parsedNumber&& parsedNumber.countryCallingCode);

  const [laoding, setlaoding] = useState(false);
  const [message, setMessage] = useState("");
  const [isMessage, setIsMessage] = useState(false);
  const { getLocation } = usePermissions();
  const loaction: any = useSelector(getUserLocation);
  const [authLocation, setAuthLocation] = useState<any>();
  const authAddress = useSelector(getAuthAddress);
  const authCity = useSelector(getAuthCity);
  const authCountry = useSelector(getAuthCountry);
  const authState = useSelector(getAuthState);

  const token = useSelector(getToken);
  const mapRef = useRef<MapView>(null);
  const isFocused = useIsFocused();
  const [errors, setErrors] = useState({
    address_error: "",
    phone_error: "",
  });

  const [values, setValues] = useState({
    address: "",
    phone: "",
    city: "",
    province: "",
    country: "",
    zipCode: "",
  });

  console.log("Vauedld",values)
  useEffect(() => {
    if(!isEdit){
      getLocation();


    }
  }, [isFocused]);
  useEffect(() => {
    setValues({
      ...values,
      address: isEdit ? data?.Address : authAddress,
      city: isEdit ? data?.City : authCity,
      province: isEdit ? data?.Province : "",
      zipCode: isEdit ? data?.PostCode : "",
      phone: isEdit ?parsedNumber? parsedNumber.nationalNumber : "":"",
    });
    setCountry(isEdit ? countryCallingCode : "92");
    setSelectedCountry(isEdit ? data?.Country : "Pakistan");
    handleAnimateToCoordinate();

    setAuthLocation(loaction);
  }, [authAddress, loaction, authCity, authState,isEdit]);
  const handleMapReady = () => {
    // Map is ready, hide the loading component
    setMapLoading(false);
  };


console.log("cjdbcd", data?.Latitude==null)
  const onAddAddress = () => {
    Keyboard.dismiss();

    if (!values.address) {
      setMessage("Address is required");
      setIsMessage(true);

      return;
    }

    if (!values.city) {
      setMessage("City is required");
      setIsMessage(true);

      return;
    }
    if (!values.province) {
      setMessage("Province Title is required");
      setIsMessage(true);

      return;
    }
    if (!selectedCountry) {
      setMessage("Please select country");
      setIsMessage(true);

      return;
    }
    if (!values.zipCode) {
      setMessage("Zip Code is required");
      setIsMessage(true);

      return;
    }
    if (!values.phone) {
      setMessage("Phone Number is required");
      setIsMessage(true);

      return;
    }
    
    if (!getFormattedPhoneNumber("+" + country+values.phone)) {
      setMessage("phone number is invalid");
      setIsMessage(true);
      return;
    }
    setlaoding(true);
    var raw = JSON.stringify({
      country: selectedCountry,
      address: values.address,
      zipCode: values.zipCode,
      phone: "+" + country + values.phone,

      province: values.province,
      city: values.city,
      latitude: isEdit?data?.Latitude:  loaction?.latitude ? loaction?.latitude : "",
      longitude:isEdit?data?.Longitude: loaction?.longitude ? loaction?.longitude : "",
    });
    let params = {
      data: raw,
      token: token,
      id: isEdit ? data.id : "",
    };

    ApiServices.SaveAddress(params, async ({ isSuccess, response }: any) => {
      if (isSuccess) {
        let result = JSON.parse(response);
        if (result?.success) {
          setlaoding(false);
          // setIsSuccessModal(true);
          navigation.goBack();
        } else {
          setlaoding(false);
          setMessage(result?.error);
          setIsMessage(true);
          console.log("result", result);
          // Alert.alert("", result?.errors);
        }
      } else {
        setlaoding(false);
        setMessage("Something went wrong");
        setIsMessage(true);

        console.log("Response", response);
      }
    });
  };

  function getTargetCoordinate(data, location) {
    return {
      latitude: data?.Latitude || (location?.latitude > 0 ? location?.latitude : 31.527620732489304),
      longitude: data?.Longitude || (location?.longitude > 0 ? location?.longitude : 74.33836016855213),
    };
  }
  
  // Usage
  const targetCoordinate = getTargetCoordinate(data, loaction);

  console.log("targetCoordinate",targetCoordinate)

  const handleAnimateToCoordinate = () => {
    const { latitude, longitude } = getTargetCoordinate(data, loaction);
  
    const targetCoordinate = {
      latitude,
      longitude,
      latitudeDelta: 0.039330183268125069,
      longitudeDelta: 0.045962757229776571,
    };
  
    // Animate the map to the target coordinate
    mapRef.current?.animateToRegion(targetCoordinate, 1000);
  };

  return (
    <>
      <ScreenLayout
        style={{
          paddingHorizontal: scale(20),
        }}
      >
        <View style={{ paddingBottom: verticalScale(10) }}>
          <TopHeader title={isEdit ? "Edit Address" : "New Address"} />
        </View>

        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{
            backgroundColor: colors.dull_white,
            flex: 1,
            paddingTop: verticalScale(10),
          }}
          contentContainerStyle={{
            backgroundColor: colors.dull_white,
            gap: verticalScale(20),
            paddingBottom: verticalScale(30),
            flex: 1,
          }}
        >
          <CustomText
            text={"Enter the new address by filling the following information."}
            size={14}
          />
          <CustomInput
            placeholder="Address"
            multiline={false}
            value={values.address}
            error={errors.address_error}
            onChangeText={(txt: string) => {
              setValues({ ...values, address: txt });
            }}
          />

          <View style={appStyles.rowjustify}>
            <CustomInput
              width={"47%"}
              placeholder="City"
              value={values.city}
              onChangeText={(value: any) =>
                setValues({ ...values, city: value })
              }
            />
            <CustomInput
              width={"47%"}
              placeholder="State/Province"
              value={values.province}
              onChangeText={(value: any) =>
                setValues({ ...values, province: value })
              }
            />
          </View>
          <DropDown
            placeholder={"Country"}
            label="Download"
            search
            setValue={setSelectedCountry}
            value={selectedCountry}
            onSelect={(it: any) => {
              setSelectedCountry(it?.label);
              setValues({ ...values, country: it?.label });
            }}
            data={CountryData.map((item, _index) => {
              return {
                id: item?.id,
                label: item?.label,
                value: item?.value,
              };
            })}
          />
          <CustomInput
            placeholder="ZIP Code"
            keyboard={"numeric"}
            value={values.zipCode}
            onChangeText={(value: any) =>
              setValues({ ...values, zipCode: value })
            }
          />
          <CustomCountryPicker
            placeholder="345 123 456 7"
            country={country}
            error={errors.phone_error}
            countryName={parsedNumber? parsedNumber.country : "PK"}

            setCountry={setCountry}
            value={values.phone}
            onChangeText={(value: any) => {
              if (value.length == 0) {
                setErrors({ ...errors, phone_error: "" });
                setValues({ ...values, phone: "" });
              }
              if (value.length > 0) {
                if (!numericRegex.test(value)) {
                  return;
                }
                setValues({ ...values, phone: value });
                let isValid =getFormattedPhoneNumber("+" + country+value);
                if (isValid) {
                  setErrors({ ...errors, phone_error: "" });
                  setValues({ ...values, phone: value });
                } else {
                  setErrors({
                    ...errors,
                    phone_error: "phone number is invalid",
                  });
                }
              }
            }}
          />

          <View
            style={{
              width: "100%",
              height: verticalScale(150),
              backgroundColor: colors.white,
              borderRadius: scale(10),
              overflow: "hidden",
            }}
          >
            <MapView
              zoomControlEnabled={false}
              ref={mapRef}
              showsBuildings={true}
              showsCompass={false}
              toolbarEnabled={false}
              // onMapReady={handleMapReady}
             
              
              initialRegion={{
                latitude: data?.Latitude || (loaction?.latitude > 0 ? loaction?.latitude : 31.527620732489304),
                longitude: data?.Longitude || (loaction?.longitude > 0 ? loaction?.longitude : 74.33836016855213),
                latitudeDelta: 0.039330183268125069,
                longitudeDelta: 0.045962757229776571,
              }}
              style={{
                height: "100%",
                width: "100%",
              }}
            ></MapView>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={handleAnimateToCoordinate}
              style={{
                width: scale(30),
                height: scale(30),
                borderRadius: 999,
                backgroundColor: colors.white,
                alignItems: "center",
                justifyContent: "center",
                alignSelf: "flex-end",
                position: "absolute",
                bottom: verticalScale(10),
                right: scale(10),
              }}
            >
              <Image
                style={{ width: scale(13), height: scale(13) }}
                source={images.location_center}
              />
            </TouchableOpacity>

            {/* {mapLoading && (
                  <View style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color={colors.primary} />
                  </View>
                )} */}
          </View>
          <View style={styles.continueBtnContainer}>
            <CustomButton
              onPress={onAddAddress}
              text="Continue"
              isLoading={laoding}
              style={{ marginTop: verticalScale(20) }}
            />
          </View>
        </ScrollView>
      </ScreenLayout>

      {laoding && <AbsoluateView />}
      <CustomToast
        isVisable={isMessage}
        setIsVisable={setIsMessage}
        message={message}
        color={colors.white}
      />
    </>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
  continueBtnContainer: {
    alignItems: "flex-end",
    justifyContent: "flex-end",
    // marginBottom: verticalScale(10),
  },
  loadingContainer: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255, 255, 255, 0.7)", // Semi-transparent white background
  },
});
