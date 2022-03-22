import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import { RestaurantList } from "./src/components/RestaurantList/RestaurantList";

export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <RestaurantList />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
