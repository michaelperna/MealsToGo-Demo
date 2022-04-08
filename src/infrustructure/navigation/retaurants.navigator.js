import React from "react";
import { Text } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TransitionPresets } from "@react-navigation/stack";
import { RestaurantScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createNativeStackNavigator();
export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ presentation: "modal" }}>
      <RestaurantStack.Screen
        name="Restaurants"
        component={RestaurantScreen}
        options={{ headerShown: false }}
      />
      <RestaurantStack.Screen
        name="Restaurant Detail"
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
