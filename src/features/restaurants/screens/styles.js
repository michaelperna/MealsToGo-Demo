import { StyleSheet } from "react-native";

export const dynamicStyles = () => {
  return StyleSheet.create({
    search: {
      backgroundColor: "#fbf8f5",
      padding: 16,
    },
    list: {
      backgroundColor: "blue",
      padding: 16,
      flex: 1,
    },
  });
};
