import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ScrollView,
} from "react-native";
import Categories from "../components/Categories";
import HeaderTabs from "../components/HeaderTabs";
import RestaurantItems, {
  localRestaurants,
} from "../components/RestaurantItems";
import SearchBar from "../components/SearchBar";

const YELP_API_KEY =
  "2Mkgq3LkbGyObKfatUyAk7Dh3-C_0blj6pvWvk4L1pdlWGMwnzeYrW2vct2a2kdNX9j-2bN7UIiv8FsXIslo-AQqNmqSoEK5XPnuwla7nXQNdyIxdLp-DmSe2qqWYXYx";

export default function Home({ navigation }) {
  const [restaurantData, setRestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("San Francisco");

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    };

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) => setRestaurantData(json.businesses));
  };

  useEffect(() => {
    getRestaurantsFromYelp();
  }, [city]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.view}>
        <HeaderTabs />
        <SearchBar cityHandler={setCity} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
      </ScrollView>
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
