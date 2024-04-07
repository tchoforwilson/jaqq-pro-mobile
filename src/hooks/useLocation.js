import { useEffect, useState } from "react";
import * as Location from "expo-location";
import userServices from "../services/user.services";
import socket from "../services/socket";
import useAlert from "./useAlert";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [currentLocation, setCurrentLocation] = useState();

  const updateLocation = async (coords) => {
    setLocation({
      coordinates: [coords.longitude, coords.latitude],
    });

    userServices.updateUserLocation({
      coordinates: [coords.longitude, coords.latitude],
    });
  };

  const updateCurrentLocation = async (coords) => {
    setCurrentLocation({
      coordinates: [coords.longitude, coords.latitude],
    });
    socket.emit("currentLocation", {
      coordinates: [coords.longitude, coords.latitude],
    });
  };

  const getLocation = async () => {
    try {
      // 1. Grant user location permission
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        useAlert("fail", "App needs permission to access your location", true);
        return;
      }
      // 2. Get user location
      const location = await Location.getLastKnownPositionAsync();
      const currentLocation = await Location.getCurrentPositionAsync({});

      //3.  Update user location and current location
      updateLocation(location.coords);
      updateCurrentLocation(currentLocation.coords);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return { location, currentLocation };
};

export default useLocation;
