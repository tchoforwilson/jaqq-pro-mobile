import { useContext, useEffect, useState } from "react";
import * as Location from "expo-location";
import userServices from "../services/user.services";
import socket from "../services/socket";
import { ErrorContext } from "../context";

const useLocation = () => {
  const [location, setLocation] = useState();
  const [currentLocation, setCurrentLocation] = useState();
  const { setMessage, setVisible, setStatus } = useContext(ErrorContext);

  const updateLocation = async (coords) => {
    setLocation({
      coordinates: [coords.latitude, coords.longitude],
    });

    userServices.updateUserLocation({
      coordinates: [coords.latitude, coords.longitude],
    });
  };

  const updateCurrentLocation = async (coords) => {
    setCurrentLocation({
      coordinates: [coords.latitude, coords.longitude],
    });
    socket.emit("currentLocation", {
      coordinates: [coords.latitude, coords.longitude],
    });
  };

  const getLocation = async () => {
    try {
      // 1. Grant user location permission
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) {
        setMessage("App needs permission to access your location");
        setStatus("Failed");
        setVisible(true);
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
