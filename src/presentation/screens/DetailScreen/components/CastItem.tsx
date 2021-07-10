import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../../../../core/global";
import responsive from "../../../../core/responsive";
import { Cast } from "../../../../domain/interfaces/creditInterface";

interface Props {
  actor: Cast;
}

export const CastItem = ({ actor }: Props) => {
  const uri = `https://image.tmdb.org/t/p/w500${actor.profile_path}`;

  return (
    <View style={styles.container}>
      {actor.profile_path != null ? (
        <Image source={{ uri }} style={styles.image} />
      ) : (
        <View style={styles.noImage} />
      )}
      <View>
        <Text numberOfLines={2} style={styles.name}>
          {actor.name}
        </Text>
        <Text numberOfLines={2} style={styles.character}>
          {actor.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    alignItems: "center",
    marginHorizontal: 1,
    paddingTop: 10,
  },
  image: { height: 50, width: 50, borderRadius: 50 },
  noImage: {
    height: 50,
    width: 50,
    borderRadius: 50,
    backgroundColor: "grey",
  },
  name: {
    ...globalStyles.textSubtitleSmall,
    textAlign: "center",
  },

  character: {
    ...globalStyles.textParagraphSmall,
    opacity: 0.7,
    textAlign: "center",
  },
});
