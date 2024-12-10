import AsyncStorage from "@react-native-async-storage/async-storage";

export const TOKEN = "@token";
export const CURRENT_POSITION="@location" 
export const AUTHDATA = "@authData";
export const DISPATCH_ADDRESS = "@dispatchAddress";


export const StorageServices = {
  setItem: async (key: any, value: any) => {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  },
  getItem: async (key: any) => {
    const value = await AsyncStorage.getItem(key);
    return value ? JSON.parse(value) || null : null;
  },
  removeItem: async (key: any) => {
    await AsyncStorage.removeItem(key);
  },
  // removeItems: async (key:any)=>{
  //     storage.delete(key);
  // }
};
