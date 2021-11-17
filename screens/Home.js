import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import HeaderTabs from "../components/HeaderTabs";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#eee",
  },
  view: {
    backgroundColor: "white",
    padding: 10,
  },
});
