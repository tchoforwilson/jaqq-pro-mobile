import { useEffect, useState } from "react";
import * as Location from "expo-location";
import userServices from "../services/user.services";

const useLocation = () => {
  const [location, setLocation] = useState();

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestBackgroundPermissionsAsync();
      if (!granted) return;
      // const {
      //   coords: { latitude, longitude },
      // } = await Location.getLastKnownPositionAsync();
      //const location = await Location.getLastKnownPositionAsync();
      console.log(location);
      setLocation({ latitude, longitude });
      userServices.updateUserLocation(location);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return location;
};

export default useLocation;
