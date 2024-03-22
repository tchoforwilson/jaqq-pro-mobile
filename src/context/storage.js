import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "authToken";
const userKey = "user";

const storeToken = async (authToken) => {
  try {
    await SecureStore.setItemAsync(key, authToken);
  } catch (error) {
    console.log("Error storing the auth token", error);
  }
};

const getToken = async () => {
  try {
    return await SecureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error couldn't retrieve token", error);
  }
};

const storeUser = async (user) => {
  try {
    await AsyncStorage.setItem(userKey, JSON.stringify(user));
  } catch (error) {
    console.log("Error storing the user", error);
  }
};

const getUser = async () => {
  try {
    return JSON.parse(await AsyncStorage.getItem(userKey));
  } catch (error) {
    console.log("Error couldn't retrieve user", error);
    return null;
  }
};

const removeToken = async () => {
  try {
    await SecureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error removing the auth token", error);
  }
};

export default {
  getToken,
  getUser,
  storeUser,
  storeToken,
  removeToken,
};
