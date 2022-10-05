import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { isAndroid } from "../../utils";
import { colors } from "../../constants/theme";
import { Home, Categories, Discounts , Promotions} from "../../screens/tabscreens";

const Stack = createNativeStackNavigator();

const Tabs = () => {
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
        component={Home}
        options={{
          title: "Categorias",
        }}
      />
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Discounts"
        component={Discounts}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
      <Stack.Screen
        name="Profile"
        component={Promotions}
        options={({ route }) => ({
          title: route.params.name,
        })}
      />
    </Stack.Navigator>
  );
};

export default Tabs;
