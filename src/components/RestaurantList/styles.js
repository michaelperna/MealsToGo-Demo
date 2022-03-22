import { StyleSheet } from "react-native";

export const dynamicStyles = () => {
  return StyleSheet.create({
    search: {
      backgroundColor: "green",
      padding: 16,
    },
    list: {
      backgroundColor: "blue",
      padding: 16,
      flex: 1,
    },
  });
};
