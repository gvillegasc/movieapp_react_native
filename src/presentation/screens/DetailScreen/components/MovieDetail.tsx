import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import currencyFormatter from "currency-formatter";
import Icon from "react-native-vector-icons/Ionicons";
import responsive from "../../../../core/responsive";
import { Cast } from "../../../../domain/interfaces/creditInterface";
import { MovieFull } from "../../../../domain/interfaces/movieInterface";
import { CastItem } from "./CastItem";
import { globalStyles } from "../../../../core/global";

interface Props {
  movieFull: MovieFull;
  cast: Cast[];
}

export const MovieDetail = ({ movieFull, cast }: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <View style={{ flexDirection: "row" }}>
          <Icon name="star-outline" color="grey" size={responsive.spR(13)} />
          <Text style={styles.subtitleDetail}>{movieFull.vote_average}</Text>
          <Text style={styles.subtitleDetail}>
            - {movieFull.genres.map((g) => g.name).join(", ")}
          </Text>
        </View>
        <Text style={styles.titleDetail}>Overview</Text>
        <Text style={styles.overviewDescription}>{movieFull.overview}</Text>

        {movieFull.budget > 0 ? (
          <View>
            <Text style={styles.titleDetail}>Budget</Text>
            <Text style={globalStyles.textParagraphMedium}>
              {currencyFormatter.format(movieFull.budget, { code: "USD" })}
            </Text>
          </View>
        ) : (
          <View></View>
        )}
      </View>

      <View style={styles.castContainer}>
        <Text style={styles.cast}>Cast</Text>
        <FlatList
          data={cast}
          contentContainerStyle={{ paddingHorizontal: 10 }}
          renderItem={({ item }: any) => <CastItem actor={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: { marginHorizontal: 20 },
  titleDetail: {
    ...globalStyles.textSubtitleMedium,
    marginTop: 7,
  },
  subtitleDetail: {
    ...globalStyles.textParagraphMedium,
    marginLeft: 5,
    color: "grey",
  },
  overviewDescription: {
    ...globalStyles.textParagraphMedium,
    opacity: 0.75,
    fontWeight: "normal",
  },
  castContainer: {
    marginTop: 10,
    marginBottom: 15,
  },
  cast: {
    ...globalStyles.textSubtitleMedium,
    marginTop: 7,
    fontWeight: "bold",
    marginHorizontal: 20,
  },
});
