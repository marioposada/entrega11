import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { colors } from "../../constants/theme/colors";
import HomeNavigator from "./home";
import SearchNavigator from "./search";
import NotificationNavigator from "./note";
import ProfileNavigator from "./profile";

const BottomTab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <BottomTab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontFamily: "Roboto_Bold", color: colors.primary },
      }}
    >
      <BottomTab.Screen
        name="HomeTab"
        component={HomeNavigator}
        options={{
          title: "Home",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="SearchTab"
        component={SearchNavigator}
        options={{
          title: "Search",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "search" : "search-outline"}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="NoteTab"
        component={NotificationNavigator}
        options={{
          title: "Note",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "notifications" : "notifications-outline"}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name="ProfileTab"
        component={ProfileNavigator}
        options={{
          title: "Profile",
          tabBarIcon: ({ focused }) => (
            <Ionicons
              name={focused ? "person" : "person-outline"}
              size={24}
              color={focused ? colors.primary : colors.grey}
            />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

export default Tabs;
