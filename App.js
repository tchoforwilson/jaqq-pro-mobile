import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import {
  AppNavigator,
  AuthNavigator,
  NavigationTheme,
  RegisterNavigator,
} from "./src/navigations";
import OfflineNotice from "./src/components/common/OfflineNotice";
import {
  AuthContext,
  AlertContext,
  NotificationContext,
  ModalContext,
  authStorage,
} from "./src/context";
import { navigationRef } from "./src/navigations/rootNavigation";
import { AppAlert } from "./src/components/alerts";

const App = () => {
  const [appNotification, setAppNotification] = useState({
    title: "",
    body: "",
    type: "",
    visible: false,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [alert, setAlert] = useState({
    visible: false,
    status: "",
    message: "",
  });
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  const toggleModal = () => setModalVisible(!modalVisible);

  useEffect(() => {
    const restoreUser = async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        const storedUser = await authStorage.getUser();
        setUser(storedUser);
      } catch (error) {
        console.error("Error restoring user:", error);
      } finally {
        setIsReady(true);
      }
    };

    restoreUser();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isReady) {
      await SplashScreen.hideAsync();
    }
  }, [isReady]);

  if (!isReady) {
    return null;
  }

  const renderNavigator = () => {
    if (user && user.phoneValidated) {
      return <AppNavigator />;
    } else if (user && !user.phoneValidated) {
      return <RegisterNavigator />;
    } else {
      return <AuthNavigator />;
    }
  };

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <AlertContext.Provider value={{ alert, setAlert }}>
        <NotificationContext.Provider
          value={{
            appNotification,
            setAppNotification,
          }}
        >
          <ModalContext.Provider value={{ modalVisible, toggleModal }}>
            <OfflineNotice />
            <AppAlert
              alert={alert}
              onClose={() => setAlert({ visible: !alert.visible })}
            />
            <NavigationContainer
              ref={navigationRef}
              theme={NavigationTheme}
              onReady={onLayoutRootView}
            >
              {renderNavigator()}
            </NavigationContainer>
          </ModalContext.Provider>
        </NotificationContext.Provider>
      </AlertContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
