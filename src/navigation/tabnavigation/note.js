import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../../utils";
import { colors } from "../../constants/theme";
import { Notifications } from "../../screens/tabscreens";

const Stack = createNativeStackNavigator();

const NotificationNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Note"
      screenOptions={{
        headerStyle: {
          backgroundColor: isAndroid ? colors.primary : colors.secondary,
        },
        headerTintColor: colors.white,
        headerTitleStyle: {
          fontFamily: "Roboto_Bold",
        
        },
      }}
    >
      <Stack.Screen
        name="Note"
        component={Notifications}
        options={{
          title: "Categorias",
        }}
      />
   
    </Stack.Navigator>
  );
};

export default NotificationNavigator;