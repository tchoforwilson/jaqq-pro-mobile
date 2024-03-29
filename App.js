import React, { useEffect, useState, useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";

import {
  AppNavigator,
  AuthNavigator,
  NavigationTheme,
  RegisterNavigator,
  ScreenNavigator,
} from "./src/navigations";
import OfflineNotice from "./src/components/common/OfflineNotice";
import {
  AuthContext,
  ErrorContext,
  ModalContext,
  authStorage,
} from "./src/context";
import { navigationRef } from "./src/navigations/rootNavigation";
import { AlertError } from "./src/components/alerts";

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [visible, setVisible] = useState(false);
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
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
      <ErrorContext.Provider
        value={{ visible, status, setStatus, message, setMessage, setVisible }}
      >
        <ModalContext.Provider value={{ modalVisible, toggleModal }}>
          <OfflineNotice />
          <AlertError
            visible={visible}
            status={status}
            message={message}
            onClose={() => setVisible(!visible)}
          />
          <NavigationContainer
            ref={navigationRef}
            theme={NavigationTheme}
            onReady={onLayoutRootView}
          >
            {renderNavigator()}
          </NavigationContainer>
        </ModalContext.Provider>
      </ErrorContext.Provider>
    </AuthContext.Provider>
  );
};

export default App;
