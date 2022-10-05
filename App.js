import React from "react";
import { ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/tabnavigation";
import store from "./src/store";

export default function App() {
  const [loaded] = useFonts({
    Roboto_Regular: require("./assets/fonts/Roboto-Regular.ttf"),
    Roboto_Medium: require("./assets/fonts/Roboto-Medium.ttf"),
    Roboto_Light: require("./assets/fonts/Roboto-Light.ttf"),
    Roboto_Bold: require("./assets/fonts/Roboto-Bold.ttf"),
    Roboto_Thin: require("./assets/fonts/Roboto-Thin.ttf"),
  });

  if (!loaded) {
    return <ActivityIndicator />;
  }

  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
