import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { Movie } from "../../../../domain/interfaces/movieInterface";
import { MovieCard } from "./MovieCard";
import responsive from "../../../../core/responsive";
import { globalStyles } from "../../../../core/global";

interface Props {
  title?: string;
  movies: Movie[];
}

export const HorizontalSlider = ({ title, movies }: Props) => {
  return (
    <View style={{ height: responsive.widthR(50) }}>
      <Text style={styles.subtitle}>{title}</Text>
      <FlatList
        data={movies}
        renderItem={({ item }: any) => (
          <MovieCard
            movie={item}
            heightCard={responsive.widthR(40)}
            widthCard={responsive.widthR(28)}
          />
        )}
        contentContainerStyle={{ paddingHorizontal: 5 }}
        keyExtractor={(item) => item.id.toString()}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    ...globalStyles.textSubtitleMedium,
    marginHorizontal: 10,
  },
});
