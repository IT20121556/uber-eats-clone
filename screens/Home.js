import React from "react";
import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import SearchBar from "../components/SearchBar";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar />
      </View>
      <Categories />
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
