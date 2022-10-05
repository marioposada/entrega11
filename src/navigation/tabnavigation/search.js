import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../../utils";
import { colors } from "../../constants/theme";
import { Search } from "../../screens/tabscreens";

const Stack = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
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
        name="Home"
        component={Search}
        options={{
          title: "Categorias",
        }}
      />
   
    </Stack.Navigator>
  );
};

export default SearchNavigator;