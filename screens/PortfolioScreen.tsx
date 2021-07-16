import * as React from "react";
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
import { HoldingsList } from "../components/HoldingsList";

export default function PortfolioScreen() {
  return (
    <View style={styles.container}>
      <HoldingsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
