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
import { Searchbar } from "react-native-paper";

export const RestaurantList = () => {
  const styles = dynamicStyles();
  return (
    <>
      <View style={styles.search}>
        <Searchbar placeholder="search" />
      </View>
      <View style={styles.list}>
        <Text>list</Text>
      </View>
    </>
  );
};
