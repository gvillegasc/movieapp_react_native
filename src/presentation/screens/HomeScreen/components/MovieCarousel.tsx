import React, { useContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import Carousel from "react-native-snap-carousel";
import { Movie } from "../../../../domain/interfaces/movieInterface";
import { MovieCard } from "./MovieCard";
import responsive from "../../../../core/responsive";
import { getImageColors } from "../../../../core/utils/getImageColors";
import { GradientContext } from "../../../context/GradientContext";

interface Props {
  movies: Movie[];
}

export const MovieCarousel = ({ movies }: Props) => {
  const { setMainColors } = useContext(GradientContext);

  useEffect(() => {
    if (movies.length > 0) {
      getPosterColors(0);
    }
  }, [movies]);

  const getPosterColors = async (index: number) => {
    const movie = movies[index];
    const uri = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const [primary = "green", secondary = "orange"] = await getImageColors(uri);
    setMainColors({ primary, secondary });
  };

  return (
    <View style={styles.container}>
      <Carousel
        data={movies}
        renderItem={({ item }: any) => <MovieCard movie={item} />}
        sliderWidth={responsive.widthR(100)}
        itemWidth={responsive.widthR(70)}
        inactiveSlideOpacity={1}
        onSnapToItem={(index) => getPosterColors(index)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { height: responsive.inchR(50) },
});
