import { StackScreenProps } from "@react-navigation/stack";
import React from "react";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Navigation, RootStackParams } from "../../navigation/Navigation";
import { useMovieDetail } from "../../../hooks/useMovieDetail";
import { MovieDetail } from "./components/MovieDetail";
import responsive from "../../../core/responsive";
import { globalStyles } from "../../../core/global";
import Icon from "react-native-vector-icons/Ionicons";

interface Props extends StackScreenProps<RootStackParams, "DetailScreen"> {}

export const DetailScreen = ({ route, navigation }: Props) => {
  const movie = route.params;
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const { isLoading, movieFull, cast } = useMovieDetail(movie.id);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.imageContainer}>
        <View style={styles.imageBorder}>
          <Image source={{ uri }} style={styles.posterImage} />
        </View>
      </View>
      <View style={styles.marginContainer}>
        <Text style={styles.subtitle}>{movie.title}</Text>
        <Text style={globalStyles.textSubtitleMedium}>
          {movie.original_title}
        </Text>
      </View>

      {isLoading ? (
        <ActivityIndicator style={styles.indicator} size={30} color="grey" />
      ) : (
        <MovieDetail movieFull={movieFull!} cast={cast} />
      )}

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => navigation.pop()}>
          <Icon
            color="white"
            name="arrow-back-outline"
            size={responsive.spR(25)}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: "100%",
    // overflow: "hidden",
    height: responsive.heightR(70),
    shadowColor: "#000",
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 1,
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  imageBorder: {
    flex: 1,
    overflow: "hidden",
    borderBottomEndRadius: 25,
    borderBottomStartRadius: 25,
  },
  posterImage: {
    flex: 1,
  },
  marginContainer: {
    marginHorizontal: 20,
    marginTop: 20,
  },
  indicator: { marginTop: 10 },
  subtitle: {
    ...globalStyles.textSubtitleSmall,
    color: "grey",
    fontWeight: "normal",
  },
  backButton: {
    position: "absolute",
    zIndex: 999,
    elevation: 9,
    top: 15,
    left: 10,
  },
});
