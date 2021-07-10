import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Movie } from "../../../../domain/interfaces/movieInterface";
import responsive from "../../../../core/responsive";

interface Props {
  movie: Movie;
  heightCard?: number;
  widthCard?: number;
}

export const MovieCard = ({
  movie,
  heightCard = responsive.widthR(100),
  widthCard = responsive.widthR(70),
}: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("DetailScreen", movie)}
      activeOpacity={0.8}
      style={{
        width: widthCard,
        height: heightCard,
        marginHorizontal: 5,
      }}
    >
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri,
          }}
          style={styles.image}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: { flex: 1, borderRadius: 15 },
  imageContainer: {
    flex: 1,
    shadowColor: "#000",
    borderRadius: 15,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    // elevation: 1,
  },
});
