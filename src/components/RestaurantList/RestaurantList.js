import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Vibration,
} from "react-native";
import { dynamicStyles } from "./styles";

export const RestaurantList = () => {
  const styles = dynamicStyles();
  return (
    <>
      <View style={styles.search}>
        <Text>search</Text>
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </>
  );
};
