import * as SecureStore from "expo-secure-store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const key = "authToken";
const userKey = "user";
const conKey = "socketId";

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

const storeSocketId = async (socketId) => {
  try {
    await AsyncStorage.setItem(conKey, socketId);
  } catch (error) {
    console.log("Error storing the socketId", error);
  }
};

const getSocketId = async () => {
  try {
    return await AsyncStorage.getItem(conKey);
  } catch (error) {
    console.log("Error couldn't retrieve socketId", error);
    return null;
  }
};

const removeSocketId = async () => {
  try {
    await AsyncStorage.removeItem(conKey);
  } catch (error) {
    console.log("Error removing the socketId", error);
  }
};

export default {
  getToken,
  getUser,
  storeUser,
  storeToken,
  removeToken,
  storeSocketId,
  getSocketId,
  removeSocketId,
};
