import React from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { HorizontalSlider } from "./components/HorizontalSlider";
import { MovieCarousel } from "./components/MovieCarousel";
import { useMovies } from "../../../hooks/useMovies";
import responsive from "../../../core/responsive";
import { GradientBackground } from "./components/GradientBackground";

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { nowPlaying, popular, topRated, upcoming, isLoading } = useMovies();

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator color="red" size={50} />
      </View>
    );
  }

  return (
    <GradientBackground>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ marginTop: top + responsive.heightR(3) }}>
          <MovieCarousel movies={nowPlaying} />
          <HorizontalSlider title={"Popular"} movies={popular} />
          <HorizontalSlider title={"Top Rated"} movies={topRated} />
          <HorizontalSlider title={"Upcoming"} movies={upcoming} />
        </View>
      </ScrollView>
    </GradientBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    backgroundColor: "red",
    flex: 1,
  },
  container: { flex: 1, justifyContent: "center", alignContent: "center" },
});
