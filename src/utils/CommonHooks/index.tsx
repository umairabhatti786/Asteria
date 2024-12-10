import { Alert } from "react-native";
import { URLS } from "../../apis/Urls";
import { StorageServices, TOKEN } from "../StorageService";
import { setAuthData, setAuthToken } from "../../redux/reducers/authReducer";
import { isValidPhoneNumber, parsePhoneNumber } from "libphonenumber-js";

export const getApiUrl = (endpoint: any) => {
  let url = URLS.BASE_URL + endpoint;
  return url;
};

export const getFormattedPhoneNumber = (phone:any) => {
  if (!phone) return null; // Return null if phone is undefined or null
  if (!isValidPhoneNumber(phone)) {
    console.log("Invalid phone number:", phone);
    return null; // Return null for invalid numbers
  }

  const parsedPhone = parsePhoneNumber(phone);
  return parsedPhone; // Format as needed
};

export const isCloseToBottom = ({
  layoutMeasurement,
  contentOffset,
  contentSize,
}: any) => {
  const paddingToBottom = 20;
  return (
    layoutMeasurement?.height + contentOffset?.y >=
    contentSize?.height - paddingToBottom
  );
};

export const sessionCheck = async (
  dispatch: any,
  navigation: any
) => {
  Alert.alert(
    "Session Expired",
    "Your session has expired. Please login again.",
    [
      {
        text: "OK",
        onPress: async () => {
          dispatch(setAuthData(null));
          dispatch(setAuthToken(null));
          StorageServices.removeItem(TOKEN);
          navigation.navigate("Login");
        },
      },
    ]
  );
};
